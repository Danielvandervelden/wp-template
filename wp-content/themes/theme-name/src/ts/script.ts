import { MobileMenu } from "./mobile-menu";

const mobileMenuOpen = document.querySelector("#mobile-menu-open");
const mobileMenuClose = document.querySelector("#mobile-menu-close");

if (mobileMenuOpen && mobileMenuClose) {
    const mobileMenuInstance = new MobileMenu(mobileMenuOpen, mobileMenuClose);
    mobileMenuInstance.init();
}
