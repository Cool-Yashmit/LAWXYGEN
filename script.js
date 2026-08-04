/* =========================================================
   LAWXYGEN NAVBAR, SEARCH MODAL AND LOGIN MODAL
   Basic Vanilla JavaScript
   ========================================================= */


/* ========================= MOBILE NAVBAR ========================= */

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainNavigation = document.getElementById("mainNavigation");

mobileMenuButton.addEventListener("click", function () {
    const menuIsOpen =
        mainNavigation.classList.toggle("mobile-menu-open");

    mobileMenuButton.classList.toggle("menu-open", menuIsOpen);

    mobileMenuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );
});


/* ========================= NAVBAR DROPDOWNS ========================= */

const dropdownButtons =
    document.querySelectorAll(".dropdown-button");

function closeAllDropdowns() {
    const openedDropdowns =
        document.querySelectorAll(
            ".navigation-item.dropdown-open"
        );

    openedDropdowns.forEach(function (dropdownItem) {
        dropdownItem.classList.remove("dropdown-open");
    });
}

dropdownButtons.forEach(function (dropdownButton) {
    dropdownButton.addEventListener("click", function (event) {
        event.stopPropagation();

        const navigationItem =
            dropdownButton.closest(".navigation-item");

        const dropdownWasOpen =
            navigationItem.classList.contains("dropdown-open");

        closeAllDropdowns();

        if (!dropdownWasOpen) {
            navigationItem.classList.add("dropdown-open");
        }
    });
});

document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener("click", function () {
    closeAllDropdowns();
});


/* ========================= MODAL FUNCTIONS ========================= */

function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
        return;
    }

    modal.classList.add("modal-visible");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
        return;
    }

    modal.classList.remove("modal-visible");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}


/* ========================= SEARCH MODAL ========================= */

const openSearchModalButton =
    document.getElementById("openSearchModal");

const openMobileSearchModalButton =
    document.getElementById("openMobileSearchModal");

const modalServiceSearch =
    document.getElementById("modalServiceSearch");

/* =========================================================
   COMPLETE SERVICE SEARCH
   Reads every service from services-data.js
   ========================================================= */

const openSearchModalButton =
    document.getElementById("openSearchModal");

const openMobileSearchModalButton =
    document.getElementById("openMobileSearchModal");

const openAllServicesModalButton =
    document.getElementById("openAllServicesModal");

const modalServiceSearch =
    document.getElementById("modalServiceSearch");

const modalServicesContainer =
    document.getElementById("modalServicesContainer");

const modalNoResults =
    document.getElementById("modalNoResults");

const serviceResultCount =
    document.getElementById("serviceResultCount");

const quickSearchButtons =
    document.querySelectorAll("[data-quick-search]");


/* Category display order */

const serviceCategoryOrder = [
    "Business Setup",
    "Tax & Compliance",
    "Intellectual Property",
    "Documentation",
    "Certifications",
    "Specialized Services",
    "Talk to a Lawyer",
    "Talk to a CA",
    "Talk to a CS",
    "Talk to an IP Lawyer"
];


/* Convert category name into a simple CSS class */

function createCategoryClass(categoryName) {
    return categoryName
        .toLowerCase()
        .replaceAll("&", "and")
        .replaceAll(" ", "-");
}


/* Display services inside modal */

function displayServices(searchText) {
    const cleanSearchText =
        searchText.trim().toLowerCase();

    const matchingServices =
        LAWXYGEN_SERVICES.filter(function (service) {
            const serviceName =
                service.name.toLowerCase();

            const serviceCategory =
                service.category.toLowerCase();

            return (
                serviceName.includes(cleanSearchText) ||
                serviceCategory.includes(cleanSearchText)
            );
        });


    /* Update result number */

    serviceResultCount.textContent =
        matchingServices.length;


    /* No results */

    if (matchingServices.length === 0) {
        modalServicesContainer.innerHTML = "";
        modalNoResults.classList.add("show");
        return;
    }

    modalNoResults.classList.remove("show");


    /* Create category sections */

    let completeServicesHtml = "";

    serviceCategoryOrder.forEach(function (categoryName) {
        const categoryServices =
            matchingServices.filter(function (service) {
                return service.category === categoryName;
            });

        if (categoryServices.length === 0) {
            return;
        }

        const categoryClass =
            createCategoryClass(categoryName);

        let serviceLinksHtml = "";

        categoryServices.forEach(function (service) {
            serviceLinksHtml += `
                <a
                    href="${service.url}"
                    class="complete-service-link"
                >
                    <span class="service-link-text">
                        ${service.name}
                    </span>

                    <span class="service-link-arrow">
                        →
                    </span>
                </a>
            `;
        });

        completeServicesHtml += `
            <section
                class="modal-service-group ${categoryClass}"
            >

                <div class="modal-service-group-heading">

                    <span class="service-category-dot"></span>

                    <h3>
                        ${categoryName}
                    </h3>

                    <span class="category-service-number">
                        ${categoryServices.length}
                    </span>

                </div>

                <div class="modal-service-links">
                    ${serviceLinksHtml}
                </div>

            </section>
        `;
    });

    modalServicesContainer.innerHTML =
        completeServicesHtml;
}


