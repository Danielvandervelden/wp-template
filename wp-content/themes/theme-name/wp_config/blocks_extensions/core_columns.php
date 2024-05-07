<?php

function extend_core_columns_block()
{
  register_block_style(
    'core/column',
    array(
      'name' => 'max-width-600',
      'label' => 'Max Width 600px',
      'inline_style' => '.wp-block-column.is-style-max-width-600 { max-width: 600px; margin: 0 auto; }',
    )
  );

  register_block_style(
    'core/column',
    array(
      'name' => 'max-width-800',
      'label' => 'Max Width 800px',
      'inline_style' => '.wp-block-column.is-style-max-width-800 { max-width: 800px; margin: 0 auto; }',
    )
  );

  register_block_style(
    'core/column',
    array(
      'name' => 'max-width-1000',
      'label' => 'Max Width 1000px',
      'inline_style' => '.wp-block-column.is-style-max-width-1000 { max-width: 1000px; margin: 0 auto; }',
    )
  );

  register_block_style(
    'core/column',
    array(
      'name' => 'max-width-1200',
      'label' => 'Max Width 1200px',
      'inline_style' => '.wp-block-column.is-style-max-width-1200 { max-width: 1200px; margin: 0 auto; }',
    )
  );
}

add_action('init', 'extend_core_columns_block');