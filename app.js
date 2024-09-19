document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('This is a demo. No messages will be sent. But I hope you like it!');
    });
});