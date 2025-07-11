var imageUrl = $('.fluidimage').attr('src');
$(".url-container").text(imageUrl);

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

// enables the datepicker
$(".custom-select-date, .custom-date").on("click", function () {
    "use strict";
    $(".custom-dropdown-start-date, .custom-dropdown-end-date").datepicker({
        changeMonth: false,
        changeYear: false,
        numberOfMonths: 1,
        dateFormat: "yy-mm-dd",
        showAnim: "fadeIn"
    });
    $(this).closest(".custom-dropdown-outer").find(".custom-date").datepicker("show");
    $("body").trigger("click"); // closes all other open menus
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

// adds the html to the input value for each button clicked (needed for appeneded items)
$(document.body).on('click', ".custom-dropdown", function () {
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

// directs to specific pages
$(".acs-market-menu").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function () {
	// changes the form"s action link on specific choices
	if ($(this).closest("form").find(".acs-market-menu").val() === 'FSI') {
		window.location.href = "Industry-Template-Example.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-market-menu").val() === 'Canada') {
		window.location.href = "Vertical-Template-Example.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-market-menu").val() === 'EMEA') {
		window.location.href = "fsi.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-market-menu").val() === 'Japan') {
		window.location.href = "fsi.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-market-menu").val() === 'Latam') {
		window.location.href = "fsi.html";
		return false;
	}
});

$(".acs-report-menu").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function () {
	// changes the form"s action link on specific choices
	if ($(this).closest("form").find(".acs-report-menu").val() === 'Americas Consulting') {
		window.location.href = "Report-Template-Example.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-report-menu").val() === 'Americas Reports') {
		window.location.href = "emea.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-report-menu").val() === 'EMEA Reports') {
		window.location.href = "emea.html";
		return false;
	}
	if ($(this).closest("form").find(".acs-report-menu").val() === 'Launch Foundation Services') {
		window.location.href = "latam.html";
		return false;
	}
});

// modals if needed
$(".custom-dropdown-open,.custom-dropdown-close").on("mouseover", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").css({
		"opacity": "1"
	});
	return false;
});
$(".custom-dropdown-open,.custom-dropdown-close").on("mouseout", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").css({
		"opacity": ""
	});
	return false;
});

$(".custom-select-close, .custom-select-date, .custom-select-search").on("mouseover", function () {
	"use strict";
	$(this).css({
		"opacity": "1"
	});
	return false;
});
$(".custom-select-close, .custom-select-date, .custom-select-search").on("mouseout", function () {
	"use strict";
	$(this).css({
		"opacity": ""
	});
	return false;
});

// modal alerts
$(".modal-close, .store-reset-all, .store-reset-cancel").on("click", function () {
	"use strict";
	$(".modal-alert,.modal-confirmation,.modal-ineligible,.modal-share,.modal-select").hide();
	return false;
});

$(".store-reset-open").on("click", function () {
	"use strict";
	$(".modal-alert").fadeIn(300);
	return false;
});

// icon hover states
$("input[type=text]").on("mouseover", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-select-search").css({
		"opacity": "1"
	});
	return false;
});
$("input[type=text]").on("mouseout", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-select-search").css({
		"opacity": ""
	});
	return false;
});

$("input[type=text]").on("mouseover", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-select-date").css({
		"opacity": "1"
	});
	return false;
});
$("input[type=text]").on("mouseout", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find(".custom-select-date").css({
		"opacity": ""
	});
	return false;
});

// enables the submit button if fields are filled. adds focus to empty input area
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
	if (isValid === false)
		e.preventDefault();
	else
		$("form").submit();
});

