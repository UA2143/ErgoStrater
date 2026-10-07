/* =========================================
   REUSABLE SITE COMPONENTS
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initFooter();
});


/* =========================================
   HEADER
========================================= */

function initHeader() {
    const headerPlaceholder = document.querySelector("#site-header");

    if (!headerPlaceholder) {
        return;
    }

    headerPlaceholder.innerHTML = `
        <header class="site-header">
            <div class="container header-inner">

                <a class="logo" href="/" aria-label="ErgoStarter home">
                    <span class="logo-mark" aria-hidden="true"></span>
                    <span>ErgoStarter</span>
                </a>

                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="main-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    id="main-navigation"
                    class="main-navigation"
                    aria-label="Main navigation"
                >
                    <a href="/guides/">Guides</a>
                    <a href="/gear/">Gear</a>
                    <a href="/budget-ergonomic-desk-setup-guide/">
                        Complete Setup
                    </a>
                    <a href="/about/">About</a>
                </nav>

            </div>
        </header>
    `;

    setActiveNavigation();
}


/* =========================================
   FOOTER
========================================= */

function initFooter() {
    const footerPlaceholder = document.querySelector("#site-footer");

    if (!footerPlaceholder) {
        return;
    }

    footerPlaceholder.innerHTML = `
        <footer class="site-footer">
            <div class="container">

                <div class="footer-grid">

                    <div class="footer-column footer-brand">
                        <a class="logo" href="/">
                            <span class="logo-mark" aria-hidden="true"></span>
                            <span>ErgoStarter</span>
                        </a>

                        <p>
                            Practical ergonomic desk advice for students,
                            interns and remote workers on a budget.
                        </p>
                    </div>

                    <div class="footer-column">
                        <h3>Explore</h3>

                        <a href="/guides/">Guides</a>
                        <a href="/gear/">Budget Gear</a>
                        <a href="/budget-ergonomic-desk-setup-guide/">
                            Complete Setup
                        </a>
                    </div>

                    <div class="footer-column">
                        <h3>Learn</h3>

                        <a href="/guides/monitor-height/">
                            Monitor Height
                        </a>

                        <a href="/guides/standing-desk/">
                            Standing Desk
                        </a>

                        <a href="/guides/wrist-pain/">
                            Wrist & Laptop Setup
                        </a>
                    </div>

                    <div class="footer-column">
                        <h3>ErgoStarter</h3>

                        <a href="/about/">About Us</a>
                        <a href="/sitemap.xml">Sitemap</a>
                        <a href="/robots.txt">Robots.txt</a>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>
                        © <span id="current-year"></span>
                        ErgoStarter. Built for better workdays.
                    </p>

                    <p>
                        Practical advice. Smarter upgrades.
                    </p>
                </div>

            </div>
        </footer>
    `;
}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

function setActiveNavigation() {
    const currentPath = window.location.pathname;

    const navigationLinks = document.querySelectorAll(
        ".main-navigation a"
    );

    navigationLinks.forEach((link) => {
        const linkPath = new URL(
            link.href,
            window.location.origin
        ).pathname;

        if (
            currentPath === linkPath ||
            (
                linkPath !== "/" &&
                currentPath.startsWith(linkPath)
            )
        ) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}