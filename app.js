/* ===================================================
   APOORV KUMAR SINGH — CORE APPLICATION SCRIPT
   Modular Architecture & Interactive Enhancements
   =================================================== */

import { profile } from './data/profile.js';
import { projects } from './data/projects.js';
import { skillCategories, technicalJourney } from './data/skills.js';
import { education } from './data/education.js';
import { certifications } from './data/certifications.js';
import { experience } from './data/experience.js';
import { galleryItems } from './data/gallery.js';

// ─── ICONS ────────────────────────────────────────────────────────
const icons = {
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
};

// ─── HELPERS ──────────────────────────────────────────────────────
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

export function showToast(message, duration = 3000) {
  let container = $('#toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ─── NAVBAR & MOBILE MENU ─────────────────────────────────────────
function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 30);
  });

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('navbar__mobile--open');
    hamburger.classList.toggle('navbar__hamburger--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Active section tracker
  const sections = $$('section[id]');
  const navLinks = $$('.navbar__link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('navbar__link--active', link.getAttribute('href') === `#${current}`);
    });
  });
}

window.closeMobileMenu = function () {
  $('#mobile-menu').classList.remove('navbar__mobile--open');
  $('#hamburger').classList.remove('navbar__hamburger--open');
  $('#hamburger').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

// ─── THEME & ACCENT PICKER ────────────────────────────────────────
function initThemeAndAccent() {
  const html = document.documentElement;
  const themeToggle = $('#theme-toggle');

  // Load Saved Theme
  const savedTheme = localStorage.getItem('apoorv-theme') || 'dark';
  if (savedTheme === 'light') {
    html.setAttribute('data-theme', 'light');
  }

  themeToggle?.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem('apoorv-theme', 'dark');
      showToast('Switched to Dark Mode');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('apoorv-theme', 'light');
      showToast('Switched to Light Mode');
    }
  });

  // Load Saved Accent
  const savedAccent = localStorage.getItem('apoorv-accent') || 'cyan';
  html.setAttribute('data-accent', savedAccent);

  $$('.palette-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const accent = btn.dataset.accent;
      html.setAttribute('data-accent', accent);
      localStorage.setItem('apoorv-accent', accent);
      showToast(`Palette updated to ${accent.toUpperCase()}`);
    });
  });
}

// ─── HERO STATS ───────────────────────────────────────────────────
function renderHeroStats() {
  const container = $('#hero-stats');
  if (!container || !profile.stats) return;

  container.innerHTML = profile.stats
    .map(
      (s) => `
    <div class="stat-box">
      <span class="stat-box__val">${s.value}</span>
      <span class="stat-box__label">${s.label}</span>
      <span class="stat-box__sub">${s.sub}</span>
    </div>
  `
    )
    .join('');
}

// ─── TERMINAL TYPING ANIMATION ────────────────────────────────────
function initTerminal() {
  const cmdEl = $('#terminal-cmd');
  const cursorEl = $('#terminal-cursor');
  const outputEl = $('#terminal-output');

  if (!cmdEl || !outputEl) return;

  const command = profile.terminal.command || 'whoami --full';
  const lines = profile.terminal.lines || [];

  let idx = 0;
  function typeChar() {
    if (idx < command.length) {
      cmdEl.textContent += command[idx];
      idx++;
      setTimeout(typeChar, 50 + Math.random() * 30);
    } else {
      cursorEl.style.display = 'none';
      setTimeout(revealLines, 300);
    }
  }

  function revealLines() {
    lines.forEach((line, i) => {
      setTimeout(() => {
        const lineEl = document.createElement('div');
        lineEl.className = 'terminal__output-line';
        const label = `<span class="terminal__label">${line.label}</span>`;
        const valClass = line.accent ? 'terminal__value terminal__value--accent' : 'terminal__value';
        const val = `<span class="${valClass}">${line.value}</span>`;
        lineEl.innerHTML = `${label} ${val}`;
        outputEl.appendChild(lineEl);
      }, i * 160);
    });
  }

  setTimeout(typeChar, 800);
}

// ─── TECHNICAL JOURNEY MARQUEE ────────────────────────────────────
function renderTechnicalJourney() {
  const track = $('#journey-track');
  if (!track || !technicalJourney.length) return;

  const html = technicalJourney
    .map(
      (step) => `
    <div class="journey-step">
      <span class="journey-step__number">${step.step}</span>
      <span class="journey-step__label">${step.title}</span>
    </div>
  `
    )
    .join('');

  // Duplicate for seamless infinite marquee
  track.innerHTML = html + html;
}

