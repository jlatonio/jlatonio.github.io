// Show default generated URL when loaded
var results = $(".testurl_preview").attr('src');
$(document).ready(function() {
	$(".s7asset").val("VZ_219957_19_Mot Z4 gra Sam Gal A50 Bk_DC_RGB_SIMP_v2_Cropped");
	$(".s7presets").closest(".custom-dropdown-outer").find(".custom-dropdown:nth-child(1)").click();
});


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
	$(".s7asset").val("VZ_201584_1_LG-G8-BL-F_DC_RGB_v1-cns");
	$(".s7presets").closest(".custom-dropdown-outer").find(".custom-dropdown:nth-child(1)").click();

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
	$(".generated_url").text("");
	$(".inspect_url").attr("src", "");
	return false;
});

// Click on individual image to generate URL feature
$(".testp,.guide-each").on("click", function() {
	"use strict";
	var select_preset = $(this).closest(".each-container-row").find(".preset-name").text();
	var select_image = "https://assets.verizon.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + select_preset + "$";
	var inspect_preset = "https://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + select_preset + "$";
	var inspect_image = "https://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$";
	$(".generated_url").text(select_image);
	$(".inspect_preset").attr("src", inspect_preset + "&req=resolve");
	$(".inspect_url").attr("src", inspect_image + "&req=imageprops");
	return false;
});

