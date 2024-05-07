<?php

/** Possibility to upload own logo in customizer. */
function register_custom_logo()
{
  $defaults = array(
    'height' => 100,
    'width' => 400,
    'flex-height' => true,
    'flex-width' => true,
    'header-text' => array('site-title', 'site-description'),
  );
  add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'register_custom_logo');

/** Add custom colors to all gutenberg blocks */
add_theme_support('editor-color-palette', array(
  array(
    'name' => __('Beige', 'ea_genesis_child'),
    'slug' => 'beige',
    'color' => '#EFECCA',
  ),
  array(
    'name' => __('Green', 'ea_genesis_child'),
    'slug' => 'green',
    'color' => '#A9CBB7',
  ),
  array(
    'name' => __('Orange', 'ea_genesis_child'),
    'slug' => 'pink',
    'color' => '#D1B1C8',
  ),
  array(
    'name' => __('Red', 'ea_genesis_child'),
    'slug' => 'red',
    'color' => '#FB4D3D',
  ),
  array(
    'name' => __('Dark gray', 'ea_genesis_child'),
    'slug' => 'dark-gray',
    'color' => '#5E565A',
  ),
));