const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.querySelector(".nav-menu");

const navItems =
    document.querySelectorAll(".nav-item");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener(
        "click",
        function () {

            const isOpen =
                navMenu.classList.toggle("active");

            mobileMenuBtn.classList.toggle(
                "active",
                isOpen
            );

            document.body.style.overflow =
                isOpen ? "hidden" : "";

        }
    );

}


navItems.forEach(function (item) {

    const button =
        item.querySelector(".nav-link");


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            if (window.innerWidth <= 1250) {

                /*
                    Close other menus first
                */

                navItems.forEach(
                    function (otherItem) {

                        if (otherItem !== item) {

                            otherItem
                                .classList
                                .remove("open");

                        }

                    }
                );


                item.classList.toggle("open");

            }

        }
    );

});




const openSearch =
    document.getElementById("openSearch");

const closeSearch =
    document.getElementById("closeSearch");

const searchOverlay =
    document.getElementById("searchOverlay");

const globalServiceSearch =
    document.getElementById("globalServiceSearch");

const globalSearchResults =
    document.getElementById("globalSearchResults");




let globalServices = [];


document
    .querySelectorAll(
        ".business-dropdown .dropdown-column a"
    )
    .forEach(function (link) {

        const serviceName =
            link.textContent.trim();


        /*
            View All link ko search me
            include nahi karna
        */

        if (
            serviceName !== ""
            &&
            !link.classList.contains(
                "view-all-service"
            )
        ) {

            globalServices.push(
                serviceName
            );

        }

    });




globalServices =
    [...new Set(globalServices)];


globalServices.sort(
    function (a, b) {

        return a.localeCompare(b);

    }
);

if (
    openSearch
    &&
    searchOverlay
    &&
    globalServiceSearch
) {

    openSearch.addEventListener(
        "click",
        function () {

            searchOverlay
                .classList
                .add("active");


            document.body.style.overflow =
                "hidden";


            setTimeout(
                function () {

                    globalServiceSearch.focus();

                },
                100
            );

        }
    );

}

function closeSearchModal() {

    if (!searchOverlay) {
        return;
    }


    searchOverlay
        .classList
        .remove("active");


    document.body.style.overflow =
        "";


    if (globalServiceSearch) {

        globalServiceSearch.value =
            "";

    }


    if (globalSearchResults) {

        globalSearchResults.innerHTML =
            "";

        globalSearchResults
            .classList
            .remove("active");

    }

}



if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        closeSearchModal
    );

}

if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                searchOverlay
            ) {

                closeSearchModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSearchModal();

        }

    }
);

function searchServices(value) {

    if (!globalSearchResults) {
        return;
    }


    const query =
        value
            .trim()
            .toLowerCase();


    globalSearchResults.innerHTML =
        "";


    /*
        Empty search
    */

    if (query === "") {

        globalSearchResults
            .classList
            .remove("active");

        return;

    }



    /*
        Find matching services
    */

    const matches =
        globalServices
            .filter(
                function (service) {

                    return service
                        .toLowerCase()
                        .includes(query);

                }
            )
            .slice(0, 25);



    /*
        Nothing found
    */

    if (matches.length === 0) {

        const noResult =
            document.createElement("div");


        noResult.className =
            "global-result";


        noResult.textContent =
            "No matching services found";


        globalSearchResults
            .appendChild(noResult);


        globalSearchResults
            .classList
            .add("active");


        return;

    }



    /*
        Create result buttons
    */

    matches.forEach(
        function (service) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "global-result";


            button.textContent =
                service;


            button.addEventListener(
                "click",
                function () {

                    globalServiceSearch.value =
                        service;


                    /*
                        Later yahan service page
                        open karenge:

                        window.location.href =
                        "/services/service-slug";
                    */

                }
            );


            globalSearchResults
                .appendChild(button);

        }
    );


    globalSearchResults
        .classList
        .add("active");

}


if (globalServiceSearch) {

    globalServiceSearch.addEventListener(
        "input",
        function () {

            searchServices(
                globalServiceSearch.value
            );

        }
    );

}


document
    .querySelectorAll(
        ".search-modal [data-search]"
    )
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const value =
                    button.dataset.search;


                if (!globalServiceSearch) {
                    return;
                }


                globalServiceSearch.value =
                    value;


                searchServices(value);


                globalServiceSearch.focus();

            }
        );

    });

    const openLogin =
    document.getElementById("openLogin");

