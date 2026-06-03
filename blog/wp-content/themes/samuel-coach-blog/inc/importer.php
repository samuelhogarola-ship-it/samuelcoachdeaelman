<?php
/**
 * Importer for external JSON feed.
 *
 * @package SamuelCoachBlog
 */

if (! defined('ABSPATH')) {
	exit;
}

function scb_importer_admin_page() {
	add_theme_page(
		__('Importar blog externo', 'samuel-coach-blog'),
		__('Importar blog externo', 'samuel-coach-blog'),
		'manage_options',
		'scb-importer',
		'scb_render_importer_page'
	);
}
add_action('admin_menu', 'scb_importer_admin_page');

function scb_render_importer_page() {
	if (! current_user_can('manage_options')) {
		return;
	}

	$result = null;

	if (! empty($_POST['scb_import_feed'])) {
		check_admin_referer('scb_import_feed_action', 'scb_import_feed_nonce');
		$feed_url = esc_url_raw(wp_unslash($_POST['feed_url'] ?? ''));
		$result   = scb_run_feed_import($feed_url);
	}
	?>
	<div class="wrap">
		<h1><?php esc_html_e('Importar blog existente', 'samuel-coach-blog'); ?></h1>
		<p><?php esc_html_e('Este importador usa el feed JSON del blog actual para crear entradas en WordPress. Si un artículo ya fue importado antes, se actualizará.', 'samuel-coach-blog'); ?></p>

		<div class="scb-admin-card">
			<form method="post">
				<?php wp_nonce_field('scb_import_feed_action', 'scb_import_feed_nonce'); ?>
				<p>
					<label for="feed_url"><strong><?php esc_html_e('URL del feed JSON', 'samuel-coach-blog'); ?></strong></label>
				</p>
				<p>
					<input
						type="url"
						id="feed_url"
						name="feed_url"
						value="<?php echo esc_attr($_POST['feed_url'] ?? 'https://samuelcoachdealeman.com/blog/f.json'); ?>"
						required
					>
				</p>
				<p>
					<button type="submit" class="button button-primary" name="scb_import_feed" value="1">
						<?php esc_html_e('Importar entradas', 'samuel-coach-blog'); ?>
					</button>
				</p>
			</form>
		</div>

		<div class="scb-admin-card">
			<h2><?php esc_html_e('Recomendación de uso', 'samuel-coach-blog'); ?></h2>
			<p><?php esc_html_e('1. Activa el tema.', 'samuel-coach-blog'); ?></p>
			<p><?php esc_html_e('2. Ajusta el menú y el logotipo desde Apariencia > Personalizar.', 'samuel-coach-blog'); ?></p>
			<p><?php esc_html_e('3. Importa las entradas desde esta pantalla.', 'samuel-coach-blog'); ?></p>
			<p><?php esc_html_e('4. Después revisa cada post por si quieres enriquecer el contenido respecto al original.', 'samuel-coach-blog'); ?></p>
		</div>

		<?php if (is_array($result)) : ?>
			<div class="scb-admin-card">
				<h2><?php esc_html_e('Resultado', 'samuel-coach-blog'); ?></h2>
				<p><?php echo esc_html(sprintf('Creadas: %d | Actualizadas: %d | Errores: %d', $result['created'], $result['updated'], count($result['errors']))); ?></p>
				<?php if (! empty($result['errors'])) : ?>
					<ul>
						<?php foreach ($result['errors'] as $error) : ?>
							<li><?php echo esc_html($error); ?></li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
	<?php
}

function scb_run_feed_import($feed_url) {
	$response = wp_remote_get(
		$feed_url,
		[
			'timeout' => 20,
		]
	);

	if (is_wp_error($response)) {
		return [
			'created' => 0,
			'updated' => 0,
			'errors'  => [$response->get_error_message()],
		];
	}

	$body = wp_remote_retrieve_body($response);
	$data = json_decode($body, true);

	if (empty($data['items']) || ! is_array($data['items'])) {
		return [
			'created' => 0,
			'updated' => 0,
			'errors'  => [__('No se encontraron elementos en el feed.', 'samuel-coach-blog')],
		];
	}

	$created = 0;
	$updated = 0;
	$errors  = [];

	foreach ($data['items'] as $item) {
		$external_id = sanitize_text_field($item['id'] ?? '');
		$title       = wp_strip_all_tags($item['title'] ?? '');

		if (! $external_id || ! $title) {
			$errors[] = __('Se ha omitido una entrada sin identificador o título.', 'samuel-coach-blog');
			continue;
		}

		$existing = get_posts(
			[
				'post_type'   => 'post',
				'post_status' => 'any',
				'meta_key'    => '_scb_external_id',
				'meta_value'  => $external_id,
				'numberposts' => 1,
				'fields'      => 'ids',
			]
		);

		$raw_html    = wp_kses_post($item['html_content'] ?? '');
		$source_url  = esc_url_raw($item['url'] ?? '');
		$plain_text  = trim(wp_strip_all_tags($raw_html));
		$post_date   = ! empty($item['date_modified']) ? gmdate('Y-m-d H:i:s', strtotime($item['date_modified'])) : current_time('mysql');
		$image_tag   = '';
		$source_note = $source_url ? '<p><strong>Fuente original:</strong> <a href="' . esc_url($source_url) . '">' . esc_html($source_url) . '</a></p>' : '';

		if (preg_match('/<img[^>]+src="([^"]+)"/i', $raw_html, $matches)) {
			$image_url = esc_url_raw($matches[1]);
			$image_tag = '<p><img src="' . esc_url($image_url) . '" alt=""></p>';
		}

		$content = $image_tag;
		$content .= '<div>' . wpautop(wp_kses_post($plain_text)) . '</div>';
		$content .= $source_note;

		$postarr = [
			'post_title'   => $title,
			'post_excerpt' => wp_trim_words($plain_text, 32),
			'post_content' => $content,
			'post_status'  => 'publish',
			'post_type'    => 'post',
			'post_date'    => get_date_from_gmt($post_date),
		];

		if (! empty($existing[0])) {
			$postarr['ID'] = (int) $existing[0];
			$post_id       = wp_update_post($postarr, true);
			if (! is_wp_error($post_id)) {
				$updated++;
			}
		} else {
			$post_id = wp_insert_post($postarr, true);
			if (! is_wp_error($post_id)) {
				$created++;
			}
		}

		if (is_wp_error($post_id)) {
			$errors[] = sprintf('%s: %s', $title, $post_id->get_error_message());
			continue;
		}

		update_post_meta($post_id, '_scb_external_id', $external_id);
		update_post_meta($post_id, '_scb_source_url', $source_url);
	}

	return [
		'created' => $created,
		'updated' => $updated,
		'errors'  => $errors,
	];
}

