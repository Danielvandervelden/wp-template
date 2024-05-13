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

/** 
 * Register some custom fillable fields in the customizer
 */

function register_custom_fields($wp_customize) {
  $wp_customize->add_setting('address', array(
    'default' => '',
    'transport' => 'refresh',
  )
  );

  // Add Control
  $wp_customize->add_control('address_control', array(
    'label' => __('Address', 'mytheme'),
    'section' => 'title_tagline',
    'settings' => 'address',
    'type' => 'textarea', // Specifies a textarea input
  )
  );

  $wp_customize->add_setting('email_address', [
    'default' => '',
    'transport' => 'refresh',
  ]);

  $wp_customize->add_control('email_address_control', [
    'label' => __('Email Address', 'theme-name'),
    'section' => 'title_tagline', 
    'settings' => 'email_address',
    'type' => 'email',
  ]);

  $wp_customize->add_setting('phone_number', [
    'default' => '',
    'transport' => 'refresh',
  ]);

  $wp_customize->add_control('phone_number_control', [
    'label' => __('Phone Number', 'theme-name'),
    'section' => 'title_tagline',
    'settings' => 'phone_number',
    'type' => 'text',
  ]);

  $wp_customize->add_setting('whatsapp', [
    'default' => '',
    'transport' => 'refresh',
  ]);

  $wp_customize->add_control('whatsapp_control', [
    'label' => __('What\'s App', 'ferme'),
    'section' => 'title_tagline',  // You can use a different section or create a new one
    'settings' => 'whatsapp',
    'type' => 'text',
  ]);
}

add_action('customize_register', 'register_custom_fields');
