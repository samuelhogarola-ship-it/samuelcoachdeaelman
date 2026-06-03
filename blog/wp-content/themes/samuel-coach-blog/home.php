<?php
/**
 * Blog index.
 *
 * @package SamuelCoachBlog
 */

get_header();
?>

<section class="scb-hero">
	<div class="scb-container">
		<h1 class="scb-hero__title"><?php echo esc_html(scb_get_theme_mod('hero_title')); ?></h1>
	</div>
</section>

<section class="scb-section">
	<div class="scb-container">
		<header class="scb-section-heading">
			<h2 class="scb-section-heading__title"><?php echo esc_html(scb_get_theme_mod('blog_heading')); ?></h2>
			<hr class="scb-section-heading__rule">
			<p class="scb-section-heading__intro"><?php echo esc_html(scb_get_theme_mod('blog_intro')); ?></p>
		</header>

		<?php if (have_posts()) : ?>
			<div class="scb-post-grid">
				<?php
				while (have_posts()) :
					the_post();
					scb_post_card();
				endwhile;
				?>
			</div>

			<div class="scb-pagination">
				<?php the_posts_pagination(); ?>
			</div>
		<?php else : ?>
			<div class="scb-empty">
				<p>Aún no hay entradas publicadas.</p>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();

