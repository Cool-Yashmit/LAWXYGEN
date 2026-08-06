/* =========================================================
   LAWXYGEN SERVICE DATA
   Hero ke liye selected important services
   Complete Excel list later separate services-data.js mein
   ========================================================= */

const serviceCategories = {

    business: {
        categoryLabel: "BUSINESS SETUP",
        status: "Popular",

        services: [
            {
                title:
                    "Private Limited Company Registration",

                description:
                    "Complete incorporation support including name approval, documentation and company registration guidance.",

                includes: [
                    "Name approval support",
                    "Incorporation documents",
                    "Filing assistance"
                ],

                shortTitle:
                    "Private Limited Company",

                shortLabel:
                    "Incorporation"
            },

            {
                title:
                    "Limited Liability Partnership Registration",

                description:
                    "Set up an LLP with structured documentation, partner details and registration assistance.",

                includes: [
                    "Partner documentation",
                    "LLP agreement support",
                    "Registration filing"
                ],

                shortTitle:
                    "LLP Registration",

                shortLabel:
                    "Business structure"
            },

            {
                title:
                    "One Person Company Registration",

                description:
                    "Incorporation support designed for a single founder who wants a registered company structure.",

                includes: [
                    "Founder documentation",
                    "Nominee guidance",
                    "Company filing"
                ],

                shortTitle:
                    "OPC Registration",

                shortLabel:
                    "Single founder"
            }
        ]
    },


    tax: {
        categoryLabel: "TAX & COMPLIANCE",
        status: "Essential",

        services: [
            {
                title:
                    "New GST Registration",

                description:
                    "GST registration assistance for eligible businesses, professionals and online sellers.",

                includes: [
                    "Eligibility review",
                    "Document checklist",
                    "Application filing"
                ],

                shortTitle:
                    "GST Registration",

                shortLabel:
                    "Tax registration"
            },

            {
                title:
                    "GST Return Filing",

                description:
                    "Regular GST return support to help businesses remain filing and deadline ready.",

                includes: [
                    "Return preparation",
                    "Filing support",
                    "Compliance review"
                ],

                shortTitle:
                    "GST Return Filing",

                shortLabel:
                    "Ongoing compliance"
            },

            {
                title:
                    "Income Tax Return Filing",

                description:
                    "Income tax return preparation and filing support for individuals and businesses.",

                includes: [
                    "Tax information review",
                    "Return preparation",
                    "Online filing"
                ],

                shortTitle:
                    "Income Tax Return",

                shortLabel:
                    "Tax filing"
            }
        ]
    },


    ip: {
        categoryLabel: "TRADEMARK & IP",
        status: "Protection",

        services: [
            {
                title:
                    "Trademark Registration",

                description:
                    "Protect your business name, logo or brand through structured trademark registration support.",

                includes: [
                    "Trademark search",
                    "Class selection",
                    "Application filing"
                ],

                shortTitle:
                    "Trademark Registration",

                shortLabel:
                    "Brand protection"
            },

            {
                title:
                    "Trademark Search",

                description:
                    "Review similar existing trademarks before submitting a new brand application.",

                includes: [
                    "Database search",
                    "Similarity review",
                    "Initial guidance"
                ],

                shortTitle:
                    "Trademark Search",

                shortLabel:
                    "Availability check"
            },

            {
                title:
                    "Copyright Registration",

                description:
                    "Registration support for eligible creative, literary, artistic and digital works.",

                includes: [
                    "Work classification",
                    "Document support",
                    "Application filing"
                ],

                shortTitle:
                    "Copyright Registration",

                shortLabel:
                    "Creative protection"
            }
        ]
    },


    documents: {
        categoryLabel: "LEGAL DOCUMENTS",
        status: "Drafting",

        services: [
            {
                title:
                    "Non-Disclosure Agreement",

                description:
                    "A professionally structured confidentiality agreement for business discussions and information sharing.",

                includes: [
                    "Confidentiality terms",
                    "Party information",
                    "Purpose-based drafting"
                ],

                shortTitle:
                    "Non-Disclosure Agreement",

                shortLabel:
                    "Confidentiality"
            },

            {
                title:
                    "Founder Agreement",

                description:
                    "Document founder roles, responsibilities, ownership and working arrangements clearly.",

                includes: [
                    "Founder responsibilities",
                    "Ownership terms",
                    "Exit provisions"
                ],

                shortTitle:
                    "Founder Agreement",

                shortLabel:
                    "Startup documentation"
            },

            {
                title:
                    "Employment Agreement",

                description:
                    "Define employee responsibilities, compensation, confidentiality and employment terms.",

                includes: [
                    "Employment terms",
                    "Confidentiality clause",
                    "Responsibilities"
                ],

                shortTitle:
                    "Employment Agreement",

                shortLabel:
                    "HR documentation"
            }
        ]
    },


    licences: {
        categoryLabel: "LICENCES & CERTIFICATIONS",
        status: "Registration",

        services: [
            {
                title:
                    "FSSAI Food License",

                description:
                    "Food business registration and licence assistance based on business type and operational scale.",

                includes: [
                    "Licence selection",
                    "Document support",
                    "Application filing"
                ],

                shortTitle:
                    "FSSAI Food License",

                shortLabel:
                    "Food business"
            },

            {
                title:
                    "Import Export Code Registration",

                description:
                    "IEC registration support for businesses planning to import or export goods and services.",

                includes: [
                    "Business review",
                    "Document checklist",
                    "IEC application"
                ],

                shortTitle:
                    "Import Export Code",

                shortLabel:
                    "International trade"
            },

            {
                title:
                    "MSME Registration",

                description:
                    "Registration assistance for eligible micro, small and medium enterprises.",

                includes: [
                    "Eligibility review",
                    "Business details",
                    "Online registration"
                ],

                shortTitle:
                    "MSME Registration",

                shortLabel:
                    "Business recognition"
            }
        ]
    },


    experts: {
        categoryLabel: "EXPERT CONSULTATION",
        status: "Consultation",

        services: [
            {
                title:
                    "Online Lawyer Consultation",

                description:
                    "Discuss your legal question with an appropriate professional through a scheduled consultation.",

                includes: [
                    "Issue review",
                    "Professional consultation",
                    "Next-step guidance"
                ],

                shortTitle:
                    "Lawyer Consultation",

                shortLabel:
                    "Legal guidance"
            },

            {
                title:
                    "Chartered Accountant Consultation",

                description:
                    "Get professional support for taxation, accounting and financial compliance questions.",

                includes: [
                    "Tax consultation",
                    "Accounting guidance",
                    "Compliance support"
                ],

                shortTitle:
                    "CA Consultation",

                shortLabel:
                    "Tax and accounts"
            },

            {
                title:
                    "Company Secretary Consultation",

                description:
                    "Professional guidance for corporate filings, governance and company compliance matters.",

                includes: [
                    "Corporate compliance",
                    "ROC guidance",
                    "Governance support"
                ],

                shortTitle:
                    "CS Consultation",

                shortLabel:
                    "Corporate compliance"
            }
        ]
    }
};


