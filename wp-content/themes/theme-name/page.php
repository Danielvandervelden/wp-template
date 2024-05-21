<?php
/**
 * The template for displaying any single page.
 *
 * @package theme-name
 */

get_header(); ?>

    <main id="primary" class="site-main">     
      <?= the_content() ?>
    </main>

<?php
get_footer();