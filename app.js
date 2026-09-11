const grid = document.getElementById('productGrid');

if (grid && Array.isArray(window.GGST_PRODUCTS)) {
  grid.innerHTML = window.GGST_PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-top">
        <span class="product-icon">${p.icon}</span>
        <span class="status ${p.status === 'Live' ? 'live' : ''}">
          ${p.status}
        </span>
      </div>

      <h3>${p.name}</h3>
      <p>${p.description}</p>

      <div class="tags">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>

      <a
        class="product-link"
        href="${p.url}"
        ${p.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}
      >
        ${p.status === 'Live' ? 'Open product →' : 'Learn more →'}
      </a>
    </article>
  `).join('');
}


const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

function closeMenu() {
  if (!nav) return;

  nav.classList.remove('open');

  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}

if (menuBtn && nav) {

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = nav.classList.toggle('open');

    menuBtn.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  window.addEventListener('pageshow', () => {
    closeMenu();
  });
}
