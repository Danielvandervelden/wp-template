import { MobileMenu } from "./mobile-menu";

const mobileMenuTrigger = document.querySelector("#mobile-menu-trigger");

if (mobileMenuTrigger) {
    const mobileMenuInstance = new MobileMenu(mobileMenuTrigger);
    mobileMenuInstance.init();
}
