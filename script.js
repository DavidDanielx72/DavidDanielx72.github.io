// ================================
// PORTFOLIO JAVASCRIPT
// David Daniel Sepkitt
// ================================

// Navbar background on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(3,7,18,.95)";
        header.style.transition = "0.3s";
    } else {
        header.style.background = "rgba(3,7,18,.75)";
    }

});

// ================================
// Reveal animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));

// ================================
// Current Year in Footer
// ================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
