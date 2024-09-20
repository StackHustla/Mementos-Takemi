document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener("click", function () {
            // Toggle the "show" class to show/hide the mobile menu
            mobileMenu.classList.toggle("show");
        });
    }

    // Contact form submission event
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('This is a demo. No messages will be sent. But I hope you like it!');
        });
    }
});
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolled down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});
