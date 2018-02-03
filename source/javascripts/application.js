(function() {
  function setYear() {
    var year = document.getElementById('js-year');

    year.innerHTML = new Date().getFullYear();
  }

  window.addEventListener('DOMContentLoaded', setYear);
})();
