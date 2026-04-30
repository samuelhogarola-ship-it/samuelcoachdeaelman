<?php
defined('ABSPATH') || exit;

add_action('after_setup_theme', function () {
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');

    register_block_pattern_category(
        'samuel-coach',
        ['label' => __('Samuel Coach', 'samuel-coach-blocks')]
    );
});
