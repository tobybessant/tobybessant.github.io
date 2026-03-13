document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-email]').forEach(function (el) {
    function reveal() {
      el.href = 'mailto:' + atob(el.dataset.email);
    }
    el.addEventListener('mouseenter', reveal);
    el.addEventListener('focus', reveal);
    el.addEventListener('click', reveal);
  });
});
