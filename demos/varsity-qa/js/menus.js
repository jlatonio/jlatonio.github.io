$(".store-continue").click(function (e) {
	"use strict";
	var isValid = true;
	$("input[type='text']").each(function () {
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
});


$(".store-continue").on("click", function () {
$(".testurl_na").html("");
var param01 = "https://testvipd4.scene7.com/is/image/VarsityBrands?&CAMP%20TOPS&layer=1";
var param02 = "&src=ir{VarsityBrandsRender/";
var param03 = $(".idurl").val();
var param_f = "_f"
var param_b = "_b"
var param_s = "_s"
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
var param14 = "?fmt=png-alpha&resmode=bicub}";
var param15 = "&layer=comp&$configuration_full$";


var tuckedin_f = param01 + param02 + param03 + param_f + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param11 + param12 + param13 + param_f + param14 + param15;
var tuckedin_b = param01 + param02 + param03 + param_b + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param11 + param12 + param13 + param_b + param14 + param15;
var tuckedin_s = param01 + param02 + param03 + param_s + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param11 + param12 + param13 + param_s + param14 + param15;
$(".testurl_f").attr('src', tuckedin_f);
$(".testurl_b").attr('src', tuckedin_b);    
$(".testurl_s").attr('src', tuckedin_s);
$('.testurl_f,.testurl_b').on("error", function () {
        $(this).closest(".column-testurl").find(".testurl_na").html("Preview Not Available");
});
$('.testurl_s').on("error", function () {
        $(this).closest(".column-testurl").find(".testurl_na").html("Side Preview Not Available");
});
});


$(".store-continue-2").on("click", function () {
$(".testurl_na").html("");
var param01 = "https://testvipd4.scene7.com/is/image/VarsityBrands?&CAMP%20TOPS&layer=1";
var param02 = "&src=ir{VarsityBrandsRender/";
var param03 = $(".idurl").val();
var param_f = "_f"
var param_b = "_b"
var param_s = "_s"
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
var param14 = "?fmt=png-alpha&resmode=bicub}";
var param15 = "&layer=comp&$configuration_full$";

var tuckedout_f = param01 + param02 + param13 + param_f + param14 + param11 + param12 + param03 + param_f + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param15;
var tuckedout_b = param01 + param02 + param13 + param_b + param14 + param11 + param12 + param03 + param_b + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param15;
var tuckedout_s = param01 + param02 + param13 + param_s + param14 + param11 + param12 + param03 + param_s + param04 + param05 + param06 + param07 + param08 + param09 + param10 + param15;
$(".testurl_f").attr('src', tuckedout_f);
$(".testurl_b").attr('src', tuckedout_b);
$(".testurl_s").attr('src', tuckedout_s);
$('.testurl_f,.testurl_b').on("error", function () {
        $(this).closest(".column-testurl").find(".testurl_na").html("Preview Not Available");
});
$('.testurl_s').on("error", function () {
        $(this).closest(".column-testurl").find(".testurl_na").html("Side Preview Not Available");
});
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