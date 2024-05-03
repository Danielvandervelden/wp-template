<?php

function register_logo_upload( $wp_customize ) {
  // Adds the custom logo setting to the Theme Customization screen.
  $wp_customize->add_setting('custom_logo', array(
      'default'           => '', // Set default value
      'transport'         => 'refresh', // Specifies how to refresh the view
      'sanitize_callback' => 'esc_url_raw', // Sanitizes the input
  ));

  // Adds the control for the custom logo setting.
  $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'custom_logo', array(
      'label'    => __('Custom Logo', 'theme_textdomain'), // Label for the control
      'section'  => 'title_tagline', // Default section to appear in
      'settings' => 'custom_logo', // Matches setting ID in add_setting
      'priority' => 8, // Control priority in the section
  )));
}
add_action('customize_register', 'register_logo_upload');
