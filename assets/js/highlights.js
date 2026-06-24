// Portfolio "Highlights" reel.
// Crossfades through every photo in window.GALLERY (see gallery-data.js).
// The whole reel is a link to the full gallery (gallery.html).
// Uses two stacked layers and swaps the background image, so it stays light
// even with many photos.
document.addEventListener('DOMContentLoaded', function () {
  var reel = document.getElementById('highlights');
  if (!reel || !window.GALLERY || !GALLERY.length) return;

  var srcs = GALLERY.map(function (g) { return g.src; });

  var layerA = document.createElement('span');
  var layerB = document.createElement('span');
  layerA.className = 'hl-layer active';
  layerB.className = 'hl-layer';
  layerA.style.backgroundImage = 'url("' + srcs[0] + '")';
  reel.insertBefore(layerB, reel.firstChild);
  reel.insertBefore(layerA, reel.firstChild);

  if (srcs.length < 2) return;
  var layers = [layerA, layerB], cur = 0, idx = 0;
  setInterval(function () {
    idx = (idx + 1) % srcs.length;
    var next = layers[(cur + 1) % 2];
    next.style.backgroundImage = 'url("' + srcs[idx] + '")';
    next.classList.add('active');
    layers[cur].classList.remove('active');
    cur = (cur + 1) % 2;
  }, 3500);
});
