// toggles drop down and toggle arrow icon
$(".custom-dropdown-group,.custom-dropdown-close").hide();
$(".custom-dropdown-open").on("click", function() {
    // closes other elements other than this when clicked
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
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").removeClass("custom-dropdown-arrow-close");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-arrow-toggle").addClass("custom-dropdown-arrow-open");
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").slideUp(100);
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-open").show();
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-close").hide();
    return false;
});

// closes menu when user clicks away
$("body").on("click", function(){
    if ($(this).not(".custom-dropdown-outer")){
    $(".custom-dropdown-group").slideUp(100);
    $(".custom-dropdown-open").show();
    $(".custom-dropdown-close").hide();
    }
});

// defaults form action to link to...
$(".custom-dropdown-input").attr("action", "#");

// adds the html to the input value for each button clicked
$(".custom-dropdown").on("click", function(){
    var option = $(this).text();
    var title = $(this).attr("title");
    var checkinput = $(this).closest(".custom-dropdown-outer").find("input[type='text']")
    $(this).closest(".custom-dropdown-outer").find(checkinput).val(option);
    $(checkinput).attr("title", title);

    // changes the form"s action link on specific choices
    if ($("input[type='text']").attr("title") == "custom-dropdown-btn1") {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "ty-entry");
    } else {
        $(".custom-dropdown-input").removeAttr("action");
        $(".custom-dropdown-input").attr("action", "awards-entry");
    }
    
    // sets active state
    $(".custom-dropdown").css("background-color", "");
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
    $(".custom-dropdown").css({"background-color": "", "color": ""});
    $(this).closest(".custom-dropdown-outer").find(this).css({"background-color": "#02c6bb", "color": "#fff"});
    return false;
});

// enables the submit button if fields are filled. adds focus to empty input area
$(".store-continue").click(function(e) {
    var isValid = true;
    $("input[type='text']").each(function() {
        if ($.trim($(this).val()) == "") {
            isValid = false;
            $(this).css({"background": "#fff2f2"});
            $(".modal-alert").show();
        } else {
            $(this).css({"background": ""});
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
    $(".store-data").focus();
    $(".custom-dropdown-input").find("input:text[value='']:visible").first().focus();
    return false;
});

$(".modal-close-ineligible").on("click", function() {
    $(".custom-select").focus();
    $(".custom-select").css({"background": "#fff2f2"});
    return false;
});

$(".modal-close-select").on("click", function() {
    $(".custom-select").focus();
    $(".custom-select").css({"background": "#fff2f2"});
    return false;
});

// resets required fields to a white bg
$(".custom-dropdown-scroll div").on("click", function() {
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-menu").css({"background": ""});
    return false;
});
$("input[type='text'],textarea").keypress(function(){
    $(this).css({"background": ""});
});

// autofill email
 $(document).ready(function(){
  $(".custom-select").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var option = $(this).val();
    var item = option
        if (option.length === 0) {
            $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
        }
        if (option.length > 1) {
            $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").show();
        }
    $(this).closest(".custom-dropdown-outer").find(".custom-dropdown").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
    return false;
});