$(".store-continue").on("click", function() {
  "use strict";
  var isValid = true;
  $(".s7required").each(function() {
    if ($(this).val().length === 0) {
      isValid = false;
      $(this).focus().attr("placeholder", "This is a required field.").css({
        "background": "#fff2f2"
      });
      return false;
    } else {
      $(this).css({
        "background": ""
      });
    }
  });

  var param01 = "http://testvipd1.scene7.com/is/image/jlatonio/";
  var param02 = $(".s7template").data('val');
  var param03 = "?" + $(".s7preset").data('val');
  var param04 = "&$asset=is{jlatonio/" + $(".s7product").data('val') + "}" + "&layer=1&hide=0";
  var param05 = "&$heading=" + $(".s7heading").val() + "&layer=3&hide=0";
  var param06 = "&$subtext=" + $(".s7subtext").val() + "&layer=4&hide=0";
  var param07 = "&$color=" + $(".s7color").data('val');
  var param08 = "&$font=" + $(".s7font").data('val');
  var results = param01 + param02 + param03 + param04 + param05 + param06 + param07 + param08;

  $(".testurl_preview").attr('src', results);
  $(".generated_url").text(results);
  $(".testurl_preview").on("error", function() {
    $(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
  });
});



$(".s7heading,.s7subtext").on("keyup", function() {
  $(".store-continue").trigger("click");
});

$(".store-clear").on("click", function() {
  $(".custom-select-close").hide();
  $(".generated_url").text("Generated URL:");
  $(".testurl_preview").attr('src', "http://testvipd1.scene7.com/is/image/jlatonio/psd-with-layers?$asset=is{jlatonio/psd-with-layers_image}&$heading=Heading&$color=%5Cred204%5Cgreen204%5Cblue204&$subtext=Subtext&$font=Arial");
});


$(".store-pdf").on("click", function() {
  "use strict";
  var isValid = true;
  $(".s7required").each(function() {
    if ($(this).val().length === 0) {
      isValid = false;
      $(this).focus().attr("placeholder", "This is a required field.").css({
        "background": "#fff2f2"
      });
      return false;
    } else {
      $(this).css({
        "background": ""
      });
    }

  var param01 = "http://testvipd1.scene7.com/is/image/jlatonio/";
  var param02 = $(".s7template").data('val');
  var param03 = "?" + $(".s7preset").data('val');
  var param04 = "&$asset=is{jlatonio/" + $(".s7product").data('val') + "}" + "&layer=1&hide=0";
  var param05 = "&$heading=" + $(".s7heading").val() + "&layer=3&hide=0";
  var param06 = "&$subtext=" + $(".s7subtext").val() + "&layer=4&hide=0";
  var param07 = "&$color=" + $(".s7color").data('val');
  var param08 = "&$font=" + $(".s7font").data('val');
  var results = param01 + param02 + param03 + param04 + param05 + param06 + param07 + param08 + "&fmt=pdf";

  var url = results;
  window.open(url, '_blank');
  });
});

$(".custom-dropdown-scroll").closest("form").find(".custom-dropdown-open").on("click", function() {
  // closes other elements other than this when clicked
  "use strict";
  $(".custom-dropdown-input").find(".custom-dropdown-close").not(this).trigger("click");
  $("body").trigger("click");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-open");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-close");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").delay(200).slideDown(300);
  $(this).hide();
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").show();
  return false;
});

// closes menu when an item is selected
$(".custom-dropdown-close").on("click", function() {
  "use strict";
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
  return false;
});

// autofill fields as user types. static html only
$(function() {
  "use strict";
  $("input[type='text'], input[type='number']").on("keyup change", function() {
    var option = $(this).val();
    var item = option;
    if (option.length === 0) {
      $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
    }
    if (option.length > 0) {
      $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
    }
  });
  return false;
});

// resets search when user clicks close
$(".custom-select-close").hide();
$("input[type='text'],input[type='number']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function() {
  "use strict";
  var input_place_holder = $(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").attr("data-placeholder");
  $(this).hide();
  $(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").val("").focusout().attr("placeholder", input_place_holder).css({
    "background": ""
  });
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
  $(".store-continue").trigger("click");
  return false;
});

