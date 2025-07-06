document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navButton = document.querySelector('.nav-button');

    // Move the CTA button into the nav menu for mobile layout
    if (window.innerWidth <= 992) {
        navMenu.appendChild(navButton);
    }

    hamburger.addEventListener('click', () => {
        const isOpened = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isOpened);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    });

    // Handle window resize to move button
    let isMobile = window.innerWidth <= 992;
    window.addEventListener('resize', () => {
        const currentlyMobile = window.innerWidth <= 992;
        if (isMobile !== currentlyMobile) {
            if (currentlyMobile) {
                // from desktop to mobile
                navMenu.appendChild(navButton);
            } else {
                // from mobile to desktop
                hamburger.parentElement.insertBefore(navButton, hamburger);
            }
            isMobile = currentlyMobile;
        }
    });
});