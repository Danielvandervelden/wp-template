<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Site title</title>
  <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
  <header class="header-container">
    <div class="logo-container">
      <?php 
      if (function_exists('the_custom_logo')) {
        the_custom_logo();
      }
      ?>
    </div>
    <button id="mobile-menu-trigger"><i class="icon-hamburger"></i></button>
    <?php 
    if (has_nav_menu('header-menu')) {
      wp_nav_menu(array(
          'theme_location' => 'header-menu',
          'container' => 'nav',
          'container_class' => 'menu-container',
          'menu_class' => 'header-menu',
      ));
    }
    ?>
  </header>