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
