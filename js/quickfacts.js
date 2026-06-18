/* ============================================================
   Quick Facts Panel — extracts key terms, rules, and formulas
   from the currently-visible guide section and displays them
   in the right sidebar. Activated via QuickFacts.init().
   ============================================================ */
'use strict';

const QuickFacts = (() => {

  let _sectionFacts = {};  // slug → { title, facts[] }
  let _tocItems     = [];
  let _scrollEl     = null;
  let _scrollFn     = null;

  // ── Extraction ──────────────────────────────────────────────

  function localSlug(str) {
    return str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 60);
  }

  function stripMd(str) {
    return str
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g,     '$1')
      .replace(/`([^`]+)`/g,       '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\[[^\]]*\]/g,      '')
      .trim();
  }

  function extractFacts(markdown) {
    const result = {};
    const lines  = markdown.split('\n');
    let cur = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // ── Section headings (h2 and h3 only — h1 are major topic dividers) ──
      const hMatch = line.match(/^(#{2,3})\s+(.+)/);
      if (hMatch) {
        const text = hMatch[2].replace(/\*\*/g, '').trim();
        const id   = localSlug(text);
        cur = { title: text, facts: [] };
        result[id] = cur;
        continue;
      }
      if (!cur) continue;

      const facts = cur.facts;
      if (facts.length >= 9) continue;  // cap per section

      // ── Bold term bullet: "- **Term** — definition" ──────────────────────
      // Handles —, –, :, =, ( as separators
      const termBullet = line.match(
        /^\s*[-*]\s+\*\*([^*\n]{2,50})\*\*\s*(?:[—–:=(])\s*(.{5,})/
      );
      if (termBullet) {
        const term = termBullet[1].trim();
        const def  = stripMd(termBullet[2]).slice(0, 120);
        facts.push({ type: 'term', term, def });
        continue;
      }

      // ── Numbered bold rule: "1. **Name** (...)" ──────────────────────────
      const ruleMatch = line.match(/^\d+\.\s+\*\*([^*\n]{3,70})\*\*/);
      if (ruleMatch) {
        const term = ruleMatch[1].trim();
        // grab parenthetical note if short
        const note = (line.match(/\*\*\s*\(([^)]{3,60})\)/) || [])[1] || '';
        facts.push({ type: 'rule', term, def: note || null });
        continue;
      }

      // ── Inline math formula containing "=" ───────────────────────────────
      const mathHits = [...line.matchAll(/\$([^$\n]{3,70})\$/g)];
      for (const m of mathHits) {
        const formula = m[1].trim();
        if (formula.includes('=') && facts.length < 9) {
          if (!facts.some(f => f.type === 'formula' && f.text === formula)) {
            facts.push({ type: 'formula', text: formula });
          }
        }
      }

      // ── Ratio lines (e.g. "3:1 phenotype ratio") ─────────────────────────
      if (/\d\s*:\s*\d/.test(line) && /ratio|genotype|phenotype/i.test(line)) {
        const clean = stripMd(line.replace(/^\s*[-*]\s+/, '')).slice(0, 130);
        if (clean.length > 8 && !facts.some(f => f.type === 'ratio' && f.text === clean)) {
          facts.push({ type: 'ratio', text: clean });
        }
      }
    }

    return result;
  }

  // ── Panel rendering ─────────────────────────────────────────

  function renderPanel(sectionId) {
    const panel = document.getElementById('quick-panel-body');
    if (!panel) return;

    // Walk up from the active id to find a section with facts
    let section = _sectionFacts[sectionId];
    if (!section || !section.facts.length) {
      // Try parent sections — find the nearest ancestor with facts
      const idx = _tocItems.findIndex(t => t.id === sectionId);
      if (idx > 0) {
        for (let j = idx - 1; j >= 0; j--) {
          const candidate = _sectionFacts[_tocItems[j].id];
          if (candidate && candidate.facts.length) { section = candidate; break; }
        }
      }
    }

    if (!section || !section.facts.length) {
      panel.innerHTML = '<p class="qp-empty">Scroll through the guide to see key facts here.</p>';
      return;
    }

    const titleEl = document.getElementById('quick-panel-section');
    if (titleEl) titleEl.textContent = section.title;

    const shown = section.facts.slice(0, 8);
    let html = '';

    for (const fact of shown) {
      if (fact.type === 'term') {
        html += `<div class="qp-item">
          <span class="qp-term">${escHtml(fact.term)}</span>
          <span class="qp-def">${escHtml(fact.def)}</span>
        </div>`;

      } else if (fact.type === 'rule') {
        html += `<div class="qp-item qp-rule">
          <span class="qp-rule-num">›</span>
          <div>
            <span class="qp-term">${escHtml(fact.term)}</span>
            ${fact.def ? `<span class="qp-def">${escHtml(fact.def)}</span>` : ''}
          </div>
        </div>`;

      } else if (fact.type === 'formula') {
        html += `<div class="qp-item qp-formula-item">
          <span class="qp-formula-text">$${fact.text}$</span>
        </div>`;

      } else if (fact.type === 'ratio') {
        html += `<div class="qp-item qp-ratio-item">
          <span class="qp-def">${escHtml(fact.text)}</span>
        </div>`;
      }
    }

    panel.innerHTML = html;
    if (window.renderMathInElement) {
      renderMathInElement(panel, {
        delimiters: [{ left: '$', right: '$', display: false }],
        throwOnError: false,
      });
    }
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Scroll tracking ─────────────────────────────────────────

  function onScroll() {
    const guide = document.getElementById('guide-body');
    if (!guide || !_tocItems.length) return;

    const scrollTop = guide.scrollTop + 100;
    let activeId = _tocItems[0]?.id;
    for (const { id } of _tocItems) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollTop) activeId = id;
    }
    renderPanel(activeId);
  }

  // ── Public API ──────────────────────────────────────────────

  function init(markdown, tocItems) {
    _sectionFacts = extractFacts(markdown);
    _tocItems     = tocItems;

    // Re-attach scroll listener
    const guide = document.getElementById('guide-body');
    if (_scrollEl && _scrollFn) _scrollEl.removeEventListener('scroll', _scrollFn);
    _scrollEl = guide;
    _scrollFn = onScroll;
    guide.addEventListener('scroll', _scrollFn, { passive: true });

    // Seed the panel immediately
    onScroll();
  }

  return { init };
})();
