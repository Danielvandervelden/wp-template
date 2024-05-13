<?php

function load_column_block_styles()
{
  wp_enqueue_block_style(
    'core/column',
    array(
      'handle' => 'theme-name-column-block-styles',
      'src' => get_template_directory_uri() . '/wp_config/blocks_extensions/column/column.css',
      'ver' => wp_get_theme(get_template())->get('Version'),
      'path' => get_template_directory_uri() . '/wp_config/blocks_extension/columns/column.css'
    )
  );
}

add_action('init', 'load_column_block_styles');
