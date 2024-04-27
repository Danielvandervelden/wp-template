export class MobileMenu {
    private mobileMenuTrigger: Element;
    private mobileMenuActiveClass: string;
    private backdrop: Element | null;
    private navigation: Element | null;
    private open: boolean;
    private firstFocusableElement: HTMLElement | null = null;
    private lastFocusableElement: HTMLElement | null = null;

    constructor(mobileMenuTrigger: Element) {
        this.mobileMenuTrigger = mobileMenuTrigger;
        this.mobileMenuActiveClass = "mobile-menu-active";
        this.backdrop = document.getElementById("backdrop");
        this.navigation = document.getElementById("navigation");
        this.open = false;
    }

    public init() {
        this.mobileMenuTrigger.addEventListener("click", this.openMobileMenu.bind(this));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.closeMobileMenu();
            }
        });
        if (this.backdrop) {
            this.backdrop.addEventListener("click", () => {
                this.closeMobileMenu();
            });
        }
        if (this.navigation && this.navigation instanceof HTMLElement) {
            this.navigation.addEventListener(
                "transitionend",
                this.handleVisibilityChange.bind(this)
            );

            this.handleVisibilityChange();
        }
    }

    private openMobileMenu() {
        document.body.classList.add(this.mobileMenuActiveClass);
        this.open = true;
        this.mobileMenuTrigger.setAttribute("aria-expanded", "true");
        this.updateFocusableElements();
        this.firstFocusableElement?.focus();
    }

    private closeMobileMenu() {
        document.body.classList.remove(this.mobileMenuActiveClass);
        this.open = false;
        this.mobileMenuTrigger.setAttribute("aria-expanded", "false");
        (this.mobileMenuTrigger as HTMLElement).focus();
        (this.navigation as HTMLElement).style.visibility = "hidden";
    }

    private handleVisibilityChange() {
        if (this.open) {
            (this.navigation as HTMLElement).style.visibility = "visible";
        }
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
        console.log("EXECUTING");
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
