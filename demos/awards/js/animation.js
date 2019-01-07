// toggles drop down and toggle arrow icon
$(".custom-dropdown-group,.custom-dropdown-close").hide();
$(".custom-dropdown-open").on("click", function() {
 // closes other elements other than this when clicked
 "use strict";
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
 "use strict";
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
 return false;
});

// resets search when user clicks close
$(".custom-select-close").hide();
$("input[type='text']").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function() {
 "use strict";
 $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
 return false;
});
$("input[type='text']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function() {
 "use strict";
 $(this).hide();
 $(".modal-select").hide();
 $(this).closest(".custom-dropdown-outer").find("input[type='text']").val("").focus().css({
  "background": ""
 });
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
 return false;
});

// closes menu when user clicks away
$("body").on("click", function() {
 "use strict";
 if ($(this).not(".custom-dropdown-outer")) {
  $(".custom-dropdown-group").slideUp(100);
  $(".custom-dropdown-open").show();
  $(".custom-dropdown-close").hide();
  $(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
  $(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
 }
});
$("input[type='text']").on("click", function() {
 $(".custom-dropdown-close").trigger("click");
 return false;
});

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function() {
 "use strict";
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
 "use strict";
 $(this).css("background-color", "#e3e3e3");
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
 return false;
});

// hover state
$(".custom-dropdown-outer").find(".custom-dropdown").on("mouseover click", function() {
 "use strict";
 $(this).closest(".custom-dropdown-outer").find(this).css({
  "background-color": "",
  "color": ""
 });
 $(this).closest(".custom-dropdown-outer").find(this).css({
  "background-color": "#7593bf",
  "color": "#fff"
 });
 return false;
});

$(".custom-dropdown-outer").find(".custom-dropdown").on("mouseout", function() {
 "use strict";
 $(this).closest(".custom-dropdown-outer").find(this).css({
  "background-color": "",
  "color": ""
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
 $("input[type='text']").on("keyup change", function() {
  var value = $(this).val().toLowerCase();
  var option = $(this).val();
  var item = option
  if (option.length === 0) {
   $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
  }
  if (option.length > 0) {
   $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").show();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-date").hide();
   $(this).closest(".custom-dropdown-outer").find(".custom-select-search").hide();
  }
  $(this).closest(".custom-dropdown-outer").find(".custom-dropdown").filter(function() {
   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
 });
 return false;
});

// dropdown menu will block all keystrokes
$(".custom-dropdown-menu").on("keyup", function() {
 $(this).val("");
 return false;
});

// enables the datepicker
$(".custom-select-date, .custom-date").on("click", function() {
 $(".custom-date").datepicker();
 $(this).closest(".custom-dropdown-outer").find(".custom-date").datepicker("show");
 return false;
});

// adds focus when the search icon is clicked
$(".custom-select-search").on("click", function() {
 $(this).closest(".custom-dropdown-outer").find("input[type='text']").focus();
 return false;
});

// enables autocomplete dropdown search
$(function() {
 $(".custom-search").autocomplete({
  source: [
   "Joseph Latonio",
   "Rebecca Warner",
   "Sri Krishnamoorthy"
  ],
  minLength: 1,
  response: function(event, ui) {
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
});

// resets placeholder text on focus
$(".custom-search").on("focus", function() {
 $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
 $(this).attr("placeholder", "Search Email ID").css({
  "background": ""
 });
 return false;
});

// fixes width of autocomplete menu
jQuery.ui.autocomplete.prototype._resizeMenu = function() {
 var ul = this.menu.element;
 ul.outerWidth(this.element.outerWidth());
}

// clears field if there is only one character submitted
// $("input[type='text']").on("change", function() {
//         if($(this).val().length == 0) {
//         $('.custom-select').closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
//         $(this).val("");
//         return false;
//     } 
// });

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