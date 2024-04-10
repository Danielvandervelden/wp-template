<?php

function register_logo_upload( $wp_customize ) {
  // Adds the custom logo setting and control to the Theme Customization screen.
  $wp_customize->add_setting( 'custom_logo', array(
      'default'    => '',
      'transport'  => 'refresh',
      'sanitize_callback' => 'esc_url_raw',
  ) );
}
add_action( 'customize_register', 'register_logo_upload' );