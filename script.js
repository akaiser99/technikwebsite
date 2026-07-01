const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
}
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const reply = document.getElementById('reply').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Anfrage über Website – ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nKontakt: ' + reply + '\n\nAnliegen:\n' + message);
  window.location.href = 'mailto:technikhilfe@e-mail.de?subject=' + subject + '&body=' + body;
});
