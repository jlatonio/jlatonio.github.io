/**
 * Google Ads HTML5 Banner - Animation Control
 * Note: clickTag is declared in HTML <head> for Google Ads compliance
 */

// Polite loading - wait for page to load before initializing
window.addEventListener('load', function() {
  console.log('Banner loaded successfully');
  console.log('clickTag:', typeof clickTag !== 'undefined' ? clickTag : 'not defined');
});

/**
 * Optional: Replay animation function
 */
function replayAnimation() {
  var banner = document.getElementById('banner');
  if (banner) {
    var parent = banner.parentNode;
    var clone = banner.cloneNode(true);
    parent.replaceChild(clone, banner);
  }
}
