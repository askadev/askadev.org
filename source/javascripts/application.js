(function() {
  function setYear() {
    var year = document.getElementById('js-year');

    year.innerHTML = new Date().getFullYear();
  }

  function handleShowMore(e) {
    this.classList.remove('show-more');
    this.style.display = 'none';
  }

  var more = document.querySelectorAll('.js-show-more');
  more.forEach(function(item) {
    item.addEventListener('click', handleShowMore);
  });

  window.addEventListener('DOMContentLoaded', setYear);
})();
