/* ============================================================
   SciOly Study App — Main Controller
   Tabs: Reference · Calculations · Image ID · Learn
   ============================================================ */
'use strict';

// ── Math rendering ────────────────────────────────────────────────────────────

function renderMath(el) {
  if (!el || !window.renderMathInElement) return;
  renderMathInElement(el, {
    delimiters: [
      { left: '$$', right: '$$', display: true  },
      { left: '$',  right: '$',  display: false },
    ],
    throwOnError: false,
  });
}

// ── Constants ─────────────────────────────────────────────────────────────────

const GUIDES = {
  desgen:    { file: 'content/desgen-studyguide.md',              label: 'Designer Genes'   },
  forensics: { file: 'content/forensics-studyguide.md',           label: 'Forensics'        },
  protmod:   { file: 'content/protein-modeling-study-guide.md',   label: 'Protein Modeling' },
};

// Tag patterns → badge HTML
const TAG_REPLACEMENTS = [
  { re: /\[VERIFIED[^\]]*\]/g,         cls: 'tag-verified',   text: t => t.slice(1,-1) },
  { re: /\[⚠[^\]]*UNVERIFIED[^\]]*\]/g, cls: 'tag-unverified', text: t => t.slice(1,-1) },
  { re: /\[NEW[^\]]*\]/g,              cls: 'tag-new',        text: t => t.slice(1,-1) },
  { re: /\[State\/Nat[^\]]*\]/g,       cls: 'tag-statenat',   text: t => t.slice(1,-1) },
  { re: /\[Nat only[^\]]*\]/g,         cls: 'tag-natonly',    text: t => t.slice(1,-1) },
];

// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  activeTab: 'reference',
  ref: {
    event: 'desgen',
    rawMd: { desgen: null, forensics: null, protmod: null },
    tocItems: [],
  },
  calc: {
    event: 'desgen',
    activeModule: null,
    currentProblem: null,
    stepsRevealed: 0,
    answered: false,
  },
  imageId: {
    event: 'desgen',
    activeCategory: null,
    cardIndex: 0,
    flipped: false,
  },
  learn: {
    event: 'desgen',
    lessons: { desgen: null, forensics: null, protmod: null },
    lessonIndex: 0,
    view: 'curriculum',
    completedIds: new Set(),
    lastId: null,
  },
};

// Cache guide fetch promises to avoid double-fetching
const guideFetches = {};

// ── Boot ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initBottomNav();
  initReferenceTab();
  initCalcTab();
  initImageIdTab();
  initLearnTab();
  switchTab('reference');
});

// ── Bottom Navigation ─────────────────────────────────────────────────────────

function initBottomNav() {
  document.querySelectorAll('#bottom-nav .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function switchTab(tabName) {
  state.activeTab = tabName;

  // Panel visibility
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById(`tab-${tabName}`);
  if (panel) panel.classList.add('active');

  // Nav button active state
  document.querySelectorAll('#bottom-nav .nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Lazy-load guide content when reference tab first shown
  if (tabName === 'reference') {
    loadGuide(state.ref.event);
  }
  // Open learn tab (loads guide lazily)
  if (tabName === 'learn') {
    openLearnTab();
  }
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.add('hidden'), duration);
}

function slugify(str) {
  return str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// ── Tag Badge Processing ──────────────────────────────────────────────────────

function processTags(markdown) {
  let md = markdown;
  for (const { re, cls, text } of TAG_REPLACEMENTS) {
    md = md.replace(re, match => `<span class="tag ${cls}">${escapeHtml(text(match))}</span>`);
  }
  return md;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Reference Tab ─────────────────────────────────────────────────────────────

function initReferenceTab() {
  // Event sub-tabs
  document.querySelectorAll('#tab-reference .etab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-reference .etab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.ref.event = btn.dataset.event;
      loadGuide(state.ref.event);
      clearSearch();
    });
  });

  // Search
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  let searchTimer;

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    const q = searchInput.value.trim();
    searchClear.classList.toggle('hidden', !q);
    if (q.length < 2) {
      clearSearch();
      return;
    }
    searchTimer = setTimeout(() => runSearch(q), 300);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.add('hidden');
    clearSearch();
  });
}

