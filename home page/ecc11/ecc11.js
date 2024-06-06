document.addEventListener("DOMContentLoaded", function() {
  var video = document.querySelector('.vid');
  video.addEventListener('ended', showArrow);
});

function showArrow() {
  var arrow = document.querySelector('.scroll-down-arrow');
  arrow.classList.remove('hide-arrow');
}
