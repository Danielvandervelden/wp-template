<?php

/**
 * Register custom styles that can be applied to the columns block.
 *
 */
function extend_core_columns_block()
{
  register_block_style(
    'core/columns',
    array(
      'name' => 'max-width-1200',
      'label' => 'Max Width 1200px',
      'inline_style' => '.wp-block-columns.is-style-max-width-1200 { max-width: 1200px; margin-left: auto; margin-right: auto; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'max-width-600',
      'label' => 'Max Width 600px',
      'inline_style' => '.wp-block-columns.is-style-max-width-600 { max-width: 600px; margin-left: auto; margin-right: auto; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'max-width-800',
      'label' => 'Max Width 800px',
      'inline_style' => '.wp-block-columns.is-style-max-width-800 { max-width: 800px; margin-left: auto; margin-right: auto; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'max-width-1000',
      'label' => 'Max Width 1000px',
      'inline_style' => '.wp-block-columns.is-style-max-width-1000 { max-width: 1000px; margin-left: auto; margin-right: auto; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'max-width-1200',
      'label' => 'Max Width 1200px',
      'inline_style' => '.wp-block-columns.is-style-max-width-1200 { max-width: 1200px; margin-left: auto; margin-right: auto; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'no-spacing-top',
      'label' => 'No spacing top',
      'inline_style' => '.wp-block-columns.is-style-no-spacing-top { margin-top: 0; }',
    )
  );

  register_block_style(
    'core/columns',
    array(
      'name' => 'no-spacing-bottom',
      'label' => 'No spacing bottom',
      'inline_style' => '.wp-block-columns.is-style-no-spacing-bottom { margin-bottom: 0; }',
    )
  );
}
;

add_action('init', 'extend_core_columns_block');

/**
 * Enqueue custom css file for the columns block.
 */

function load_columns_block_styles()
{
  wp_enqueue_block_style(
    'core/columns',
    array(
      'handle' => 'theme-name-columns-block-styles',
      'src' => get_template_directory_uri() . '/wp_config/blocks_extensions/columns/columns.css',
      'ver' => wp_get_theme(get_template())->get('Version'),
      'path' => get_template_directory_uri() . '/wp_config/blocks_extensions/columns/columns.css'
    )
  );
}

add_action('init', 'load_columns_block_styles');
