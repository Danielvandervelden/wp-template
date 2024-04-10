<?php 

/**
 * Sample post type registration
 */

// add_action('init', 'register_book_post_type');

// function register_book_post_type() {
//     $labels = array(
//         'name'                  => _x('Books', 'Post type general name', 'textdomain'),
//         'singular_name'         => _x('Book', 'Post type singular name', 'textdomain'),
//         'menu_name'             => _x('Books', 'Admin Menu text', 'textdomain'),
//         'name_admin_bar'        => _x('Book', 'Add New on Toolbar', 'textdomain'),
//         'add_new'               => __('Add New', 'textdomain'),
//         'add_new_item'          => __('Add New Book', 'textdomain'),
//         'new_item'              => __('New Book', 'textdomain'),
//         'edit_item'             => __('Edit Book', 'textdomain'),
//         'view_item'             => __('View Book', 'textdomain'),
//         'all_items'             => __('All Books', 'textdomain'),
//         'search_items'          => __('Search Books', 'textdomain'),
//         'parent_item_colon'     => __('Parent Books:', 'textdomain'),
//         'not_found'             => __('No books found.', 'textdomain'),
//         'not_found_in_trash'    => __('No books found in Trash.', 'textdomain'),
//         'featured_image'        => _x('Book Cover Image', 'Overrides the “Featured Image” phrase', 'textdomain'),
//         'set_featured_image'    => _x('Set cover image', 'Overrides the “Set featured image” phrase', 'textdomain'),
//         'remove_featured_image' => _x('Remove cover image', 'Overrides the “Remove featured image” phrase', 'textdomain'),
//         'use_featured_image'    => _x('Use as cover image', 'Overrides the “Use as featured image” phrase', 'textdomain'),
//         'archives'              => _x('Book archives', 'The post type archive label used in nav menus', 'textdomain'),
//         'insert_into_item'      => _x('Insert into book', 'Overrides the “Insert into post”/“Insert into page” phrase', 'textdomain'),
//         'uploaded_to_this_item' => _x('Uploaded to this book', 'Overrides the “Uploaded to this post”/“Uploaded to this page” phrase', 'textdomain'),
//         'filter_items_list'     => _x('Filter books list', 'Screen reader text for the filter links', 'textdomain'),
//         'items_list_navigation' => _x('Books list navigation', 'Screen reader text for the pagination', 'textdomain'),
//         'items_list'            => _x('Books list', 'Screen reader text for the items list', 'textdomain'),
//     );

//     $args = array(
//         'labels'             => $labels,
//         'public'             => true,
//         'publicly_queryable' => true,
//         'show_ui'            => true,
//         'show_in_menu'       => true,
//         'query_var'          => true,
//         'rewrite'            => array('slug' => 'book'),
//         'capability_type'    => 'post',
//         'has_archive'        => true,
//         'hierarchical'       => false,
//         'menu_position'      => null,
//         'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
//         'show_in_rest'       => true, // This enables the Gutenberg editor for the custom post type
//     );

//     register_post_type('book', $args);
// }