/* =========================================================
   SERVICE EXPLORER
   ========================================================= */

const serviceCategoryButtons =
    document.querySelectorAll(".service-category");

const servicePreviewButtons =
    document.querySelectorAll(".service-preview-item");

const quickCategoryButtons =
    document.querySelectorAll("[data-quick-category]");

const serviceNumber =
    document.getElementById("serviceNumber");

const serviceType =
    document.getElementById("serviceType");

const serviceTitle =
    document.getElementById("serviceTitle");

const serviceStatus =
    document.getElementById("serviceStatus");

const serviceDescription =
    document.getElementById("serviceDescription");

const serviceIncludes =
    document.getElementById("serviceIncludes");

const previewTitleOne =
    document.getElementById("previewTitleOne");

const previewTitleTwo =
    document.getElementById("previewTitleTwo");

const previewTitleThree =
    document.getElementById("previewTitleThree");


let activeCategory = "business";
let activeServiceIndex = 0;


/* Show active service */

function showService(categoryName, serviceIndex) {

    const category =
        serviceCategories[categoryName];

    if (!category) {
        return;
    }

    const selectedService =
        category.services[serviceIndex];

    if (!selectedService) {
        return;
    }

    activeCategory =
        categoryName;

    activeServiceIndex =
        serviceIndex;


    /* Main content */

    serviceNumber.textContent =
        String(serviceIndex + 1).padStart(2, "0");

    serviceType.textContent =
        category.categoryLabel;

    serviceTitle.textContent =
        selectedService.title;

    serviceStatus.textContent =
        category.status;

    serviceDescription.textContent =
        selectedService.description;


    /* Included items */

    serviceIncludes.innerHTML = "";

    selectedService.includes.forEach(
        function (includedItem) {

            const itemElement =
                document.createElement("span");

            itemElement.textContent =
                includedItem;

            serviceIncludes.appendChild(
                itemElement
            );
        }
    );


    /* Preview titles */

    previewTitleOne.textContent =
        category.services[0].shortTitle;

    previewTitleTwo.textContent =
        category.services[1].shortTitle;

    previewTitleThree.textContent =
        category.services[2].shortTitle;


    /* Category button states */

    serviceCategoryButtons.forEach(
        function (button) {

            const isSelected =
                button.dataset.category ===
                categoryName;

            button.classList.toggle(
                "active",
                isSelected
            );

            button.setAttribute(
                "aria-selected",
                isSelected
            );
        }
    );


    /* Preview button states and small labels */

    servicePreviewButtons.forEach(
        function (button, index) {

            button.classList.toggle(
                "active",
                index === serviceIndex
            );

            const smallLabel =
                button.querySelector("small");

            if (smallLabel) {
                smallLabel.textContent =
                    category.services[index].shortLabel;
            }
        }
    );

}


