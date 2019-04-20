$(".store-continue").on("click", function () {
var param01 = "https://s7d4.scene7.com/is/image/VarsityBrands?&CAMP%20TOPS&layer=1";
var param02 = "&src=ir{VarsityBrandsRender/";
var param03 = $(".idurl").val();
var param_view = $(".viewurl").val();
var param04 = "?fmt=png-alpha&resmode=bicub&obj=loc5&decal&src=is{VarsityBrands/";
var param05 = $(".styleurl").val();
var param06 = "?&$text=";
var param07 = $(".texturl").val();   
var param08 = "}&pos="; 
var param09 = $(".posurl").val();
var param10 = "&res=95&show&rotate=0&OFFSET&show}";
var param11 = "&layer=3&";
var param12 = "&src=ir{VarsityBrandsRender/";
var param13 = $(".idurl2").val();
var param_view = $(".viewurl").val();
var param14 = "?fmt=png-alpha&resmode=bicub}";
var param15 = "&layer=comp&$configuration_full$";


var tuckedin = param01 + param02 + param03 + param_view + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param11 + param12 + param13 + param_view + param14 + param15;
     
$(".testurl").attr('src', tuckedin);
$(".copyurl").html(tuckedin);
});


$(".store-continue-2").on("click", function () {
var param01 = "https://s7d4.scene7.com/is/image/VarsityBrands?&CAMP%20TOPS&layer=1";
var param02 = "&src=ir{VarsityBrandsRender/";
var param03 = $(".idurl").val();
var param_view = $(".viewurl").val();
var param04 = "?fmt=png-alpha&resmode=bicub&obj=loc5&decal&src=is{VarsityBrands/";
var param05 = $(".styleurl").val();
var param06 = "?&$text=";
var param07 = $(".texturl").val();  
var param08 = "}&pos="; 
var param09 = $(".posurl").val();
var param10 = "&res=95&show&rotate=0&OFFSET&show}";
var param11 = "&layer=3&";
var param12 = "&src=ir{VarsityBrandsRender/";
var param13 = $(".idurl2").val();
var param_view = $(".viewurl").val();
var param14 = "?fmt=png-alpha&resmode=bicub}";
var param15 = "&layer=comp&$configuration_full$";

var tuckedout = param01 + param02 + param13 + param_view + param14 + param11 + param12 + param03 + param_view + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param15;
     
$(".testurl").attr('src', tuckedout);
$(".copyurl").html(tuckedout);
});


$(".custom-dropdown-scroll").closest("form").find(".custom-dropdown-open").on("click", function () {
	// closes other elements other than this when clicked
	"use strict";
	$(".custom-dropdown-input").find(".custom-dropdown-close").not(this).trigger("click");
	$("body").trigger("click");
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-open");
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-close");
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").delay(200).slideDown(300);
	$(this).hide();
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").show();
	$("html, body").animate({
			scrollTop: $(this).closest(".custom-dropdown-outer").offset().top - 170
		},
		200, "easeInOutQuad");
	return false;
});

// closes menu when an item is selected
$(".custom-dropdown-close").on("click", function () {
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
$("input[type='text'],input[type='number']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function () {
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
$("html, body, input").on("click", function () {
	"use strict";
	if ($(this).not(".custom-dropdown-outer")) {
		$(".custom-dropdown-close").trigger("click");
	}
});

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function () {
	"use strict";
	var option = $(this).text();
	var val = $(this).attr("value");
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
});

$(".custom-dropdown-open").on("click", function () {
	"use strict";
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").focus();
}); 

$(".custom-dropdown-menu").on("keydown click", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
}); 

// set active state (neded for appended dropdown)
$(document.body).on('click', ".custom-dropdown", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
	$(this).closest(".custom-dropdown-outer").find(this).addClass("active");
	return false;
});

// set active state
$(".custom-dropdown").on("click", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
	$(this).closest(".custom-dropdown-outer").find(this).addClass("active");
	return false;
});

// Hover effects
$(window).on("load", function () {
	"use strict";
	$(".custom-dropdown").append("<div class='custom-dropdown-animation'></div>");
});

$(".custom-dropdown").on("mouseover touchstart", function () {
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

$(".custom-dropdown").on("mouseout touchend", function () {
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

$(document.body).on('mouseover touchstart', ".custom-dropdown", function () {
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

$(document.body).on('mouseout touchend', ".custom-dropdown", function () {
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