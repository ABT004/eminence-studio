/* ============================================================
   EMINENCE STUDIO — script.js
   Pure vanilla JS — no frameworks, no build step.
   ============================================================ */

/* ---------- 1. Current year in footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- 2. Scrolled header ---------- */
const headerInner = document.getElementById('header-inner');

function updateHeader() {
  headerInner.classList.toggle('scrolled', window.scrollY > 20);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* ---------- 3. Mobile menu ---------- */
const menuToggle = document.getElementById('menu-toggle');
const mobileNav  = document.getElementById('mobile-nav');
const iconMenu   = document.getElementById('icon-menu');
const iconClose  = document.getElementById('icon-close');

function closeMobileMenu() {
  mobileNav.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
  iconMenu.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileNav.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileNav.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
});

// Close menu when any mobile-nav link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ---------- 4. Scroll-reveal cards ---------- */
const revealCards = document.querySelectorAll('.reveal-card');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '-60px', threshold: 0 }
  );

  revealCards.forEach(card => revealObserver.observe(card));
} else {
  // Fallback: show all immediately
  revealCards.forEach(card => card.classList.add('in-view'));
}

/* ---------- 5. Confetti cursor ---------- */
(function initConfettiCursor() {
  // Skip on touch-only devices or reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const COLORS = [
    'var(--brand-purple)',
    'var(--brand-blue)',
    'var(--brand-red)',
    'var(--brand-yellow)',
    'var(--brand-teal)',
    'var(--brand-pink)',
  ];

  const root = document.getElementById('confetti-root');
  let counter = 0;
  let lastTime = 0;

  function spawnBit(x, y) {
    const id = counter++;
    const isDot   = id % 2 === 0;
    const color   = COLORS[id % COLORS.length];
    const dx      = (Math.random() * 40 - 20).toFixed(1) + 'px';
    const dy      = (Math.random() * 30 + 20).toFixed(1) + 'px';
    const dr      = (Math.random() * 180 - 90).toFixed(1) + 'deg';

    const el = document.createElement('span');
    el.className = 'confetti-bit';
    el.style.cssText = `
      width:  ${isDot ? 8 : 14}px;
      height: ${isDot ? 8 :  5}px;
      background-color: ${color};
      left: ${x}px;
      top:  ${y}px;
      --dx: ${dx};
      --dy: ${dy};
      --dr: ${dr};
    `;

    root.appendChild(el);

    // Remove after animation completes
    setTimeout(() => el.remove(), 900);
  }

  window.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastTime < 45) return;
    lastTime = now;
    spawnBit(e.clientX, e.clientY);
  });
})();
