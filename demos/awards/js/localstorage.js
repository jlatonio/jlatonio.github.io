// save icon. hidden by default
$(".notes-btn-each").hide();

$(document).ready(function() {
 "use strict";
 // counts total nominations per nominee without animation
 //$('.nomination-entry-container').each(function(i) {
  //var empty = $(this).find(".nomination-entry-submissions").length;
  //$(".store-nominee-total-nominations").eq(i).text(empty);
 //});

// counts and animates total total nominations per nominee
 $('.store-nominee-total-nominations').each(function () {
  var option = $(this).closest(".nomination-entry-container").find(".nomination-entry-submissions");
  if (option.length > 0) {
   $(this).prop('Counter', 0).delay(250).animate({
    Counter: option.length
   }, {
    duration: 250,
    easing: 'swing',
    step: function(now) {
     $(this).text(Math.ceil(now));
    }
   });
  }
 });
    
 // counts and animates total nominations overall
 $('.nomination-total-nominations').each(function () {
  var option = $(this).closest("form").find(".nomination-entry-submissions");
  if (option.length > 0) {
   $(this).prop('Counter', 0).delay(750).animate({
    Counter: option.length
   }, {
    duration: 1500,
    easing: 'easeOutQuint',
    step: function(now) {
     $(this).text(Math.ceil(now));
    }
   });
  }
 });

 // counts and animates total nominees overall
 $('.nomination-total-nominees').each(function () {
  var option = $(this).closest("form").find(".nomination-entry-container");
  if (option.length > 0) {
   $(this).prop('Counter', 0).delay(750).animate({
    Counter: option.length
   }, {
    duration: 1500,
    easing: 'easeOutQuint',
    step: function(now) {
     $(this).text(Math.ceil(now));
    }
   });
  }
 });
 return false;
});

// counts added items and updates placeholder on load
$('.custom-dropdown-slots').each(function(i) {
 "use strict";
 $(function() {
  var empty = $(this).find(".custom-dropdown-slots .custom-dropdown");
  if (empty.length === 0) {
   $(".draft-slots").eq(i).attr("placeholder", "There are no saved files available to load");
  }
  if (empty.length > 0) {
   $(".draft-slots").eq(i).attr("placeholder", "Select a file to load. Number of saved files: " + empty.length);
  }
 });
});

