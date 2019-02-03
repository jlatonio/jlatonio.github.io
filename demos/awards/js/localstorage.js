// save icon. hidden by default
$(".notes-btn-each").hide();

$(".custom-dropdown-slots, .custom-dropdown-large").closest("form").find(".custom-dropdown-open").on("click", function () {
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
			scrollTop: $(this).closest(".custom-dropdown-outer").offset().top - 120
		},
		200, "easeInOutQuad");
	return false;
});

// counts added items and updates placeholder on load
$(".custom-dropdown-slots").each(function (i) {
	"use strict";
	$(function () {
		var empty = $(this).find(".custom-dropdown-slots .custom-dropdown");
		if (empty.length === 0) {
			$(".draft-slots").eq(i).attr("placeholder", "There are no saved files available.");
		}
		if (empty.length > 0) {
			$(".draft-slots").eq(i).attr("placeholder", "Select a file to load. Saved files: " + empty.length);
		}
	});
});

// loads draft sessions for the awards page
$(document.body).on("click", ".custom-dropdown", function () {
	"use strict";
	$(this).closest(".column-container-notes").find(".store-data").each(function () {
		var option = $(".draft-slots").val() + " - {awards-each}"; // used to make the local storage key unique
		if (option.length === 0) {
			$(this).closest(".notes-container").find(".draft-slots").css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
		}
		if (option.length > 0) {
			var text = $(".draft-slots").val() + " - {awards-each}"; // used to make the local storage key unique
			var value = localStorage.getItem(text);
			$(this).val(value);
			$(this).closest(".notes-container").find("input[type=text]").css({
				"background": ""
			});
			$(this).closest(".notes-container").find("textarea").focus().css({
				"background": ""
			});
			return false;
		}
	});
	$(this).closest(".column-container-notes").find(".draft-value").val("").css({
		"background-color": ""
	});

	// automatically fills in the Adobe Value input if the following strings are in the textarea when loaded
	if ($(this).closest(".column-container-notes").find(".store-data").val().indexOf("Genuine") > -1) {
		$(".draft-value").val("Genuine");
	}
	if ($(this).closest(".column-container-notes").find(".store-data").val().indexOf("Innovative") > -1) {
		$(".draft-value").val("Innovative");
	}
	if ($(this).closest(".column-container-notes").find(".store-data").val().indexOf("Exceptional") > -1) {
		$(".draft-value").val("Exceptional");
	}
	if ($(this).closest(".column-container-notes").find(".store-data").val().indexOf("Involved") > -1) {
		$(".draft-value").val("Involved");
	}
});

// Rename file
$(".store-rename").on("click", function () {
	"use strict";
	$(this).closest(".column-container-notes").find(".draft-slots").focus();
	$(".custom-dropdown").css({
		"background-color": "",
		"color": ""
	});
});

// Create a new save file
$(".store-create").on("click", function () {
	"use strict";
	$(this).closest(".column-container-notes").find(".draft-slots").val("").focus().attr("placeholder", "Name your file.").css({
		"background": "#fff2f2"
	});
	$(this).closest("form").find(".draft-value").val("").css({
		"background": ""
	});
	$(this).closest(".column-container-notes").find(".custom-dropdown").css({
		"background": "",
		"color": ""
	});
	$(this).closest(".column-container-notes").find("textarea").val("").css({
		"background": ""
	});
	$("html, body").animate({
			scrollTop: $(".custom-dropdown-outer").offset().top - 170
		},
		200, "easeInOutQuad");
});

$(".draft-slots").on("change", function () {
	"use strict";
	var option = $(this).closest(".column-container-notes").find(".draft-slots").val();
	var option2 = $(this).closest(".column-container-notes").find(".store-data").val();
	var option3 = $(this).closest(".column-container-notes").find(".draft-value").val();
	if (option.length > 0 && option2.length === 0 && option3.length === 0) {
		$(this).closest(".column-container-notes").find(".draft-value").val("").focus().css({
			"background": "#fff2f2"
		});
	}
	if (option.length > 0 && option2.length > 0 && option3.length === 0) {
		$(this).closest(".column-container-notes").find(".draft-value").val("").focus().css({
			"background": "#fff2f2"
		});
	}
	if (option.length > 0 && option2.length === 0 && option3.length > 0) {
		$(this).closest(".column-container-notes").find("textarea").attr("placeholder", "Start a draft before saving. See examples below for reference.").val("").focus().css({
			"background": "#fff2f2"
		});
	}
});