/* Category selection */

serviceCategoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                showService(
                    button.dataset.category,
                    0
                );

            }
        );

    }
);


/* Preview selection */

servicePreviewButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                showService(
                    activeCategory,
                    Number(button.dataset.serviceIndex)
                );

            }
        );

    }
);


/* Quick buttons */

quickCategoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                showService(
                    button.dataset.quickCategory,
                    0
                );

                document
                    .getElementById("services")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }
        );

    }
);


/* Start default service */

showService("business", 0);


/* =========================================================
   COMPLETE SEARCH DATA
   Later Excel list will replace/extend this array
   ========================================================= */

const searchableServices = [];

Object.values(serviceCategories).forEach(
    function (category) {

        category.services.forEach(
            function (service) {

                searchableServices.push({
                    category:
                        category.categoryLabel,

                    title:
                        service.title
                });

            }
        );

    }
);


/* =========================================================
   SEARCH MODAL
   ========================================================= */

const serviceSearchModal =
    document.getElementById("serviceSearchModal");

const serviceSearchInput =
    document.getElementById("serviceSearchInput");

const searchResults =
    document.getElementById("searchResults");

const closeSearchModalButton =
    document.getElementById("closeSearchModal");

const openSearchButtons = [
    document.getElementById("openHeroSearch"),
    document.getElementById("browseAllButton"),
    document.getElementById("exploreServicesButton")
];


/* Render search results */

function renderSearchResults(searchValue) {

    const cleanSearchValue =
        searchValue.trim().toLowerCase();

    const matchingServices =
        searchableServices.filter(
            function (service) {

                return (
                    service.title
                        .toLowerCase()
                        .includes(cleanSearchValue) ||

                    service.category
                        .toLowerCase()
                        .includes(cleanSearchValue)
                );

            }
        );

    searchResults.innerHTML = "";

    matchingServices.forEach(
        function (service) {

            const resultButton =
                document.createElement("button");

            resultButton.type =
                "button";

            resultButton.className =
                "search-result-button";

            resultButton.innerHTML = `
                <div>
                    ${service.title}
                </div>

                <span>→</span>
            `;

            searchResults.appendChild(
                resultButton
            );

        }
    );

}


/* Open modal */

function openSearchModal() {

    serviceSearchModal.classList.add(
        "open"
    );

    serviceSearchModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

    serviceSearchInput.value =
        "";

    renderSearchResults("");

    setTimeout(
        function () {
            serviceSearchInput.focus();
        },
        100
    );

}


/* Close modal */

function closeSearchModal() {

    serviceSearchModal.classList.remove(
        "open"
    );

    serviceSearchModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


openSearchButtons.forEach(
    function (button) {

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            openSearchModal
        );

    }
);


closeSearchModalButton.addEventListener(
    "click",
    closeSearchModal
);


serviceSearchInput.addEventListener(
    "input",
    function () {

        renderSearchResults(
            serviceSearchInput.value
        );

    }
);