// loads draft sessions for the awards page
$(document.body).on('click', ".custom-dropdown", function() {
 "use strict";
 $(this).closest(".column-container-notes").find(".store-data").each(function() {
  var option = $(".draft-slots").val();
  if (option.length === 0) {
   $(this).closest(".notes-container").find(".draft-slots").css({
    "background": "#fff2f2"
   });
   $(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-load").fadeIn(300);
  }
  if (option.length > 0) {
   var text = $(".draft-slots").val();
   var value = localStorage.getItem(text);
   $(this).val(value);
   $(this).closest(".notes-container").find("input[type=text]").css({
    "background": ""
   });
   $(this).closest(".notes-container").find("textarea").css({
    "background": ""
   });
   return false;
  }
 });
});

// Rename file
$(".store-rename").on("click", function() {
 "use strict";
 $(this).closest(".column-container-notes").find(".draft-slots").focus();
});

// Create a new save file
$(".store-create").on("click", function() {
 "use strict";
 $(this).closest(".column-container-notes").find(".draft-slots").val("").focus().attr("placeholder", "Name your file").css({
  "background": "#fff2f2"
 });
 $(this).closest(".column-container-notes").find("textarea").val("").css({
  "background": ""
 });
});

$(".draft-slots").on("click", function() {
 $(this).css({
  "background": ""
 });
 return false;
});

// Deletes a save file
$(document.body).on('click', ".custom-dropdown-delete", function() {
 "use strict";
 $(this).closest(".column-container-notes").removeAttr("action").find("input[type=text]").val("").css({
  "background": ""
 });
 $(this).closest(".column-container-notes").find("textarea").val("").css({
  "background": ""
 });
 // updates dropdown and saves it
 var text = $(this).closest(".custom-dropdown").text();
 localStorage.removeItem(text);
 $(this).closest(".custom-dropdown").remove();
 $(".custom-dropdown-slots").each(function() {
  var name = "custom-dropdown"
  var value = $(this).html();
  localStorage.setItem(name, value);
  var value = localStorage.getItem(name);
  $(this).html(value);
 });
 // counts number of files after every deletion
 $('.custom-dropdown-slots').each(function(i) {
  $(function() {
   var empty = $(this).find(".custom-dropdown-slots .custom-dropdown");
   if (empty.length === 0) {
    $(".draft-slots").eq(i).attr("placeholder", "There are no saved files available to load");
   }
   if (empty.length > 0) {
    $(".draft-slots").eq(i).attr("placeholder", "Select a file to load. Number of saved files: " + empty.length);
   }
  });
 });

});

// saves data on click
$(".store-save").on("click", function() {
 "use strict";
 $(this).closest(".column-container-notes").find(".store-data").css({
  "background": ""
 });

 // adds to dropdown
 var prepend = "<div class='custom-dropdown'>"
 var append = "<div class='custom-dropdown-delete'></div></div>"
 if ($(".draft-slots").val().length > 0) {
  $(this).closest(".column-container-notes").find(".custom-dropdown-slots").prepend(prepend + $(".draft-slots").val() + append);
 }

 // removes duplicates
 var seen = {};
 $('.custom-dropdown').each(function() {
  var txt = $(this).html();
  if (seen[txt])
   $(this).remove();
  else
   seen[txt] = true;
 });

 // saves data. alerts if input is blank. adds focus to empty input area
 $(this).closest(".column-container-notes").find(".draft-slots").each(function() {
  var option = $(this).closest(".column-container-notes").find(".draft-slots").val();
  var option2 = $(this).closest(".column-container-notes").find(".store-data").val();
  if (option.length === 0) {
   $(this).attr("placeholder", "Name your file").css({
    "background": "#fff2f2"
   });
   $(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-save").fadeIn(300);
  }
  if (option.length > 0 && option2.length > 0) {
   var text = $(this).closest(".column-container-notes").find(".draft-slots").val();
   var value = $(this).closest(".notes-container").find(".store-data").val();
   localStorage.setItem(text, value);
   var value = localStorage.getItem(text);
   $(this).css({
    "background": ""
   });

   // saves updated dropdown field
   $(this).closest(".column-container-notes").find(".custom-dropdown-slots").each(function() {
    var name = "custom-dropdown"
    var value = $(this).closest(".column-container-notes").find(this).html();
    localStorage.setItem(name, value);
    var value = localStorage.getItem(name);
    $(this).html(value);
   });

   // save animation will animate if save is working
   $(this).closest(".column-container-notes").find(".notes-btn-each").show();
   "use strict";
   $(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
   setTimeout(function() {
    $(".notes-btn-each").fadeOut();
   }, 1000);
   return false;
  }
 });

 // alerts if form is not complete
 $(this).closest(".store-data").each(function() {
  var option2 = $(this).closest(".column-container-notes").find(".store-data").val();
  if (option2.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(this).closest(".column-container-notes").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-alert").fadeIn(300);
  }
  if (option2.length > 0) {
   $(this).css({
    "background": ""
   });
  }
 });

 // counts added items and updates placeholder on save
 $('.custom-dropdown-slots').each(function(i) {
  $(function() {
   var empty = $(this).find(".custom-dropdown-slots .custom-dropdown");
   if (empty.length === 0) {
    $(".draft-slots").eq(i).attr("placeholder", "There are no saved files available to load");
   }
   if (empty.length > 0) {
    $(".draft-slots").eq(i).attr("placeholder", "Select a file to load. Number of saved files: " + empty.length);
   }
  });
 });
 return false;
});

// auto load current dropdown field
$(".custom-dropdown-slots").each(function() {
 var name = "custom-dropdown"
 var value = $(this).html();
 var value = localStorage.getItem(name);
 $(this).html(value);
});

// resets each field
$(".store-reset").on("click", function() {
 "use strict";
 $(this).closest("form").find(".custom-select-close").hide();
 $(this).closest("form").find(".custom-select-search").show();
 $(this).closest("form").removeAttr("action").find("input[type=text]").css({
  "background": ""
 });
 $(this).closest("form").find("textarea").val("").css({
  "background": ""
 });
 $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
});

// static clear, no effect on saved data, for index page
$(".store-clear").on("click", function() {
 "use strict";
 $(this).closest("form").find(".custom-select-close").hide();
 $(this).closest("form").find(".custom-select-search").show();
 $(this).closest("form").find("textarea").val("");
 $(this).closest("form").find("input[type=text]").val("").css({
  "background": ""
 });
});

// resets all fields. removes all local storage data
$(".store-reset-all").on("click", function() {
 "use strict";
 $(".custom-select-close").hide();
 $(this).closest(".notes-container").find("textarea").val("");
 $(".custom-dropdown-slots").empty();
 localStorage.clear();
 $(this).closest("form").removeAttr("action").find("input[type=text]").val("").attr("placeholder", "There are no saved files available to load").css({
  "background": ""
 });
 $(this).closest("form").find("textarea").val("").css({
  "background": ""
 });
 $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
});

// sends nomination. alerts if input is blank. adds focus to empty input area
$(".store-nominate").click(function() {
 "use strict";
 $(".store-data").each(function() {
  var option = $(".store-data").val();
  if (option.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(".modal-alert").fadeIn(300);
  }
  if (option.length > 0) {
   $("form").removeAttr("action").attr("action", "awards-confirmation.html").submit();
   $(this).css({
    "background": ""
   });
  }
 });
 return false;
});

// needed for confirmation page, to clear local storage session when complete
$(".store-complete-container").hide();
$(".store-complete").on("click", function() {
 $(".store-data").each(function() {
  var text = "store-data"
  localStorage.removeItem(text);
 });
 $(".store-data").each(function() {
  var text = "store-data"
  localStorage.removeItem(text);
 });
});

// mailto from the dashboard (from a div, not values from a textarea)
$(".nomination-entry-share").click(function() {
 "use strict";
 $(this).closest(".nomination-entry-submissions").find(".store-nominator-notes").each(function() {
  var mailto = "mailto:nominate@adobe.com";
  var bodyStr = $(this).html().replace(/\<br>*/ig, "%0D%0A").replace(/\<p>*/ig, "").replace(/\<\/p\>*/ig, "%0D%0A%0D%0A");
  var nominee = $(this).closest(".nomination-entry-container").find(".store-nominee-enter").html();
  var award = $(this).closest(".nomination-entry-container").find(".store-nominator-award").html();
  var subjectStr = "subject=Thank You " + nominee + "!" + " - " + award;
  var cc = "?" + "cc=nominate@adobe.com,";
  window.location = mailto + cc + "&" + subjectStr + "&body=" + bodyStr + "%0D%0A%0D%0A%0D%0A Sincerely,%0D%0A Adobe Nominator";
 });
});

// dynamic positioning of the share link
$(".store-nominator-notes-container").each(function() {
 if ($(window).width() >= 1024) {
  $(this).closest(".nomination-entry-submissions-container:has(.nomination-entry-submissions:nth-of-type(1)) .store-nominator-notes-container").css({
   "min-height": "105px"
  });
  $(this).closest(".nomination-entry-submissions-container:has(.nomination-entry-submissions:nth-of-type(2)) .store-nominator-notes-container").css({
   "min-height": "auto"
  });
 }
});