// ─── SKILLS MATRIX ────────────────────────────────────────────────
function renderSkills() {
  const container = $('#skills-container');
  if (!container || !skillCategories.length) return;

  container.innerHTML = skillCategories
    .map(
      (cat) => `
    <div class="skill-card">
      <div class="skill-card__header">
        <div class="skill-card__icon">${cat.icon}</div>
        <div>
          <h3 class="skill-card__title">${cat.name}</h3>
          <p class="skill-card__desc">${cat.description}</p>
        </div>
      </div>
      <div class="skill-card__body">
        ${cat.skills.map((s) => `<span class="tech-tag">${s}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');
}

// ─── PROJECTS & MODALS ────────────────────────────────────────────
let activeFilter = 'all';

function renderProjects() {
  const container = $('#projects-container');
  if (!container || !projects.length) return;

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  container.innerHTML = filtered
    .map(
      (p) => `
    <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} details">
      <div class="project-card__image">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="project-card__badge">${p.category.toUpperCase()}</span>
      </div>
      <div class="project-card__body">
        <div class="project-card__number">PROJECT ${p.number}</div>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tags">
          ${p.technologies.slice(0, 5).map((t) => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.technologies.length > 5 ? `<span class="tech-tag">+${p.technologies.length - 5}</span>` : ''}
        </div>
        <div class="project-card__links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-card__link" onclick="event.stopPropagation()">${icons.github} Code</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project-card__link" onclick="event.stopPropagation()">${icons.external} Live Demo</a>` : ''}
          <button class="project-card__link" style="margin-left: auto; background: var(--bg-surface-hover); color: var(--accent-primary);">Details →</button>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  // Add click events for modals
  container.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openProjectModal(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(parseInt(card.dataset.id));
      }
    });
  });
}

function initProjectFilters() {
  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      activeFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

function openProjectModal(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  const overlay = $('#project-modal-overlay');
  const content = $('#modal-content');

  content.innerHTML = `
    <div class="modal__number">PROJECT ${project.number} • ${project.category.toUpperCase()}</div>
    <h2 class="modal__title">${project.title}</h2>
    <div class="modal__tags">
      ${project.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
    
    ${project.overview ? `<div class="modal__section"><h3 class="modal__section-title">Overview</h3><p>${project.overview}</p></div>` : ''}
    ${project.problem ? `<div class="modal__section"><h3 class="modal__section-title">Problem Statement</h3><p>${project.problem}</p></div>` : ''}
    ${project.solution ? `<div class="modal__section"><h3 class="modal__section-title">Engineered Solution</h3><p>${project.solution}</p></div>` : ''}
    ${project.architecture ? `<div class="modal__section"><h3 class="modal__section-title">System Architecture</h3><p>${project.architecture}</p></div>` : ''}
    
    ${
      project.highlights && project.highlights.length
        ? `<div class="modal__section"><h3 class="modal__section-title">Key Engineering Highlights</h3><ul>${project.highlights.map((h) => `<li>${h}</li>`).join('')}</ul></div>`
        : ''
    }
    ${
      project.challenges && project.challenges.length
        ? `<div class="modal__section"><h3 class="modal__section-title">Technical Challenges Overcome</h3><ul>${project.challenges.map((c) => `<li>${c}</li>`).join('')}</ul></div>`
        : ''
    }
    ${
      project.learned && project.learned.length
        ? `<div class="modal__section"><h3 class="modal__section-title">Key Learnings & Takeaways</h3><ul>${project.learned.map((l) => `<li>${l}</li>`).join('')}</ul></div>`
        : ''
    }

    <div class="modal__actions">
      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn--primary">${icons.github} Repository</a>` : ''}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn--secondary">${icons.external} Live Demo</a>` : ''}
    </div>
  `;

  overlay.classList.add('modal-overlay--open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#project-modal-overlay')?.classList.remove('modal-overlay--open');
  document.body.style.overflow = '';
}

function initModalEvents() {
  $('#modal-close')?.addEventListener('click', closeModal);
  $('#project-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === $('#project-modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ─── HORIZONTAL SCROLLER UTILITY ──────────────────────────────────
function initScroller(trackId, prevBtnId, nextBtnId) {
  const track = $(`#${trackId}`);
  const prevBtn = $(`#${prevBtnId}`);
  const nextBtn = $(`#${nextBtnId}`);

  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = () => track.clientWidth * 0.75;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  // Mouse Drag Scroll
  let isDown = false;
  let startX, scrollLeft;

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
    }
  });

  const stopDrag = () => {
    isDown = false;
    track.style.cursor = '';
  };

  track.addEventListener('pointerleave', stopDrag);
  track.addEventListener('pointerup', stopDrag);
  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}

