<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload"
    href="https://fonts.googleapis.com/css2?family=Poetsen+One&family=Roboto:wght@300;400;700&display=swap" as="style">
  <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
  <div id="backdrop"></div>
  <header class="header-container">
    <div class="logo-container">
      <?php
      $custom_logo_url = get_theme_mod('custom_logo');
      if ($custom_logo_url) {
        // Output the custom logo image
        echo '<a href="' . site_url() . '"><img src="' . esc_url($custom_logo_url) . '" alt="' . esc_attr(get_bloginfo('name')) . ' Logo"></a>';
      }
      ?>
    </div>
    <div id="header-divider"></div>
    <button id="mobile-menu-open" aria-controls="navigation" aria-expanded="false"><i
        class="icon-hamburger"></i><span>MENU</span></button>
    <button id="mobile-menu-close" aria-controls="navigation" aria-expanded="true"><i class="icon-x"></i></button>
    <?php if (has_nav_menu('header-menu')) { ?>
      <div id="navigation">
        <?php
        if ($custom_logo_url) {
          // Output the custom logo image
          echo '<div class="mobile-menu-logo-wrapper"><img src="' . esc_url($custom_logo_url) . '" alt="' . esc_attr(get_bloginfo('name')) . ' Logo"></div>';
        }
        ?>
        <?php wp_nav_menu(
          array(
            'theme_location' => 'header-menu',
            'container' => 'nav',
            'container_class' => 'menu-container',
            'menu_class' => 'header-menu',
          )
        ); ?>
      </div>
    <?php } ?>
  </header>