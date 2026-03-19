// =============================================
//  APGC-Lab — Main JS
// =============================================

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Alumni Timeline Render ──
function renderAlumniTimeline() {
  const container = document.getElementById('alumniTimeline');
  if (!container || typeof ALUMNI_BY_YEAR === 'undefined') return;

  container.innerHTML = ALUMNI_BY_YEAR.map(({ year, members }) => `
    <div class="tl-year-block fade-in">
      <div class="tl-year-col">
        <div class="tl-year">${year}</div>
      </div>
      <div class="tl-dot"></div>
      <div class="tl-members">
        ${members.map(m => `
          <div class="tl-member-card fade-in">
            <div class="tl-avatar">${m.initials}</div>
            <div class="tl-name">${m.name}</div>
            <div class="tl-dept">${m.dept}</div>
            <div class="tl-company">${m.company}</div>
            <div class="tl-role">${m.role}</div>
            <div class="tl-program-badge">${m.program}</div>
            <p class="tl-quote">"${m.quote}"</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

renderAlumniTimeline();

// ── Scroll fade-in animation ──
function initFadeIn() {
  const fadeEls = document.querySelectorAll(
    '.about-card, .program-card, .about-text, .contact-text, .contact-form, .stat, .tl-year-block, .tl-member-card'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  fadeEls.forEach(el => fadeObserver.observe(el));
}

initFadeIn();

// ── Staggered card animation ──
document.querySelectorAll('.programs-grid, .about-cards').forEach(grid => {
  grid.querySelectorAll('.program-card, .about-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

document.querySelectorAll('.tl-year-block').forEach(block => {
  block.querySelectorAll('.tl-member-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

// ── Contact form submit ──
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✓ 전송 완료!';
  btn.style.background = 'linear-gradient(135deg, #00ED97, #00E0E0)';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// ── Counter animation for hero stats ──
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const step = target / (1800 / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); }
    else el.textContent = Math.floor(start) + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(num => {
        const match = num.textContent.match(/(\d+)(.+)/);
        if (match) animateCounter(num, parseInt(match[1]), match[2]);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
