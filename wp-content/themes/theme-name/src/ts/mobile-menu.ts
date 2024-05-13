import { throttle } from "./util/throttle";

export class MobileMenu {
    private mobileMenuOpen: Element;
    private mobileMenuClose: Element;
    private mobileMenuActiveClass: string;
    private backdrop: Element | null;
    private navigation: Element | null;
    private header: Element | null;
    private open: boolean;
    private firstFocusableElement: HTMLElement | null = null;
    private lastFocusableElement: HTMLElement | null = null;

    constructor(mobileMenuOpen: Element, mobileMenuClose: Element) {
        this.mobileMenuOpen = mobileMenuOpen;
        this.mobileMenuClose = mobileMenuClose;
        this.mobileMenuActiveClass = "mobile-menu-active";
        this.backdrop = document.getElementById("backdrop");
        this.navigation = document.getElementById("navigation");
        this.header = document.querySelector(".header-container");
        this.open = false;
    }

    public init() {
        this.mobileMenuOpen.addEventListener("click", this.openMobileMenu.bind(this));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.closeMobileMenu();
            }
        });

        this.mobileMenuClose.addEventListener("click", this.closeMobileMenu.bind(this));

        if (this.backdrop) {
            this.backdrop.addEventListener("click", () => {
                this.closeMobileMenu();
            });
        }

        window.addEventListener(
            "scroll",
            throttle(this.handleMobileMenuStickyState.bind(this), 50)
        );
    }

    private openMobileMenu() {
        document.body.classList.add(this.mobileMenuActiveClass);
        this.open = true;
        (this.navigation as HTMLElement).style.visibility = "visible";
        this.mobileMenuOpen.setAttribute("aria-expanded", "true");
        this.mobileMenuClose.setAttribute("aria-expanded", "true");
        this.updateFocusableElements();
        this.firstFocusableElement?.focus();
    }

    private handleMobileMenuStickyState() {
        if (!this.header) return;

        if (window.scrollY > this.header.clientHeight) {
            this.header.classList.add("sticky");
        } else {
            this.header.classList.remove("sticky");
        }
    }

    private closeMobileMenu() {
        document.body.classList.remove(this.mobileMenuActiveClass);
        this.open = false;
        this.mobileMenuOpen.setAttribute("aria-expanded", "false");
        this.mobileMenuClose.setAttribute("aria-expanded", "false");
        (this.mobileMenuOpen as HTMLElement).focus();
        setTimeout(() => {
            (this.navigation as HTMLElement).style.visibility = "hidden";
        }, 300);
    }

    private updateFocusableElements() {
        const elements = this.navigation?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (!elements || elements.length === 0) return;

        this.firstFocusableElement = elements[0] as HTMLElement;
        this.lastFocusableElement = elements[elements.length - 1] as HTMLElement;

        document.addEventListener("keydown", this.trapTabKey);
    }

    private trapTabKey = (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;

        if (event.shiftKey) {
            if (document.activeElement === this.firstFocusableElement) {
                event.preventDefault();
                this.lastFocusableElement?.focus();
            }
        } else {
            if (document.activeElement === this.lastFocusableElement) {
                event.preventDefault();
                this.firstFocusableElement?.focus();
            }
        }
    };
}
