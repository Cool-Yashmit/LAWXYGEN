/* =========================================================
   LAWXYGEN NAVBAR, SEARCH AND LOGIN
   Basic Vanilla JavaScript
   ========================================================= */


/* ------------------------- ELEMENTS ------------------------- */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNavigation =
    document.getElementById("mainNavigation");

const dropdownButtons =
    document.querySelectorAll(".dropdown-button");

const searchModal =
    document.getElementById("searchModal");

const loginModal =
    document.getElementById("loginModal");

const modalServiceSearch =
    document.getElementById("modalServiceSearch");

const modalServicesContainer =
    document.getElementById("modalServicesContainer");

const modalNoResults =
    document.getElementById("modalNoResults");

const serviceResultCount =
    document.getElementById("serviceResultCount");


/* ------------------------- MOBILE MENU ------------------------- */

mobileMenuButton.addEventListener("click", function () {
    const menuIsOpen =
        mainNavigation.classList.toggle("mobile-menu-open");

    mobileMenuButton.classList.toggle("menu-open", menuIsOpen);

    mobileMenuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );
});


/* ------------------------- DROPDOWNS ------------------------- */

function closeAllDropdowns() {
    const openItems =
        document.querySelectorAll(
            ".navigation-item.dropdown-open"
        );

    openItems.forEach(function (item) {
        item.classList.remove("dropdown-open");
    });
}

dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.stopPropagation();

        const navigationItem =
            button.closest(".navigation-item");

        const dropdownWasOpen =
            navigationItem.classList.contains(
                "dropdown-open"
            );

        closeAllDropdowns();

        if (!dropdownWasOpen) {
            navigationItem.classList.add(
                "dropdown-open"
            );
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


/* ------------------------- MODALS ------------------------- */

function openModal(modalElement) {
    if (!modalElement) {
        return;
    }

    modalElement.classList.add("modal-visible");
    modalElement.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
}

function closeModal(modalElement) {
    if (!modalElement) {
        return;
    }

    modalElement.classList.remove("modal-visible");
    modalElement.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}

document
    .querySelectorAll("[data-close-modal]")
    .forEach(function (button) {
        button.addEventListener("click", function () {
            const modalId =
                button.getAttribute("data-close-modal");

            closeModal(
                document.getElementById(modalId)
            );
        });
    });

document
    .querySelectorAll(".modal-overlay")
    .forEach(function (overlay) {
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeModal(overlay);
            }
        });
    });

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal(searchModal);
        closeModal(loginModal);
    }
});


/* ------------------------- SERVICE SEARCH ------------------------- */

const categoryOrder = [
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

    serviceResultCount.textContent =
        matchingServices.length;

    if (matchingServices.length === 0) {
        modalServicesContainer.innerHTML = "";
        modalNoResults.classList.add("show");
        return;
    }

    modalNoResults.classList.remove("show");

    let completeHtml = "";

    categoryOrder.forEach(function (categoryName) {
        const categoryServices =
            matchingServices.filter(function (service) {
                return service.category === categoryName;
            });

        if (categoryServices.length === 0) {
            return;
        }

        let serviceLinksHtml = "";

        categoryServices.forEach(function (service) {
            serviceLinksHtml += `
                <a
                    href="${service.url}"
                    class="complete-service-link"
                >
                    <span>${service.name}</span>
                    <span class="service-link-arrow">→</span>
                </a>
            `;
        });

        completeHtml += `
            <section class="modal-service-group">

                <div class="modal-service-group-heading">
                    <span class="service-category-dot"></span>

                    <h3>${categoryName}</h3>

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
        completeHtml;
}

function openServiceSearch(searchText) {
    closeAllDropdowns();

    mainNavigation.classList.remove(
        "mobile-menu-open"
    );

    mobileMenuButton.classList.remove(
        "menu-open"
    );

    openModal(searchModal);

    modalServiceSearch.value =
        searchText || "";

    displayServices(searchText || "");

    setTimeout(function () {
        modalServiceSearch.focus();
    }, 100);
}


/* Navbar and hero search buttons */

document
    .getElementById("openSearchModal")
    .addEventListener("click", function () {
        openServiceSearch("");
    });

document
    .getElementById("openMobileSearchModal")
    .addEventListener("click", function () {
        openServiceSearch("");
    });

document
    .getElementById("openAllServicesModal")
    .addEventListener("click", function () {
        openServiceSearch("");
    });

document
    .getElementById("heroExploreServices")
    .addEventListener("click", function () {
        openServiceSearch("");
    });


/* Search while typing */

modalServiceSearch.addEventListener(
    "input",
    function () {
        displayServices(
            modalServiceSearch.value
        );
    }
);


/* Quick search chips */

document
    .querySelectorAll("[data-quick-search]")
    .forEach(function (button) {
        button.addEventListener("click", function () {
            const searchText =
                button.getAttribute(
                    "data-quick-search"
                );

            modalServiceSearch.value =
                searchText;

            displayServices(searchText);

            modalServiceSearch.focus();
        });
    });


/* Navbar service links */

document
    .querySelectorAll("[data-service-query]")
    .forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            openServiceSearch(
                link.getAttribute(
                    "data-service-query"
                )
            );
        });
    });


/* Category buttons */

document
    .querySelectorAll("[data-category-query]")
    .forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            openServiceSearch(
                button.getAttribute(
                    "data-category-query"
                )
            );
        });
    });


/* Ctrl + K shortcut */

document.addEventListener("keydown", function (event) {
    if (
        event.ctrlKey &&
        event.key.toLowerCase() === "k"
    ) {
        event.preventDefault();
        openServiceSearch("");
    }
});


/* ------------------------- LOGIN MODAL ------------------------- */

document
    .getElementById("openLoginModal")
    .addEventListener("click", function () {
        openModal(loginModal);
    });

document
    .getElementById("openMobileLoginModal")
    .addEventListener("click", function () {
        mainNavigation.classList.remove(
            "mobile-menu-open"
        );

        openModal(loginModal);
    });

document
    .getElementById("emailLoginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();

        const termsAccepted =
            document
                .getElementById("termsCheckbox")
                .checked;

        const message =
            document.getElementById("loginMessage");

        if (email === "") {
            message.textContent =
                "Please enter your email address.";
            return;
        }

        if (!termsAccepted) {
            message.textContent =
                "Please accept the Terms of Use and Privacy Policy.";
            return;
        }

        message.textContent =
            "Login backend will be connected after the UI is approved.";
    });


/* ------------------------- RESIZE ------------------------- */

window.addEventListener("resize", function () {
    if (window.innerWidth > 1020) {
        mainNavigation.classList.remove(
            "mobile-menu-open"
        );

        mobileMenuButton.classList.remove(
            "menu-open"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});
