function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('.hero-crumbs').addClass('stick');
    $('.hero-crumbs').removeClass('sticky');
    $('.acs-hero-container').css('padding-bottom', '58px');
  }
  if (window_top < div_top) {
    $('.hero-crumbs').addClass('sticky');
    $('.hero-crumbs').removeClass('stick');
    $('.acs-hero-container').css('padding-bottom', '');
  }
  return false;
}

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});