// Contact form: the site is static, so there is no server to post to.
// On submit, open the visitor's email app with the message filled in.
document.addEventListener('DOMContentLoaded', function () {
  var forms = document.querySelectorAll('form[data-mailto]');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var message = form.querySelector('[name="message"]').value.trim();
      var subject = 'Website message' + (name ? ' from ' + name : '');
      var body = message + (email ? '\n\nReply to: ' + email : '');
      window.location.href = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  });
});
