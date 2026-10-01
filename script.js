/* ================================
   CAPSULE EDUCATIONAL INSTITUTE
   Website JavaScript
================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MOBILE MENU
    ================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });
    }


    /* ================================
       CLOSE MOBILE MENU AFTER CLICK
    ================================= */

    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.innerHTML = "☰";
            }
        });
    });


    /* ================================
       SMOOTH SCROLL
    ================================= */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* ================================
       CURRENT YEAR IN FOOTER
    ================================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ================================
       SIMPLE SCROLL ANIMATION
    ================================= */

    const animatedElements = document.querySelectorAll(
        ".audience-card, .tool-card, .hero-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


    /* ================================
       BUTTON CLICK FEEDBACK
    ================================= */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {
                this.style.transform = "";
            }, 150);

        });

    });

});
