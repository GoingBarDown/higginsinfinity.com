// Navbar: solid background once the page is scrolled
const navbar = document.querySelector('.navbar');
const scrollCue = document.querySelector('.scroll-cue');

function updateNavbarOnScroll() {
  const scrolled = window.scrollY > 40;
  navbar.classList.toggle('is-scrolled', scrolled);
  if (scrollCue) {
    scrollCue.style.opacity = window.scrollY > 60 ? '0' : '1';
  }
}

window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');

if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// Highlight the nav link for the section currently in view
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navAnchors.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// Fade content in as it scrolls into view
const revealTargets = document.querySelectorAll('.reveal');

if (revealTargets.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}
