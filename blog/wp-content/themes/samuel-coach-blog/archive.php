<?php
/**
 * Archive template.
 *
 * @package SamuelCoachBlog
 */

get_header();
?>

<section class="scb-section">
	<div class="scb-container">
		<header class="scb-section-heading">
			<h1 class="scb-section-heading__title"><?php the_archive_title(); ?></h1>
			<hr class="scb-section-heading__rule">
			<?php the_archive_description('<div class="scb-section-heading__intro">', '</div>'); ?>
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
				<p>No se han encontrado contenidos.</p>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();

