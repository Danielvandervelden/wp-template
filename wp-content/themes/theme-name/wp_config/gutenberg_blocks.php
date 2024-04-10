<?php 

/**
 * Filters the list of allowed block types in the block editor.
 *
 * This function restricts the available block types to Heading, List, Image, and Paragraph only.
 *
 * @param array|bool $allowed_block_types Array of block type slugs, or boolean to enable/disable all.
 * @param object     $block_editor_context The current block editor context.
 *
 * @return array The array of allowed block types.
 */
function allowed_block_types( $allowed_block_types, $block_editor_context ) {

  $allowed_block_types = array(
    'core/heading',     // Heading block
    'core/image',       // Image block
    'core/list',        // List block
    'core/paragraph',   // Paragraph block
  );

  return $allowed_block_types;
}
add_filter( 'allowed_block_types_all', 'allowed_block_types', 10, 2 );

// core/legacy-widget
// core/widget-group
// core/archives
// core/avatar
// core/block
// core/calendar
// core/categories
// core/comment-author-name
// core/comment-content
// core/comment-date
// core/comment-edit-link
// core/comment-reply-link
// core/comment-template
// core/comments
// core/comments-pagination
// core/comments-pagination-next
// core/comments-pagination-numbers
// core/comments-pagination-previous
// core/comments-title
// core/cover
// core/file
// core/footnotes
// core/gallery
// core/heading
// core/home-link
// core/image
// core/latest-comments
// core/latest-posts
// core/loginout
// core/navigation
// core/navigation-link
// core/navigation-submenu
// core/page-list
// core/page-list-item
// core/pattern
// core/post-author
// core/post-author-biography
// core/post-author-name
// core/post-comments-form
// core/post-content
// core/post-date
// core/post-excerpt
// core/post-featured-image
// core/post-navigation-link
// core/post-template
// core/post-terms
// core/post-title
// core/query
// core/query-no-results
// core/query-pagination
// core/query-pagination-next
// core/query-pagination-numbers
// core/query-pagination-previous
// core/query-title
// core/read-more
// core/rss
// core/search
// core/shortcode
// core/site-logo
// core/site-tagline
// core/site-title
// core/social-link
// core/tag-cloud
// core/template-part
// core/term-description
// core/audio
// core/button
// core/buttons
// core/code
// core/column
// core/columns
// core/details
// core/embed
// core/freeform
// core/group
// core/html
// core/list
// core/list-item
// core/media-text
// core/missing
// core/more
// core/nextpage
// core/paragraph
// core/preformatted
// core/pullquote
// core/quote
// core/separator
// core/social-links
// core/spacer
// core/table
// core/text-columns
// core/verse
// core/video
// core/post-comments