async function loadGuide(event) {
  const guideBody = document.getElementById('guide-body');
  const tocInner  = document.getElementById('toc-inner');

  // Already loaded?
  if (state.ref.rawMd[event]) {
    renderGuide(event);
    return;
  }

  guideBody.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Loading ${GUIDES[event].label} guide…</p>
    </div>`;

  if (!guideFetches[event]) {
    guideFetches[event] = fetch(GUIDES[event].file)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      });
  }

  try {
    const md = await guideFetches[event];
    state.ref.rawMd[event] = md;
    renderGuide(event);
  } catch (err) {
    guideBody.innerHTML = `
      <div class="error-state">
        <p>⚠ Could not load guide.</p>
        <p style="font-size:.85rem;color:var(--muted)">Run <code>npm start</code> to serve the app locally (required for file loading).</p>
        <p style="font-size:.85rem;color:var(--muted)">${escapeHtml(String(err))}</p>
      </div>`;
  }
}

function renderGuide(event) {
  const md       = state.ref.rawMd[event];
  const guideBody = document.getElementById('guide-body');
  const tocInner  = document.getElementById('toc-inner');

  // Tag badge substitution before markdown parsing
  const processedMd = processTags(md);

  // Configure marked
  marked.use({ breaks: false, gfm: true });

  // Generate HTML
  const html = marked.parse(processedMd);

  // Inject into DOM
  guideBody.innerHTML = html;
  renderMath(guideBody);

  // Add heading IDs and build TOC
  buildTOC(guideBody, tocInner);

  // Wire Quick Facts panel
  if (window.QuickFacts) QuickFacts.init(md, state.ref.tocItems);

  // Smooth scroll TOC links
  guideBody.scrollTop = 0;
}

function buildTOC(guideBody, tocInner) {
  const headings = guideBody.querySelectorAll('h1, h2, h3');
  const items = [];
  const idCount = {};

  headings.forEach(h => {
    const text = h.textContent.trim();
    let id = slugify(text);
    if (idCount[id]) { idCount[id]++; id += `-${idCount[id]}`; }
    else idCount[id] = 1;
    h.id = id;
    items.push({ level: parseInt(h.tagName[1]), text, id });
  });

  state.ref.tocItems = items;

  tocInner.innerHTML = '';
  items.forEach(({ level, text, id }) => {
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = text;
    a.className = `toc-link toc-h${level}`;
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight active
        tocInner.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
      }
    });
    tocInner.appendChild(a);
  });

  // Update active TOC item on scroll
  const guideArticle = document.getElementById('guide-body');
  guideArticle.addEventListener('scroll', () => {
    const scrollTop = guideArticle.scrollTop + 80;
    let activeId = items[0]?.id;
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollTop) activeId = id;
    }
    tocInner.querySelectorAll('.toc-link').forEach(l => {
      l.classList.toggle('active', l.href.endsWith(`#${activeId}`));
    });
  }, { passive: true });
}

// ── Search ────────────────────────────────────────────────────────────────────

function runSearch(query) {
  const resultsPanel = document.getElementById('search-results-panel');
  const guideLayout  = document.getElementById('guide-layout');
  resultsPanel.classList.remove('hidden');
  guideLayout.classList.add('hidden');

  const q = query.toLowerCase();
  const results = [];

  for (const [event, md] of Object.entries(state.ref.rawMd)) {
    if (!md) continue;
    const lines = md.split('\n');
    let currentHeading = GUIDES[event].label;

    lines.forEach((line, i) => {
      if (/^#{1,4}\s/.test(line)) {
        currentHeading = `${GUIDES[event].label} › ${line.replace(/^#+\s/, '')}`;
      }
      if (line.toLowerCase().includes(q)) {
        const snippet = highlightSnippet(line, q);
        results.push({ event, heading: currentHeading, snippet, lineIdx: i });
      }
    });
  }

  if (!results.length) {
    resultsPanel.innerHTML = `<p class="search-empty">No results for "<strong>${escapeHtml(query)}</strong>"</p>`;
    return;
  }

  const grouped = {};
  results.forEach(r => {
    if (!grouped[r.heading]) grouped[r.heading] = [];
    grouped[r.heading].push(r.snippet);
  });

  let html = `<p class="search-count">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${escapeHtml(query)}</strong>"</p>`;
  for (const [heading, snippets] of Object.entries(grouped)) {
    html += `<div class="search-group">
      <div class="search-heading">${escapeHtml(heading)}</div>
      ${snippets.slice(0, 5).map(s => `<div class="search-snippet">${s}</div>`).join('')}
      ${snippets.length > 5 ? `<div class="search-more">+${snippets.length - 5} more lines</div>` : ''}
    </div>`;
  }

  resultsPanel.innerHTML = html;
}

