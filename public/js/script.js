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

const lawFlowCanvas =
    document.getElementById(
        "lawFlowCanvas"
    );


if (lawFlowCanvas) {

    const lawFlowContext =
        lawFlowCanvas.getContext(
            "2d"
        );


    let lawFlowWidth = 0;
    let lawFlowHeight = 0;
    let lawFlowDpr = 1;

    let lawFlowTime = 0;

    let lawPointerX = 0;
    let lawPointerY = 0;

    let lawTargetX = 0;
    let lawTargetY = 0;


    function lawResizeCanvas() {

        const rect =
            lawFlowCanvas
                .getBoundingClientRect();


        lawFlowDpr =
            Math.min(
                window.devicePixelRatio || 1,
                1.7
            );


        lawFlowWidth =
            rect.width;


        lawFlowHeight =
            rect.height;


        lawFlowCanvas.width =
            Math.floor(
                lawFlowWidth *
                lawFlowDpr
            );


        lawFlowCanvas.height =
            Math.floor(
                lawFlowHeight *
                lawFlowDpr
            );


        lawFlowContext
            .setTransform(
                lawFlowDpr,
                0,
                0,
                lawFlowDpr,
                0,
                0
            );

    }


    function lawDrawRibbon(
        centerY,
        amplitude,
        frequency,
        phase,
        width,
        opacity,
        colorOne,
        colorTwo
    ) {

        const gradient =
            lawFlowContext
                .createLinearGradient(
                    0,
                    0,
                    lawFlowWidth,
                    lawFlowHeight
                );


        gradient.addColorStop(
            0,
            colorOne
        );


        gradient.addColorStop(
            0.48,
            colorTwo
        );


        gradient.addColorStop(
            1,
            colorOne
        );


        lawFlowContext.beginPath();


        const segments = 90;


        for (
            let i = 0;
            i <= segments;
            i++
        ) {

            const x =
                (
                    i /
                    segments
                ) *
                lawFlowWidth;


            const normalized =
                x /
                Math.max(
                    lawFlowWidth,
                    1
                );


            const bend =
                Math.sin(
                    normalized *
                    frequency +
                    phase +
                    lawPointerX *
                    0.8
                ) *
                amplitude;


            const secondBend =
                Math.sin(
                    normalized *
                    frequency *
                    0.48 -
                    phase *
                    0.65
                ) *
                amplitude *
                0.35;


            const pointerLift =
                lawPointerY *
                24 *
                Math.sin(
                    normalized *
                    Math.PI
                );


            const y =
                centerY +
                bend +
                secondBend +
                pointerLift;


            if (i === 0) {

                lawFlowContext
                    .moveTo(
                        x,
                        y
                    );

            } else {

                lawFlowContext
                    .lineTo(
                        x,
                        y
                    );

            }

        }


        lawFlowContext.strokeStyle =
            gradient;


        lawFlowContext.lineWidth =
            width;


        lawFlowContext.lineCap =
            "round";


        lawFlowContext.globalAlpha =
            opacity;


        lawFlowContext.shadowBlur =
            width * 1.35;


        lawFlowContext.shadowColor =
            colorTwo;


        lawFlowContext.stroke();

    }


    function lawDrawGlow() {

        const x =
            lawFlowWidth *
            (
                0.5 +
                lawPointerX *
                0.08
            );


        const y =
            lawFlowHeight *
            (
                0.48 +
                lawPointerY *
                0.06
            );


        const radius =
            Math.max(
                lawFlowWidth,
                lawFlowHeight
            ) *
            0.52;


        const glow =
            lawFlowContext
                .createRadialGradient(
                    x,
                    y,
                    0,
                    x,
                    y,
                    radius
                );


        glow.addColorStop(
            0,
            "rgba(30, 151, 255, 0.12)"
        );


        glow.addColorStop(
            0.45,
            "rgba(16, 91, 174, 0.05)"
        );


        glow.addColorStop(
            1,
            "rgba(0, 0, 0, 0)"
        );


        lawFlowContext.globalAlpha = 1;


        lawFlowContext.fillStyle =
            glow;


        lawFlowContext.fillRect(
            0,
            0,
            lawFlowWidth,
            lawFlowHeight
        );

    }


    function lawAnimateFlow() {

        lawFlowTime += 0.0045;


        lawPointerX +=
            (
                lawTargetX -
                lawPointerX
            ) *
            0.035;


        lawPointerY +=
            (
                lawTargetY -
                lawPointerY
            ) *
            0.035;


        lawFlowContext.clearRect(
            0,
            0,
            lawFlowWidth,
            lawFlowHeight
        );


        lawFlowContext
            .save();


        lawFlowContext.globalCompositeOperation =
            "screen";


        lawDrawGlow();


        lawDrawRibbon(
            lawFlowHeight * 0.28,
            lawFlowHeight * 0.13,
            7.2,
            lawFlowTime * 1.3,
            Math.max(
                70,
                lawFlowHeight * 0.115
            ),
            0.20,
            "rgba(0, 84, 180, 0.15)",
            "rgba(45, 178, 255, 0.62)"
        );


        lawDrawRibbon(
            lawFlowHeight * 0.48,
            lawFlowHeight * 0.17,
            6.1,
            lawFlowTime * 0.95 + 1.7,
            Math.max(
                100,
                lawFlowHeight * 0.16
            ),
            0.16,
            "rgba(0, 56, 135, 0.12)",
            "rgba(25, 132, 255, 0.52)"
        );


        lawDrawRibbon(
            lawFlowHeight * 0.68,
            lawFlowHeight * 0.12,
            8.4,
            lawFlowTime * 1.15 + 3.1,
            Math.max(
                55,
                lawFlowHeight * 0.09
            ),
            0.15,
            "rgba(0, 121, 195, 0.10)",
            "rgba(77, 207, 255, 0.44)"
        );


        lawDrawRibbon(
            lawFlowHeight * 0.54,
            lawFlowHeight * 0.08,
            10.2,
            -lawFlowTime * 0.8 + 4.2,
            Math.max(
                24,
                lawFlowHeight * 0.037
            ),
            0.22,
            "rgba(36, 115, 238, 0.08)",
            "rgba(118, 221, 255, 0.5)"
        );


        lawFlowContext
            .restore();


        requestAnimationFrame(
            lawAnimateFlow
        );

    }


    lawResizeCanvas();


    window.addEventListener(
        "resize",
        lawResizeCanvas
    );


    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        lawFlowCanvas
            .parentElement
            .addEventListener(
                "pointermove",
                function (event) {

                    const rect =
                        lawFlowCanvas
                            .getBoundingClientRect();


                    lawTargetX =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        0.5;


                    lawTargetY =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        0.5;

                }
            );


        lawFlowCanvas
            .parentElement
            .addEventListener(
                "pointerleave",
                function () {

                    lawTargetX = 0;
                    lawTargetY = 0;

                }
            );

    }


    lawAnimateFlow();

}
