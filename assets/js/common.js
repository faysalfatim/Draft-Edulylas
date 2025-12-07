(function () {
  const NAV_LINKS = [
    { id: 'home', label: 'Home', path: 'index.html' },
    { id: 'playbooks', label: 'Playbooks', path: 'playbooks/index.html' },
    { id: 'search', label: 'Search', path: 'search.html' },
    { id: 'profile', label: 'Profile', path: 'profile.html' },
    { id: 'payments', label: 'Payments', path: 'payments.html' },
    { id: 'billing', label: 'Billing', path: 'billing.html' }
  ];

  const resolvePath = (path) => {
    const root = document.body?.dataset?.navRoot || '.';
    return `${root}/${path}`.replace(/\/+/, '/');
  };

  const EMBEDDED_PLAYBOOK_PATH = 'playbooks/embedded-media-guide.html';

  const createPlaybookCard = (playbook, compact = false) => {
    const article = document.createElement('article');
    article.className = `rounded-3xl border border-slate-200 bg-white/80 shadow-sm ${compact ? 'p-5' : 'p-6'} flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition`;
    article.innerHTML = `
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-widest text-slate-400">${playbook.focus}</p>
          <h3 class="text-lg font-semibold text-slate-900">${playbook.title}</h3>
        </div>
        <span class="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">${playbook.duration}</span>
      </div>
      <p class="text-sm text-slate-500">${playbook.summary}</p>
      <div class="flex flex-wrap gap-2">
        ${playbook.tags.slice(0, 3).map(tag => `<span class="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">${tag}</span>`).join('')}
      </div>
      <div class="flex items-center justify-between pt-2 text-sm text-slate-500">
        <span>${playbook.creator}</span>
        <a href="${resolvePath(EMBEDDED_PLAYBOOK_PATH)}" class="text-edulylas-purple font-medium hover:underline">Open</a>
      </div>`;
    return article;
  };

  const renderNav = (activeId) => {
    const containers = document.querySelectorAll('[data-nav]');
    if (!containers.length) return;
    containers.forEach(container => {
      container.innerHTML = '';
      NAV_LINKS.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = resolvePath(link.path);
        anchor.textContent = link.label;
        anchor.className = `px-4 py-2 rounded-2xl text-sm font-medium transition ${link.id === activeId ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'}`;
        container.appendChild(anchor);
      });
    });
  };

  const renderPlaybookGrid = (selector, options = {}) => {
    const container = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!container) return;
    const list = options.items || PLAYBOOKS;
    const subset = typeof options.limit === 'number' ? list.slice(0, options.limit) : list;
    container.innerHTML = '';
    subset.forEach(playbook => {
      const card = createPlaybookCard(playbook, options.compact);
      card.querySelector('a').href = resolvePath(EMBEDDED_PLAYBOOK_PATH);
      container.appendChild(card);
    });
    if (!subset.length && options.emptyMessage) {
      const message = document.createElement('p');
      message.className = 'text-sm text-slate-500';
      message.textContent = options.emptyMessage;
      container.appendChild(message);
    }
  };

  const renderPlaybookDetail = (slug) => {
    const playbook = PLAYBOOKS.find(pb => pb.slug === slug);
    if (!playbook) return;
    const title = document.querySelector('[data-playbook-title]');
    const summary = document.querySelector('[data-playbook-summary]');
    const meta = document.querySelector('[data-playbook-meta]');
    const tags = document.querySelector('[data-playbook-tags]');
    const outcomes = document.querySelector('[data-playbook-outcomes]');
    const resources = document.querySelector('[data-playbook-resources]');
    const highlight = document.querySelector('[data-playbook-highlight]');
    const focus = document.querySelector('[data-playbook-focus]');

    if (title) title.textContent = playbook.title;
    if (summary) summary.textContent = playbook.summary;
    if (highlight) {
      const content = playbook.highlight;
      if (Array.isArray(content)) {
        highlight.innerHTML = '';
        content.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          highlight.appendChild(li);
        });
      } else {
        highlight.textContent = content;
      }
    }
    if (focus) focus.textContent = playbook.focus;
    if (meta) meta.innerHTML = `
      <div><p class="text-xs text-slate-400">Region</p><p class="font-semibold">${playbook.region}</p></div>
      <div><p class="text-xs text-slate-400">Duration</p><p class="font-semibold">${playbook.duration}</p></div>
      <div><p class="text-xs text-slate-400">Level</p><p class="font-semibold">${playbook.level}</p></div>
      <div><p class="text-xs text-slate-400">Cohort Size</p><p class="font-semibold">${playbook.cohortSize}</p></div>`;

    if (tags) {
      tags.innerHTML = '';
      playbook.tags.forEach(tag => {
        const badge = document.createElement('span');
        badge.className = 'text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600';
        badge.textContent = tag;
        tags.appendChild(badge);
      });
    }

    const fillList = (target, items) => {
      if (!target) return;
      target.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex gap-3';
        li.innerHTML = `<span class="text-edulylas-purple"><i class="ti ti-check"></i></span><span class="text-sm text-slate-600">${item}</span>`;
        target.appendChild(li);
      });
    };

    fillList(outcomes, playbook.outcomes);
    fillList(resources, playbook.resources);
  };

  const renderRecommendations = (selector, limit = 3, excludeSlug) => {
    const container = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!container) return;
    const list = PLAYBOOKS.filter(pb => pb.slug !== excludeSlug).slice(0, limit);
    container.innerHTML = '';
    list.forEach(playbook => {
      const card = document.createElement('div');
      card.className = 'p-4 rounded-2xl border border-slate-200 bg-white/60 flex flex-col gap-2';
      card.innerHTML = `
        <p class="text-xs text-slate-400">${playbook.focus}</p>
        <p class="font-semibold text-slate-900">${playbook.title}</p>
        <a class="text-sm text-edulylas-purple font-medium" href="${resolvePath(EMBEDDED_PLAYBOOK_PATH)}">View playbook</a>`;
      container.appendChild(card);
    });
  };

  const renderNotes = (selector) => {
    const container = document.querySelector(selector);
    if (!container || !window.RECOMMENDED_NOTES) return;
    container.innerHTML = '';
    window.RECOMMENDED_NOTES.forEach(note => {
      const card = document.createElement('article');
      card.className = 'p-4 rounded-2xl border border-slate-200 bg-white/60';
      card.innerHTML = `<p class="text-sm font-semibold text-slate-900">${note.title}</p><p class="text-sm text-slate-500">${note.detail}</p>`;
      container.appendChild(card);
    });
  };

  const initShell = () => {
    const pageId = document.body?.dataset?.page;
    renderNav(pageId);
  };

  document.addEventListener('DOMContentLoaded', initShell);

  window.Site = {
    renderPlaybookGrid,
    renderPlaybookDetail,
    renderRecommendations,
    renderNotes
  };
})();
