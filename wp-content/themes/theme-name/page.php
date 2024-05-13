<?php
/**
 * The template for displaying the front page
 *
 * This is the template that displays the front page by default.
 *
 * @package theme-name
 */

get_header(); ?>

    <main id="primary" class="site-main">     
      <?= the_content() ?>
    </main>

<?php
get_footer();