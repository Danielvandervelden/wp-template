<?php
$site_title = get_bloginfo('name');
$email_address = get_theme_mod('email_address');
$phone_number = get_theme_mod('phone_number');
$socials = get_option('socials') ?: []; // Ensure $socials is always an array
$whatsapp_url = get_theme_mod('whatsapp');
$address = get_theme_mod('address', '');
?>

<footer class="page-footer">
  <div class="footer-column">
    <h4 class="dark">Menu</h4>
    <div class="footer-menu">
      <?php wp_nav_menu(
        array(
          'theme_location' => 'header-menu',
          'container' => 'nav',
          'container_class' => 'menu-container',
          'menu_class' => 'header-menu',
        )
      ); ?>
    </div>
  </div>
  <div class="footer-column">
    <h4 class="dark"><?= esc_html($site_title) ?></h4>
    <div class="site-info">
      <div class="contact">
        <?php if ($email_address): ?>
          <a href="mailto:<?= esc_attr($email_address) ?>"><?= esc_html($email_address) ?></a>
        <?php endif; ?>
        <?php if ($phone_number): ?>
          <a href="tel:<?= esc_attr($phone_number) ?>"><?= esc_html($phone_number) ?></a>
        <?php endif; ?>
      </div>
    </div>
    <?php if ($whatsapp_url || count($socials) > 0) { ?>
      <div class="social-links">
        <?php foreach ($socials as $social => $url) { ?>
          <a href="<?= esc_url($url) ?>" target="_blank" rel="noopener noreferrer">
            <img src="<?= esc_url(get_template_directory_uri()) ?>/public/images/<?= esc_attr($social) ?>.svg" alt="<?= esc_attr(ucfirst($social)) ?>">
          </a>
        <?php } ?>
        <?php if ($whatsapp_url) { ?>
          <a href="https://wa.me/<?= esc_attr($whatsapp_url) ?>" target="_blank" rel="noopener noreferrer">
            <img src="<?= esc_url(get_template_directory_uri()) ?>/public/images/whatsapp.svg" alt="WhatsApp">
          </a>
        <?php } ?>
      </div>
    <?php } ?>
  </div>
  <div class="footer-column">
    <div class="address">
      <h4 class="dark">Address</h4>
      <p><?= nl2br(esc_html($address)); ?></p>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
