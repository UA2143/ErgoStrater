document.addEventListener("DOMContentLoaded", () => {
    initMobileNavigation();
    renderFeaturedGuides();
    renderFeaturedGear();
    initNewsletterForm();
    setCurrentYear();
});


/* =========================================
   MOBILE NAVIGATION
========================================= */

function initMobileNavigation() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a navigation link is clicked
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close menu with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.focus();
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        const clickedInsideHeader = event.target.closest(".site-header");

        if (!clickedInsideHeader) {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


/* =========================================
   FEATURED GUIDES
========================================= */

function renderFeaturedGuides() {
    const container = document.querySelector("#featured-guides");

    if (!container || typeof getFeaturedGuides !== "function") {
        return;
    }

    const featuredGuides = getFeaturedGuides();

    container.innerHTML = "";

    featuredGuides.forEach((guide) => {
        const article = document.createElement("article");
        article.className = "guide-card";

        const category = document.createElement("span");
        category.className = "guide-card-category";
        category.textContent = guide.category;

        const title = document.createElement("h3");

        const titleLink = document.createElement("a");
        titleLink.href = guide.url;
        titleLink.textContent = guide.title;

        title.appendChild(titleLink);

        const description = document.createElement("p");
        description.textContent = guide.description;

        const meta = document.createElement("div");
        meta.className = "guide-card-meta";

        const difficulty = document.createElement("span");
        difficulty.textContent = guide.difficulty;

        const separator = document.createElement("span");
        separator.textContent = "•";
        separator.setAttribute("aria-hidden", "true");

        const readTime = document.createElement("span");
        readTime.textContent = guide.readTime;

        meta.appendChild(difficulty);
        meta.appendChild(separator);
        meta.appendChild(readTime);

        const link = document.createElement("a");
        link.className = "guide-card-link";
        link.href = guide.url;
        link.textContent = "Read guide →";
        link.setAttribute(
            "aria-label",
            `Read ${guide.title}`
        );

        article.appendChild(category);
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(meta);
        article.appendChild(link);

        container.appendChild(article);
    });
}


/* =========================================
   FEATURED GEAR
========================================= */

function renderFeaturedGear() {
    const container = document.querySelector("#featured-gear");

    if (!container || typeof getFeaturedGear !== "function") {
        return;
    }

    const featuredGear = getFeaturedGear();

    container.innerHTML = "";

    featuredGear.forEach((item) => {
        const article = document.createElement("article");
        article.className = "gear-card";

        // Image placeholder for now.
        // Actual product/illustration images can be added later.
        const image = document.createElement("div");
        image.className = "gear-card-image";
        image.setAttribute("aria-hidden", "true");
        image.textContent = "Budget Gear";

        const content = document.createElement("div");
        content.className = "gear-card-content";

        const category = document.createElement("span");
        category.className = "gear-card-category";
        category.textContent = item.category;

        const title = document.createElement("h3");

        const titleLink = document.createElement("a");
        titleLink.href = item.url;
        titleLink.textContent = item.title;

        title.appendChild(titleLink);

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("div");
        price.className = "gear-card-price";
        price.textContent = item.price;

        const link = document.createElement("a");
        link.className = "gear-card-link";
        link.href = item.url;
        link.textContent = "Explore guide →";
        link.setAttribute(
            "aria-label",
            `Explore ${item.title}`
        );

        content.appendChild(category);
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(price);
        content.appendChild(link);

        article.appendChild(image);
        article.appendChild(content);

        container.appendChild(article);
    });
}


/* =========================================
   NEWSLETTER
========================================= */

function initNewsletterForm() {
    const form = document.querySelector("#newsletter-form");
    const emailInput = document.querySelector("#newsletter-email");
    const message = document.querySelector("#newsletter-message");

    if (!form || !emailInput || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!email || !emailInput.checkValidity()) {
            message.textContent = "Please enter a valid email address.";
            message.className = "form-message form-message-error";
            emailInput.focus();
            return;
        }

        /*
         * This is currently a frontend demo.
         * No real email is sent until we connect an email service.
         */
        message.textContent =
            "Thanks! You're on the ErgoStarter list. (Demo signup)";
        message.className = "form-message form-message-success";

        form.reset();
    });
}


/* =========================================
   CURRENT YEAR
========================================= */

function setCurrentYear() {
    const yearElement = document.querySelector("#current-year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();
}