// Custom JavaScript for MP‑BodyProject site

document.addEventListener('DOMContentLoaded', () => {
    // Scroll spy requires reactivation when using smooth scrolling
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 70
    });

    // Contact form submission handler
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simple feedback to user
            alert('Thank you for your message! Milan will get back to you soon.');
            form.reset();
        });
    }
});