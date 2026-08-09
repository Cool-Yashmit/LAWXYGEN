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

    let pointerX = 0;
    let pointerY = 0;

    let targetPointerX = 0;
    let targetPointerY = 0;

    let pointerStrength = 0;
    let targetPointerStrength = 0;

    let frameId = null;

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

        if (!pointerX && !pointerY) {
            pointerX = width * 0.5;
            pointerY = height * 0.5;
            targetPointerX = pointerX;
            targetPointerY = pointerY;
        }

        createParticles();

    }


    function createParticles() {

        particles.length = 0;

        const isMobile =
            width < 650;

        const count =
            isMobile
                ? 65
                : 155;

        for (
            let i = 0;
            i < count;
            i++
        ) {

            const depth =
                Math.random();

            particles.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    0.2 +
                    depth *
                    1.05,

                alpha:
                    0.025 +
                    depth *
                    0.14,

                depth:
                    depth,

                phase:
                    Math.random() *
                    Math.PI *
                    2,

                drift:
                    0.003 +
                    Math.random() *
                    0.008

            });

        }

    }


    function pointerInfluence(
        x,
        y
    ) {

        if (
            pointerStrength <= 0.001
        ) {
            return 0;
        }

        const dx =
            x -
            pointerX;

        const dy =
            y -
            pointerY;

        const radius =
            Math.max(
                180,
                Math.min(
                    width,
                    height
                ) *
                0.34
            );

        const distanceSquared =
            dx * dx +
            dy * dy;

        const influence =
            Math.exp(
                -distanceSquared /
                (
                    2 *
                    radius *
                    radius
                )
            );

        return (
            influence *
            pointerStrength
        );

    }


    function getBaseFlowY(
        x,
        layerOffset
    ) {

        const nx =
            x /
            Math.max(
                width,
                1
            );

        const mainWave =
            Math.sin(
                nx * 5.25 +
                time * 0.38 +
                layerOffset
            ) *
            height *
            0.105;

        const detailWave =
            Math.sin(
                nx * 10.5 -
                time * 0.16 +
                layerOffset * 1.4
            ) *
            height *
            0.021;

        return (
            height * 0.59 +
            mainWave +
            detailWave
        );

    }


    function getFlowY(
        x,
        layerOffset
    ) {

        const baseY =
            getBaseFlowY(
                x,
                layerOffset
            );

        const influence =
            pointerInfluence(
                x,
                baseY
            );

        const pull =
            (
                pointerY -
                baseY
            ) *
            influence *
            0.18;

        const ripple =
            Math.sin(
                (
                    x -
                    pointerX
                ) *
                0.012 +
                time *
                1.2
            ) *
            influence *
            7;

        return (
            baseY +
            pull +
            ripple
        );

    }


    function drawAmbientLight() {

        const centerX =
            width *
            0.5;

        const centerY =
            height *
            0.48;

        const radius =
            Math.max(
                width,
                height
            ) *
            0.72;

        const glow =
            ctx.createRadialGradient(
                centerX,
                centerY,
                0,
                centerX,
                centerY,
                radius
            );

        glow.addColorStop(
            0,
            "rgba(24, 125, 220, 0.09)"
        );

        glow.addColorStop(
            0.35,
            "rgba(10, 78, 160, 0.045)"
        );

        glow.addColorStop(
            0.7,
            "rgba(3, 33, 79, 0.018)"
        );

        glow.addColorStop(
            1,
            "rgba(0, 0, 0, 0)"
        );

        ctx.fillStyle =
            glow;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );

    }


    function drawPointerGlow() {

        if (
            pointerStrength <
            0.01
        ) {
            return;
        }

        const radius =
            Math.max(
                190,
                Math.min(
                    width,
                    height
                ) *
                0.28
            );

        const glow =
            ctx.createRadialGradient(
                pointerX,
                pointerY,
                0,
                pointerX,
                pointerY,
                radius
            );

        glow.addColorStop(
            0,
            `rgba(
                83,
                203,
                255,
                ${0.10 * pointerStrength}
            )`
        );

        glow.addColorStop(
            0.22,
            `rgba(
                42,
                155,
                255,
                ${0.065 * pointerStrength}
            )`
        );

        glow.addColorStop(
            0.58,
            `rgba(
                21,
                92,
                205,
                ${0.025 * pointerStrength}
            )`
        );

        glow.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        ctx.fillStyle =
            glow;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );

        ctx.restore();

    }


    function drawParticles() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        particles.forEach(
            function (particle) {

                particle.phase +=
                    particle.drift;

                const pulse =
                    0.55 +
                    Math.sin(
                        particle.phase
                    ) *
                    0.3;

                const influence =
                    pointerInfluence(
                        particle.x,
                        particle.y
                    );

                const dx =
                    particle.x -
                    pointerX;

                const dy =
                    particle.y -
                    pointerY;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    ) || 1;

                const push =
                    influence *
                    particle.depth *
                    7;

                const offsetX =
                    (
                        dx /
                        distance
                    ) *
                    push;

                const offsetY =
                    (
                        dy /
                        distance
                    ) *
                    push;

                ctx.globalAlpha =
                    particle.alpha *
                    pulse;

                if (
                    particle.depth >
                    0.76
                ) {

                    ctx.shadowBlur = 6;

                    ctx.shadowColor =
                        "rgba(87, 206, 255, .55)";

                } else {

                    ctx.shadowBlur = 0;

                }

                ctx.fillStyle =
                    particle.depth >
                    0.58
                        ? "rgba(154, 226, 255, 1)"
                        : "rgba(65, 151, 215, 1)";

                ctx.beginPath();

                ctx.arc(
                    particle.x +
                    offsetX,
                    particle.y +
                    offsetY,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

            }
        );

        ctx.restore();

    }


    function drawPlasmaBody() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        const broadLayers =
            width < 650
                ? 15
                : 22;

        for (
            let layer = 0;
            layer < broadLayers;
            layer++
        ) {

            const normalized =
                layer /
                (
                    broadLayers -
                    1
                );

            const layerPosition =
                (
                    normalized -
                    0.5
                );

            const offset =
                layerPosition *
                height *
                0.17;

            ctx.beginPath();

            const segments =
                100;

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
                        normalized *
                        2.7
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

            const center =
                1 -
                Math.abs(
                    layerPosition
                ) *
                2;

            ctx.strokeStyle =
                normalized <
                0.5
                    ? "rgba(31, 113, 255, 1)"
                    : "rgba(66, 198, 255, 1)";

            ctx.lineWidth =
                18 +
                center *
                28;

            ctx.globalAlpha =
                0.012 +
                center *
                0.026;

            ctx.shadowBlur =
                38 +
                center *
                45;

            ctx.shadowColor =
                normalized <
                0.5
                    ? "rgba(21, 108, 255, .65)"
                    : "rgba(67, 202, 255, .72)";

            ctx.stroke();

        }

        ctx.restore();

    }


    function drawSilkStrands() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        const strands =
            width < 650
                ? 20
                : 34;

        for (
            let layer = 0;
            layer < strands;
            layer++
        ) {

            const normalized =
                layer /
                (
                    strands -
                    1
                );

            const offset =
                (
                    normalized -
                    0.5
                ) *
                height *
                0.145;

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
                        normalized *
                        2.9
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

            const gradient =
                ctx.createLinearGradient(
                    0,
                    0,
                    width,
                    0
                );

            gradient.addColorStop(
                0,
                "rgba(38, 107, 255, .15)"
            );

            gradient.addColorStop(
                0.27,
                "rgba(43, 154, 255, .72)"
            );

            gradient.addColorStop(
                0.52,
                "rgba(135, 227, 255, .9)"
            );

            gradient.addColorStop(
                0.76,
                "rgba(54, 175, 255, .72)"
            );

            gradient.addColorStop(
                1,
                "rgba(24, 101, 218, .08)"
            );

            ctx.strokeStyle =
                gradient;

            ctx.lineWidth =
                0.55 +
                centerStrength *
                0.75;

            ctx.globalAlpha =
                0.07 +
                centerStrength *
                0.13;

            ctx.shadowBlur =
                8 +
                centerStrength *
                14;

            ctx.shadowColor =
                "rgba(66, 190, 255, .65)";

            ctx.stroke();

        }

        ctx.restore();

    }


    function drawCoreGlow() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        ctx.beginPath();

        const segments = 130;

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
                    1.25
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

        const core =
            ctx.createLinearGradient(
                0,
                0,
                width,
                0
            );

        core.addColorStop(
            0,
            "rgba(47, 131, 255, .15)"
        );

        core.addColorStop(
            0.24,
            "rgba(66, 188, 255, .72)"
        );

        core.addColorStop(
            0.5,
            "rgba(181, 240, 255, .95)"
        );

        core.addColorStop(
            0.76,
            "rgba(66, 188, 255, .72)"
        );

        core.addColorStop(
            1,
            "rgba(47, 131, 255, .12)"
        );

        ctx.strokeStyle =
            core;

        ctx.lineWidth = 1.15;

        ctx.globalAlpha = 0.62;

        ctx.shadowBlur = 34;

        ctx.shadowColor =
            "rgba(64, 196, 255, 1)";

        ctx.stroke();

        ctx.restore();

    }


    function drawUpperMist() {

        ctx.save();

        ctx.globalCompositeOperation =
            "screen";

        const x =
            width * 0.56;

        const y =
            height * 0.28;

        const radius =
            Math.max(
                width,
                height
            ) *
            0.42;

        const haze =
            ctx.createRadialGradient(
                x,
                y,
                0,
                x,
                y,
                radius
            );

        haze.addColorStop(
            0,
            "rgba(50, 169, 255, .045)"
        );

        haze.addColorStop(
            0.4,
            "rgba(23, 105, 205, .018)"
        );

        haze.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );

        ctx.fillStyle =
            haze;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );

        ctx.restore();

    }


    function animateLawFlow() {

        time += 0.009;

        pointerX +=
            (
                targetPointerX -
                pointerX
            ) *
            0.055;

        pointerY +=
            (
                targetPointerY -
                pointerY
            ) *
            0.055;

        pointerStrength +=
            (
                targetPointerStrength -
                pointerStrength
            ) *
            0.055;

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        drawAmbientLight();

        drawUpperMist();

        drawParticles();

        drawPointerGlow();

        drawPlasmaBody();

        drawSilkStrands();

        drawCoreGlow();

        frameId =
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
            lawFlowCanvas
                .parentElement;

        hero.addEventListener(
            "pointermove",
            function (event) {

                const rect =
                    hero
                        .getBoundingClientRect();

                targetPointerX =
                    event.clientX -
                    rect.left;

                targetPointerY =
                    event.clientY -
                    rect.top;

                targetPointerStrength =
                    1;

            }
        );


        hero.addEventListener(
            "pointerenter",
            function () {

                targetPointerStrength =
                    1;

            }
        );


        hero.addEventListener(
            "pointerleave",
            function () {

                targetPointerStrength =
                    0;

            }
        );

    }


    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.hidden
            ) {

                if (frameId) {
                    cancelAnimationFrame(
                        frameId
                    );
                }

            } else {

                animateLawFlow();

            }

        }
    );


    animateLawFlow();

}