function handleSlideChange () {
  var position = currentPosition();
  // Hide the slide number on the first and last (.dark) slide
  // Not possible in CSS since .numbers can not be inside the .slide element
  // FIX: Have the OPTIONS object available in template.mustache
  var currentSlide = document.getElementById('slide-' + position);
  var showNumber = position > 1 && !currentSlide.classList.contains('dark');
  document.querySelector('.numbers').innerHTML = showNumber ? (position - 1) : '' ;
}

// Monkeypatch replaceState to check for slide changes
// FIX: Provide some sort of onNavigate() event listener
var _originalReplaceState = window.history.replaceState
window.history.replaceState = function(a, b, c) {
  handleSlideChange();
  _originalReplaceState(a, b, c);
}