/* Open complete search */

function showCompleteServiceSearch() {
    openModal("searchModal");

    modalServiceSearch.value = "";

    displayServices("");

    setTimeout(function () {
        modalServiceSearch.focus();
    }, 100);
}


/* Navbar search icon */

if (openSearchModalButton) {
    openSearchModalButton.addEventListener(
        "click",
        showCompleteServiceSearch
    );
}


/* Mobile search */

if (openMobileSearchModalButton) {
    openMobileSearchModalButton.addEventListener(
        "click",
        function () {
            mainNavigation.classList.remove(
                "mobile-menu-open"
            );

            mobileMenuButton.classList.remove(
                "menu-open"
            );

            showCompleteServiceSearch();
        }
    );
}


/* All Services navbar button */

if (openAllServicesModalButton) {
    openAllServicesModalButton.addEventListener(
        "click",
        showCompleteServiceSearch
    );
}


/* Search while typing */

modalServiceSearch.addEventListener(
    "input",
    function () {
        displayServices(
            modalServiceSearch.value
        );
    }
);


/* Quick service search buttons */

quickSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedSearch =
            button.getAttribute(
                "data-quick-search"
            );

        modalServiceSearch.value =
            selectedSearch;

        displayServices(selectedSearch);

        modalServiceSearch.focus();
    });
});


/* Open with keyboard shortcut: Ctrl + K */

document.addEventListener(
    "keydown",
    function (event) {
        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "k"
        ) {
            event.preventDefault();
            showCompleteServiceSearch();
        }
    }
);
const modalNoResults =
    document.getElementById("modalNoResults");

function showSearchModal() {
    openModal("searchModal");

    setTimeout(function () {
        modalServiceSearch.focus();
    }, 100);
}

openSearchModalButton.addEventListener(
    "click",
    showSearchModal
);

openMobileSearchModalButton.addEventListener(
    "click",
    function () {
        mainNavigation.classList.remove("mobile-menu-open");

        mobileMenuButton.classList.remove("menu-open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        showSearchModal();
    }
);


/* Filter service links */

modalServiceSearch.addEventListener("input", function () {
    const enteredText =
        modalServiceSearch.value
            .trim()
            .toLowerCase();

    let totalVisibleServices = 0;

    modalServiceLinks.forEach(function (serviceLink) {
        const serviceText =
            serviceLink.textContent
                .trim()
                .toLowerCase();

        const serviceMatches =
            serviceText.includes(enteredText);

        serviceLink.classList.toggle(
            "service-hidden",
            !serviceMatches
        );

        if (serviceMatches) {
            totalVisibleServices += 1;
        }
    });

    modalServiceGroups.forEach(function (serviceGroup) {
        const visibleLinks =
            serviceGroup.querySelectorAll(
                "[data-search-service]:not(.service-hidden)"
            );

        serviceGroup.classList.toggle(
            "hidden-service-group",
            visibleLinks.length === 0
        );
    });

    modalNoResults.classList.toggle(
        "show",
        totalVisibleServices === 0
    );
});


/* ========================= LOGIN MODAL ========================= */

const openLoginModalButton =
    document.getElementById("openLoginModal");

const openMobileLoginModalButton =
    document.getElementById("openMobileLoginModal");

const emailLoginForm =
    document.getElementById("emailLoginForm");

const loginFormMessage =
    document.getElementById("loginFormMessage");

openLoginModalButton.addEventListener("click", function () {
    openModal("loginModal");
});

openMobileLoginModalButton.addEventListener(
    "click",
    function () {
        mainNavigation.classList.remove("mobile-menu-open");

        mobileMenuButton.classList.remove("menu-open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        openModal("loginModal");
    }
);


/* Temporary frontend form */

emailLoginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput =
        document.getElementById("loginEmail");

    const termsCheckbox =
        document.getElementById("termsCheckbox");

    if (!emailInput.value.trim()) {
        loginFormMessage.textContent =
            "Please enter your email address.";

        emailInput.focus();
        return;
    }

    if (!termsCheckbox.checked) {
        loginFormMessage.textContent =
            "Please accept the Terms of Use and Privacy Policy.";

        return;
    }

    loginFormMessage.textContent =
        "Login backend will be connected after the UI is approved.";
});


/* ========================= CLOSE MODALS ========================= */

const modalCloseButtons =
    document.querySelectorAll("[data-close-modal]");

modalCloseButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        const modalId =
            closeButton.getAttribute("data-close-modal");

        closeModal(modalId);
    });
});


/* Close by clicking dark overlay */

document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            closeModal(overlay.id);
        }
    });
});


/* Close using Escape key */

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
        return;
    }

    document
        .querySelectorAll(".modal-overlay.modal-visible")
        .forEach(function (visibleModal) {
            closeModal(visibleModal.id);
        });
});


/* ========================= WINDOW RESIZE ========================= */

window.addEventListener("resize", function () {
    if (window.innerWidth > 1020) {
        mainNavigation.classList.remove("mobile-menu-open");

        mobileMenuButton.classList.remove("menu-open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});