<?php
/**
 * Page template.
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
		</header>
		<div class="scb-entry__content">
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;
?>

<?php
get_footer();

