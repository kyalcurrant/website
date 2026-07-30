// Sticky nav + mobile menu + quiet scroll reveals (shared across pages)
var nav = document.getElementById('nav');

// Mobile hamburger menu
var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  // Close the menu when a link is chosen (matters for same-page # links)
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
var pinned = nav.classList.contains('scrolled') && location.pathname.indexOf('index') === -1 && location.pathname !== '/';
addEventListener('scroll', function () {
  if (!pinned) nav.classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
