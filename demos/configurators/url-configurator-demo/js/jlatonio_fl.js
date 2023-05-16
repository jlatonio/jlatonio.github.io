$(document).ready(function () {
    "use strict";
	$(".s7presets").closest(".custom-dropdown-outer").find(".custom-dropdown:nth-child(1)").click();
});

$(function () {
	"use strict";
	$("input[type='text'], input[type='number']").each(function () {
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

$(".store-clear").on("click", function () {
	"use strict";
 
	$(".s7presets").closest(".custom-dropdown-outer").find(".custom-dropdown:nth-child(1)").click();
	$(".store-continue").trigger("click");
	$("input[type='text'], input[type='number']").each(function () {
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

$(".testp,.guide-each").on("click", function () {
	"use strict";
	var select_preset = $(this).closest(".each-container-row").find(".preset-name").text();
	var select_image = $(this).attr("src");
	var inspect_preset = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + "?$" + select_preset + "$";
	var inspect_image = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + "?$";
	$(".generated_url").text(select_image);
	$(".inspect_preset").attr("src", inspect_preset + "&req=resolve");
	$(".inspect_url").attr("src", inspect_image + "&req=imageprops");
	return false;
});

$(".store-continue").on("click", function () {
	"use strict";
	var assetprev1 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier1").text();
	var assetprev2 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier2").text();
	var assetprev3 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier3").text();
	var assetprev4 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier4").text();
	var assetprev5 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier5").text();
	var assetprev6 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier6").text();
	var prevname = $(".s7asset").val();
	var isValid = true;
	$(".s7required").each(function () {
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
	$(".testurl_preview6").attr('src', assetprev6);
	$(".image-preview-name").text(prevname);

	$(".testurl_preview").on("error", function () {
		$(this).closest(".column-testurl").find(".generated_url").text("Preview Not Available. Complete required fields.");
	});

	$("#shadow-checked").click();
	$(".generated_url").text("");
	$(".inspect_url").attr("src", "");
	$(".inspect_preset").attr("src", "");

	return false;
});

$(".preset-name, .asset-shadow, .asset-color, .asset-format").on("keyup change", function () {
    "use strict";
	var assetclr = $(this).closest(".each-container-row").find(".asset-color").text();
	var assetshadow = $(this).closest(".each-container-row").find(".asset-shadow").text();
	var assetfmt = $(this).closest(".each-container-row").find(".asset-format").text();
	var prevname = $(this).closest(".each-container-row").find(".image-preview-name").text();
	var prevmods = $(this).closest(".each-container-row").find(".preset-name").text();

	if ($(this).html().length > 0) {
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);

	}
	return false;
});

$(".custom-dropdown-scroll").closest("form").find(".custom-dropdown-open").on("click", function () {
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

$(".custom-dropdown-close").on("click", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
	return false;
});

$(".custom-dropdown-relative").hover(function () {
    "use strict";
	$(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", "1");
}, function () {
    "use strict";
	$(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", ".4");
	return false;
});

$(function () {
	"use strict";
	$("input[type='text'], input[type='number']").on("keyup change", function () {
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

$(".custom-select-close").hide();
$("input[type='text'],input[type='number']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function () {
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

$("html, body, input").on("click", function () {
	"use strict";
	if ($(this).not(".custom-dropdown-outer")) {
		$(".custom-dropdown-close").trigger("click");
	}
});

$(".custom-dropdown").on("click", function () {
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

	if (preset === "Single Device") {
		$(".pdp-container-row").hide();
        $(".guides-checkbox-outer-container").show();
        $(".shadow-checkbox-container").show();
		$(".mktg-container-row").slideDown();
		$(".modifier1").text('?wid=1200&hei=1200&size=486,0&rect=440,0,320,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("320px x 1200px");
		$(".modifier2").text('?wid=600&hei=600&size=0,520&rect=0,50,600,500&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 500px");
		$(".modifier3").text('?wid=1200&hei=1200&size=774,0&rect=300,0,600,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 1200px");
		$(".modifier4").text('?wid=1456&hei=1456&size=630,0&rect=0,50,1456,180&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1456px x 180px");
		$(".modifier5").text('?wid=1940&hei=1940&size=1200,0&rect=0,50,1940,500&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1940px x 500px");
		$(".modifier6").text('?scl=1&extend=-318,-318,-318,-318').closest(".pdp-container-row").find(".asset-specs-size").text("2366px x 2366px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".s7asset").val("creative-demo-single-ns");

		$("#shadow-unchecked").click(function () {
			$("#shadow-unchecked").hide();
			$("#shadow-checked").show();
			$("#original-guides-unchecked").show();
			$("#original-guides-checked").hide();

			$(".asset-shadow").each(function () {
				var prevname = $(this).closest(".each-container-row").find(".image-preview-name").text();
				var prevmods1 = $(".asset-shadow-01").closest(".each-container-row").find(".preset-name").text();
				var prevmods2 = $(".asset-shadow-02").closest(".each-container-row").find(".preset-name").text();
				var prevmods3 = $(".asset-shadow-03").closest(".each-container-row").find(".preset-name").text();
				var prevmods4 = $(".asset-shadow-04").closest(".each-container-row").find(".preset-name").text();
				var prevmods5 = $(".asset-shadow-05").closest(".each-container-row").find(".preset-name").text();
				var assetclr = $(this).closest(".each-container-row").find(".asset-color").text();
				var assetfmt = $(this).closest(".each-container-row").find(".asset-format").text();

				var shadowparam1 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=486,0";
				var shadowparam2 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=0,520";
				var shadowparam3 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=774,0";
				var shadowparam4 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=630,0";
				var shadowparam5 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=1200,0";

				$(".asset-shadow-label").show();
				$(".asset-shadow-01").text(shadowparam1);
				$(".asset-shadow-02").text(shadowparam2);
				$(".asset-shadow-03").text(shadowparam3);
				$(".asset-shadow-04").text(shadowparam4);
				$(".asset-shadow-05").text(shadowparam5);

				$(".testurl_preview1").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods1 + shadowparam1 + assetfmt + assetclr);
				$(".testurl_preview2").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods2 + shadowparam2 + assetfmt + assetclr);
				$(".testurl_preview3").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods3 + shadowparam3 + assetfmt + assetclr);
				$(".testurl_preview4").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods4 + shadowparam4 + assetfmt + assetclr);
				$(".testurl_preview5").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods5 + shadowparam5 + assetfmt + assetclr);
			});
			return false;
		});

	} else if (preset === "Double Device") {
		$(".pdp-container-row").hide();
        $(".guides-checkbox-outer-container").show();
        $(".shadow-checkbox-container").show();
		$(".mktg-container-row").slideDown();
		$(".modifier1").text('?wid=1200&hei=1200&size=480,0&rect=440,0,320,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("320px x 1200px");
		$(".modifier2").text('?wid=600&hei=520&size=0,520&rect=0,10,600,500&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 500px");
		$(".modifier3").text('?wid=1200&hei=1200&size=886,0&rect=300,0,600,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 1200px");
		$(".modifier4").text('?wid=1456&hei=1456&size=710,0&rect=0,56,1456,180&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1456px x 180px");
		$(".modifier5").text('?wid=1940&hei=1940&size=1500,0&rect=0,80,1940,500&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1940px x 500px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".modifier6").text('?scl=1&extend=-318,-318,-318,-318').closest(".pdp-container-row").find(".asset-specs-size").text("2366px x 2366px");
        $("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".s7asset").val("creative-demo-double-ns");

		$("#shadow-unchecked").click(function () {
			$("#shadow-unchecked").hide();
			$("#shadow-checked").show();
			$("#original-guides-unchecked").show();
			$("#original-guides-checked").hide();

			$(".asset-shadow").each(function () {
				var prevname = $(this).closest(".each-container-row").find(".image-preview-name").text();
				var prevmods1 = $(".asset-shadow-01").closest(".each-container-row").find(".preset-name").text();
				var prevmods2 = $(".asset-shadow-02").closest(".each-container-row").find(".preset-name").text();
				var prevmods3 = $(".asset-shadow-03").closest(".each-container-row").find(".preset-name").text();
				var prevmods4 = $(".asset-shadow-04").closest(".each-container-row").find(".preset-name").text();
				var prevmods5 = $(".asset-shadow-05").closest(".each-container-row").find(".preset-name").text();
				var assetclr = $(this).closest(".each-container-row").find(".asset-color").text();
				var assetfmt = $(this).closest(".each-container-row").find(".asset-format").text();

				var shadowparam1 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=480,0";
				var shadowparam2 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=0,520";
				var shadowparam3 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=886,0";
				var shadowparam4 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=710,0";
				var shadowparam5 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=1500,0";

				$(".asset-shadow-label").show();
				$(".asset-shadow-01").text(shadowparam1);
				$(".asset-shadow-02").text(shadowparam2);
				$(".asset-shadow-03").text(shadowparam3);
				$(".asset-shadow-04").text(shadowparam4);
				$(".asset-shadow-05").text(shadowparam5);

				$(".testurl_preview1").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods1 + shadowparam1 + assetfmt + assetclr);
				$(".testurl_preview2").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods2 + shadowparam2 + assetfmt + assetclr);
				$(".testurl_preview3").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods3 + shadowparam3 + assetfmt + assetclr);
				$(".testurl_preview4").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods4 + shadowparam4 + assetfmt + assetclr);
				$(".testurl_preview5").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods5 + shadowparam5 + assetfmt + assetclr);
			});
			return false;
		});

	} else if (preset === "Triple Device") {
		$(".pdp-container-row").hide();
        $(".guides-checkbox-outer-container").show();
        $(".shadow-checkbox-container").show();
		$(".mktg-container-row").slideDown();
		$(".modifier1").text('?wid=1200&hei=1200&size=480,0&rect=440,0,320,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("320px x 1200px");
		$(".modifier2").text('?wid=600&hei=520&size=0,520&rect=0,10,600,500&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 500px");
		$(".modifier3").text('?wid=1200&hei=1200&size=886,0&rect=300,0,600,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 1200px");
		$(".modifier4").text('?wid=1456&hei=1456&size=710,0&rect=0,56,1456,180&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1456px x 180px");
		$(".modifier5").text('?wid=1940&hei=1940&size=1500,0&rect=0,80,1940,500&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1940px x 500px");
		$(".modifier6").text('?scl=1&extend=-318,-318,-318,-318').closest(".pdp-container-row").find(".asset-specs-size").text("2366px x 2366px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".s7asset").val("creative-demo-triple-ns");

		$("#shadow-unchecked").click(function () {
			"use strict";
			$("#shadow-unchecked").hide();
			$("#shadow-checked").show();
			$("#original-guides-unchecked").show();
			$("#original-guides-checked").hide();

			$(".asset-shadow").each(function () {
				var prevname = $(this).closest(".each-container-row").find(".image-preview-name").text();
				var prevmods1 = $(".asset-shadow-01").closest(".each-container-row").find(".preset-name").text();
				var prevmods2 = $(".asset-shadow-02").closest(".each-container-row").find(".preset-name").text();
				var prevmods3 = $(".asset-shadow-03").closest(".each-container-row").find(".preset-name").text();
				var prevmods4 = $(".asset-shadow-04").closest(".each-container-row").find(".preset-name").text();
				var prevmods5 = $(".asset-shadow-05").closest(".each-container-row").find(".preset-name").text();
				var assetclr = $(this).closest(".each-container-row").find(".asset-color").text();
				var assetfmt = $(this).closest(".each-container-row").find(".asset-format").text();

				var shadowparam1 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=480,0";
				var shadowparam2 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=0,520";
				var shadowparam3 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=886,0";
				var shadowparam4 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=710,0";
				var shadowparam5 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=1500,0";

				$(".asset-shadow-label").show();
				$(".asset-shadow-01").text(shadowparam1);
				$(".asset-shadow-02").text(shadowparam2);
				$(".asset-shadow-03").text(shadowparam3);
				$(".asset-shadow-04").text(shadowparam4);
				$(".asset-shadow-05").text(shadowparam5);

				$(".testurl_preview1").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods1 + shadowparam1 + assetfmt + assetclr);
				$(".testurl_preview2").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods2 + shadowparam2 + assetfmt + assetclr);
				$(".testurl_preview3").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods3 + shadowparam3 + assetfmt + assetclr);
				$(".testurl_preview4").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods4 + shadowparam4 + assetfmt + assetclr);
				$(".testurl_preview5").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods5 + shadowparam5 + assetfmt + assetclr);
			});
			return false;
		});

	} else if (preset === "Bundle Device") {
		$(".pdp-container-row").hide();
        $(".guides-checkbox-outer-container").show();
        $(".shadow-checkbox-container").show();
		$(".mktg-container-row").slideDown();
		$(".modifier1").text('?wid=1200&hei=1200&size=370,0&rect=440,0,320,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("320px x 1200px");
		$(".modifier2").text('?wid=600&hei=520&size=0,520&rect=0,10,600,500&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 500px");
		$(".modifier3").text('?wid=1200&hei=1200&size=684,0&rect=300,0,600,1200&align=0,0&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("600px x 1200px");
		$(".modifier4").text('?wid=1456&hei=1456&size=550,0&rect=0,40,1456,180&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1456px x 180px");
		$(".modifier5").text('?wid=1940&hei=1940&size=1134,0&rect=0,42,1940,500&align=0,-1&resmode=sharp2').closest(".each-container-row").find(".asset-specs-size").text("1940px x 500px");
		$(".modifier6").text('?scl=1&extend=-318,-318,-318,-318').closest(".pdp-container-row").find(".asset-specs-size").text("2366px x 2366px");
		$("#css-guides-checked,#css-guides-unchecked,.notes-show-guides").hide();
		$(".s7asset").val("creative-demo-bundle-ns");

		$("#shadow-unchecked").click(function () {
			"use strict";
			$("#shadow-unchecked").hide();
			$("#shadow-checked").show();
			$("#original-guides-unchecked").show();
			$("#original-guides-checked").hide();

			$(".asset-shadow").each(function () {
				var prevname = $(this).closest(".each-container-row").find(".image-preview-name").text();
				var prevmods1 = $(".asset-shadow-01").closest(".each-container-row").find(".preset-name").text();
				var prevmods2 = $(".asset-shadow-02").closest(".each-container-row").find(".preset-name").text();
				var prevmods3 = $(".asset-shadow-03").closest(".each-container-row").find(".preset-name").text();
				var prevmods4 = $(".asset-shadow-04").closest(".each-container-row").find(".preset-name").text();
				var prevmods5 = $(".asset-shadow-05").closest(".each-container-row").find(".preset-name").text();
				var assetclr = $(this).closest(".each-container-row").find(".asset-color").text();
				var assetfmt = $(this).closest(".each-container-row").find(".asset-format").text();

				var shadowparam1 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=370,0";
				var shadowparam2 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=0,520";
				var shadowparam3 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=684,0";
				var shadowparam4 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=550,0";
				var shadowparam5 = "&layer=1&src=verizondev/" + prevname + "_sh" + "&size=1134,0";

				$(".asset-shadow-label").show();
				$(".asset-shadow-01").text(shadowparam1);
				$(".asset-shadow-02").text(shadowparam2);
				$(".asset-shadow-03").text(shadowparam3);
				$(".asset-shadow-04").text(shadowparam4);
				$(".asset-shadow-05").text(shadowparam5);

				$(".testurl_preview1").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods1 + shadowparam1 + assetfmt + assetclr);
				$(".testurl_preview2").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods2 + shadowparam2 + assetfmt + assetclr);
				$(".testurl_preview3").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods3 + shadowparam3 + assetfmt + assetclr);
				$(".testurl_preview4").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods4 + shadowparam4 + assetfmt + assetclr);
				$(".testurl_preview5").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods5 + shadowparam5 + assetfmt + assetclr);
			});
			return false;
		});

	} else if (preset === "PDP") {
        "use strict";    
		$(".pdp-container-row").show();
        $(".guides-checkbox-outer-container").hide();
        $(".shadow-checkbox-container").hide();
		$(".mktg-container-row").hide();
	}
	return false;
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

$(document.body).on("click", ".custom-dropdown", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
	$(this).closest(".custom-dropdown-outer").find(this).addClass("active");
	return false;
});

$(".custom-dropdown").on("click", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active");
	$(this).closest(".custom-dropdown-outer").find(this).addClass("active");
	$(".store-continue").trigger("click");
	return false;
});

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

$(document).ready(function () {
	$("#guides-single-checked").hide();
	$("#guides-double-checked").hide();
	$("#guides-triple-checked").hide();
	$("#guides-bundle-checked").hide();
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
	$("#shadow-checked").hide();
	$(".asset-format-label").hide();
	$(".asset-color-label").hide();
	$(".asset-shadow-label").hide();
	$(".pdp-container-row").hide();
	return false;
});

$("#guides-single-checked").click(function () {
	$("#guides-single-checked").hide();
	$("#guides-single-unchecked").show();
	$(".guide-container1").removeClass("guide-container-single-1");
	$(".guide-container2").removeClass("guide-container-single-2");
	$(".guide-container3").removeClass("guide-container-single-3");
	$(".guide-container4").removeClass("guide-container-single-4");
	$(".guide-container5").removeClass("guide-container-single-5");
	return false;
});

$("#guides-single-unchecked").click(function () {
	$("#guides-double-checked").trigger("click");
	$("#guides-triple-checked").trigger("click");
	$("#guides-bundle-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-single-unchecked").hide();
	$("#guides-single-checked").show();
	$(".guide-container1").animate().addClass("guide-container-single-1");
	$(".guide-container2").addClass("guide-container-single-2");
	$(".guide-container3").addClass("guide-container-single-3");
	$(".guide-container4").addClass("guide-container-single-4");
	$(".guide-container5").addClass("guide-container-single-5");
	return false;
});

$("#guides-double-checked").click(function () {
	$("#guides-double-checked").hide();
	$("#guides-double-unchecked").show();
	$(".guide-container1").removeClass("guide-container-double-1");
	$(".guide-container2").removeClass("guide-container-double-2");
	$(".guide-container3").removeClass("guide-container-double-3");
	$(".guide-container4").removeClass("guide-container-double-4");
	$(".guide-container5").removeClass("guide-container-double-5");
	return false;
});

$("#guides-double-unchecked").click(function () {
	$("#guides-single-checked").trigger("click");
	$("#guides-triple-checked").trigger("click");
	$("#guides-bundle-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-double-unchecked").hide();
	$("#guides-double-checked").show();
	$(".guide-container1").addClass("guide-container-double-1");
	$(".guide-container2").addClass("guide-container-double-2");
	$(".guide-container3").addClass("guide-container-double-3");
	$(".guide-container4").addClass("guide-container-double-4");
	$(".guide-container5").addClass("guide-container-double-5");
	return false;
});

$("#guides-triple-checked").click(function () {
	$("#guides-triple-checked").hide();
	$("#guides-triple-unchecked").show();
	$(".guide-container1").removeClass("guide-container-double-1");
	$(".guide-container2").removeClass("guide-container-double-2");
	$(".guide-container3").removeClass("guide-container-double-3");
	$(".guide-container4").removeClass("guide-container-double-4");
	$(".guide-container5").removeClass("guide-container-double-5");
	return false;
});

$("#guides-triple-unchecked").click(function () {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-bundle-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-triple-unchecked").hide();
	$("#guides-triple-checked").show();
	$(".guide-container1").addClass("guide-container-double-1");
	$(".guide-container2").addClass("guide-container-double-2");
	$(".guide-container3").addClass("guide-container-double-3");
	$(".guide-container4").addClass("guide-container-double-4");
	$(".guide-container5").addClass("guide-container-double-5");
	return false;
});

$("#guides-bundle-checked").click(function () {
	$("#guides-bundle-checked").hide();
	$("#guides-bundle-unchecked").show();
	$(".guide-container1").removeClass("guide-container-double-1");
	$(".guide-container2").removeClass("guide-container-double-2");
	$(".guide-container3").removeClass("guide-container-double-3");
	$(".guide-container4").removeClass("guide-container-double-4");
	$(".guide-container5").removeClass("guide-container-double-5");
	return false;
});

$("#guides-bundle-unchecked").click(function () {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-triple-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-bundle-unchecked").hide();
	$("#guides-bundle-checked").show();
	$(".guide-container1").addClass("guide-container-double-1");
	$(".guide-container2").addClass("guide-container-double-2");
	$(".guide-container3").addClass("guide-container-double-3");
	$(".guide-container4").addClass("guide-container-double-4");
	$(".guide-container5").addClass("guide-container-double-5");
	return false;
});

$("#guides-accessories-checked").click(function () {
	$("#guides-accessories-checked").hide();
	$("#guides-accessories-unchecked").show();
	$(".guide-container1").removeClass("guide-container-accessories-1");
	$(".guide-container2").removeClass("guide-container-accessories-2");
	$(".guide-container3").removeClass("guide-container-accessories-3");
	$(".guide-container4").removeClass("guide-container-accessories-4");
	$(".guide-container5").removeClass("guide-container-accessories-5");
	return false;
});

$("#guides-accessories-unchecked").click(function () {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-triple-checked").trigger("click");
	$("#guides-bundle-checked").trigger("click");
	$("#guides-other-checked").trigger("click");
	$("#guides-accessories-unchecked").hide();
	$("#guides-accessories-checked").show();
	$(".guide-container1").addClass("guide-container-accessories-1");
	$(".guide-container2").addClass("guide-container-accessories-2");
	$(".guide-container3").addClass("guide-container-accessories-3");
	$(".guide-container4").addClass("guide-container-accessories-4");
	$(".guide-container5").addClass("guide-container-accessories-5");
	return false;
});

$("#guides-other-checked").click(function () {
	$("#guides-other-checked").hide();
	$("#guides-other-unchecked").show();
	$(".guide-container1").removeClass("guide-container-other-1");
	$(".guide-container2").removeClass("guide-container-other-2");
	$(".guide-container3").removeClass("guide-container-other-3");
	$(".guide-container4").removeClass("guide-container-other-4");
	$(".guide-container5").removeClass("guide-container-other-5");
	return false;
});

$("#guides-other-unchecked").click(function () {
	$("#guides-single-checked").trigger("click");
	$("#guides-double-checked").trigger("click");
	$("#guides-triple-checked").trigger("click");
	$("#guides-bundle-checked").trigger("click");
	$("#guides-accessories-checked").trigger("click");
	$("#guides-other-unchecked").hide();
	$("#guides-other-checked").show();
	$(".guide-container1").addClass("guide-container-other-1");
	$(".guide-container2").addClass("guide-container-other-2");
	$(".guide-container3").addClass("guide-container-other-3");
	$(".guide-container4").addClass("guide-container-other-4");
	$(".guide-container5").addClass("guide-container-other-5");
	return false;
});

$("#HTML-guides-unchecked").click(function () {
	"use strict";
	$("#HTML-guides-unchecked").hide();
	$("#HTML-guides-checked").show();
	$(".each-container").addClass("background-alt1");
	return false;
});

$("#HTML-guides-checked").click(function () {
	"use strict";
	$("#HTML-guides-checked").hide();
	$("#HTML-guides-unchecked").show();
	$(".each-container").removeClass("background-alt1");
	return false;
});

$("#inner-guides-checked").click(function () {
	"use strict";
	$("#inner-guides-unchecked").show();
	$("#inner-guides-checked").hide();
	$(".asset-color-label").hide();
	$(".asset-color").each(function () {
		var assetclr = "";
		var assetshadow = $(this).closest(".asset-specs").find(".asset-shadow").text();
		var assetfmt = $(this).closest(".asset-specs").find(".asset-format").text();
		var prevname = $(this).closest(".asset-specs").find(".image-preview-name").text();
		var prevmods = $(this).closest(".asset-specs").find(".preset-name").text();
		$(this).text(assetclr);
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);
	});
	return false;
});

$("#inner-guides-unchecked").click(function () {
	"use strict";
	$("#alpha-guides-checked").trigger("click");
	$("#inner-guides-unchecked").hide();
	$("#inner-guides-checked").show();
	$(".asset-color-label").show();
	$(".asset-format-label").hide();
	$(".asset-color").each(function () {
		var assetclr = "&bgc=FF0000";
		var assetshadow = $(this).closest(".asset-specs").find(".asset-shadow").text();
		var assetfmt = $(this).closest(".asset-specs").find(".asset-format").text();
		var prevname = $(this).closest(".asset-specs").find(".image-preview-name").text();
		var prevmods = $(this).closest(".asset-specs").find(".preset-name").text();
		$(this).text(assetclr);
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);
	});
	return false;
});

$("#alpha-guides-checked").click(function () {
	"use strict";
	$("#alpha-guides-unchecked").show();
	$("#alpha-guides-checked").hide();
	$(".asset-format-label").hide();
	$(".asset-format").each(function () {
		var assetfmt = "";
		var assetshadow = $(this).closest(".asset-specs").find(".asset-shadow").text();
		var assetclr = $(this).closest(".asset-specs").find(".asset-color").text();
		var prevname = $(this).closest(".asset-specs").find(".image-preview-name").text();
		var prevmods = $(this).closest(".asset-specs").find(".preset-name").text();
		$(this).text(assetfmt);
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);
	});
	$(".each-container").removeClass("background-alt2");
	return false;
});

$("#alpha-guides-unchecked").click(function () {
	"use strict";
	$("#inner-guides-checked").trigger("click");
	$("#alpha-guides-unchecked").hide();
	$("#alpha-guides-checked").show();
	$(".asset-format-label").show();
	$(".asset-color-label").hide();
	$(".asset-format").each(function () {
		var assetfmt = "&fmt=png-alpha";
		var assetshadow = $(this).closest(".asset-specs").find(".asset-shadow").text();
		var assetclr = $(this).closest(".asset-specs").find(".asset-color").text();
		var prevname = $(this).closest(".asset-specs").find(".image-preview-name").text();
		var prevmods = $(this).closest(".asset-specs").find(".preset-name").text();
		$(this).text(assetfmt);
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);
	});
	$(".each-container").addClass("background-alt2");
	return false;
});

$("#original-guides-checked").click(function () {
	"use strict";
	$("#original-guides-unchecked").show();
	$("#original-guides-checked").hide();
	var assetprev1 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier1").text();
	var assetprev2 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier2").text();
	var assetprev3 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier3").text();
	var assetprev4 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier4").text();
	var assetprev5 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val() + $(".modifier5").text();
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	return false;
});

$("#original-guides-unchecked").click(function () {
	"use strict";
	$("#inner-guides-checked").trigger("click");
	$("#shadow-checked").click();
	$("#original-guides-unchecked").hide();
	$("#original-guides-checked").show();
	var assetprev1 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val();
	var assetprev2 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val();
	var assetprev3 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val();
	var assetprev4 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val();
	var assetprev5 = "https://assets.verizon.com/is/image/verizondev/" + $(".s7asset").val();
	$(".testurl_preview1").attr('src', assetprev1);
	$(".testurl_preview2").attr('src', assetprev2);
	$(".testurl_preview3").attr('src', assetprev3);
	$(".testurl_preview4").attr('src', assetprev4);
	$(".testurl_preview5").attr('src', assetprev5);
	return false;
});

$("#css-guides-checked").click(function () {
	"use strict";
	$("#css-guides-unchecked").show();
	$("#css-guides-checked").hide();
	$(".testurl_preview1").addClass("testurl_preview1_alt");
	$(".testurl_preview2").addClass("testurl_preview2_alt");
	$(".testurl_preview3").addClass("testurl_preview3_alt");
	$(".testurl_preview4").addClass("testurl_preview4_alt");
	$(".testurl_preview5").addClass("testurl_preview5_alt");
	return false;
});

$("#css-guides-unchecked").click(function () {
	"use strict";
	$("#css-guides-unchecked").hide();
	$("#css-guides-checked").show();
	$(".testurl_preview1").removeClass("testurl_preview1_alt");
	$(".testurl_preview2").removeClass("testurl_preview2_alt");
	$(".testurl_preview3").removeClass("testurl_preview3_alt");
	$(".testurl_preview4").removeClass("testurl_preview4_alt");
	$(".testurl_preview5").removeClass("testurl_preview5_alt");
	return false;
});

$("#shadow-checked").click(function () {
	"use strict";
	$("#shadow-unchecked").show();
	$("#shadow-checked").hide();
	$(".asset-shadow-label").hide();
	$(".asset-shadow").each(function () {
		var assetshadow = "";
		var assetclr = $(this).closest(".asset-specs").find(".asset-color").text();
		var assetfmt = $(this).closest(".asset-specs").find(".asset-format").text();
		var prevname = $(this).closest(".asset-specs").find(".image-preview-name").text();
		var prevmods = $(this).closest(".asset-specs").find(".preset-name").text();
		$(this).text(assetshadow);
		$(this).closest(".each-container-row").find(".testp").attr('src', "https://assets.verizon.com/is/image/verizondev/" + prevname + prevmods + assetshadow + assetfmt + assetclr);
	});
	return false;
});