<?php
$site_title = get_bloginfo('name');
$email_address = get_theme_mod('email_address');
$phone_number = get_theme_mod('phone_number');
$socials = get_option('socials');
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
    <h4 class="dark"><?= $site_title ?></h4>
    <div class="site-info">
      <div class="contact">
        <a href="mailto:<?= $email_address ?>"><?= $email_address ?></a>
        <a href="tel:<?= $phone_number ?>"><?= $phone_number ?></a>
      </div>
    </div>
    <?php if ($whatsapp_url || count($socials) > 0) { ?>
      <div class="social-links">
        <?php foreach ($socials as $social => $url) { ?>
          <a href="<?= $url ?>" target="_blank" rel="noopener noreferrer">
            <img src="<?= get_template_directory_uri() ?>/public/images/<?= $social ?>.svg" alt="<?= ucfirst($social) ?>">
          </a>
        <?php } ?>
        <?php if ($whatsapp_url) { ?>
          <a href="https://wa.me/<?= $whatsapp_url ?>" target="_blank" rel="noopener noreferrer">
            <img src="<?= get_template_directory_uri() ?>/public/images/whatsapp.svg" alt="WhatsApp">
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
</footer>
<?php wp_footer(); ?>
</body>

</html>