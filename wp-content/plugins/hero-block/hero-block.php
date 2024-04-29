<?php
/**
 * Plugin Name: Hero Block
 * Description: A custom Gutenberg block for adding a hero component.
 */

function create_hero_block() {
  wp_register_script(
      'hero-block-script',
      plugins_url('build/index.js', __FILE__),
      array('wp-blocks', 'wp-element', 'wp-editor')
  );

  // Enqueue CSS for front-end and editor.
  wp_register_style(
      'hero-block-style',
      plugins_url('build/style-index.css', __FILE__)
  );

  // Enqueue editor-only CSS.
  wp_register_style(
      'hero-block-editor-style',
      plugins_url('build/index.css', __FILE__)
  );

  register_block_type('hero/hero-block', array(
      'editor_script' => 'hero-block-script',
      'style'         => 'hero-block-style',
      'editor_style'  => 'hero-block-editor-style'
  ));
}

add_action('init', 'create_hero_block');