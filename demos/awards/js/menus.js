// toggles drop down and toggle arrow icon
$(".custom-dropdown-group,.custom-dropdown-close").hide();
$(".custom-dropdown-open").on("click", function () {
    // closes other elements other than this when clicked
    "use strict";
    $(".custom-dropdown-input").find(".custom-dropdown-close").not(this).trigger("click");
    $("body").trigger("click");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").delay(300).slideDown(300);
    $(this).hide();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").show();
    $("html, body").animate({
        scrollTop: $(this).closest(".custom-dropdown-outer").offset().top - 170
    },
        300, "easeInOutQuad");
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
$("input[type='text']").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function () {
    "use strict";
    $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
    return false;
});
$("input[type='text'],input[type='number']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function () {
    "use strict";
    var input_place_holder = $(this).attr("data-placeholder");
    $(this).attr("placeholder", input_place_holder).css({
        "background": ""
    });
    $(this).hide();
    $(".modal-select").hide();
    $(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").val("").focusout().css({
        "background": ""
    });
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
    $(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
    return false;
});

// closes menu when user clicks away
$("body").on("click", function () {
    "use strict";
    if ($(this).not(".custom-dropdown-outer")) {
        $(".custom-dropdown-close").trigger("click");
    }
});

$("input[type='text'],input[type='number']").on("click", function () {
    "use strict";
    $(".custom-dropdown-close").trigger("click");
    return false;
});

// adds the html to the input value for each button clicked (needed for appeneded items)
$(document.body).on('click', ".custom-dropdown", function () {
    "use strict";
    var option = $(this).text();
    var val = $(this).attr("value");
    var checkinput = $(this).closest(".custom-dropdown-outer").find("input[type='text']");
    $(this).closest(".custom-dropdown-outer").find(checkinput).val(option);
    $(checkinput).attr("value", val);

    // sets active state
    $(this).css("background-color", "#e3e3e3");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
    return false;
});

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function () {
    "use strict";
    var option = $(this).text();
    var val = $(this).attr("value");
    var checkinput = $(this).closest(".custom-dropdown-outer").find("input[type='text']");
    $(this).closest(".custom-dropdown-outer").find(checkinput).val(option);
    $(checkinput).attr("value", val);

    // changes the form"s action link on specific choices
    if ($(this).closest("form").find(".custom-dropdown-awards").val() === 'Thank You') {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "ty-entry.html");
    } 
    if ($(this).closest("form").find(".custom-dropdown-awards").val() === 'Manager of the Quarter') {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "moq-entry.html");
    }
    else {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "awards-entry.html");
    }

    // sets active state
    $(this).css("background-color", "#e3e3e3");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
    return false;
});

// hover state (neded for combo dropdown)
$(document.body).on('mouseover click', ".custom-dropdown", function () {
    "use strict";
    $(this).closest(".custom-dropdown-outer").find(this).siblings().css({
        "background-color": "",
        "color": ""
    });
    $(this).closest(".custom-dropdown-outer").find(this).css({
        "background-color": "#7593bf",
        "color": "#fff"
    });
    return false;
});

// dropdown menu click (neded for appended dropdown)
$(document.body).on('click', ".custom-dropdown", function () {
    "use strict";
    $(this).closest(".custom-dropdown-outer").find(this).siblings().removeClass("active").css({
        "background-color": "",
        "color": ""
    });
    $(this).closest(".custom-dropdown-outer").find(this).addClass("active").css({
        "background-color": "#7593bf",
        "color": "#fff"
    });
    return false;
});

// hover states
$(".custom-dropdown").on("mouseover click", function () {
    "use strict";
    $(this).closest(".custom-dropdown-outer").find(this).siblings().css({
        "background-color": "",
        "color": ""
    });
    $(this).closest(".custom-dropdown-outer").find(this).css({
        "background-color": "#7593bf",
        "color": "#fff"
    });
    return false;
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

// resets required fields to a white bg
$(".custom-dropdown-scroll div").on("click", function () {
    "use strict";
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").css({
        "background": ""
    });
    return false;
});
$("input[type='text'],textarea").on("keydown", function () {
    "use strict";
    $(this).css({
        "background": ""
    });
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

// enables autocomplete dropdown search
$(function () {
    "use strict";
    $(".custom-search").autocomplete({
        source: [
            "Joseph Latonio",
            "Rebecca Warner",
            "Sri Krishnamoorthy"
        ],
        minLength: 1,
        response: function (event, ui) {
            // clears field if name is misspelled or invalid
            if (ui.content.length === 0) {
                $(this).val("").attr("placeholder", "No Match Found").blur().css({
                    "background": "#fff2f2"
                });
                return false;
            } else {
                $(this).attr("placeholder", "Search Email ID").css({
                    "background": ""
                });
            }
        }
    });
    // resizes width of autocomplete menu as needed
    jQuery.ui.autocomplete.prototype._resizeMenu = function () {
        var ul = this.menu.element;
        ul.outerWidth(this.element.outerWidth());
    }
});

// resets placeholder text on focus
$(".custom-search").on("focus", function () {
    "use strict";
    var input_place_holder = $(this).attr("data-placeholder");
    $(this).attr("placeholder", input_place_holder).css({
        "background": ""
    });
    $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
    $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
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

// removes pink bg after value changes
$("input[type='text']").on("change", function () {
    "use strict";
    $(this).css({
        "background": ""
    });
    return false;
});