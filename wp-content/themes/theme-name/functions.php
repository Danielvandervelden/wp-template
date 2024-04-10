<?php 

include get_template_directory() . '/wp_config/scripts_styling.php';
include get_template_directory() . '/wp_config/gutenberg_blocks.php';
include get_template_directory() . '/wp_config/register_post_types.php';
include get_template_directory() . '/wp_config/register_menu.php';
include get_template_directory() . '/wp_config/register_features.php';
include get_template_directory() . '/wp_config/customizer.php';

add_action('after_setup_theme', 'custom_theme_setup');
function custom_theme_setup(){
    add_theme_support('custom-header');
    add_theme_support('post-thumbnails');
}