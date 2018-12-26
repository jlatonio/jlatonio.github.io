// toggles drop down and toggle arrow icon
$(".custom-dropdown-group,.custom-dropdown-close").hide();
$(".custom-dropdown-open").on("click", function() {
    // closes other elements other than this when clicked
    'use strict';
    $(".custom-dropdown-input").find(".custom-dropdown-close").not(this).trigger("click");
    $("body").trigger("click");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideDown(300);
    $(this).hide();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").show();
    return false;
});

// closes menu when an item is selected
$(".custom-dropdown-close").on("click", function() {
    'use strict';
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
    return false;
});

// resets search when user clicks close
$(".custom-select-close").hide();
$(".custom-select").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function() {
    $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    return false;
});
$(".custom-select").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function() {
    $(this).hide();
    $(this).closest(".custom-dropdown-outer").find(".custom-select").val("").focus();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
    return false;
});

// closes menu when user clicks away
$("body").on("click", function() {
    'use strict';
    if ($(this).not(".custom-dropdown-outer")) {
        $(".custom-dropdown-group").slideUp(100);
        $(".custom-dropdown-open").show();
        $(".custom-dropdown-close").hide();
        $(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
        $(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    }
});

$("input[type='text']").on("keydown", function() {
    'use strict';
    $(this).attr("placeholder", "");
});

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function() {
    'use strict';
    var option = $(this).text();
    var val = $(this).attr("value");
    var checkinput = $(this).closest(".custom-dropdown-outer").find("input[type='text']")
    $(this).closest(".custom-dropdown-outer").find(checkinput).val(option);
    $(checkinput).attr("value", val);

    // changes the form"s action link on specific choices
    if ($("input[type='text']").attr("value") === "Thank You") {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "ty-entry.html");
    } else {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "awards-entry.html");
    }

    // sets active state
    $(".custom-dropdown").css("background-color", "");
    'use strict';
    $(this).css("background-color", "#e3e3e3");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
    return false;
});

// hover state
$(".custom-dropdown").on("hover", function() {
    $(".custom-dropdown").css({
        "background-color": "",
        "color": ""
    });
    $(this).closest(".custom-dropdown-outer").find(this).css({
        "background-color": "#7593bf",
        "color": "#fff"
    });
    return false;
});

// enables the submit button if fields are filled. adds focus to empty input area
$(".store-continue").click(function(e) {
    var isValid = true;
    $("input[type='text']").each(function() {
        if ($.trim($(this).val()) == "") {
            isValid = false;
            $(this).css({
                "background": "#fff2f2"
            });
            $(".modal-alert").show();
        } else {
            $(this).css({
                "background": ""
            });
        }
    });
    if (isValid == false)
        e.preventDefault();
    else
        $("form").submit();
});

// modal alerts
$(".modal-close").on("click", function() {
    $(".modal-alert,.modal-confirmation,.modal-ineligible,.modal-share,.modal-select").hide();
    $("textarea").focus();
    $(".custom-dropdown-input").find("input:text[value='']:visible").first().focus();
    return false;
});

$(".modal-close-ineligible").on("click", function() {
    $(".custom-select").focus();
    $(".custom-select").css({
        "background": "#fff2f2"
    });
    return false;
});

$(".modal-close-select").on("click", function() {
    $(".custom-select").focus();
    $(".custom-select").css({
        "background": "#fff2f2"
    });
    return false;
});

// resets required fields to a white bg
$(".custom-dropdown-scroll div").on("click", function() {
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").css({
        "background": ""
    });
    return false;
});
$("input[type='text'],textarea").keypress(function() {
    $(this).css({
        "background": ""
    });
});

// autofill email
$(document).ready(function() {
    $(".custom-select").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        var option = $(this).val();
        var item = option
        if (option.length === 0) {
            $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
            $(".custom-select").closest(".custom-dropdown-outer").find(".custom-select-close").hide();
        }
        if (option.length > 1) {
            $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").show();
            $(".custom-select").closest(".custom-dropdown-outer").find(".custom-select-close").show();
        }
        $(this).closest(".custom-dropdown-outer").find(".custom-dropdown").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    return false;
});

// If user clicks outside of dropdown list, as opposed to selecting the available IDs, the value will reset
$('.custom-select').on("blur", function() {
    $('.custom-select').val('').attr('placeholder', 'Search Email ID');
    $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
});

// dropdown menu will block all keystrokes
$(".custom-dropdown-menu").on("keyup", function() {
    $(this).val("");
});


// Validates Email ID. Not needed for now since the user only can only select what is available via dropdown
// $('.custom-select').on("change", function() {
//     var txt = $('.custom-select').val();
//     var resultCount = 0;
//     $('.custom-select').closest(".custom-dropdown-outer").find(".custom-dropdown").each(function() {
//         if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) {
//             resultCount++;
//         }
//     });
//     if (resultCount == 0) {
//         $('.modal-ineligible').show();
//     }
// });
