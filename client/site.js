// Sticky nav + quiet scroll reveals (shared across pages)
var nav = document.getElementById('nav');
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
