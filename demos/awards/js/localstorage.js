// save icon. hidden by default
$(".notes-btn-each").hide();

// loads draft sessions for the awards page
$(".store-load").on("click", function() {
 $(this).closest("form").find(".store-data").each(function() {
  "use strict";
  var option = $(".draft-slots").val();
  if (option.length === 0) {
   $(this).closest(".notes-container").find(".draft-slots").css({
    "background": "#fff2f2"
   });
   $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-load").show();
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

// saves data on click
$(".store-save").on("click", function() {
 "use strict";
 $(this).closest("form").find(".store-data").css({
  "background": ""
 });

 // saves data. alerts if input is blank. adds focus to empty input area
 $(".draft-slots").each(function() {
  var option = $(".draft-slots").val();
  var option2 = $(".store-data").val();
  if (option.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-save").show();
  }
  if (option.length > 0) {
   var text = $(".draft-slots").val();
   var value = $(this).closest(".notes-container").find(".store-data").val();
   localStorage.setItem(text, value);
   var value = localStorage.getItem(text);
   $(this).css({
    "background": ""
   });
  }
   if (option.length > 0 && option2.length > 0) {
   var text = $(".draft-slots").val();
   var value = $(this).closest(".notes-container").find(".store-data").val();
   localStorage.setItem(text, value);
   var value = localStorage.getItem(text);
   $(this).css({
    "background": ""
   });
   $(".notes-btn-each").show();
   "use strict";
   $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
   setTimeout(function() {
    $(".notes-btn-each").fadeOut();
   }, 1000);
   return false;
  } 
 });
 $(".store-data").each(function() {
  var option2 = $(".store-data").val();
  if (option2.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
   $(".modal-alert").show();
  }
  if (option2.length > 0) {
   $(this).css({
    "background": ""
   });
  }
 });
 return false;
});

// resets each field
$(".store-reset").on("click", function() {
 "use strict";
 $(this).closest("form").find(".custom-select-close").hide();
 $(this).closest("form").find(".custom-select-search").show();
 $(this).closest(".notes-container").find("textarea").val("");
 var text = $(this).closest(".notes-container").find(".draft-slots").val();
 localStorage.removeItem(text);
 $(this).closest("form").removeAttr("action").find("input[type=text]").css({
  "background": ""
 });
 $(this).closest("form").find("textarea").val("").css({
  "background": ""
 });
 $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
});

// static clear, no effect on saved data
$(".store-clear").on("click", function() {
 "use strict";
 $(this).closest("form").find(".custom-select-close").hide();
 $(this).closest("form").find(".custom-select-search").show();
 $(this).closest("form").find("textarea").val("");
 $(this).closest("form").find("input[type=text]").val("").css({
  "background": ""
 });
});

// resets all fields
$(".store-reset-all").on("click", function() {
 "use strict";
 $(".custom-select-close").hide();
 $(this).closest(".notes-container").find("textarea").val("");
 var data1 = "Saved Data A";
 var data2 = "Saved Data B";
 var data3 = "Saved Data C";
 var data4 = "Saved Data D";
 localStorage.removeItem(data1);
 localStorage.removeItem(data2);
 localStorage.removeItem(data3);
 localStorage.removeItem(data4);
  $(this).closest("form").removeAttr("action").find("input[type=text]").val("").css({
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
   $(".modal-alert").show();
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

// sends draft to email. alerts if input is blank. adds focus to empty input area
$(".store-share").click(function() {
 "use strict";
 $("textarea").each(function() {
  var option = $("textarea").val();
  if (option.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(".modal-share").show();
  }
  if (option.length > 0) {
   var mailto = "mailto:nominate@adobe.com";
   var inputs = $("textarea");
   var bodyStr = "";
   var nominee = $(".store-nominee-enter").text();
   var subjectStr = "subject=Thank You " + nominee + "!";
   var cc = "?" + "cc=nominate@adobe.com,";
   inputs.each(function(index, value) {
    bodyStr += value.value;
   });
   window.location = mailto + cc + "&" + subjectStr + "&body=" + encodeURIComponent(bodyStr) + "%0D%0A%0D%0A%0D%0A Sincerely,%0D%0A Adobe Nominator";
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