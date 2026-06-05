<?php
/**
 * Single post template.
 *
 * @package SamuelCoachBlog
 */

get_header();
?>

<?php
while (have_posts()) :
	the_post();
	?>
	<article <?php post_class('scb-entry'); ?>>
		<header class="scb-entry__header">
			<h1 class="scb-entry__title"><?php the_title(); ?></h1>
			<div class="scb-entry-meta">
				<?php echo esc_html(get_the_date()); ?>
			</div>
		</header>

		<?php if (has_post_thumbnail()) : ?>
			<div class="scb-entry__thumbnail">
				<?php the_post_thumbnail('full'); ?>
			</div>
		<?php endif; ?>

		<div class="scb-entry__content">
			<?php the_content(); ?>
		</div>

		<?php
		$category_list = get_the_category_list(', ');
		$tag_list      = get_the_tag_list('', ', ');
		if ($category_list || $tag_list) :
			?>
			<section class="scb-entry-taxonomy" aria-label="<?php esc_attr_e('Temas relacionados', 'samuel-coach-blog'); ?>">
				<?php if ($category_list) : ?>
					<p><strong>Temas:</strong> <?php echo wp_kses_post($category_list); ?></p>
				<?php endif; ?>
				<?php if ($tag_list) : ?>
					<p><strong>Etiquetas:</strong> <?php echo wp_kses_post($tag_list); ?></p>
				<?php endif; ?>
			</section>
		<?php endif; ?>

		<?php scb_render_newsletter(); ?>

		<nav class="scb-post-nav" aria-label="<?php esc_attr_e('Navegación de entradas', 'samuel-coach-blog'); ?>">
			<div><?php previous_post_link('%link', '&larr; %title'); ?></div>
			<div><?php next_post_link('%link', '%title &rarr;'); ?></div>
		</nav>
	</article>

	<section class="scb-section scb-section--soft">
		<div class="scb-container">
			<header class="scb-section-heading scb-section-heading--left">
				<h2 class="scb-section-heading__title">Artículos relacionados</h2>
				<hr class="scb-section-heading__rule">
				<p class="scb-section-heading__intro">Sigue con temas cercanos para reforzar la gramática, ampliar vocabulario y mantener una navegación interna más útil.</p>
			</header>

			<?php
			$related = scb_get_related_posts(get_the_ID(), 3);

			if ($related->have_posts()) :
				?>
				<div class="scb-post-grid">
					<?php
					while ($related->have_posts()) :
						$related->the_post();
						scb_post_card();
					endwhile;
					?>
				</div>
				<?php
				wp_reset_postdata();
			endif;
			?>
		</div>
	</section>
	<?php
endwhile;
?>

<?php
get_footer();
