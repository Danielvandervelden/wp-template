(()=>{"use strict";class e{mobileMenuTrigger;mobileMenuActiveClass;backdrop;navigation;open;firstFocusableElement=null;lastFocusableElement=null;constructor(e){this.mobileMenuTrigger=e,this.mobileMenuActiveClass="mobile-menu-active",this.backdrop=document.getElementById("backdrop"),this.navigation=document.getElementById("navigation"),this.open=!1}init(){this.mobileMenuTrigger.addEventListener("click",this.openMobileMenu.bind(this)),document.addEventListener("keydown",(e=>{"Escape"===e.key&&this.closeMobileMenu()})),this.backdrop&&this.backdrop.addEventListener("click",(()=>{this.closeMobileMenu()})),this.navigation&&this.navigation instanceof HTMLElement&&(this.navigation.addEventListener("transitionend",this.handleVisibilityChange.bind(this)),this.handleVisibilityChange())}openMobileMenu(){document.body.classList.add(this.mobileMenuActiveClass),this.open=!0,this.mobileMenuTrigger.setAttribute("aria-expanded","true"),this.updateFocusableElements(),this.firstFocusableElement?.focus()}closeMobileMenu(){document.body.classList.remove(this.mobileMenuActiveClass),this.open=!1,this.mobileMenuTrigger.setAttribute("aria-expanded","false"),this.mobileMenuTrigger.focus(),this.navigation.style.visibility="hidden"}handleVisibilityChange(){this.open&&(this.navigation.style.visibility="visible")}updateFocusableElements(){const e=this.navigation?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e&&0!==e.length&&(this.firstFocusableElement=e[0],this.lastFocusableElement=e[e.length-1],document.addEventListener("keydown",this.trapTabKey))}trapTabKey=e=>{"Tab"===e.key&&(e.shiftKey?document.activeElement===this.firstFocusableElement&&(e.preventDefault(),this.lastFocusableElement?.focus()):document.activeElement===this.lastFocusableElement&&(e.preventDefault(),this.firstFocusableElement?.focus()))}}const t=document.querySelector("#mobile-menu-trigger");if(t){new e(t).init()}})();