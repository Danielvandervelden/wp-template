export class MobileMenu {
    private mobileMenuTrigger: Element;
    private mobileMenuActiveClass: string;
    private backdrop: Element | null;

    constructor(mobileMenuTrigger: Element) {
        this.mobileMenuTrigger = mobileMenuTrigger;
        this.mobileMenuActiveClass = "mobile-menu-active";
        this.backdrop = document.getElementById("backdrop");

        console.log(this.backdrop);
    }

    public init() {
        this.mobileMenuTrigger.addEventListener(
            "click",
            this.toggleMobileMenu.bind(this)
        );

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                document.body.classList.remove(this.mobileMenuActiveClass);
            }
        });

        if (this.backdrop) {
            this.backdrop.addEventListener("click", () => {
                document.body.classList.remove(this.mobileMenuActiveClass);
            });
        }
    }

    private toggleMobileMenu() {
        document.body.classList.toggle(this.mobileMenuActiveClass);
    }
}
