// JavaScript for menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// JavaScript for scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-content', {
    interval: 200
});

sr.reveal('.about-content', {
    interval: 200
});

sr.reveal('.services-Box', {
    interval: 200
});

sr.reveal('.portfolio-Box', {
    interval: 200
});

sr.reveal('.contact form', {
    interval: 200
});

// JavaScript for typed.js
const typed = new Typed('.typing', {
    strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// JavaScript for smooth scroll to sections
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });

        navbar.classList.remove('active');
    });
});

// JavaScript for sticky header
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');

    if (scrollPosition > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