// ─── EDUCATION ────────────────────────────────────────────────────
function renderEducation() {
  const track = $('#education-track');
  if (!track || !education.length) return;

  track.innerHTML = education
    .map(
      (edu) => `
    <div class="education-card">
      <h3 class="education-card__degree">${edu.degree}</h3>
      <div class="education-card__field">${edu.field}</div>
      <div class="education-card__institution">${edu.institution} — ${edu.location}</div>
      <div class="education-card__duration">${edu.startDate} – ${edu.endDate}</div>
      ${edu.grade ? `<div class="education-card__grade">${edu.grade}</div>` : ''}
      <p class="education-card__desc">${edu.description}</p>
      <div class="education-card__coursework">
        ${edu.coursework.map((c) => `<span class="tech-tag">${c}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');

  initScroller('education-track', 'edu-prev', 'edu-next');
}

// ─── EXPERIENCE & LEADERSHIP ──────────────────────────────────────
function renderExperience() {
  const track = $('#experience-track');
  if (!track || !experience.length) return;

  track.innerHTML = experience
    .map(
      (exp) => `
    <div class="exp-card">
      <div class="exp-card__type">${exp.type}</div>
      <h3 class="exp-card__role">${exp.role}</h3>
      <div class="exp-card__org">${exp.organization}</div>
      <div class="exp-card__date">${exp.startDate} – ${exp.endDate}</div>
      <p class="exp-card__desc">${exp.description}</p>
      <div class="exp-card__tech">
        ${exp.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');

  initScroller('experience-track', 'exp-prev', 'exp-next');
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────
function renderCertifications() {
  const track = $('#certifications-track');
  if (!track || !certifications.length) return;

  track.innerHTML = certifications
    .map(
      (cert) => `
    <div class="cert-card">
      <h3 class="cert-card__title">${cert.title}</h3>
      <div class="cert-card__issuer">${cert.issuer}</div>
      <div class="cert-card__date">${cert.issueDate} ${cert.badge ? `• <strong style="color:var(--accent-primary)">${cert.badge}</strong>` : ''}</div>
      <p class="cert-card__desc">${cert.description}</p>
      <div class="cert-card__skills">
        ${cert.skills.map((s) => `<span class="tech-tag">${s}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');

  initScroller('certifications-track', 'cert-prev', 'cert-next');
}

// ─── GALLERY ──────────────────────────────────────────────────────
function renderGallery() {
  const container = $('#gallery-container');
  if (!container || !galleryItems.length) return;

  container.innerHTML = galleryItems
    .map(
      (item) => `
    <div class="gallery-card">
      <img src="${item.image}" alt="${item.title}" class="gallery-card__img" loading="lazy" />
      <div class="gallery-card__overlay">
        <span class="gallery-card__tag">${item.tag}</span>
        <h4 class="gallery-card__title">${item.title}</h4>
        <p class="gallery-card__desc">${item.description}</p>
      </div>
    </div>
  `
    )
    .join('');
}

// ─── PHILOSOPHY ───────────────────────────────────────────────────
function renderPhilosophy() {
  const container = $('#philosophy-container');
  if (!container || !profile.philosophy) return;

  container.innerHTML = profile.philosophy
    .map(
      (p) => `
    <div class="philosophy__item">
      <div class="philosophy__number">${p.number}</div>
      <h3 class="philosophy__title">${p.title}</h3>
      <p class="philosophy__quote">"${p.quote}"</p>
    </div>
  `
    )
    .join('');
}

// ─── CONTACT FORM & ACTIONS ───────────────────────────────────────
function initContact() {
  const form = $('#contact-form');
  const status = $('#form-status');

  // Copy Email Helper
  $('#btn-copy-email')?.addEventListener('click', () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      showToast('Email copied to clipboard!');
    });
  });

  // Copy Phone Helper
  $('#btn-copy-phone')?.addEventListener('click', () => {
    navigator.clipboard.writeText(profile.phone).then(() => {
      showToast('Phone number copied to clipboard!');
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = $('#contact-name').value.trim();
    const email = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();

    let valid = true;

    if (!name) {
      $('#error-name')?.classList.add('form-error--visible');
      valid = false;
    } else {
      $('#error-name')?.classList.remove('form-error--visible');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $('#error-email')?.classList.add('form-error--visible');
      valid = false;
    } else {
      $('#error-email')?.classList.remove('form-error--visible');
    }

    if (!message) {
      $('#error-message')?.classList.add('form-error--visible');
      valid = false;
    } else {
      $('#error-message')?.classList.remove('form-error--visible');
    }

    if (!valid) return;

    status.className = 'form-status form-status--loading';
    status.textContent = 'Sending message to Apoorv...';

    // Submit via FormSubmit
    form.submit();
  });
}

// ─── SCROLL REVEAL OBSERVER ───────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  $$('.reveal').forEach((el) => observer.observe(el));
}

// ─── INIT APPLICATION ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndAccent();
  initNavbar();
  renderHeroStats();
  initTerminal();
  renderTechnicalJourney();
  renderSkills();
  renderProjects();
  initProjectFilters();
  initModalEvents();
  renderEducation();
  renderExperience();
  renderCertifications();
  renderGallery();
  renderPhilosophy();
  initContact();
  initScrollReveal();

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
