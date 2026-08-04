/* =====================================================
   LAWXYGEN HOMEPAGE JAVASCRIPT
   This file controls only the navbar and hero search.
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    /* =================================================
       1. MOBILE NAVIGATION
       ================================================= */
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mainNavigation = document.querySelector(".main-navigation");

    mobileMenuButton.addEventListener("click", function () {
        const menuIsOpen = mainNavigation.classList.toggle("is-open");

        mobileMenuButton.setAttribute("aria-expanded", menuIsOpen);
        mobileMenuButton.setAttribute(
            "aria-label",
            menuIsOpen ? "Close navigation menu" : "Open navigation menu"
        );
        document.body.classList.toggle("menu-open", menuIsOpen);
    });

    /* =================================================
       2. NAVBAR DROPDOWNS
       ================================================= */
    const dropdownButtons = document.querySelectorAll(".dropdown-button");

    function closeDropdowns(buttonToKeepOpen) {
        dropdownButtons.forEach(function (button) {
            if (button !== buttonToKeepOpen) {
                button.setAttribute("aria-expanded", "false");
                button.closest(".navigation-item").classList.remove("is-open");
            }
        });
    }

    dropdownButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const navigationItem = button.closest(".navigation-item");
            const dropdownIsOpen = navigationItem.classList.contains("is-open");

            closeDropdowns(button);
            navigationItem.classList.toggle("is-open", !dropdownIsOpen);
            button.setAttribute("aria-expanded", !dropdownIsOpen);
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navigation-item")) {
            closeDropdowns();
        }
    });

    /* =================================================
       3. HERO SERVICE SEARCH
       The service names stay in the HTML, not in an array.
       ================================================= */
    const searchArea = document.querySelector(".service-search");
    const searchForm = document.querySelector(".service-search-form");
    const searchInput = document.querySelector("#service-search-input");
    const suggestionsList = document.querySelector("#service-search-suggestions");
    const suggestionButtons = document.querySelectorAll("[data-search-option]");
    const serviceChoices = document.querySelectorAll("[data-service-choice]");
    const searchStatus = document.querySelector("#search-status");

    function updateSuggestions() {
        const searchText = searchInput.value.trim().toLowerCase();
        let visibleSuggestionCount = 0;

        suggestionButtons.forEach(function (button) {
            const serviceName = button.textContent.trim().toLowerCase();
            const serviceMatches = serviceName.includes(searchText);

            button.closest("li").hidden = !serviceMatches;

            if (serviceMatches) {
                visibleSuggestionCount += 1;
            }
        });

        suggestionsList.hidden = visibleSuggestionCount === 0;
        return visibleSuggestionCount;
    }

    searchInput.addEventListener("focus", function () {
        updateSuggestions();
    });

    searchInput.addEventListener("input", function () {
        updateSuggestions();
        searchStatus.textContent = "";
    });

    suggestionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            searchInput.value = button.textContent.trim();
            suggestionsList.hidden = true;
            searchStatus.textContent = "Selected service: " + searchInput.value;
        });
    });

    serviceChoices.forEach(function (choice) {
        choice.addEventListener("click", function (event) {
            event.preventDefault();
            searchInput.value = choice.textContent.trim();
            suggestionsList.hidden = true;
            searchStatus.textContent = "Selected service: " + searchInput.value;
            closeDropdowns();

            if (mainNavigation.classList.contains("is-open")) {
                mainNavigation.classList.remove("is-open");
                mobileMenuButton.setAttribute("aria-expanded", "false");
                mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
                document.body.classList.remove("menu-open");
            }

            searchInput.focus();
        });
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (searchInput.value.trim() === "") {
            searchStatus.textContent = "Please enter a service name.";
            searchInput.focus();
            return;
        }

        const visibleSuggestionCount = updateSuggestions();

        if (visibleSuggestionCount > 0) {
            searchStatus.textContent = visibleSuggestionCount + " homepage suggestion found.";
        } else {
            searchStatus.textContent = "No featured homepage suggestion found yet.";
        }
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".service-search")) {
            suggestionsList.hidden = true;
        }
    });

    /* =================================================
       4. KEYBOARD AND WINDOW CLEANUP
       ================================================= */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeDropdowns();
            suggestionsList.hidden = true;
            mainNavigation.classList.remove("is-open");
            mobileMenuButton.setAttribute("aria-expanded", "false");
            mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
            document.body.classList.remove("menu-open");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 960) {
            mainNavigation.classList.remove("is-open");
            mobileMenuButton.setAttribute("aria-expanded", "false");
            mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
            document.body.classList.remove("menu-open");
        }
    });
});
