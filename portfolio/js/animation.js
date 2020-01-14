// Script for hover and to reset hover when content is scrolled in mobile view
$('.nav2-btns').on('mousedown mouseover', function() {
 $(this).queue(function() {
  $('.nav2-btns').css({
   "-webkit-transition": "all .25s ease-out",
   "animation": "all .25s ease-out",
   "transform":"scale(1.0)"
  });
  $('.nav2-btns-name-container p').css({"-webkit-transition":"all .25s ease-out","animation":"all .25s ease-out","color":"",});
  $(this).css({
   "-webkit-transition": "all .15 ease-out",
   "animation": "all .15s ease-out",
   "transform":"scale(1.05)"
  });
  $(this).find('.nav2-btns-name-container p').css({"color":"#fff",});
  $(this).dequeue();
  return false;
 });
});
$('.nav2-image').on('mousedown mouseover touchstart', function() {
 $('.nav2-btns').css({
  "-webkit-transition": "all .25s ease-out",
  "animation": "all .25s ease-out",
  "transform":"scale(1.0)"
 });
 $('.nav2-btns-name-container p').css({"-webkit-transition":"all .25s ease-out","animation":"all .25s ease-out","color":"",});
});

// Sticky Navigation
$(window).on('touchmove mousewheel touchstart wheel', function() {
 var windscroll = $(window).scrollTop() + 250;
 if (windscroll >= 0) {
  $('.panel-sections').each(function(i) {
   if ($(this).position().top <= windscroll - 0) {
    $('.nav2-btns').css({
     "-webkit-transition": "all .25s ease-out",
     "animation": "all .25s ease-out",
     "transform":"scale(1.0)"
    });
    $('.nav2-btns-name-container p').css({"-webkit-transition":"all .25s ease-out","animation":"all .25s ease-out","color":"",});
    $('.nav2-btns').eq(i).css({
     "-webkit-transition": "all .15s ease-out",
     "animation": "all .15s ease-out",
     "transform":"scale(1.05)"
    });
    $('.nav2-btns').find('.nav2-btns-name-container p').eq(i).css({"color":"#fff",});
   }
   if ($(window).scrollTop() <= 50) {
    $('.nav2-btns').css({
     "-webkit-transition": "all .25s ease-out",
     "animation": "all .25s ease-out",
     "transform":"scale(1.0)"
    });
    $('.nav2-btns-name-container p').css({"-webkit-transition":"all .25s ease-out","animation":"all .25s ease-out","color":"",});
   }
   if ($(window).scrollTop() + 50 + $(window).height() > $(document).height() - 0) {
    $('.nav2-btns').css({
     "-webkit-transition": "all .25s ease-out",
     "animation": "all .25s ease-out",
     "transform":"scale(1.0)"
    });
    $('.nav2-btns-name-container p').css({"-webkit-transition":"all .25s ease-out","animation":"all .25s ease-out","color":"",});
   }
  });
 } else {
  $('.nav2-btns').css({
   "-webkit-transition": "all .25s ease-out",
   "animation": "all .25s ease-out",
   "transform":"scale(1.0)"
  });
 }
}).scroll();


// Script for bottom navigation (for phones only)
// Menu button
$('.menu').on('touchstart', function() {
 $(".menu").css({
  "-webkit-transition": "all .1s ease-out",
  "animation": "all .1s ease-out",
  "background-color": "rgba(110,110,110,.6)"
 });
 $('.nav2-btns').css({
  "-webkit-transition": "all 0s ease-out",
  "animation": "all 0s ease-out",
  "background-color": "transparent"
 });
 $('.nav2').toggleClass('nav2-open');
 $(this).delay(250).queue(function() {
  $(".menu").css({
   "-webkit-transition": "all .25s ease-out",
   "animation": "all .25s ease-out",
   "background-color": "transparent"
  });
  $(this).dequeue();
  return false;
 });
});


// View previous/next section based on position
// Previous and Next buttons
$('.js-next').on('touchstart', function() {
 $('.nav2-open').removeClass('nav2-open');
 $('.nav2-open').addClass('nav2');
 var current;
 $(".js-current-panel").each(function(i, element) {
  current = $(element).offset().top;
  if (current - 10 > $(document).scrollTop()) {
   return false;
  }
 });
 $("html,body").animate({
  scrollTop: current
 }, 1500, 'easeInOutQuad');
 $(this).css({
  "-webkit-transition": "all .1s ease-out",
  "animation": "all .1s ease-out",
  "background-color": "rgba(110,110,110,.6)"
 });
 $(this).delay(250).queue(function() {
  $(".js-next").css({
   "-webkit-transition": "all .25s ease-out",
   "animation": "all .25s ease-out",
   "background-color": "transparent"
  });
  $(this).dequeue();
  return false;
 });
});

$('.js-prev').on('touchstart', function() {
 $('.nav2-open').removeClass('nav2-open');
 $('.nav2-open').addClass('nav2');
 var current;
 $(".js-current-panel").each(function(i, element) {
  current = $(element).offset().top;
  if (current + 10 > $(document).scrollTop()) {
   if (i == 0) {
    target = 0;
   } else {
    current = $(".js-current-panel").eq(i - 1).offset().top
   }
   return false;
  }
 });

 $("html,body").animate({
  scrollTop: current
 }, 1500, 'easeInOutQuad');
 $(".js-prev").css({
  "-webkit-transition": "all .1s ease-out",
  "animation": "all .1s ease-out",
  "background-color": "rgba(110,110,110,.5)"
 });
 $(this).delay(250).queue(function() {
  $(this).css({
   "-webkit-transition": "all .25s ease-out",
   "animation": "all .25s ease-out",
   "background-color": "transparent"
  });
  $(this).dequeue();
  return false;
 });
});

// Script for sliding nav bar in phone view
$('.nav2-btns').on('click', function() {
 $('.nav2').toggleClass('nav2-open');
});
$('.nav2-image').on('click', function() {
 $('.nav2').toggleClass('nav2-open');
});

// Script for bar animation 
$(window).load(function() {
 setTimeout(function() {
  $(".animated-bar-critical").css({
   "animation": "animated-critical 1s ease-out",
   "-webkit-animation": "animated-critical 1s ease-out",
   "animation-iteration-count": "1",
   "height": "15px",
   "width": "50%",
   "opacity": "1",
  });
 }, 125);
});
$(window).load(function() {
 setTimeout(function() {
  $(".animated-bar-at-risk").css({
   "animation": "animated-at-risk 1s ease-out",
   "-webkit-animation": "animated-at-risk 1s ease-out",
   "animation-iteration-count": "1",
   "height": "15px",
   "width": "70%",
   "opacity": "1",
  });
 }, 125);
});
$(window).load(function() {
 setTimeout(function() {
  $(".animated-bar-on-track").css({
   "animation": "animated-on-track 1s ease-out",
   "-webkit-animation": "animated-on-track 1s ease-out",
   "animation-iteration-count": "1",
   "height": "15px",
   "width": "90%",
   "opacity": "1",
  });
 }, 125);
});
$(window).load(function() {
 setTimeout(function() {
  $(".animated-bar-completed").css({
   "animation": "animated-completed 1s ease-out",
   "-webkit-animation": "animated-completed 1s ease-out",
   "animation-iteration-count": "1",
   "height": "15px",
   "width": "100%",
   "opacity": "1",
  });
 }, 125);
});

// Print
$(".print-btn").click(function() {
 window.print();
});