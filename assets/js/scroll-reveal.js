// Scroll reveal: adds .reveal--visible to .reveal elements when they enter the viewport.
// Falls back silently in browsers without IntersectionObserver (IE11, old Safari).
(function () {
  if (!window.IntersectionObserver) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  function init() {
    var els = document.querySelectorAll('.reveal');
    for (var i = 0; i < els.length; i++) io.observe(els[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