function highlightSnippet(line, query) {
  const escaped = escapeHtml(line.trim()).slice(0, 300);
  const re = new RegExp(`(${escapeHtml(query)})`, 'gi');
  return escaped.replace(re, '<mark>$1</mark>');
}

function clearSearch() {
  document.getElementById('search-results-panel').classList.add('hidden');
  document.getElementById('guide-layout').classList.remove('hidden');
}

// ── Calculations Tab ──────────────────────────────────────────────────────────

function initCalcTab() {
  // Event sub-tabs
  document.querySelectorAll('#tab-calculations .etab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-calculations .etab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.calc.event = btn.dataset.calcEvent;
      renderCalcMenu();
    });
  });

  renderCalcMenu();
}

function renderCalcMenu() {
  const menu = document.getElementById('calc-menu');
  const workspace = document.getElementById('calc-workspace');
  workspace.classList.add('hidden');
  state.calc.activeModule = null;

  const modules = (window.CALC_MODULES || []).filter(m => m.event === state.calc.event);

  if (!modules.length) {
    menu.innerHTML = '<p class="calc-empty">No modules for this event.</p>';
    return;
  }

  // Group by section
  const sections = {};
  modules.forEach(m => {
    const sec = m.section || 'General';
    if (!sections[sec]) sections[sec] = [];
    sections[sec].push(m);
  });

  let html = '';
  for (const [section, mods] of Object.entries(sections)) {
    html += `<div class="calc-section-label">${escapeHtml(section)}</div>`;
    mods.forEach(m => {
      html += `<button class="calc-card" data-module="${m.id}">
        <div class="calc-card-title">${escapeHtml(m.title)}</div>
        <div class="calc-card-formula">${escapeHtml(m.formula || '')}</div>
      </button>`;
    });
  }

  menu.innerHTML = html;
  renderMath(menu);

  menu.querySelectorAll('.calc-card').forEach(btn => {
    btn.addEventListener('click', () => openCalcModule(btn.dataset.module));
  });
}

function openCalcModule(moduleId) {
  const mod = (window.CALC_MODULES || []).find(m => m.id === moduleId);
  if (!mod) return;

  state.calc.activeModule = mod;
  document.getElementById('calc-menu').classList.add('hidden');
  const ws = document.getElementById('calc-workspace');
  ws.classList.remove('hidden');

  generateCalcProblem(mod);
}

