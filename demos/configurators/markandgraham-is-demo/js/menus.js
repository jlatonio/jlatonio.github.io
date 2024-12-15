// Show default generated URL when loaded
var results = $(".testurl_preview").attr('src');
$(".generated_url").text(results);

// Resets to default image and default generated URL
var default_image = $(".testurl_preview").attr('src');
$(".store-clear").on("click", function() {
 $(".testurl_preview").attr('src', default_image);
 $(".generated_url").text(default_image);
});

// Process output
$(".store-continue").on("click", function() {
 "use strict";
 var isValid = true;
 $("input[type='text']").each(function() {
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

    
//var param01 = "https://testvipd1.scene7.com/is/image/jlatonio/";
//var param02 = "Terminal_Pet_Boarding_Carrier_White_4200711_HOL24";
//var param03 = "?$decal-image=is{jlatonio/mg-decal-fish}&$decal-pos=982,1404&$decal-rotate=0";
//var param04 = "&$decal-size=0,500";
//var param05 = "&$color=\\red201\\green142\\blue86"; 
//var param06 = "&font=Arial"; 
//var param07 = "&$font-size=fs180"; 
//var param08 = "&$text=jlatonio" + "&scl=1"; 
    

 $(".testurl_na").html("");
 var param01 = "https://testvipd1.scene7.com/is/image/jlatonio/";
 var param02 = $(".url-product").data('val');
 var param03 = "?$decal-image=is{jlatonio/" + $(".url-decal").data('val') + "}";
 var param04 = "&$decal-size=" + $(".url-decal-size").data('val');
 var param05 = "&layer=3&$text=" + $(".url-text").val(); 
 var param06 = "&$font=" + $(".url-text-font").val(); 

 var results = param01 + param02 + param03 + param04 + param05 + param06 + "&scl=1&effect=-1&color=0x000000&op_blur=2&opac=75,75&blendmode=mult&pos=1,1&fmt=webp";
    
 $(".testurl_preview").attr('src', results);
 $(".testurl_preview").on("error", function() {
  $(this).closest(".column-testurl").find(".testurl_na").html("Preview Not Available");
 });
  $(".generated_url").text(results);
  $(".testurl_preview").on("error", function() {
    $(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
  });
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

// Open new tab with image converted as a PDF
$(".store-pdf").on("click", function() {
  "use strict";
  var param01 = "https://testvipd1.scene7.com/is/image/jlatonio/";
  var param02 = $(".url-product").data('val');
  var param03 = "?layer=1&src=" + $(".url-fabric").data('val');
  var param04 = "&layer=2&src=" + $(".url-finish").data('val') + "&wid=1000&qlt=95,1&resMode=sharp2";
  var results = param01 + param02 + param03 + param04 + "&fmt=pdf";
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
      window.open(results, '_blank');
     }
      return false;
  });
  return false;
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
 $(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
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

// menu icon hover
$(".custom-dropdown-relative").hover(function() {
  $(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", "1");
  }, function(){
  $(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", ".4");
    return false;
});