// closes menu when user clicks away
$("html, body, input").on("click", function() {
  "use strict";
  if ($(this).not(".custom-dropdown-outer")) {
    $(".custom-dropdown-close").trigger("click");
  }
});

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function() {
  "use strict";
  var option = $(this).text();
  var val = $(this).attr("value");
  var result = $(this).data('val');
  var checkinput = $(this).closest(".custom-dropdown-outer").find("input[type='text']");
  $(this).closest(".custom-dropdown-outer").find(checkinput).val(option).css({
    "background": ""
  });
  $(checkinput).attr("value", val);
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").removeData().attr('data-val', result);
});

$(".custom-dropdown-open").on("click", function() {
  "use strict";
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").focus();
});

$(".custom-dropdown-menu").on("keydown click", function() {
  "use strict";
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
});

// set active state (neded for appended dropdown)
$(document.body).on('click', ".custom-dropdown", function() {
  "use strict";
  $(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
  $(this).closest(".custom-dropdown-outer").find(this).addClass("active");
  return false;
});

// set active state
$(".custom-dropdown").on("click", function() {
  "use strict";
  $(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
  $(this).closest(".custom-dropdown-outer").find(this).addClass("active");
  return false;
});

// Hover effects
$(window).on("load", function() {
  "use strict";
  $(".custom-dropdown").append("<div class='custom-dropdown-animation'></div>");
});

$(".custom-dropdown").on("mouseover touchstart", function() {
  "use strict";
  $(this).css({
    "color": "#fff",
    "-webkit-transition": "all .1s ease-out",
    "-moz-transition": "all .1s ease-out",
    "o-transition": "all .1s ease-out",
    "transition": "all .1s ease-out"
  });
  $(this).find(".custom-dropdown-animation").css({
    "background-color": "#7593bf",
    "opacity": "1",
    "width": "100%",
    "-webkit-transition": "all .2s ease-out",
    "-moz-transition": "all .2s ease-out",
    "o-transition": "all .2s ease-out",
    "transition": "all .2s ease-out"
  });
});

$(".custom-dropdown").on("mouseout touchend", function() {
  "use strict";
  $(this).css({
    "color": "",
    "-webkit-transition": "all .01s ease-out",
    "-moz-transition": "all .01s ease-out",
    "o-transition": "all .01s ease-out",
    "transition": "all .01s ease-out"
  });
  $(this).find(".custom-dropdown-animation").css({
    "background-color": "",
    "opacity": "",
    "width": "",
    "-webkit-transition": "all .01s ease-out",
    "-moz-transition": "all .01s ease-out",
    "o-transition": "all .01s ease-out",
    "transition": "all .01s ease-out"
  });
});

$(document.body).on('mouseover touchstart', ".custom-dropdown", function() {
  "use strict";
  $(this).css({
    "color": "#fff",
    "-webkit-transition": "all .1s ease-out",
    "-moz-transition": "all .1s ease-out",
    "o-transition": "all .1s ease-out",
    "transition": "all .1s ease-out"
  });
  $(this).find(".custom-dropdown-animation").css({
    "background-color": "#7593bf",
    "opacity": "1",
    "width": "100%",
    "-webkit-transition": "all .2s ease-out",
    "-moz-transition": "all .2s ease-out",
    "o-transition": "all .2s ease-out",
    "transition": "all .2s ease-out"
  });
});

$(document.body).on('mouseout touchend', ".custom-dropdown", function() {
  "use strict";
  $(this).css({
    "color": "",
    "-webkit-transition": "all .01s ease-out",
    "-moz-transition": "all .01s ease-out",
    "o-transition": "all .01s ease-out",
    "transition": "all .01s ease-out"
  });
  $(this).find(".custom-dropdown-animation").css({
    "background-color": "",
    "opacity": "",
    "width": "",
    "-webkit-transition": "all .01s ease-out",
    "-moz-transition": "all .01s ease-out",
    "o-transition": "all .01s ease-out",
    "transition": "all .01s ease-out"
  });
});