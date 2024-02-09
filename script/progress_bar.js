document.addEventListener("DOMContentLoaded", function() {
  var progressElement = document.getElementById('progress');
  var animationFrameId;

  function updateProgressBar() {
    var scrollPosition = window.scrollY;
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var progress = (scrollPosition / totalHeight) * 100;
    progressElement.style.width = progress + '%';
  }

  function scrollHandler() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animationFrameId = requestAnimationFrame(updateProgressBar);
  }

  window.addEventListener('scroll', scrollHandler);
});