function generateCalcProblem(mod) {
  const ws = document.getElementById('calc-workspace');
  state.calc.answered = false;
  state.calc.stepsRevealed = 0;

  let problem;
  try {
    problem = mod.generate();
  } catch(e) {
    ws.innerHTML = `<div class="error-state">Error generating problem: ${escapeHtml(String(e))}</div>`;
    return;
  }
  state.calc.currentProblem = problem;

  const refHtml = mod.refProblem
    ? `<div class="ref-problem"><strong>Reference problem:</strong> ${escapeHtml(mod.refProblem)}</div>`
    : '';

  ws.innerHTML = `
    <div class="ws-header">
      <button class="ws-back-btn" id="ws-back">← Back</button>
      <h2 class="ws-title">${escapeHtml(mod.title)}</h2>
    </div>
    ${refHtml}
    <div class="formula-box">
      <span class="formula-label">Formula</span>
      <span class="formula-text">${escapeHtml(mod.formula || '')}</span>
    </div>
    <div class="problem-box">
      <p class="problem-text">${escapeHtml(problem.problem)}</p>
      <p class="question-text"><strong>${escapeHtml(problem.question)}</strong></p>
    </div>
    <div class="answer-row">
      <input type="text" id="calc-answer" class="answer-input" placeholder="Your answer…" autocomplete="off" inputmode="decimal">
      <button id="calc-submit" class="btn-primary">Check</button>
    </div>
    <div id="calc-feedback" class="calc-feedback hidden"></div>
    <div id="calc-steps" class="calc-steps hidden"></div>
    <div class="calc-actions hidden" id="calc-actions">
      <button id="calc-next" class="btn-secondary">New Problem</button>
    </div>`;

  document.getElementById('ws-back').addEventListener('click', () => {
    document.getElementById('calc-menu').classList.remove('hidden');
    ws.classList.add('hidden');
    state.calc.activeModule = null;
  });

  const answerInput = document.getElementById('calc-answer');
  const submitBtn   = document.getElementById('calc-submit');

  submitBtn.addEventListener('click', () => checkCalcAnswer());
  answerInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkCalcAnswer(); });

  document.getElementById('calc-next').addEventListener('click', () => generateCalcProblem(mod));
  renderMath(ws);
}

function checkCalcAnswer() {
  if (state.calc.answered) return;
  const input    = document.getElementById('calc-answer');
  const feedback = document.getElementById('calc-feedback');
  const stepsDiv = document.getElementById('calc-steps');
  const actions  = document.getElementById('calc-actions');
  const problem  = state.calc.currentProblem;

  const userRaw = input.value.trim();
  if (!userRaw) { showToast('Enter an answer first.'); return; }

  state.calc.answered = true;

  const userNum = parseFloat(userRaw.replace(/[,%]/g, ''));
  let correct = false;

  if (typeof problem.answer === 'number') {
    const tol = problem.tolerance ?? 0.01;
    correct = !isNaN(userNum) && Math.abs(userNum - problem.answer) <= Math.abs(problem.answer * tol) + 1e-9;
  } else {
    correct = userRaw.toLowerCase() === String(problem.answer).toLowerCase();
  }

  feedback.classList.remove('hidden', 'correct', 'incorrect');
  if (correct) {
    feedback.classList.add('correct');
    feedback.innerHTML = `✓ Correct! Answer: <strong>${formatAnswer(problem.answer)}</strong>`;
  } else {
    feedback.classList.add('incorrect');
    feedback.innerHTML = `✗ Incorrect. Your answer: <strong>${escapeHtml(userRaw)}</strong>. Correct: <strong>${formatAnswer(problem.answer)}</strong>`;
  }

  // Reveal steps
  if (problem.steps && problem.steps.length) {
    let stepsHtml = '<div class="steps-label">Solution steps:</div>';
    problem.steps.forEach((step, i) => {
      stepsHtml += `<div class="step">
        <span class="step-num">${i + 1}</span>
        <div class="step-body">
          <div class="step-label">${escapeHtml(step.label)}</div>
          ${step.calc ? `<div class="step-calc">${escapeHtml(step.calc)}</div>` : ''}
          <div class="step-result">${escapeHtml(step.result)}</div>
        </div>
      </div>`;
    });
    stepsDiv.innerHTML = stepsHtml;
    stepsDiv.classList.remove('hidden');
    renderMath(stepsDiv);
  }

  actions.classList.remove('hidden');
  document.getElementById('calc-submit').disabled = true;
}

function formatAnswer(ans) {
  if (typeof ans === 'number') {
    return Number.isInteger(ans) ? String(ans) : ans.toFixed(4).replace(/\.?0+$/, '');
  }
  return escapeHtml(String(ans));
}

// ── Image ID Tab ──────────────────────────────────────────────────────────────