// autofill fields as user types. static html only
$(function () {
	"use strict";
	$("input[type='text'], input[type='number']").on("keyup change", function () {
		var option = $(this).val();
		var item = option;
		if (option.length === 0) {
			$(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
			$(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
			$(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
		}
		if (option.length > 0) {
			$(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
			$(this).closest(".custom-dropdown-outer").find(".custom-select-date").hide();
			$(this).closest(".custom-dropdown-outer").find(".custom-select-search").hide();
		}
	});
	return false;
});

// adds focus when the search icon is clicked
$(".custom-select-search").on("click", function () {
	"use strict";
	$(this).closest(".custom-dropdown-outer").find("input[type='text']").focus();
	return false;
});


         $(function() {
            $( "#autocomplete1" ).autocomplete(
            {
                source:"data.json",
                select: function( event, ui ) {
                    $( "#autocomplete1" ).val( ui.item.code + " - " + ui.item.label );
                    return false;
                }
            }).data( "autocomplete" )._renderItem = function( ul, item ) {
                return $( "<li></li>" )
                    .data( "item.autocomplete", item )
                    .append( "<a>" + item.code + " - " + item.label + "</a>" )
                    .appendTo( ul );
                };      

        }); 


// enables autocomplete dropdown search
$(function () {
	"use strict";
	var dataSrc = [
        {
            value: "https://agsdashboards-author.corp.adobe.com/content/emea-customer-dashboards/english/central-europe/automotive/msp-demo-template/demo-new.html?wcmmode=disabled",
			label: "AAA"
        }, 
        {
            value: "https://agsdashboards-author.corp.adobe.com/content/adobe-csd/retail/ashley_homestores_lt.html?wcmmode=disabled",
			label: "Ashley Homestores"
        }, 
      ];
              
	$(".custom-search").autocomplete({
		source:dataSrc,
		minLength: 3,
        select: function( event, ui ) { 
            window.location.href = ui.item.value;
            // if opening a new window is required, use this
            // window.open(ui.item.value, "_blank");
        },
		response: function (event, ui) {
			// clears field if name is misspelled or invalid
			if (ui.content.length === 0) {
				$(this).val("").attr("placeholder", "No Match Found").blur().css({
					"background": "#5d2b2b"
				});
				return false;
			} else {
				$(this).attr("placeholder", "Search Account").css({
					"background": ""
				});  
			}
		},
		// Animated hover effect
		open: function (event, ui) {
			$("<div class='custom-dropdown-animation'></div>").appendTo('ul.ui-autocomplete div');
		}
	});
	// resizes width of autocomplete menu as needed
	$.ui.autocomplete.prototype._resizeMenu = function () {
		var ul = this.menu.element;
		ul.outerWidth(this.element.outerWidth());
	};
});

// resets placeholder text on focus. This is not needed if quick links are applied to Search
// $(".custom-search").on("focus", function () {
// 	"use strict";
// 	var input_place_holder = $(this).attr("data-placeholder");
// 	$(this).attr("placeholder", input_place_holder).css({
// 		"background": ""
// 	});
// 	$(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
// 	$(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
// 	return false;
// });

// resets required fields to a white bg
$("input[type='text'], textarea").on("keydown change", function () {
	"use strict";
	$(this).css({
		"background": ""
	});
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

// for search in the header
$(".acs-header-search").on("keyup focus", function() {
  if ($(this).val().length > 2) {
    $('#acs-header-search-go').css({
      "background-color": "#fff",
      "color": "#000",
      "cursor": "pointer"
    });

  } else {
    $('#acs-header-search-go').css({
      "background-color": "",
      "color": "",
      "cursor": ""
    });
  }
  return false;
});

$(".acs-header-search").on("blur", function() {
  if ($(this).val().length > 2) {
    $('#acs-header-search-go').css({
      "background-color": "",
      "color": "",
      "cursor": ""
    });
  }
  return false;
});

$(".acs-header-search-go").on("mouseenter", function() {
  if ($(".acs-header-search").val().length > 2) {
    $('#acs-header-search-go').css({
      "background-color": "#fff",
      "color": "#000",
      "cursor": "pointer"
    });
  }
  return false;
});

$(".acs-header-search-go").on("mouseleave", function() {
  if ($(".acs-header-search").val().length > 2) {
    $('#acs-header-search-go').css({
      "background-color": "",
      "color": "",
      "cursor": ""
    });
  }
  return false;
});

function goToPage() {
  var page = $(".acs-header-search").val();

  if ($(".acs-header-search").val().length > 2) {
    window.open("https://agsdashboards.corp.adobe.com/content/adobe-csd/search.html?dashboard-search=" + page + "*", "_blank");
  }
  return false;
}
// clicking enter for search in the header 
function AddKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById('acs-header-search-go').click();
    return false;
  }
  return true;
}

// clicking tools on mobile will display header features
$(".acs-header-help").on("click", function() {
  "use strict";
  $(".acs-header-column-2").slideToggle();
  $(".acs-header").toggleClass("acs-header-shadow");
  $(this).toggleClass("acs-header-help-active");
  return true;
});

// hover for header feature icons
$(".column-tools-header-each").on("mouseover", function() {
  "use strict";
  $(this).closest(".acs-column-container-header-feature").find(".column-tools-header-icon").addClass("column-tools-header-icon-active");
  return false;
});

$(".column-tools-header-each").on("mouseout", function() {
  "use strict";
  $(this).closest(".acs-column-container-header-feature").find(".column-tools-header-icon").removeClass("column-tools-header-icon-active");
  return false;
});