// Process results
$(".store-continue").on("click", function() {
	"use strict";
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$" + $(".asset-specs-add1").val();
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$" + $(".asset-specs-add2").val();
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$" + $(".asset-specs-add3").val();
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$" + $(".asset-specs-add4").val();
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$" + $(".asset-specs-add5").val();
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$" + $(".asset-specs-add-d1").val();
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$" + $(".asset-specs-add-m1").val();
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
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	$(".image-preview-name").text(prevname);

	$(".testurl_preview").on("error", function() {
		$(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
	});
	$("#inner-guides-checked").hide();
	$("#inner-guides-unchecked").show();

	$(".generated_url").text("");
	$(".inspect_url").attr("src", "");
	$(".inspect_preset").attr("src", "");

	return false;
});


// Additional Queries section: 
$(".image-add-specs-clear").hide();
$(".image-add-specs-go").on("click", function() {
	$(".store-continue").click();
});

$(".image-add-specs-clear").on("click", function() {
	$(this).closest(".image-add-specs-container").find(".image-add-specs").val("");
	$(".store-continue").click();
	$(this).hide();
		$(this).closest(".image-add-specs-container").find('.image-add-specs-go').css({
			"background-color": "",
			"color": "",
			"cursor": ""
		});
});

$(".image-add-specs").on("keyup change", function() {
	if ($(this).val().length > 0) {
		$(this).closest(".image-add-specs-container").find(".image-add-specs-clear").show();
		$(this).closest(".image-add-specs-container").find('.image-add-specs-go').css({
			"background-color": "#000",
			"color": "#fff",
			"cursor": "pointer"
		});

	} else {
		$(this).closest(".image-add-specs-container").find(".image-add-specs-clear").hide();
		$(this).closest(".image-add-specs-container").find('.image-add-specs-go').css({
			"background-color": "",
			"color": "",
			"cursor": ""
		});
	}
	return false;
});

$(".image-add-specs").on("blur", function() {
	if ($(this).val().length < 1) {
		$(this).closest(".image-add-specs-container").find('.image-add-specs-go').css({
			"background-color": "",
			"color": "",
			"cursor": ""
		});
	}
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
	$(".generated_url").text("");
	var preset = $(".s7presets").val();
	var preset_single = "Single-Cropped";
	var preset_double = "Double-Cropped";
	var preset_accessories = "Accessories-Cropped";



	if (preset === "Single-Cropped") {
        $(".each-mobile-container-row").hide(); 
        $(".each-default-container-row").slideDown("2000"); 
		$(".modifier1").text('Single-Device-160x600-CR').closest(".each-container-row").find(".asset-specs-size").text("160px x 600px");
		$(".modifier2").text('Single-Device-300x250-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 250px");
		$(".modifier3").text('Single-Device-300x600-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 600px");
		$(".modifier4").text('Single-Device-728x90-CR').closest(".each-container-row").find(".asset-specs-size").text("728px x 90px");
		$(".modifier5").text('Single-Device-970x250-CR').closest(".each-container-row").find(".asset-specs-size").text("970px x 250px");       
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".testurl_preview1").removeClass("testurl_preview1_alt");
		$(".testurl_preview2").removeClass("testurl_preview2_alt");
		$(".testurl_preview3").removeClass("testurl_preview3_alt");
		$(".testurl_preview4").removeClass("testurl_preview4_alt");
		$(".testurl_preview5").removeClass("testurl_preview5_alt");
        $(".image-add-specs").val("");
		$(".s7asset").val("VZ_201584_1_LG-G8-BL-F_DC_RGB_v1-cns");

	} else if (preset === "Single-Shadow") {
        $(".each-mobile-container-row").hide(); 
        $(".each-default-container-row").slideDown("2000"); 
		$(".modifier1").text('Single-Device-160x600-NC').closest(".each-container-row").find(".asset-specs-size").text("160px x 600px");
		$(".modifier2").text('Single-Device-300x250-NC').closest(".each-container-row").find(".asset-specs-size").text("300px x 250px");
		$(".modifier3").text('Single-Device-300x600-NC').closest(".each-container-row").find(".asset-specs-size").text("300px x 600px");
		$(".modifier4").text('Single-Device-728x90-NC').closest(".each-container-row").find(".asset-specs-size").text("728px x 90px");
		$(".modifier5").text('Single-Device-970x250-NC').closest(".each-container-row").find(".asset-specs-size").text("970px x 250px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".testurl_preview1").removeClass("testurl_preview1_alt");
		$(".testurl_preview2").removeClass("testurl_preview2_alt");
		$(".testurl_preview3").removeClass("testurl_preview3_alt");
		$(".testurl_preview4").removeClass("testurl_preview4_alt");
		$(".testurl_preview5").removeClass("testurl_preview5_alt");
        $(".image-add-specs-clear").click();
		$(".s7asset").val("VZ_201584_1_LG-G8-BL-F_OLA_RGB_v1");

	} else if (preset === "Double/Triple-Cropped") {
        $(".each-mobile-container-row").hide(); 
        $(".each-default-container-row").slideDown("2000"); 
		$(".modifier1").text('Double-Device-160x600-CR').closest(".each-container-row").find(".asset-specs-size").text("160px x 600px");
		$(".modifier2").text('Double-Device-300x250-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 250px");
		$(".modifier3").text('Double-Device-300x600-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 600px");
		$(".modifier4").text('Double-Device-728x90-CR').closest(".each-container-row").find(".asset-specs-size").text("728px x 90px");
		$(".modifier5").text('Double-Device-970x250-CR').closest(".each-container-row").find(".asset-specs-size").text("970px x 250px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".testurl_preview1").removeClass("testurl_preview1_alt");
		$(".testurl_preview2").removeClass("testurl_preview2_alt");
		$(".testurl_preview3").removeClass("testurl_preview3_alt");
		$(".testurl_preview4").removeClass("testurl_preview4_alt");
		$(".testurl_preview5").removeClass("testurl_preview5_alt");
        $(".image-add-specs-clear").click();
		$(".s7asset").val("VZ_219957_19_Mot Z4 gra Sam Gal A50 Bk_DC_RGB_SIMP_v2_Cropped");

	} else if (preset === "Accessories-Cropped") {
        $(".each-mobile-container-row").hide(); 
        $(".each-default-container-row").slideDown("2000"); 
		$(".modifier1").text('DCO_Acc_160x600').closest(".each-container-row").find(".asset-specs-size").text("260px x 360px");
		$(".modifier2").text('DCO_Acc_300x250').closest(".each-container-row").find(".asset-specs-size").text("370px x 290px");
		$(".modifier3").text('DCO_Acc_300x600').closest(".each-container-row").find(".asset-specs-size").text("260px x 600px");
		$(".modifier4").text('DCO_Acc_728x90').closest(".each-container-row").find(".asset-specs-size").text("240px x 760px");
		$(".modifier5").text('DCO_Acc_970x250').closest(".each-container-row").find(".asset-specs-size").text("356px x 312px");
		$("#css-guides-unchecked,.notes-show-guides").show();
		$("#css-guides-checked").hide();
		$(".testurl_preview1").addClass("testurl_preview1_alt");
		$(".testurl_preview2").addClass("testurl_preview2_alt");
		$(".testurl_preview3").addClass("testurl_preview3_alt");
		$(".testurl_preview4").addClass("testurl_preview4_alt");
		$(".testurl_preview5").addClass("testurl_preview5_alt");
        $(".image-add-specs-clear").click();
		$(".s7asset").val("jbl-live-pro-earbuds-black-jblliveproptwsbam-g");

	} else if (preset === "Other-Cropped") {
        $(".each-mobile-container-row").hide(); 
        $(".each-default-container-row").slideDown("2000"); 
		$(".modifier1").text('Other-Device-160x600-CR').closest(".each-container-row").find(".asset-specs-size").text("160px x 600px");
		$(".modifier2").text('Other-Device-300x250-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 250px");
		$(".modifier3").text('Other-Device-300x600-CR').closest(".each-container-row").find(".asset-specs-size").text("300px x 600px");
		$(".modifier4").text('Other-Device-728x90-CR').closest(".each-container-row").find(".asset-specs-size").text("728px x 90px");
		$(".modifier5").text('Other-Device-970x250-CR').closest(".each-container-row").find(".asset-specs-size").text("970px x 250px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".testurl_preview1").removeClass("testurl_preview1_alt");
		$(".testurl_preview2").removeClass("testurl_preview2_alt");
		$(".testurl_preview3").removeClass("testurl_preview3_alt");
		$(".testurl_preview4").removeClass("testurl_preview4_alt");
		$(".testurl_preview5").removeClass("testurl_preview5_alt");
        $(".image-add-specs-clear").click();
		$("#guides-other-unchecked").trigger("click");
        
	} else if (preset === "Web-Responsive Design") {
        $(".each-mobile-container-row").slideDown("2000");
        $(".each-default-container-row").hide();
		$(".modifier-d1").text('deals-desktop').closest(".each-container-row").find(".asset-specs-size").text("1272px x 477px");    
		$(".modifier-m1").text('deals-mobile').closest(".each-container-row").find(".asset-specs-size").text("767px x 640px"); 
		$(".testurl_preview-d1").addClass("testurl_preview-d1_alt");
		$(".testurl_preview-m1").addClass("testurl_preview-m1_alt");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
        $(".image-add-specs").val("");
		$(".s7asset").val("VZ_201584_1_LG-G8-BL-F_OLA_RGB_v1");
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
$(document.body).on("click", ".custom-dropdown", function() {
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
    $(".each-mobile-container-row").hide(); 
	$("#guides-single-checked").hide();
	$("#guides-double-checked").hide();
	$("#guides-accessories-checked").hide();
	$("#guides-other-checked").hide();
	$("#css-guides-checked").hide();
	$("#css-guides-unchecked").hide();
	$("#inner-guides-checked").hide();
	$("#HTML-guides-checked").hide();
	$("#alpha-guides-checked").hide();
	$("#original-guides-checked").hide();
	$("#css-guides-checked").hide();
	$(".notes-show-guides").hide();
	return false;
});

$("#guides-single-checked").click(function() {
	$("#guides-single-checked").hide();
	$("#guides-single-unchecked").show();
	$(".guide-container1").removeClass("guide-container-single-1");
	$(".guide-container2").removeClass("guide-container-single-2");
	$(".guide-container3").removeClass("guide-container-single-3");
	$(".guide-container4").removeClass("guide-container-single-4");
	$(".guide-container5").removeClass("guide-container-single-5");
	$(".guide-container-d1").removeClass("guide-container-single-d1");
	$(".guide-container-m1").removeClass("guide-container-single-m1");
	return false;
});

$("#guides-single-unchecked").click(function() {
	$("#guides-double-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-single-unchecked").hide();
	$("#guides-single-checked").show();
	$(".guide-container1").animate().addClass("guide-container-single-1");
	$(".guide-container2").addClass("guide-container-single-2");
	$(".guide-container3").addClass("guide-container-single-3");
	$(".guide-container4").addClass("guide-container-single-4");
	$(".guide-container5").addClass("guide-container-single-5");
	$(".guide-container-d1").addClass("guide-container-single-d1");
	$(".guide-container-m1").addClass("guide-container-single-m1");
	return false;
});

$("#guides-double-checked").click(function() {
	$("#guides-double-checked").hide();
	$("#guides-double-unchecked").show();
	$(".guide-container1").removeClass("guide-container-double-1");
	$(".guide-container2").removeClass("guide-container-double-2");
	$(".guide-container3").removeClass("guide-container-double-3");
	$(".guide-container4").removeClass("guide-container-double-4");
	$(".guide-container5").removeClass("guide-container-double-5");
	$(".guide-container-d1").removeClass("guide-container-single-d1");
	$(".guide-container-m1").removeClass("guide-container-single-m1");
	return false;
});

$("#guides-double-unchecked").click(function() {
	$("#guides-single-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-double-unchecked").hide();
	$("#guides-double-checked").show();
	$(".guide-container1").addClass("guide-container-double-1");
	$(".guide-container2").addClass("guide-container-double-2");
	$(".guide-container3").addClass("guide-container-double-3");
	$(".guide-container4").addClass("guide-container-double-4");
	$(".guide-container5").addClass("guide-container-double-5");
	$(".guide-container-d1").addClass("guide-container-single-d1");
	$(".guide-container-m1").addClass("guide-container-single-m1");
	return false;
});


$("#guides-accessories-checked").click(function() {
	$("#guides-accessories-checked").hide();
	$("#guides-accessories-unchecked").show();
	$(".guide-container1").removeClass("guide-container-accessories-1");
	$(".guide-container2").removeClass("guide-container-accessories-2");
	$(".guide-container3").removeClass("guide-container-accessories-3");
	$(".guide-container4").removeClass("guide-container-accessories-4");
	$(".guide-container5").removeClass("guide-container-accessories-5");
	$(".guide-container-d1").removeClass("guide-container-single-d1");
	$(".guide-container-m1").removeClass("guide-container-single-m1");
	return false;
});

$("#guides-accessories-unchecked").click(function() {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-accessories-unchecked").hide();
	$("#guides-accessories-checked").show();
	$(".guide-container1").addClass("guide-container-accessories-1");
	$(".guide-container2").addClass("guide-container-accessories-2");
	$(".guide-container3").addClass("guide-container-accessories-3");
	$(".guide-container4").addClass("guide-container-accessories-4");
	$(".guide-container5").addClass("guide-container-accessories-5");
	$(".guide-container-d1").addClass("guide-container-single-d1");
	$(".guide-container-m1").addClass("guide-container-single-m1");
	return false;
});

$("#guides-other-checked").click(function() {
	$("#guides-other-checked").hide();
	$("#guides-other-unchecked").show();
	$(".guide-container1").removeClass("guide-container-other-1");
	$(".guide-container2").removeClass("guide-container-other-2");
	$(".guide-container3").removeClass("guide-container-other-3");
	$(".guide-container4").removeClass("guide-container-other-4");
	$(".guide-container5").removeClass("guide-container-other-5");
	$(".guide-container-d1").removeClass("guide-container-single-d1");
	$(".guide-container-m1").removeClass("guide-container-single-m1");
	return false;
});

$("#guides-other-unchecked").click(function() {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-unchecked").hide();
	$("#guides-other-checked").show();
	$(".guide-container1").addClass("guide-container-other-1");
	$(".guide-container2").addClass("guide-container-other-2");
	$(".guide-container3").addClass("guide-container-other-3");
	$(".guide-container4").addClass("guide-container-other-4");
	$(".guide-container5").addClass("guide-container-other-5");
	$(".guide-container-d1").addClass("guide-container-single-d1");
	$(".guide-container-m1").addClass("guide-container-single-m1");
	return false;
});

$("#HTML-guides-unchecked").click(function() {
	"use strict";
	$("#HTML-guides-unchecked").hide();
	$("#HTML-guides-checked").show();
	$(".each-container").addClass("background-alt1");
	return false;
});

$("#HTML-guides-checked").click(function() {
	"use strict";
	$("#HTML-guides-checked").hide();
	$("#HTML-guides-unchecked").show();
	$(".each-container").removeClass("background-alt1");
	return false;
});

$("#inner-guides-checked").click(function() {
	"use strict";
	$("#inner-guides-unchecked").show();
	$("#inner-guides-checked").hide();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	return false;
});

$("#inner-guides-unchecked").click(function() {
	"use strict";
	$("#original-guides-checked").trigger("click");
	$("#inner-guides-unchecked").hide();
	$("#inner-guides-checked").show();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$" + "&fmt=jpg&bgc=000000";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$" + "&fmt=jpg&bgc=000000";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	return false;

});

$("#alpha-guides-checked").click(function() {
	"use strict";
	$("#alpha-guides-unchecked").show();
	$("#alpha-guides-checked").hide();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	$(".each-container").removeClass("background-alt2");
	return false;
});

$("#alpha-guides-unchecked").click(function() {
	"use strict";
	$("#inner-guides-checked").trigger("click");
	$("#alpha-guides-unchecked").hide();
	$("#alpha-guides-checked").show();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$" + "&fmt=png-alpha";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$" + "&fmt=png-alpha";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$" + "&fmt=png-alpha";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$" + "&fmt=png-alpha";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$" + "&fmt=png-alpha";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$" + "&fmt=png-alpha";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$" + "&fmt=png-alpha";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	$(".each-container").addClass("background-alt2");
	return false;

});

$("#original-guides-checked").click(function() {
	"use strict";
	$("#original-guides-unchecked").show();
	$("#original-guides-checked").hide();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier1").text() + "$";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier2").text() + "$";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier3").text() + "$";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier4").text() + "$";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier5").text() + "$";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-d1").text() + "$";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?$" + $(".modifier-m1").text() + "$";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	return false;
});

$("#original-guides-unchecked").click(function() {
	"use strict";
	$("#inner-guides-checked").trigger("click");

	$("#original-guides-unchecked").hide();
	$("#original-guides-checked").show();
	var assetprev1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprev2 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprev3 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprev4 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprev5 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprevd1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	var assetprevm1 = "http://testvipd1.scene7.com/is/image/verizonqa/" + $(".s7asset").val() + "?&scl=1&fmt=jpg";
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	$(".testurl_preview-d1").attr('src', assetprevd1);
	$(".testurl_preview-m1").attr('src', assetprevm1);
	return false;
});


$("#css-guides-checked").click(function() {
	"use strict";
	$("#css-guides-unchecked").show();
	$("#css-guides-checked").hide();
	$(".testurl_preview1").addClass("testurl_preview1_alt");
	$(".testurl_preview2").addClass("testurl_preview2_alt");
	$(".testurl_preview3").addClass("testurl_preview3_alt");
	$(".testurl_preview4").addClass("testurl_preview4_alt");
	$(".testurl_preview5").addClass("testurl_preview5_alt");
	$(".testurl_preview-d1").addClass("testurl_preview-d1_alt");
	$(".testurl_preview-m1").addClass("testurl_preview-m1_alt");
	return false;
});

$("#css-guides-unchecked").click(function() {
	"use strict";
	$("#css-guides-unchecked").hide();
	$("#css-guides-checked").show();
	$(".testurl_preview1").removeClass("testurl_preview1_alt");
	$(".testurl_preview2").removeClass("testurl_preview2_alt");
	$(".testurl_preview3").removeClass("testurl_preview3_alt");
	$(".testurl_preview4").removeClass("testurl_preview4_alt");
	$(".testurl_preview5").removeClass("testurl_preview5_alt");
	$(".testurl_preview-d1").removeClass("testurl_preview-d1_alt");
	$(".testurl_preview-m1").removeClass("testurl_preview-m1_alt");
	return false;
});