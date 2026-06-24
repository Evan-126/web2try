// Renders a topic page's markdown into the page body.
// Any element with a data-md="path/to/content.md" attribute gets its
// markdown fetched, rendered via marked, and injected. Mirrors blog.js.
document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll('[data-md]');
  targets.forEach(function (el) {
    var src = el.getAttribute('data-md');
    fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (md) {
        el.innerHTML = (window.marked && marked.parse) ? marked.parse(md) : md;
      })
      .catch(function (err) {
        el.innerHTML = '<p><em>Content coming soon.</em></p>';
        console.error('markdown load failed for ' + src + ':', err);
      });
  });
});
