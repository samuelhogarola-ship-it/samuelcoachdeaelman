<?php
/**
 * Fallback template.
 *
 * @package SamuelCoachBlog
 */

if (is_home()) {
	get_template_part('home');
	return;
}

get_template_part('archive');

