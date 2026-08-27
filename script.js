/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ================= SCROLL TOP ================= */

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();