const closeLogin =
    document.getElementById("closeLogin");

const loginOverlay =
    document.getElementById("loginOverlay");


if (openLogin && loginOverlay) {

    openLogin.addEventListener("click", function () {

        loginOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


function closeLoginModal() {

    if (!loginOverlay) {
        return;
    }

    loginOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


if (closeLogin) {

    closeLogin.addEventListener(
        "click",
        closeLoginModal
    );

}


if (loginOverlay) {

    loginOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === loginOverlay) {

                closeLoginModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLoginModal();

        }

    }
);

const heroRollTrack =
    document.getElementById("heroRollTrack");

if (heroRollTrack) {

    const heroRollItems =
        heroRollTrack.querySelectorAll(".hero-roll-item");

    let heroRollIndex = 0;


    function getHeroRollHeight() {

        const firstItem =
            heroRollTrack.querySelector(".hero-roll-item");

        if (!firstItem) {
            return 0;
        }

        return firstItem.getBoundingClientRect().height;

    }


    function rollHeroHeading() {

        if (heroRollItems.length < 2) {
            return;
        }


        heroRollIndex++;


        const itemHeight =
            getHeroRollHeight();


        heroRollTrack.style.transform =
            `translateY(-${heroRollIndex * itemHeight}px)`;


        if (
            heroRollIndex ===
            heroRollItems.length - 1
        ) {

            setTimeout(function () {

                heroRollTrack.style.transition =
                    "none";


                heroRollIndex = 0;


                heroRollTrack.style.transform =
                    "translateY(0)";


                requestAnimationFrame(function () {

                    requestAnimationFrame(function () {

                        heroRollTrack.style.transition =
                            "transform 0.75s cubic-bezier(0.65, 0, 0.35, 1)";

                    });

                });

            }, 900);

        }

    }


    setInterval(
        rollHeroHeading,
        3000
    );


    window.addEventListener(
        "resize",
        function () {

            heroRollTrack.style.transition =
                "none";

            heroRollIndex = 0;

            heroRollTrack.style.transform =
                "translateY(0)";


            requestAnimationFrame(function () {

                heroRollTrack.style.transition =
                    "transform 0.75s cubic-bezier(0.65, 0, 0.35, 1)";

            });

        }
    );

}

const lawServicesSection =
    document.querySelector(".law-services");

if (lawServicesSection) {

    const lawServicesObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        lawServicesSection
                            .classList
                            .add("is-visible");

                        lawServicesObserver
                            .unobserve(
                                lawServicesSection
                            );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    lawServicesObserver.observe(
        lawServicesSection
    );

}

const lxHeroWord =
    document.getElementById("lxHeroWord");

if (lxHeroWord) {

    const lxHeroWords = [
        "Start.",
        "Protect.",
        "Comply.",
        "Grow."
    ];

    let lxHeroWordIndex = 0;


    setInterval(function () {

        lxHeroWord.classList.add(
            "lx-word-out"
        );


        setTimeout(function () {

            lxHeroWordIndex =
                (
                    lxHeroWordIndex + 1
                ) %
                lxHeroWords.length;


            lxHeroWord.textContent =
                lxHeroWords[
                    lxHeroWordIndex
                ];


            lxHeroWord.classList.remove(
                "lx-word-out"
            );


            lxHeroWord.classList.add(
                "lx-word-in"
            );


            requestAnimationFrame(
                function () {

                    requestAnimationFrame(
                        function () {

                            lxHeroWord
                                .classList
                                .remove(
                                    "lx-word-in"
                                );

                        }
                    );

                }
            );

        }, 250);

    }, 2300);

}


const lxHeroVisual =
    document.getElementById(
        "lxHeroVisual"
    );


if (
    lxHeroVisual &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    lxHeroVisual.addEventListener(
        "pointermove",
        function (event) {

            const rect =
                lxHeroVisual
                    .getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                0.5;


            lxHeroVisual.style.setProperty(
                "--lx-x",
                `${x * 8}px`
            );


            lxHeroVisual.style.setProperty(
                "--lx-y",
                `${y * 8}px`
            );

        }
    );


    lxHeroVisual.addEventListener(
        "pointerleave",
        function () {

            lxHeroVisual.style.setProperty(
                "--lx-x",
                "0px"
            );


            lxHeroVisual.style.setProperty(
                "--lx-y",
                "0px"
            );

        }
    );

}
