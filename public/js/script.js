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
    document.getElementById("lawFlowCanvas");

if (lawFlowCanvas) {

    const ctx =
        lawFlowCanvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = 1;

    let time = 0;

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const particles = [];


    function resizeLawFlow() {

        const rect =
            lawFlowCanvas.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        dpr = Math.min(
            window.devicePixelRatio || 1,
            1.6
        );

        lawFlowCanvas.width =
            Math.floor(width * dpr);

        lawFlowCanvas.height =
            Math.floor(height * dpr);

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        createParticles();

    }


    function createParticles() {

        particles.length = 0;

        const isMobile =
            width < 650;

        const count =
            isMobile
                ? 90
                : 190;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            particles.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    Math.random() *
                    1.15 +
                    0.25,

                alpha:
                    Math.random() *
                    0.24 +
                    0.035,

                speed:
                    Math.random() *
                    0.08 +
                    0.015,

                phase:
                    Math.random() *
                    Math.PI *
                    2

            });

        }

    }


    function drawParticles() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";


        particles.forEach(
            function (particle) {

                particle.phase +=
                    particle.speed *
                    0.04;


                const pulse =
                    0.45 +
                    Math.sin(
                        particle.phase
                    ) *
                    0.35;


                ctx.globalAlpha =
                    particle.alpha *
                    pulse;


                ctx.fillStyle =
                    "rgba(125, 214, 255, 1)";


                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

            }
        );


        ctx.restore();

    }


    function getFlowY(
        x,
        offset,
        amplitude
    ) {

        const nx =
            x /
            Math.max(
                width,
                1
            );


        const waveOne =
            Math.sin(
                nx * 5.2 +
                time * 0.58 +
                offset
            ) *
            amplitude;


        const waveTwo =
            Math.sin(
                nx * 11.5 -
                time * 0.26 +
                offset * 1.7
            ) *
            amplitude *
            0.22;


        const mouseShift =
            mouseY *
            24 *
            Math.sin(
                nx *
                Math.PI
            );


        return (
            height * 0.57 +
            waveOne +
            waveTwo +
            mouseShift
        );

    }


    function drawSoftBloom() {

        const centerX =
            width *
            (
                0.48 +
                mouseX *
                0.04
            );


        const centerY =
            height *
            (
                0.58 +
                mouseY *
                0.035
            );


        const radius =
            Math.max(
                width,
                height
            ) *
            0.55;


        const gradient =
            ctx.createRadialGradient(
                centerX,
                centerY,
                0,
                centerX,
                centerY,
                radius
            );


        gradient.addColorStop(
            0,
            "rgba(36, 165, 255, .11)"
        );


        gradient.addColorStop(
            0.28,
            "rgba(28, 110, 220, .065)"
        );


        gradient.addColorStop(
            0.7,
            "rgba(5, 45, 100, .018)"
        );


        gradient.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            gradient;


        ctx.fillRect(
            0,
            0,
            width,
            height
        );

    }


    function drawFlowBand() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";


        const layers = 46;


        for (
            let layer = 0;
            layer < layers;
            layer++
        ) {

            const normalized =
                layer /
                layers;


            const offset =
                (
                    normalized -
                    0.5
                ) *
                height *
                0.18;


            ctx.beginPath();


            const segments =
                120;


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
                    width;


                const y =
                    getFlowY(
                        x,
                        normalized * 3,
                        height * 0.115
                    ) +
                    offset;


                if (i === 0) {

                    ctx.moveTo(
                        x,
                        y
                    );

                } else {

                    ctx.lineTo(
                        x,
                        y
                    );

                }

            }


            const centerStrength =
                1 -
                Math.abs(
                    normalized -
                    0.5
                ) *
                2;


            ctx.lineWidth =
                1.1 +
                centerStrength *
                2.1;


            ctx.globalAlpha =
                0.025 +
                centerStrength *
                0.10;


            ctx.strokeStyle =
                normalized < 0.48
                    ? "rgba(30, 116, 255, 1)"
                    : "rgba(76, 210, 255, 1)";


            ctx.shadowBlur =
                10 +
                centerStrength *
                32;


            ctx.shadowColor =
                normalized < 0.5
                    ? "rgba(25, 121, 255, .8)"
                    : "rgba(67, 206, 255, .85)";


            ctx.stroke();

        }


        ctx.restore();

    }


    function drawCoreGlow() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";


        ctx.beginPath();


        const segments = 120;


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
                width;


            const y =
                getFlowY(
                    x,
                    1.35,
                    height * 0.105
                );


            if (i === 0) {

                ctx.moveTo(
                    x,
                    y
                );

            } else {

                ctx.lineTo(
                    x,
                    y
                );

            }

        }


        ctx.strokeStyle =
            "rgba(132, 229, 255, .72)";


        ctx.lineWidth = 1.4;

        ctx.shadowBlur = 38;

        ctx.shadowColor =
            "rgba(52, 186, 255, 1)";


        ctx.globalAlpha = 0.62;

        ctx.stroke();


        ctx.restore();

    }


    function animateLawFlow() {

        time += 0.012;


        mouseX +=
            (
                targetX -
                mouseX
            ) *
            0.035;


        mouseY +=
            (
                targetY -
                mouseY
            ) *
            0.035;


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        drawSoftBloom();

        drawParticles();

        drawFlowBand();

        drawCoreGlow();


        requestAnimationFrame(
            animateLawFlow
        );

    }


    resizeLawFlow();


    window.addEventListener(
        "resize",
        resizeLawFlow
    );


    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        const hero =
            lawFlowCanvas.parentElement;


        hero.addEventListener(
            "pointermove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                targetX =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                targetY =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;

            }
        );


        hero.addEventListener(
            "pointerleave",
            function () {

                targetX = 0;
                targetY = 0;

            }
        );

    }


    animateLawFlow();

}