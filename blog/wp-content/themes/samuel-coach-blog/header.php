<?php
/**
 * Theme header.
 *
 * @package SamuelCoachBlog
 */

if (! defined('ABSPATH')) {
	exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="site">
	<header class="scb-site-header">
		<div class="scb-contact-bar">
			<div class="scb-container scb-contact-bar__inner">
				<div><?php echo esc_html(scb_get_theme_mod('contact_address')); ?></div>
				<a class="scb-contact-bar__link" href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', scb_get_theme_mod('contact_phone'))); ?>">
					<?php echo esc_html(scb_get_theme_mod('contact_phone')); ?>
				</a>
			</div>
		</div>

		<div class="scb-container scb-branding">
			<?php if (has_custom_logo()) : ?>
				<div class="scb-logo"><?php the_custom_logo(); ?></div>
			<?php else : ?>
				<p class="scb-site-title"><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></p>
			<?php endif; ?>
			<?php if (! has_custom_logo()) : ?>
				<p class="scb-site-description"><?php bloginfo('description'); ?></p>
			<?php endif; ?>
		</div>

		<div class="scb-nav-wrap">
			<div class="scb-container">
				<button class="scb-menu-toggle" type="button" aria-expanded="false" aria-controls="scb-primary-nav">
					Menú
				</button>
				<nav id="scb-primary-nav" class="scb-primary-nav" aria-label="<?php esc_attr_e('Menú principal', 'samuel-coach-blog'); ?>">
					<?php scb_primary_navigation(); ?>
				</nav>
			</div>
		</div>
	</header>
	<main class="site-main">

