<?php
/**
 * Plugin Name:       Daniel
 * Description:       These blocks are custom made by Daniel
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       daniel-custom-blocks
 *
 * @package Daniel
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function daniel_daniel_custom_blocks_block_init() {
  register_block_type( __DIR__ . '/build/hero' );
  register_block_type( __DIR__ . '/build/full-width-image' );

  include plugin_dir_path( __FILE__ ) . 'src/full-width-image/custom-styling.php';
}
add_action( 'init', 'daniel_daniel_custom_blocks_block_init' );
