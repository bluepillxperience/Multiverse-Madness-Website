// Mobile nav + current year
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('navmenu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (menu.classList.contains('show')) menu.classList.remove('show');
}));
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Load game descriptions from text files
window.addEventListener('DOMContentLoaded', () => {
  const descBlocks = document.querySelectorAll('.game-desc[data-src]');
  const isFileProto = location.protocol === 'file:';

  descBlocks.forEach(async (el) => {
    const src = el.getAttribute('data-src');
    if (!src) return;

    // Encode path segments to be safe with spaces and special chars
    const encoded = src.split('/').map(encodeURIComponent).join('/');

    if (isFileProto) {
      // Browsers block fetch() from file:// for security reasons
      el.textContent = 'Open this site via a local server to load description (e.g., python -m http.server).';
      console.warn(`[games] Skipping fetch for ${src} on file:// protocol. Serve over http(s).`);
      return;
    }

    try {
      const res = await fetch(encoded, { cache: 'no-cache', credentials: 'same-origin' });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${encoded}`);
      const text = (await res.text()).trim();
      el.textContent = text || 'Description unavailable.';
    } catch (e) {
      console.error('[games] Failed to load description:', e);
      el.textContent = 'Description unavailable.';
    }
  });
});

// Initialize YouTube embeds with proper origin
window.addEventListener('DOMContentLoaded', () => {
  const frames = document.querySelectorAll('iframe[data-yt]');
  const isHttp = location.protocol === 'http:' || location.protocol === 'https:';
  const originParam = isHttp ? `&origin=${encodeURIComponent(location.origin)}` : '';

  frames.forEach((f) => {
    const id = f.getAttribute('data-yt');
    if (!id) return;
    const base = 'https://www.youtube-nocookie.com/embed/';
    const query = `?rel=0&modestbranding=1&playsinline=1${originParam}`;
    const src = `${base}${encodeURIComponent(id)}${query}`;
    if (!f.getAttribute('src')) f.setAttribute('src', src);
  });
});
