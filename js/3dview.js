const viewerWrapper = document.getElementById('viewerWrapper');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Fullscreen toggle → wrapper (background + 3D go fullscreen together)
fullscreenBtn.addEventListener('click', () => {
  if (viewerWrapper.requestFullscreen) {
    viewerWrapper.requestFullscreen();
  } else if (viewerWrapper.webkitRequestFullscreen) { // Safari
    viewerWrapper.webkitRequestFullscreen();
  } else if (viewerWrapper.msRequestFullscreen) { // IE11
    viewerWrapper.msRequestFullscreen();
  }
});

// Optional: load background plot image from sessionStorage
const plotImage = sessionStorage.getItem('uploadedPlot');
if (plotImage) {
  document.getElementById("plotBg").src = plotImage;
}

