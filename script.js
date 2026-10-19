const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.textContent = open ? '☰' : '✕';
    nav.classList.toggle('nav-open', !open);
  });
}
