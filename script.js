/**
 * Leo Clark Ribeiro - Cinematic Portfolio
 * Smooth scroll (Lenis) + scroll-triggered reveal animations
 */

let lenisInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initRevealAnimations();
  initScrollIndicator();
});

/**
 * Lenis smooth scroll - buttery smooth scrolling
 */
function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

/**
 * Intersection Observer - reveal elements on scroll
 */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px', // Trigger slightly before fully in view
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/**
 * Fade out scroll indicator when user scrolls
 */
function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;

  const threshold = 100;

  const handleScroll = (e) => {
    const scroll = e?.scroll || window.scrollY || document.documentElement.scrollTop;
    indicator.classList.toggle('hidden', scroll > threshold);
  };

  if (lenisInstance) {
    lenisInstance.on('scroll', handleScroll);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial check (e.g. if page loads mid-scroll)
  handleScroll({ scroll: window.scrollY });
}
