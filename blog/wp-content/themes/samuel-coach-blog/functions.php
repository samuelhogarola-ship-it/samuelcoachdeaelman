<?php
/**
 * Samuel Coach Blog theme functions.
 *
 * @package SamuelCoachBlog
 */

if (! defined('ABSPATH')) {
	exit;
}

require get_template_directory() . '/inc/importer.php';

function scb_theme_defaults() {
	return [
		'contact_address'      => 'Fuengirola, Málaga, España',
		'contact_phone'        => '644 220 965',
		'hero_title'           => 'Willkommen bei Samuel Coach de alemán',
		'blog_heading'         => 'Mi Blog',
		'blog_intro'           => 'Aquí encontrarás todo lo que necesitas para aprender alemán y la vida en Alemania.',
		'newsletter_title'     => 'Suscríbete',
		'newsletter_text'      => 'Recibe nuevos artículos y recursos para aprender alemán directamente en tu correo.',
		'newsletter_button'    => 'Regístrate',
		'newsletter_shortcode' => '',
		'footer_powered_text'  => 'Con tecnología de WordPress',
	];
}

function scb_get_theme_mod($key) {
	$defaults = scb_theme_defaults();
	return get_theme_mod($key, $defaults[$key] ?? '');
}

function scb_setup() {
	load_theme_textdomain('samuel-coach-blog', get_template_directory() . '/languages');

	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support(
		'custom-logo',
		[
			'height'      => 80,
			'width'       => 360,
			'flex-height' => true,
			'flex-width'  => true,
		]
	);
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		]
	);

	register_nav_menus(
		[
			'primary' => __('Menú principal', 'samuel-coach-blog'),
			'footer'  => __('Menú pie', 'samuel-coach-blog'),
		]
	);
}
add_action('after_setup_theme', 'scb_setup');

function scb_enqueue_assets() {
	wp_enqueue_style(
		'scb-fonts',
		'https://fonts.googleapis.com/css2?family=Cabin:wght@700&family=Lato:wght@300;400;700;900&display=swap',
		[],
		null
	);
	wp_enqueue_style(
		'scb-cookie-banner-core',
		get_template_directory_uri() . '/assets/css/cookie-banner-core.css',
		['scb-fonts'],
		wp_get_theme()->get('Version')
	);
	wp_enqueue_style('samuel-coach-blog-style', get_stylesheet_uri(), ['scb-fonts'], wp_get_theme()->get('Version'));
	wp_enqueue_script(
		'scb-cookie-banner-core',
		get_template_directory_uri() . '/assets/js/cookie-banner-core.js',
		[],
		wp_get_theme()->get('Version'),
		true
	);
	wp_enqueue_script(
		'samuel-coach-blog-script',
		get_template_directory_uri() . '/assets/js/theme.js',
		['scb-cookie-banner-core'],
		wp_get_theme()->get('Version'),
		true
	);
}
add_action('wp_enqueue_scripts', 'scb_enqueue_assets');

function scb_customizer($wp_customize) {
	$defaults = scb_theme_defaults();

	$wp_customize->add_section(
		'scb_theme_options',
		[
			'title'    => __('Samuel Coach Blog', 'samuel-coach-blog'),
			'priority' => 30,
		]
	);

	$fields = [
		'contact_address'      => __('Dirección superior', 'samuel-coach-blog'),
		'contact_phone'        => __('Teléfono superior', 'samuel-coach-blog'),
		'hero_title'           => __('Título hero', 'samuel-coach-blog'),
		'blog_heading'         => __('Título sección blog', 'samuel-coach-blog'),
		'blog_intro'           => __('Texto introductorio blog', 'samuel-coach-blog'),
		'newsletter_title'     => __('Título newsletter', 'samuel-coach-blog'),
		'newsletter_text'      => __('Texto newsletter', 'samuel-coach-blog'),
		'newsletter_button'    => __('Texto botón newsletter', 'samuel-coach-blog'),
		'newsletter_shortcode' => __('Shortcode newsletter', 'samuel-coach-blog'),
		'footer_powered_text'  => __('Texto pie inferior', 'samuel-coach-blog'),
	];

	foreach ($fields as $key => $label) {
		$sanitize_callback = 'sanitize_text_field';
		if (in_array($key, ['blog_intro', 'newsletter_text'], true)) {
			$sanitize_callback = 'sanitize_textarea_field';
		} elseif ('newsletter_shortcode' === $key) {
			$sanitize_callback = 'wp_kses_post';
		}

		$wp_customize->add_setting(
			$key,
			[
				'default'           => $defaults[$key] ?? '',
				'sanitize_callback' => $sanitize_callback,
			]
		);

		$wp_customize->add_control(
			$key,
			[
				'label'   => $label,
				'section' => 'scb_theme_options',
				'type'    => in_array($key, ['blog_intro', 'newsletter_text'], true) ? 'textarea' : 'text',
			]
		);
	}
}
add_action('customize_register', 'scb_customizer');

