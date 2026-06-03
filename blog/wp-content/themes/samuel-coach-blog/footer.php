<?php
/**
 * Theme footer.
 *
 * @package SamuelCoachBlog
 */

if (! defined('ABSPATH')) {
	exit;
}
?>
	</main>

	<footer class="scb-site-footer">
		<div class="scb-container">
			<hr class="scb-site-footer__rule">
			<div class="scb-site-footer__copy">
				Copyright &copy; <?php echo esc_html(wp_date('Y')); ?> <?php bloginfo('name'); ?> - Todos los derechos reservados.
			</div>
			<?php scb_footer_navigation(); ?>
			<div class="scb-site-footer__powered">
				<?php echo esc_html(scb_get_theme_mod('footer_powered_text')); ?>
			</div>
		</div>
	</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
