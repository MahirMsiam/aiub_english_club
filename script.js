// ==================== GALLERY INFINITE SCROLL ANIMATION ====================
const galleryCarousel = document.getElementById('galleryCarousel');
if (galleryCarousel) {
    const items = galleryCarousel.querySelectorAll('.gallery-item');
    let scrollSpeed = 2; // pixels per frame
    let autoScrollInterval;
    let isPaused = false;

    // Clone items for infinite effect
    function createInfiniteScroll() {
        const itemsToClone = Array.from(items);
        itemsToClone.forEach(item => {
            const clone = item.cloneNode(true);
            galleryCarousel.appendChild(clone);
        });
    }

    createInfiniteScroll();

    // Auto scroll functionality with smooth animation
    function autoScroll() {
        if (!isPaused) {
            galleryCarousel.scrollLeft += scrollSpeed;

            // Reset to beginning when reaching near the end for infinite effect
            if (galleryCarousel.scrollLeft >= galleryCarousel.scrollWidth / 2 - 10) {
                galleryCarousel.scrollLeft = 0;
            }
        }
    }

    // Start auto scroll
    autoScrollInterval = setInterval(autoScroll, 30);

    // Pause on hover
    galleryCarousel.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    galleryCarousel.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    // Pause on touch
    galleryCarousel.addEventListener('touchstart', () => {
        isPaused = true;
    });

    galleryCarousel.addEventListener('touchend', () => {
        isPaused = false;
    });

    // Resume scroll on focus
    window.addEventListener('focus', () => {
        isPaused = false;
    });

    window.addEventListener('blur', () => {
        isPaused = true;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's a dropdown toggle
            if (link.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                const dropdown = link.parentElement;
                dropdown.classList.toggle('active');
            } else {
                navMenu.classList.remove('active');
            }
        });
    });

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // ==================== HERO CAROUSEL ====================
    const heroCarousel = document.getElementById('heroCarousel');
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroSlides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopCarousel() {
        clearInterval(slideInterval);
    }

    startCarousel();

    heroCarousel.addEventListener('mouseenter', stopCarousel);
    heroCarousel.addEventListener('mouseleave', startCarousel);

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contactForm');
});

// ==================== MOBILE RESPONSIVENESS ====================
window.addEventListener('resize', () => {
    const navMenu = document.getElementById('navMenu');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});
