// Full gallery grid (gallery.html).
// Renders every photo in window.GALLERY (see gallery-data.js); each photo
// links to the topic page it belongs to.
document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('gallery-grid');
  if (!grid || !window.GALLERY) return;
  grid.innerHTML = GALLERY.map(function (g) {
    var alt = (g.alt || '').replace(/"/g, '&quot;');
    return '<a class="gal-item" href="' + g.topic + '" title="' + alt + '">' +
             '<img loading="lazy" src="' + g.src + '" alt="' + alt + '" />' +
             '<span class="gal-cap">' + alt + '</span>' +
           '</a>';
  }).join('');
});
