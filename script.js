document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");


    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.innerHTML = "✕";

        } else {

            menuBtn.innerHTML = "☰";

        }

    });


    /* ==========================
       CLOSE MOBILE MENU
    ========================== */

    const links =
        document.querySelectorAll(".nav-links a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });


    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;


            if (elementTop <
                windowHeight - 100) {

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();


    /* ==========================
       NAVBAR SHADOW
    ========================== */

    const header =
        document.getElementById("header");


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                header.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.5)";

            } else {

                header.style.boxShadow = "none";

            }

        }
    );


    /* ==========================
       CURRENT YEAR
    ========================== */

    const year =
        document.getElementById("year");

    year.textContent =
        new Date().getFullYear();


    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections =
        document.querySelectorAll("section[id]");


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            links.forEach(function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }

            });

        }
    );

});