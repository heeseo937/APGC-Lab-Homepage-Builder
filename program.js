// =============================================
//  program.js — Program Detail Page Logic
// =============================================

const params = new URLSearchParams(window.location.search);
const programId = params.get('id');
const data = PROGRAMS[programId];

if (!data) {
  document.getElementById('pageContent').innerHTML = `
    <div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:40px">
      <p style="font-size:1.2rem;color:var(--muted)">프로그램을 찾을 수 없습니다.</p>
      <a href="index.html#programs" class="btn-primary">프로그램 목록으로</a>
    </div>`;
} else {
  renderPage(data);
}

function typeTag(type) {
  const t = type.toLowerCase();
  const map = { pdf: 'type-pdf', video: 'type-video', slides: 'type-slides', template: 'type-template', link: 'type-link' };
  return map[t] || 'type-link';
}

function renderPage(d) {
  const showTeams = d.events.some(e => e.teams > 0);
  const showParticipants = d.events.some(e => e.participants > 0);

  const eventsHTML = d.events.map((ev, i) => `
    <div class="event-card fade-in" data-index="${i}">
      <div class="event-card-header" onclick="toggleEvent(this)">
        <div class="event-header-left">
          <div class="event-season">${ev.season}</div>
          <div class="event-date">${ev.date}</div>
        </div>
        <div class="event-stats">
          ${showTeams && ev.teams > 0 ? `
          <div class="event-stat">
            <span class="event-stat-num">${ev.teams}</span>
            <span class="event-stat-label">참가 팀</span>
          </div>` : ''}
          ${showParticipants && ev.participants > 0 ? `
          <div class="event-stat">
            <span class="event-stat-num">${ev.participants}</span>
            <span class="event-stat-label">참가자</span>
          </div>` : ''}
        </div>
        <div class="event-chevron">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="#8899aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="event-card-body">
        <div class="event-card-inner">
          <div class="event-highlight">
            <h4>주요 성과</h4>
            <p>${ev.highlight}</p>
          </div>
          <div class="event-materials">
            <h4>자료 & 아카이브</h4>
            <div class="materials-list">
              ${ev.materials.map(m => `
                <div class="material-item">
                  <span class="material-name">${m.title}</span>
                  <span class="material-type ${typeTag(m.type)}">${m.type}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const curriculumHTML = d.curriculum.map(c => `
    <div class="curriculum-item fade-in">
      <div class="curriculum-week">${c.week}</div>
      <div class="curriculum-dot"></div>
      <div class="curriculum-body">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>
    </div>
  `).join('');

  const detailsHTML = d.details.map((det, i) => `
    ${i > 0 ? '<div class="prog-detail-divider"></div>' : ''}
    <div class="prog-detail-row">
      <div class="prog-detail-icon">${det.icon}</div>
      <div class="prog-detail-content">
        <div class="prog-detail-label">${det.label}</div>
        <div class="prog-detail-value">${det.value}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('pageContent').innerHTML = `
    <!-- HERO -->
    <section class="prog-hero">
      <div class="container">
        <a href="index.html#programs" class="prog-hero-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          모든 프로그램 보기
        </a>
        <div class="prog-hero-meta">
          <span class="prog-hero-num">PROGRAM ${d.num}</span>
          ${d.featured ? '<span class="prog-hero-badge">인기 프로그램</span>' : ''}
        </div>
        <h1 class="prog-hero-title">${d.title}</h1>
        <p class="prog-hero-subtitle">${d.subtitle}</p>
        <div class="prog-hero-tags">
          ${d.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="prog-overview">
      <div class="container">
        <div class="prog-overview-grid">
          <div class="prog-overview-text fade-in">
            <h2>프로그램 소개</h2>
            <p>${d.overview}</p>
          </div>
          <div class="prog-details-card fade-in">
            ${detailsHTML}
          </div>
        </div>
      </div>
    </section>

    <!-- CURRICULUM -->
    <section class="prog-curriculum">
      <div class="container">
        <h2>커리큘럼 <span>&</span> 진행 방식</h2>
        <div class="curriculum-list">
          ${curriculumHTML}
        </div>
      </div>
    </section>

    <!-- PAST EVENTS -->
    <section class="prog-events">
      <div class="container">
        <h2>지난 <span>행사 기록</span></h2>
        <div class="events-list">
          ${eventsHTML}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="prog-cta">
      <div class="container">
        <div class="prog-cta-inner">
          <h2>${d.title}에<br/><span class="gradient-text">참가하고 싶으신가요?</span></h2>
          <p>매 학기 모집 공고를 통해 신청할 수 있습니다. 지금 바로 문의해 주세요.</p>
          <div class="prog-cta-actions">
            <a href="index.html#contact" class="btn-primary">참가 문의하기</a>
            <a href="index.html#programs" class="btn-secondary">다른 프로그램 보기</a>
          </div>
        </div>
      </div>
    </section>
  `;

  document.title = `${d.title} — APGC-Lab`;

  // Scroll fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  fadeEls.forEach(el => obs.observe(el));

  // Stagger
  document.querySelectorAll('.events-list .event-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 60}ms`;
  });
  document.querySelectorAll('.curriculum-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
}

function toggleEvent(header) {
  const card = header.closest('.event-card');
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.event-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
});