function scb_fallback_menu_items() {
	$base_url = 'https://samuelcoachdealeman.com';

	return [
		[
			'label' => 'Inicio',
			'url'   => $base_url . '/',
		],
		[
			'label' => 'Blog',
			'url'   => $base_url . '/blog',
		],
		[
			'label' => 'Sobre mí',
			'url'   => $base_url . '/sobre-m%C3%AD',
		],
		[
			'label'    => 'Servicios',
			'url'      => '#',
			'children' => [
				['label' => 'Alemán conversacional', 'url' => $base_url . '/alem%C3%A1n-conversacional'],
				['label' => 'Trabajar en Alemania', 'url' => $base_url . '/trabajar-en-alemania'],
				['label' => 'Preparación para exámenes', 'url' => $base_url . '/preparaci%C3%B3n-para-ex%C3%A1menes'],
				['label' => 'Alemán para empresas', 'url' => $base_url . '/alem%C3%A1n-para-empresas'],
				['label' => 'Alemán escolar', 'url' => $base_url . '/alem%C3%A1n-escolar'],
			],
		],
		[
			'label' => 'Metodología',
			'url'   => $base_url . '/metodolog%C3%ADa',
		],
		[
			'label'    => 'Practica alemán',
			'url'      => $base_url . '/pr%C3%A1ctica-alem%C3%A1n',
			'children' => [
				['label' => 'Lecturas / Leseverstehen', 'url' => $base_url . '/pr%C3%A1ctica-alem%C3%A1n'],
			],
		],
		[
			'label' => 'Preguntas frecuentes',
			'url'   => $base_url . '/preguntas-frecuentes',
		],
	];
}

function scb_render_fallback_menu($items, $is_submenu = false) {
	$class = $is_submenu ? 'sub-menu' : 'menu';
	echo '<ul class="' . esc_attr($class) . '">';

	foreach ($items as $item) {
		$has_children = ! empty($item['children']);
		$li_class = $has_children ? 'menu-item-has-children' : '';
		echo '<li class="' . esc_attr($li_class) . '">';
		echo '<a href="' . esc_url($item['url']) . '">' . esc_html($item['label']) . '</a>';

		if ($has_children) {
			scb_render_fallback_menu($item['children'], true);
		}

		echo '</li>';
	}

	echo '</ul>';
}

function scb_primary_navigation() {
	if (has_nav_menu('primary')) {
		wp_nav_menu(
			[
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'menu',
			]
		);
		return;
	}

	scb_render_fallback_menu(scb_fallback_menu_items());
}

function scb_footer_navigation() {
	if (has_nav_menu('footer')) {
		wp_nav_menu(
			[
				'theme_location' => 'footer',
				'container'      => false,
				'menu_class'     => 'scb-site-footer__menu',
				'fallback_cb'    => false,
			]
		);
		return;
	}

	echo '<ul class="scb-site-footer__menu">';
	echo '<li><a href="https://samuelcoachdealeman.com/blog">Blog</a></li>';
	echo '<li><a href="https://samuelcoachdealeman.com/contacto">Contacto</a></li>';
	echo '<li><a href="https://samuelcoachdealeman.com/pol%C3%ADtica-de-privacidad">Política de privacidad</a></li>';
	echo '</ul>';
}

function scb_post_card($post_id = null) {
	$post_id = $post_id ?: get_the_ID();
	?>
	<article <?php post_class('scb-card', $post_id); ?>>
		<a class="scb-card__image-wrap" href="<?php echo esc_url(get_permalink($post_id)); ?>">
			<?php if (has_post_thumbnail($post_id)) : ?>
				<?php echo get_the_post_thumbnail($post_id, 'large', ['class' => 'scb-card__image']); ?>
			<?php else : ?>
				<img
					class="scb-card__image"
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 750'%3E%3Crect width='1200' height='750' fill='%23e9f1f1'/%3E%3Ccircle cx='600' cy='300' r='110' fill='%233aa9ab' opacity='0.28'/%3E%3Crect x='230' y='470' width='740' height='28' fill='%231b1b1b' opacity='0.14'/%3E%3Crect x='315' y='530' width='570' height='22' fill='%231b1b1b' opacity='0.1'/%3E%3C/svg%3E"
					alt=""
				>
			<?php endif; ?>
		</a>
		<div class="scb-card__body">
			<div class="scb-card__meta"><?php echo esc_html(get_the_date('', $post_id)); ?></div>
			<h2 class="scb-card__title"><a href="<?php echo esc_url(get_permalink($post_id)); ?>"><?php echo esc_html(get_the_title($post_id)); ?></a></h2>
			<div class="scb-card__excerpt">
				<?php echo esc_html(get_the_excerpt($post_id) ?: wp_trim_words(wp_strip_all_tags(get_post_field('post_content', $post_id)), 24)); ?>
			</div>
			<div style="margin-top:auto;">
				<a class="scb-card__link" href="<?php echo esc_url(get_permalink($post_id)); ?>">Leer más</a>
			</div>
		</div>
	</article>
	<?php
}

function scb_render_newsletter() {
	$shortcode = trim((string) scb_get_theme_mod('newsletter_shortcode'));
	?>
	<section class="scb-newsletter">
		<div class="scb-newsletter__grid">
			<div>
				<h2 class="scb-newsletter__title"><?php echo esc_html(scb_get_theme_mod('newsletter_title')); ?></h2>
				<p><?php echo esc_html(scb_get_theme_mod('newsletter_text')); ?></p>
			</div>
			<div>
				<?php if ($shortcode) : ?>
					<?php echo do_shortcode($shortcode); ?>
				<?php else : ?>
					<form class="scb-newsletter__form" action="#" method="post" onsubmit="return false;">
						<input type="email" placeholder="Correo electrónico" aria-label="Correo electrónico">
						<button type="submit"><?php echo esc_html(scb_get_theme_mod('newsletter_button')); ?></button>
					</form>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<?php
}

function scb_excerpt_more($more) {
	return '...';
}
add_filter('excerpt_more', 'scb_excerpt_more');