serviceSearchModal.addEventListener(
    "click",
    function (event) {

        if (event.target === serviceSearchModal) {
            closeSearchModal();
        }

    }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


mobileMenuButton.addEventListener(
    "click",
    function () {

        const menuIsOpen =
            mobileNavigation.classList.toggle(
                "open"
            );

        mobileMenuButton.classList.toggle(
            "open",
            menuIsOpen
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }

        closeSearchModal();

        mobileNavigation.classList.remove(
            "open"
        );

        mobileMenuButton.classList.remove(
            "open"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);


/* =========================================================
   LIVE CANVAS VFX BACKGROUND
   ========================================================= */

const canvas =
    document.getElementById("heroCanvas");

const context =
    canvas.getContext("2d");


if (canvas && context) {

    let canvasWidth = 0;
    let canvasHeight = 0;
    let pixelRatio = 1;
    let animationFrame = null;

    const pointer = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    };


    /* Light particles */

    const particles = [];

    const particleCount =
        window.innerWidth < 700 ? 16 : 31;


    function createParticles() {

        particles.length = 0;

        for (
            let index = 0;
            index < particleCount;
            index += 1
        ) {

            particles.push({
                x: Math.random(),
                y: Math.random(),

                radius:
                    Math.random() * 1.4 + 0.35,

                speedX:
                    (Math.random() - 0.5) * 0.000035,

                speedY:
                    (Math.random() - 0.5) * 0.000025,

                opacity:
                    Math.random() * 0.25 + 0.07,

                warm:
                    Math.random() > 0.82
            });

        }

    }


    function resizeCanvas() {

        const rectangle =
            canvas.getBoundingClientRect();

        canvasWidth =
            rectangle.width;

        canvasHeight =
            rectangle.height;

        pixelRatio =
            Math.min(
                window.devicePixelRatio || 1,
                1.5
            );

        canvas.width =
            Math.round(
                canvasWidth * pixelRatio
            );

        canvas.height =
            Math.round(
                canvasHeight * pixelRatio
            );

        context.setTransform(
            pixelRatio,
            0,
            0,
            pixelRatio,
            0,
            0
        );

    }


    /* Draw moving light beam */

    function drawLightBeam(
        time,
        verticalPosition,
        amplitude,
        speed,
        colour,
        opacity
    ) {

        context.beginPath();

        for (
            let x = -80;
            x <= canvasWidth + 80;
            x += 16
        ) {

            const wave =
                Math.sin(
                    x * 0.006 +
                    time * speed
                );

            const secondWave =
                Math.sin(
                    x * 0.013 -
                    time * speed * 0.45
                ) * 0.3;

            const y =
                canvasHeight * verticalPosition +
                (wave + secondWave) *
                amplitude +
                pointer.y * 11;

            const movedX =
                x + pointer.x * 14;

            if (x === -80) {
                context.moveTo(movedX, y);
            } else {
                context.lineTo(movedX, y);
            }

        }

        const gradient =
            context.createLinearGradient(
                0,
                0,
                canvasWidth,
                0
            );

        gradient.addColorStop(
            0,
            `rgba(${colour}, 0)`
        );

        gradient.addColorStop(
            0.25,
            `rgba(${colour}, ${opacity})`
        );

        gradient.addColorStop(
            0.68,
            `rgba(${colour}, ${opacity})`
        );

        gradient.addColorStop(
            1,
            `rgba(${colour}, 0)`
        );

        context.strokeStyle =
            gradient;

        context.lineWidth =
            0.8;

        context.stroke();

    }


    function drawParticles(deltaTime) {

        particles.forEach(
            function (particle) {

                particle.x +=
                    particle.speedX *
                    deltaTime;

                particle.y +=
                    particle.speedY *
                    deltaTime;

                if (particle.x < -0.05) {
                    particle.x = 1.05;
                }

                if (particle.x > 1.05) {
                    particle.x = -0.05;
                }

                if (particle.y < -0.05) {
                    particle.y = 1.05;
                }

                if (particle.y > 1.05) {
                    particle.y = -0.05;
                }

                const x =
                    particle.x * canvasWidth +
                    pointer.x * 18;

                const y =
                    particle.y * canvasHeight +
                    pointer.y * 12;

                const colour =
                    particle.warm
                        ? "239, 157, 85"
                        : "111, 179, 232";

                context.beginPath();

                context.arc(
                    x,
                    y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );

                context.fillStyle =
                    `rgba(${colour}, ${particle.opacity})`;

                context.fill();

            }
        );

    }


    let previousTime =
        performance.now();


    function animate(currentTime) {

        const deltaTime =
            Math.min(
                currentTime - previousTime,
                40
            );

        previousTime =
            currentTime;

        pointer.x +=
            (pointer.targetX - pointer.x) *
            0.025;

        pointer.y +=
            (pointer.targetY - pointer.y) *
            0.025;

        context.clearRect(
            0,
            0,
            canvasWidth,
            canvasHeight
        );


        drawLightBeam(
            currentTime,
            0.24,
            27,
            0.00025,
            "77, 151, 214",
            0.13
        );

        drawLightBeam(
            currentTime,
            0.48,
            43,
            -0.00018,
            "45, 125, 196",
            0.11
        );

        drawLightBeam(
            currentTime,
            0.72,
            32,
            0.00014,
            "239, 157, 85",
            0.07
        );

        drawParticles(deltaTime);


        animationFrame =
            window.requestAnimationFrame(
                animate
            );

    }


    window.addEventListener(
        "pointermove",
        function (event) {

            pointer.targetX =
                event.clientX /
                window.innerWidth -
                0.5;

            pointer.targetY =
                event.clientY /
                window.innerHeight -
                0.5;

        }
    );


    window.addEventListener(
        "pointerleave",
        function () {

            pointer.targetX = 0;
            pointer.targetY = 0;

        }
    );


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    createParticles();
    resizeCanvas();

    animationFrame =
        window.requestAnimationFrame(
            animate
        );

}