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
function allowed_block_types($allowed_block_types)
{

  $allowed_block_types = array(
    'core/heading',     // Heading block
    'core/image',       // Image block
    'core/list',        // List block
    'core/paragraph',   // Paragraph block
    'core/column',      // Column block
    'core/columns',     // Columns block
    'core/button',    // Button block
    'core/buttons',   // Buttons block
    'core/shortcode', // Shortcode block
    'core/video', // Video block
    'core/gallery', // Gallery block
    'core/cover', // Cover block
    'core/legacy-widget', // Legacy widget block
    'core/widget-group', // Widget group block
    'core/archives', // Archives block
    'core/avatar', // Avatar block
    'core/block', // Block block
    'core/calendar', // Calendar block
    'core/categories', // Categories block
    'core/comment-author-name', // Comment author name block
    'core/comment-content', // Comment content block
    'core/comment-date', // Comment date block
    'core/comment-edit-link', // Comment edit link block
    'core/comment-reply-link', // Comment reply link block
    'core/comment-template', // Comment template block
    'core/comments', // Comments block
    'core/comments-pagination', // Comments pagination block
    'core/comments-pagination-next', // Comments pagination next block
    'core/comments-pagination-numbers', // Comments pagination numbers block
    'core/comments-pagination-previous', // Comments pagination previous block
    'core/comments-title', // Comments title block
    'core/file', // File block  
    'core/footnotes', // Footnotes block
    'core/home-link', // Home link block
    'core/latest-comments', // Latest comments block  
    'core/latest-posts', // Latest posts block  
    'core/loginout', // Login out block
    'core/navigation', // Navigation block
    'core/navigation-link', // Navigation link block
    'core/navigation-submenu', // Navigation submenu block
    'core/page-list', // Page list block
    'core/page-list-item', // Page list item block
    'core/pattern', // Pattern block
    'core/post-author', // Post author block
    'core/post-author-biography', // Post author biography block
    'core/post-author-name', // Post author name block
    'core/post-comments-form', // Post comments form block
    'core/post-content', // Post content block
    'core/post-date', // Post date block
    'core/post-excerpt', // Post excerpt block
    'core/post-featured-image', // Post featured image block  
    'core/post-navigation-link', // Post navigation link block
    'core/post-template', // Post template block
    'core/post-terms', // Post terms block
    'core/post-title', // Post title block
    'core/query', // Query block
    'core/query-no-results', // Query no results block
    'core/query-pagination', // Query pagination block
    'core/query-pagination-next', // Query pagination next block
    'core/query-pagination-numbers', // Query pagination numbers block
    'core/query-pagination-previous', // Query pagination previous block
    'core/query-title', // Query title block
    'core/read-more', // Read more block
    'core/rss', // RSS block
    'core/search', // Search block
    'core/site-logo', // Site logo block
    'core/site-tagline', // Site tagline block
    'core/site-title', // Site title block
    'core/social-link', // Social link block
    'core/tag-cloud', // Tag cloud block
    'core/template-part', // Template part block  
    'core/term-description', // Term description block
    'core/audio', // Audio block
    'core/code', // Code block
    'core/details', // Details block
    'core/embed', // Embed block
    'core/freeform', // Freeform block
    'core/group', // Group block
    'core/html', // HTML block
    'core/list-item', // List item block
    'core/media-text', // Media text block
    'core/missing', // Missing block
    'core/more', // More block
    'core/nextpage', // Next page block 
    'core/preformatted', // Preformatted block
    'core/pullquote', // Pullquote block
    'core/quote', // Quote block
    'core/separator', // Separator block
    'core/social-links', // Social links block
    'core/spacer', // Spacer block    
    'core/table', // Table block
    'core/text-columns', // Text columns block˝
    'core/verse', // Verse block
    'core/post-comments', // Post comments block
    'daniel/hero',  // Hero block
    'daniel/full-width-image', // Full Width Image block
  );

  return $allowed_block_types;
}
add_filter('allowed_block_types_all', 'allowed_block_types', 10, 2);

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