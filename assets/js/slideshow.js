// Crossfading background slideshow for a hub banner.
// Usage: <section id="banner" class="major" data-slideshow="a.jpg,b.jpg,c.jpg">
// Builds stacked background layers behind the banner content and crossfades them.
document.addEventListener('DOMContentLoaded', function () {
  var banner = document.querySelector('#banner[data-slideshow]');
  if (!banner) return;

  var imgs = banner.getAttribute('data-slideshow')
    .split(',')
    .map(function (s) { return s.trim(); })
    .filter(Boolean);
  if (!imgs.length) return;

  var box = document.createElement('div');
  box.className = 'banner-slideshow';

  var slides = imgs.map(function (src, i) {
    var d = document.createElement('div');
    d.className = 'slide' + (i === 0 ? ' active' : '');
    d.style.backgroundImage = 'url("' + src + '")';
    box.appendChild(d);
    return d;
  });

  banner.insertBefore(box, banner.firstChild);
  if (slides.length < 2) return;

  var cur = 0;
  setInterval(function () {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 5000);
});
