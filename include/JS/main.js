// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

    const isDropdownOpen = document.querySelector('.dropdown-menu.show');

    if (
        Math.abs(currentScroll - lastScrollTop) > 10 &&
        navbarCollapse.classList.contains('show') &&
        bsCollapse &&
        !isDropdownOpen // ✅ تأكد إن مفيش dropdown مفتوح
    ) {
        bsCollapse.hide(); // اقفل القائمة
    }

    lastScrollTop = currentScroll;
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-brand", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".nav-item", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out"
});