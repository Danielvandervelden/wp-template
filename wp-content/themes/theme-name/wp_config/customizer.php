<?php

/**
 * Add a custom logo upload to the theme customizer.
 */

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

/**
 * Add a social section to the theme customizer.
 * Get these values from the customizer with get_option('socials')
 */

function socials_register( $wp_customize ) {
  // Add a new section for "Socials"
  $wp_customize->add_section('socials_section', array(
      'title'    => __('Social Media Links', 'mytheme'),
      'priority' => 30,
  ));

  // Define a list of social media platforms
  $social_sites = array(
      'facebook'  => 'Facebook',
      'twitter'   => 'Twitter',
      'instagram' => 'Instagram',
      'linkedin'  => 'LinkedIn',
  );

  // Add settings and controls for each social site
  foreach( $social_sites as $social_site => $label ) {
      $wp_customize->add_setting("socials[$social_site]", array(
          'type'              => 'option', // Store in array
          'capability'        => 'edit_theme_options',
          'sanitize_callback' => 'esc_url_raw'
      ));

      $wp_customize->add_control($social_site, array(
          'label'   => sprintf(__('%s URL', 'mytheme'), $label),
          'section' => 'socials_section',
          'type'    => 'url',
          'settings' => "socials[$social_site]"
      ));
  }
}

add_action('customize_register', 'socials_register');
