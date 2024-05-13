<?php  

function load_scripts_and_styles() {

// Script and style versions to bust cache. Once you built new files make sure to update the version number.
  $style_version = "1.0.0";
  $script_version = "1.0.0";

  wp_enqueue_style( 'styles', get_template_directory_uri() . '/dist/css/style.css', [], $style_version );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/dist/js/script.js', [], $script_version, true );
  wp_localize_script('scripts', 'admin_ajax', array('ajax_url' => admin_url('admin-ajax.php')));
}

add_action( 'wp_enqueue_scripts', 'load_scripts_and_styles' );

function load_google_fonts() {
  wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto:wght@300;400;700&display=swap' );
}

add_action( 'wp_enqueue_scripts', 'load_google_fonts' );

add_theme_support( 'menus' );

// Import Gutenberg block extensions
include get_template_directory() . '/wp_config/blocks_extensions/columns/core_columns.php';
include get_template_directory() . '/wp_config/blocks_extensions/column/core_column.php';