$(".draft-slots").on("click", function () {
	"use strict";
	$(this).css({
		"background": ""
	});
	return false;
});

// Deletes a save file
$(document.body).on("click", ".custom-dropdown-delete", function () {
	"use strict";
	$(this).closest(".column-container-notes").removeAttr("action").find("input[type=text]").val("").css({
		"background": ""
	});
	$(this).closest(".column-container-notes").find("textarea").val("").css({
		"background": ""
	});
	// updates dropdown and saves it
	var text = $(this).closest(".custom-dropdown").text() + " - {awards-each}"; // used to make the local storage key unique
	localStorage.removeItem(text);
	$(this).closest(".custom-dropdown").remove();
	$(".custom-dropdown-slots").each(function () {
		var name = "custom dropdown - {awards-menu}";
		var value = $(this).html();
		localStorage.setItem(name, value);
		var value = localStorage.getItem(name);
		$(this).html(value);
	});
	// counts number of files after every deletion
	$(".custom-dropdown-slots").each(function (i) {
		$(function () {
			var empty = $(this).find(".custom-dropdown-slots .custom-dropdown");
			if (empty.length === 0) {
				$(".draft-slots").eq(i).attr("placeholder", "There are no saved files available.");
				$(".custom-dropdown-close").trigger("click");
			}
			if (empty.length > 0) {
				$(".draft-slots").eq(i).attr("placeholder", "Select a file to load. Saved files: " + empty.length);
			}
		});
	});
});

