document.addEventListener("DOMContentLoaded", () => {
    initSearch();
});


/* =========================================
   SITE SEARCH
========================================= */

function initSearch() {
    const searchInput = document.querySelector("#site-search");
    const searchResults = document.querySelector("#search-results");
    const searchForm = document.querySelector("#search-form");

    // Search UI is not present on every page.
    if (!searchInput || !searchResults) {
        return;
    }

    const allContent = [
        ...guides.map((guide) => ({
            ...guide,
            type: "Guide"
        })),
        ...gear.map((item) => ({
            ...item,
            type: "Gear"
        }))
    ];

    function performSearch(query) {
        const normalizedQuery = query.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (!normalizedQuery) {
            searchResults.hidden = true;
            return;
        }

        const results = allContent.filter((item) => {
            const searchableText = [
                item.title,
                item.description,
                item.category,
                item.keyword
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableText.includes(normalizedQuery);
        });

        renderSearchResults(results);
    }

    function renderSearchResults(results) {
        searchResults.hidden = false;

        if (results.length === 0) {
            const emptyMessage = document.createElement("p");

            emptyMessage.className = "search-empty";
            emptyMessage.textContent =
                "No results found. Try another keyword.";

            searchResults.appendChild(emptyMessage);
            return;
        }

        const resultCount = document.createElement("p");

        resultCount.className = "search-result-count";
        resultCount.textContent =
            `${results.length} result${results.length === 1 ? "" : "s"} found`;

        searchResults.appendChild(resultCount);

        results.forEach((item) => {
            const result = document.createElement("article");

            result.className = "search-result";

            const type = document.createElement("span");

            type.className = "search-result-type";
            type.textContent = item.type;

            const title = document.createElement("h3");

            const link = document.createElement("a");

            link.href = item.url;
            link.textContent = item.title;

            title.appendChild(link);

            const description = document.createElement("p");

            description.textContent = item.description;

            result.appendChild(type);
            result.appendChild(title);
            result.appendChild(description);

            searchResults.appendChild(result);
        });
    }

    searchInput.addEventListener("input", () => {
        performSearch(searchInput.value);
    });

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();

            performSearch(searchInput.value);
        });
    }
}