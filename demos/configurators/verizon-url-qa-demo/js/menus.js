// Show default generated URL when loaded
var results = $(".testurl_preview").attr('src');


$(function() {
	"use strict";
	$("input[type='text'], input[type='number']").each(function() {
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

// Resets to default image and default generated URL
$(".store-clear").on("click", function() {
	"use strict";
	var assetprev1 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val("") + "?$" + $(".modifier1").text() + "$";
	var assetprev2 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val("") + "?$" + $(".modifier2").text() + "$";
	var assetprev3 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val("") + "?$" + $(".modifier3").text() + "$";
	var assetprev4 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val("") + "?$" + $(".modifier4").text() + "$";
	var assetprev5 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val("") + "?$" + $(".modifier5").text() + "$";

	$(".store-continue").trigger("click");
	$("input[type='text'], input[type='number']").each(function() {
		var option = $(this).val();
		var item = option;
		if (option.length === 0) {
			$(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
		}
		if (option.length > 0) {
			$(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
		}
	});
	$("#outer-guides-checked").trigger("click");
	$("#inner-guides-checked").trigger("click");
	$(".generated_url").text("");
	return false;
});


$(".testp").on("click", function() {
	"use strict";
	$("#inner-guides-checked").trigger("click");
	var select_image = $(this).attr('src');
	$(".generated_url").text(select_image);
	return false;
});




// Process results
$(".store-continue").on("click", function() {
	"use strict";
	var assetprev1 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$";
	var assetprev2 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$";
	var assetprev3 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$";
	var assetprev4 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$";
	var assetprev5 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$";
	var prevname = $(".s7asset").val();
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
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".image-preview-name").text(prevname);

	$(".testurl_preview").on("error", function() {
		$(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
	});
	$("#inner-guides-checked").hide();
	$("#inner-guides-unchecked").show();
	return false;
});


$(".store-pdf").on("click", function() {
	"use strict";
	var param01 = "https://s7d1.scene7.com/is/image/jlatonio?layer=0&src=is(jlatonio/";
	var param02 = $(".s7image").data('val') + ")&wid=1200&size=1200,0&layer=1&pos=0,0&opac=100&size=900,600&color=000000,0&textPs={";
	var param03 = "\\fonttbl\\f%20" + $(".s7font1").data('val') + ";}{";
	var param04 = "\\*\\iscolortbl;" + $(".s7color1").data('val') + ";}\\f0\\fs40\\margl20\\margt0\\vertalc\\ql";
	var param05 = "\\cf1" + $(".s7heading").val() + "&textattr=300,crisp,maxRes&effect=-1&color=000000&op_blur=4&opac=75,100&blendmode=mult&pos=2,2&layer=2&pos=0,0&opac=100&size=900,600&color=000000,0&textPs={";
	var param06 = "\\fonttbl\\f%20" + $(".s7font2").data('val') + ";}{";
	var param07 = "\\*\\iscolortbl;" + $(".s7color2").data('val') + ";}\\f0\\fs35\\margl700\\margt600\\vertalc\\ql";
	var param08 = "\\cf1" + $(".s7subheader").val() + "&textattr=300,crisp,maxRes&effect=-1&color=000000&op_blur=4&opac=75,100&blendmode=mult&pos=2,2";
	var results = param01 + param02 + param03 + param04 + param05 + param06 + param07 + param08 + "&fmt=pdf";

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
	$(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").val("").focus().attr("placeholder", input_place_holder).css({
		"background": ""
	});
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
	$(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
	$(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
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

	var preset = $(".s7presets").val();
	var preset_single = "Single-Cropped";
	var preset_double = "Double-Cropped";
	var preset_accessories = "Accessories-Cropped";

	if (preset === "Single-Cropped") {
		$(".modifier1").text('Single-Device-160x600-CR');
		$(".modifier2").text('Single-Device-300x250-CR');
		$(".modifier3").text('Single-Device-300x600-CR');
		$(".modifier4").text('Single-Device-728x90-CR');
		$(".modifier5").text('Single-Device-970x250-CR');
	} else if (preset === "Double-Cropped") {
		$(".modifier1").text('Double-Device-160x600-CR');
		$(".modifier2").text('Double-Device-300x250-CR');
		$(".modifier3").text('Double-Device-300x600-CR');
		$(".modifier4").text('Double-Device-728x90-CR');
		$(".modifier5").text('Double-Device-970x250-CR');
	} else if (preset === "Accessories-Cropped") {
		$(".modifier1").text('DCO_Acc_160x600');
		$(".modifier2").text('DCO_Acc_300x250');
		$(".modifier3").text('DCO_Acc_300x600');
		$(".modifier4").text('DCO_Acc_728x90');
		$(".modifier5").text('DCO_Acc_970x250');
	}


	return false;
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
	$(".store-continue").trigger("click");
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

$(document).ready(function() {
	$("#outer-guides-checked").hide();
	$("#inner-guides-checked").hide();
	$("#spacing-unchecked").hide();
	$(".testp").addClass("spacing-15");
});


$("#outer-guides-checked").click(function() {

	$("#outer-guides-checked").hide();
	$("#outer-guides-unchecked").show();

	$(".testp").removeClass("red-guides");

});

$("#outer-guides-unchecked").click(function() {

	$("#outer-guides-unchecked").hide();
	$("#outer-guides-checked").show();

	$(".testp").addClass("red-guides");

});


$("#inner-guides-checked").click(function() {
	"use strict";
	$("#inner-guides-checked").hide();
	$("#inner-guides-unchecked").show();


	$(".store-continue").trigger("click");
	return false;

});


$("#spacing-unchecked").click(function() {

	$("#spacing-unchecked").hide();
	$("#spacing-checked").show();

	$(".testp").addClass("spacing-15");

});


$("#spacing-checked").click(function() {
	"use strict";
	$("#spacing-checked").hide();
	$("#spacing-unchecked").show();

	$(".testp").removeClass("spacing-15");
	return false;

});


$("#inner-guides-unchecked").click(function() {
	"use strict";
	$("#inner-guides-unchecked").hide();
	$("#inner-guides-checked").show();

	var assetprev1 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev2 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev3 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev4 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev5 = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$" + "&fmt=jpg&bgc=000000";
	var prevname = $(".s7asset").val();
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
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".image-preview-name").text(prevname);

	$(".testurl_preview").on("error", function() {
		$(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
	});
	return false;

});