// saves data on click
$(".store-save").on("click", function () {
	"use strict";
	$(".custom-dropdown-close").trigger("click");
	$(this).closest(".column-container-notes").find(".store-data").css({
		"background": ""
	});

	// adds to dropdown
	var prepend = "<div class='custom-dropdown active'>";
	var append = "<div class='custom-dropdown-animation'></div><div class='custom-dropdown-delete'></div><input class='custom-dropdown-strDate' disabled readonly /></div>";
	if ($(".draft-slots").val().length > 0) {
		$(".custom-dropdown").removeClass("active");
		$(this).closest(".column-container-notes").find(".custom-dropdown-slots").prepend(prepend + $(".draft-slots").val() + append);
	}

	// adds timestamp (last updated) and locates the active element
	$('.custom-dropdown').each(function () {
		var d = new Date();
		var weekday = d.getDay();
		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		var hour = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
		var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var ampm = " PM ";
		if (hour < 12) ampm = " AM ";
		if (hour > 12) hour -= 12;
		var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
		var showTime = hour + ":" + minutes + ":" + seconds + ampm;
		var strDate = "Updated: " + showDate + " " + "-" + " " + showTime;
		if ($(this).hasClass('active')) {
			$(this).css({
				"background-color": "#446aa0",
				"color": "#fff"
			});
			$(this).find(".custom-dropdown-strDate").attr("value", strDate);
		}
	});

	// removes duplicates (will not remove those with different datestamps)
	var seen = {};
	$(".custom-dropdown").each(function () {
		var txt = $(this).text();
		if (seen[txt])
			$(this).remove();
		else
			seen[txt] = true;
	});

	// saves data. alerts if input is blank. adds focus to empty input area
	$(this).closest(".column-container-notes").find(".draft-slots").each(function () {
		var option = $(this).closest(".column-container-notes").find(".draft-slots").val();
		var option2 = $(this).closest(".column-container-notes").find(".store-data").val();
		if (option.length === 0 && option2.length === 0) {
			$(this).focus().attr("placeholder", "Name your file first.").css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
		}
		if (option.length === 0 && option2.length > 0) {
			$(this).focus().attr("placeholder", "Name your file and then click 'Save.'").css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
		}
		if (option.length > 0 && option2.length > 0) {
			var text = $(this).closest(".column-container-notes").find(".draft-slots").val() + " - {awards-each}"; // used to make the local storage key unique
			var value = $(this).closest(".notes-container").find(".store-data").val();
			localStorage.setItem(text, value);
			var value = localStorage.getItem(text);
			$(this).css({
				"background": ""
			});

			// saves updated dropdown field
			$(this).closest(".column-container-notes").find(".custom-dropdown-slots").each(function () {
				var name = "custom dropdown - {awards-menu}";
				var value = $(this).closest(".column-container-notes").find(this).html();
				localStorage.setItem(name, value);
				var value = localStorage.getItem(name);
				$(this).html(value);
			});

			// save animation will animate if save is working
			$(this).closest(".column-container-notes").find(".notes-btn-each").show();
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
			setTimeout(function () {
				$(".notes-btn-each").fadeOut();
			}, 1000);
			return false;
		}
	});

	// value is a required field
	$(this).closest(".column-container-notes").find(".draft-value").each(function () {
		var option = $(this).val();
		if (option.length === 0) {
			$(this).css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
			return false;
		}
		if (option.length > 0) {
			$(this).css({
				"background": ""
			});
		}
	});

	// alerts if form is not complete
	$(".store-data").each(function () {
		var option = $(this).closest(".column-container-notes").find(".draft-slots").val();
		var option2 = $(this).closest(".column-container-notes").find(".store-data").val();
		if (option.length === 0 && option2.length === 0) {
			$(this).attr("placeholder", "Create a file and start a draft before saving.").css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
		}
		if (option.length > 0 && option2.length === 0) {
			$(this).attr("placeholder", "Start a draft before saving. See examples below for reference.").css({
				"background": "#fff2f2"
			});
			$(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
		}
		if (option2.length > 0) {
			var textarea_place_holder = $("textarea").attr("data-placeholder");
			$(this).attr("placeholder", textarea_place_holder).css({
				"background": ""
			});
		}
	});
	return false;
});

// auto load current dropdown field
$(".custom-dropdown-slots").each(function () {
	"use strict";
	var name = "custom dropdown - {awards-menu}";
	var value = $(this).html();
	var value = localStorage.getItem(name);
	$(this).html(value);
});

// resets content for open draft
$(".store-reset").on("click", function () {
	"use strict";
	$(".custom-dropdown-close").trigger("click");
	var textarea_place_holder = $("textarea").attr("data-placeholder");
	$(this).closest("form").find("textarea").attr("placeholder", textarea_place_holder).val("").focus().css({
		"background": ""
	});
	$(this).closest("form").find(".custom-select-close").hide();
	$(this).closest("form").find(".custom-select-search").show();
	$(this).closest("form").removeAttr("action").find("input[type=text]").css({
		"background": ""
	});
	$(this).closest("form").find(".draft-value").val("").css({
		"background": ""
	});
	$(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
	var text = $(this).closest("form").find(".draft-slots").val() + " - {awards-each}"; // used to make the local storage key unique
	localStorage.removeItem(text);
	// updates datestamp
	$('.custom-dropdown').each(function () {
		var d = new Date();
		var weekday = d.getDay();
		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		var hour = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
		var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var ampm = " PM ";
		if (hour < 12) ampm = " AM ";
		if (hour > 12) hour -= 12;
		var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
		var showTime = hour + ":" + minutes + ":" + seconds + ampm;
		var strDate = "Updated: " + showDate + " " + "-" + " " + showTime;
		if ($(this).hasClass('active')) {
			$(this).css({
				"background-color": "#7593bf",
				"color": "#fff"
			});
			$(this).find(".custom-dropdown-strDate").attr("value", strDate);
		}
	});
});

// static clear, no effect on saved data, for index page
$(".store-clear").on("click", function () {
	"use strict";
	$(".custom-dropdown-close").trigger("click");
	$(this).closest("form").find(".custom-select-close").hide();
	$(this).closest("form").find(".custom-select-search").show();
	$(this).closest("form").find("textarea").val("");
	$(this).closest("form").find("input[type=text]").val("").css({
		"background": ""
	});
	$("input[type='text']").each(function () {
		var input_place_holder = $(this).attr("data-placeholder");
		$(this).attr("placeholder", input_place_holder).css({
			"background": ""
		});
	});
});

// resets all fields. removes all local storage data from menu only, not entire web storage
$(".store-reset-all").on("click", function () {
	"use strict";
	$(".custom-dropdown-close").trigger("click");
	$(".custom-dropdown").each(function () {
		var text = $(this).text() + " - {awards-each}"; // used to make the local storage key unique
		localStorage.removeItem(text);
		localStorage.removeItem("custom dropdown - {awards-menu}");
	});
	$(".custom-select-close").hide();
	$(this).closest(".notes-container").find("textarea").val("");
	$(".custom-dropdown-slots").empty();
	$(this).closest("form").removeAttr("action").find(".draft-slots").val("").attr("placeholder", "There are no saved files available.").css({
		"background": ""
	});
	$(this).closest("form").find(".draft-value").val("").css({
		"background": ""
	});
	var textarea_place_holder = $("textarea").attr("data-placeholder");
	$(this).closest("form").find("textarea").attr("placeholder", textarea_place_holder).val("").css({
		"background": ""
	});
	$(this).closest("form").find("textarea").val("").css({
		"background": ""
	});
	$(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
});

// sends nomination. alerts if input is blank. adds focus to empty input area
$(".store-nominate").click(function () {
	"use strict";
	$(".custom-dropdown-close").trigger("click");
	$(".store-data").each(function () {
		var value = $(".store-data, .draft-value").val();

		if (value.length === 0) {
			$(".store-data").attr("placeholder", "Complete your nomination before submitting.").css({
				"background": "#fff2f2"
			});
			$(".draft-value").focus().css({
				"background": "#fff2f2"
			});
		}

		if (value.length > 0) {
			// adds timestamp (last submitted) and locates the active element
			$('.custom-dropdown').each(function () {
				var d = new Date();
				var weekday = d.getDay();
				var month = d.getMonth();
				var day = d.getDate();
				var year = d.getFullYear();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				if (hour < 10) hour = "0" + hour;
				if (minutes < 10) minutes = "0" + minutes;
				if (seconds < 10) seconds = "0" + seconds;
				var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
				var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var ampm = " PM ";
				if (hour < 12) ampm = " AM ";
				if (hour > 12) hour -= 12;
				var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
				var showTime = hour + ":" + minutes + ":" + seconds + ampm;
				var strDate = "Submitted: " + showDate + " " + "-" + " " + showTime;
				if ($(this).hasClass('active')) {
					$(this).css({
						"background-color": "#7593bf",
						"color": "#fff"
					});
					$(this).find(".custom-dropdown-strDate").attr("value", strDate);
				}
			});

			// saves latest data before submission
			var text = $(this).closest(".column-container-notes").find(".draft-slots").val() + " - {awards-each}"; // used to make the local storage key unique
			var value = $(this).closest(".notes-container").find(".store-data").val();
			localStorage.setItem(text, value);
			var value = localStorage.getItem(text);
			$(this).closest(".column-container-notes").find(".custom-dropdown-slots").each(function () {
				var name = "custom dropdown - {awards-menu}";
				var value = $(this).closest(".column-container-notes").find(this).html();
				localStorage.setItem(name, value);
				var value = localStorage.getItem(name);
				$(this).html(value);
			});

			// nomination submission
			$("form").removeAttr("action").attr("action", "awards-confirmation.html").submit();
		}
	});
	return false;
});

// adds the required value for each submission
$(".draft-value").closest(".column-container-notes").find(".custom-dropdown").on("click", function () {
	"use strict";
	var text = $(this).text();
	var textarea = $(".store-data");
	$(this).closest(".column-container-notes").find(".draft-value").css({
		"background-color": ""
	});
    // adds focus to the end of input
    (function($){
        $.fn.focusTextToEnd = function(){
            this.focus();
            var $thisVal = this.val();
            this.val('').val($thisVal);
            return this;
        }
    }(jQuery));
	if ($(this).closest("form").find(".draft-value").val() === text) {
		textarea.val(textarea.val().replace("Adobe Value: \n\n", "").replace("Adobe Value: Genuine\n\n", "").replace("Adobe Value: Innovative\n\n", "").replace("Adobe Value: Exceptional\n\n", "").replace("Adobe Value: Involved\n\n", ""));
		$(this).closest(".column-container-notes").find(".store-data").val(function (index, old) {
			return "Adobe Value: " + text + "\n\n" + "" + old
		}).focusTextToEnd().css({
			"background-color": ""
		});
		return false;
	}
});

// removes any active states on page load
$('.custom-dropdown').removeClass("active").css({
	"background-color": "",
	"color": ""
});