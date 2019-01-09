// loads latest every session for the ty page
$(".store-data-ty").each(function() {
 "use strict";
 var text = "store-data-ty";
 var value = localStorage.getItem(text);
 $(this).val(value);
 // If textarea is empty, a new class is added
 if ($.trim($(this).val()) === "") {
  $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
 } else {
  $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
 }
 $(this).attr("text");
});

// loads latest every session for the awards page
$(".store-data-awards").each(function() {
 "use strict";
 var text = "store-data-awards";
 var value = localStorage.getItem(text);
 $(this).val(value);
 // If textarea is empty, a new class is added
 if ($.trim($(this).val()) === "") {
  $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
 } else {
  $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
 }
 $(this).attr("text");
});
// save icon. hidden by default
$(".notes-btn-each").hide();

// saves data on click
$(".store-save").on("click", function() {
 "use strict";
 $(this).closest("form").find(".store-data-ty").css({
  "background": ""
 });
 $(this).closest(".notes-container").find(".store-data-ty").each(function() {
  var text = "store-data-ty";
  var value = $(this).val();
  localStorage.setItem(text, value);
  var value = localStorage.getItem(text);
  $(this).val(value);
 });

 $(this).closest(".notes-container").find(".store-data-awards").each(function() {
 "use strict";
  var text = "store-data-awards";
  var value = $(this).val();
  localStorage.setItem(text, value);
  var value = localStorage.getItem(text);
  $(this).val(value);
 });

 // save animation
 $(".notes-btn-each").show();
 "use strict";
 $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
 setTimeout(function() {
  $(".notes-btn-each").fadeOut();
 }, 1000);
 return false;
});

// resets each field
$(".store-reset").on("click", function() {
 "use strict";
 $(".custom-select-close").hide();
 $(this).closest("form").removeAttr("action");
 $(this).closest("form").find("input[type=text]").val("").css({
  "background": ""
 });
 $(this).closest("form").find("textarea").val("").css({
  "background": ""
 });
 $(this).closest(".notes-container").find("textarea").val("");
 $(this).closest(".notes-container").find(".store-data-ty").each(function() {
  var text = "store-data-ty"
  localStorage.removeItem(text);
 });

 $(this).closest(".notes-container").find(".store-data-awards").each(function() {
  var text = "store-data-awards"
  localStorage.removeItem(text);
 });
 $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
});

// sends nomination. alerts if input is blank. adds focus to empty input area
$(".store-nominate").click(function() {
  "use strict";
 $(".store-data-ty").each(function() {
  var option = $(".store-data-ty").val();
  if (option.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(".modal-alert").show();
  }
  if (option.length > 0) {
   $("form").removeAttr("action");
   $("form").attr("action", "ty-confirmation.html");
   $("form").submit();
   $(this).css({
    "background": ""
   });
  }
 });
 $(".store-data-awards").each(function() {
  "use strict";
  var option = $(".store-data-awards").val();
  if (option.length === 0) {
   $(this).css({
    "background": "#fff2f2"
   });
   $(".modal-alert").show();
  }
  if (option.length > 0) {
   $("form").removeAttr("action");
   $("form").attr("action", "awards-confirmation.html");
   $("form").submit();
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
 $(".store-data-ty").each(function() {
  var text = "store-data-ty"
  localStorage.removeItem(text);
 });
 $(".store-data-awards").each(function() {
  var text = "store-data-awards"
  localStorage.removeItem(text);
 });
});

// mailto from the dashboard (from a div, not values from a textarea)
$(".nomination-entry-share").click(function() {
  "use strict";
 $(this).closest(".nomination-entry-submissions").find(".store-nominator-notes").each(function() {
   var mailto = "mailto:nominate@adobe.com";
   var bodyStr = $(this).html().replace(/\<br>*/ig,"%0D%0A").replace(/\<p>*/ig,"").replace(/\<\/p\>*/ig,"%0D%0A%0D%0A");
   var nominee = $(this).closest(".nomination-entry-container").find(".store-nominee-enter").html();
   var award = $(this).closest(".nomination-entry-container").find(".store-nominator-award").html();
   var subjectStr = "subject=Thank You " + nominee + "!" + " - " + award;
   var cc = "?" + "cc=nominate@adobe.com,";
   window.location = mailto + cc + "&" + subjectStr + "&body=" + bodyStr + "%0D%0A%0D%0A%0D%0A Sincerely,%0D%0A Adobe Nominator";
 });
});

 // dynamic positioning of the share link
$(".store-nominator-notes-container").each(function() {
if ($(window).width() >= 1024){	
 $(this).closest(".nomination-entry-submissions-container:has(.nomination-entry-submissions:nth-of-type(1)) .store-nominator-notes-container").css({
  "min-height" : "105px"
  });
  $(this).closest(".nomination-entry-submissions-container:has(.nomination-entry-submissions:nth-of-type(1)) .store-nominator-notes-container").css({
  "min-height" : "auto"
  });
 }
});