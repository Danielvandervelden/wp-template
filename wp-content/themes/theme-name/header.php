<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Site title</title>
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
          echo '<img src="' . esc_url($custom_logo_url) . '" alt="' . esc_attr(get_bloginfo('name')) . ' Logo">';
        }
      ?>
    </div>
    <div id="header-divider"></div>
    <button id="mobile-menu-trigger" aria-controls="navigation" aria-expanded="false"><i
        class="icon-hamburger"></i></button>
    <?php 
    if (has_nav_menu('header-menu')) {
      wp_nav_menu(array(
          'theme_location' => 'header-menu',
          'container' => 'nav',
          'container_id' => 'navigation',
          'container_class' => 'menu-container',
          'menu_class' => 'header-menu',
      ));
    }
    ?>
  </header>