function initImageIdTab() {
  document.querySelectorAll('#tab-imageid .etab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tab-imageid .etab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.imageId.event = btn.dataset.idEvent;
      renderImageIdCategories();
    });
  });

  renderImageIdCategories();
}

function renderImageIdCategories() {
  const grid = document.getElementById('imageid-categories');
  const deck = document.getElementById('imageid-deck');
  deck.classList.add('hidden');
  grid.classList.remove('hidden');
  state.imageId.activeCategory = null;

  const eventData = (window.IMAGE_ID_DATA || {})[state.imageId.event] || [];

  if (!eventData.length) {
    grid.innerHTML = '<p class="calc-empty">No image ID data for this event.</p>';
    return;
  }

  grid.innerHTML = eventData.map(cat => `
    <button class="category-card" data-category="${escapeHtml(cat.category)}">
      <div class="category-name">${escapeHtml(cat.category)}</div>
      <div class="category-count">${cat.cards.length} cards</div>
    </button>`).join('');

  grid.querySelectorAll('.category-card').forEach(btn => {
    btn.addEventListener('click', () => openImageIdCategory(btn.dataset.category));
  });
}

function openImageIdCategory(categoryName) {
  const eventData = (window.IMAGE_ID_DATA || {})[state.imageId.event] || [];
  const cat = eventData.find(c => c.category === categoryName);
  if (!cat) return;

  state.imageId.activeCategory = cat;
  state.imageId.cardIndex = 0;
  state.imageId.flipped = false;

  document.getElementById('imageid-categories').classList.add('hidden');
  const deck = document.getElementById('imageid-deck');
  deck.classList.remove('hidden');

  renderImageIdCard();
}

function renderImageIdCard() {
  const cat   = state.imageId.activeCategory;
  const cards = cat.cards;
  const idx   = state.imageId.cardIndex;
  const card  = cards[idx];
  const deck  = document.getElementById('imageid-deck');

  deck.innerHTML = `
    <div class="deck-header">
      <button class="ws-back-btn" id="imageid-back">← Categories</button>
      <span class="deck-progress">${idx + 1} / ${cards.length}</span>
    </div>
    <div class="flashcard-wrap">
      <div class="flashcard ${state.imageId.flipped ? 'flipped' : ''}" id="imageid-card" tabindex="0" role="button" aria-label="Tap to flip card">
        <div class="card-front">
          <div class="card-image-wrap">
            ${card.src
              ? `<img src="${escapeHtml(card.src)}" alt="${escapeHtml(card.label)}" class="card-image">`
              : `<div class="card-image-placeholder"><span>🖼</span><span>Image placeholder</span></div>`}
          </div>
          <div class="card-label">${escapeHtml(card.label)}</div>
          <div class="card-hint">Tap to see description</div>
        </div>
        <div class="card-back">
          <div class="card-label">${escapeHtml(card.label)}</div>
          <div class="card-description">${escapeHtml(card.description)}</div>
          <div class="card-hint">Tap to flip back</div>
        </div>
      </div>
    </div>
    <div class="deck-controls">
      <button class="btn-secondary" id="imageid-prev" ${idx === 0 ? 'disabled' : ''}>← Prev</button>
      <button class="btn-secondary" id="imageid-next" ${idx === cards.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>`;

  document.getElementById('imageid-back').addEventListener('click', () => {
    document.getElementById('imageid-deck').classList.add('hidden');
    document.getElementById('imageid-categories').classList.remove('hidden');
  });

  document.getElementById('imageid-card').addEventListener('click', () => {
    state.imageId.flipped = !state.imageId.flipped;
    document.getElementById('imageid-card').classList.toggle('flipped', state.imageId.flipped);
  });

  document.getElementById('imageid-prev').addEventListener('click', () => {
    state.imageId.cardIndex--;
    state.imageId.flipped = false;
    renderImageIdCard();
  });

  document.getElementById('imageid-next').addEventListener('click', () => {
    state.imageId.cardIndex++;
    state.imageId.flipped = false;
    renderImageIdCard();
  });
}

// Review tab removed — use Anki for flashcard review.
