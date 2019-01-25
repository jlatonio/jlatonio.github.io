// hides no submission message by default
$(".nomination-no-entries").hide();

$(window).on("load", function () {
    "use strict";
    // counts total nominations per nominee without animation
    $(".nomination-entry-container:visible").each(function (i) {
        var empty = $(this).find(".nomination-entry-submissions:visible").length;
        $(".store-nominee-total-nominations:visible").eq(i).text(empty);
    });

    // adds a 0 before 1
    $(".store-nominee-total-nominations:visible").each(function () {
        $(this).text(function (a, b) {
            var result = Number(b) + 0;
            if (result < 10) {
                return "0" + result;
            } else {
                return result;
            }
        });
    });

    // counts and animates total nominations overall
    $(".nomination-total-nominations").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-submissions:visible");
        if (option.length < 9) {
            $(this).prop("Counter", 0).delay(750).animate({
                Counter: option.length
            }, {
                duration: 2000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        } else {
            $(this).prop("Counter", 0).delay(750).animate({
                Counter: option.length
            }, {
                duration: 5000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });

    // counts and animates total nominees overall
    $(".nomination-total-nominees").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-container:visible");
        if (option.length < 9) {
            $(this).prop("Counter", 0).delay(750).animate({
                Counter: option.length
            }, {
                duration: 2000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        } else {
            $(this).prop("Counter", 0).delay(750).animate({
                Counter: option.length
            }, {
                duration: 5000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
    return false;
});

// Filtering
$(".custom-dropdown").on("click", function () {
    "use strict";
    $(".nomination-entry-submissions").removeClass("hidethis").removeClass("showthis");
    $(".store-nominator-award").each(function () {
        var award_text = $(this).text();
        var award_val = $(this).closest("form").find(".custom-dropdown-dashboard").val();
        // changes the form"s action link on specific choices
        if (award_text === award_val) {
            $(this).closest(".nomination-entry-submissions").removeClass("hidethis").addClass("showthis").show();
        } else {
            $(this).closest(".nomination-entry-submissions").removeClass("showthis").addClass("hidethis").hide();
        }
    });

    // shows all
    $(".store-nominator-award").each(function () {
        var award_val = $(this).closest("form").find(".custom-dropdown-dashboard").val();
        if (award_val === "All Award Winners") {
            $(".nomination-entry-submissions").removeClass("hidethis").addClass("showthis").show();
        }
    });

    // filters all those with the showthis class
    $(".nomination-entry-submissions-container").each(function () {
        if ($(this).find(".nomination-entry-submissions").hasClass("showthis")) {
            $(this).closest(".nomination-entry-container").show();
        } else {
            $(this).closest(".nomination-entry-container").hide();
        }
    });

    // counts total nominations per nominee without animation
    $(".nomination-entry-container:visible").each(function (i) {
        var empty = $(this).find(".nomination-entry-submissions:visible").length;
        $(".store-nominee-total-nominations:visible").eq(i).text(empty);
    });

    // adds a 0 before single digits. Can be useful for sorting?
    $(".store-nominee-total-nominations:visible").each(function () {
        $(this).text(function (a, b) {
            var result = Number(b) + 0;
            if (result < 10) {
                return "0" + result;
            } else {
                return result;
            }
        });
    });

    // counts and animates total nominations overall
    $(".nomination-total-nominations").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-submissions:visible");
        if (option.length < 9) {
            $(this).prop("Counter", 0).animate({
                Counter: option.length
            }, {
                duration: 2000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        } else {
            $(this).prop("Counter", 0).animate({
                Counter: option.length
            }, {
                duration: 5000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });

    // counts and animates total nominees overall
    $(".nomination-total-nominees").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-container:visible");
        if (option.length < 9) {
            $(this).prop("Counter", 0).animate({
                Counter: option.length
            }, {
                duration: 2000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        } else {
            $(this).prop("Counter", 0).animate({
                Counter: option.length
            }, {
                duration: 5000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });

    // Shows no submission message
    $(".nomination-no-entries").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-container:visible");
        if (option.length === 0) {
            $(".nomination-no-entries").show();
            $("html, body").animate({
                scrollTop: $(".custom-dropdown-outer").offset().top - 140
            },
                300, "easeInOutQuad");
            return false;
        } else {
            $(".nomination-no-entries").hide();
            $("html,body").animate({
                scrollTop: $(".custom-dropdown-outer").offset().top - 140
            },
                300, "easeInOutQuad");
            return false;
        }
    });

    // Please fix all sorting features! It works, but not perfectly. Please update as needed.

    // Sorting by Name (A - Z)
    $(".nomination-entry-container").removeAttr("data");

    var award_val = $(this).closest("form").find(".custom-dropdown-sort").val();
    if (award_val === "By Name (A - Z)") {
        $(".store-nominee-enter").each(function () {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent > b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }

    // Sorting by Name (Z - A)
    if (award_val === "By Name (Z - A)") {
        $(".store-nominee-enter").each(function () {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent < b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }

    // Sorting by Nominations (descnding)
    if (award_val === "Total Nominations (Least)") {
        $(".store-nominee-total-nominations").each(function () {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent < b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }

    // Sorting by Nominations (ascending)
    if (award_val === "Total Nominations (Most)") {
        $(".store-nominee-total-nominations").each(function () {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent > b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }

    // Sorting by Date (Recent)
    if (award_val === "By Date (Newest)") {
        $(".store-nominator-date").each(function () {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent > b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }

    // Sorting by Date (Oldest)
    if (award_val === "By Date (Oldest)") {
        $(".store-nominator-date").each(function (i) {
            var sort_this = $('.nomination-entry-container');
            var main_container = $(this).closest('.nomination-entry-container-outer');
            $(sort_this).sort(function(a, b) {
              if (a.textContent < b.textContent) {  // ascending: <  |  descending: >
                return -1;
              } else {
                return 1;
              }
            }).appendTo(main_container);
        });
    }


    // fixes alternating styles
    $(".nomination-entry-container:visible:even").css({
        "background-color": "#fff"
    });
    $(".nomination-entry-container:visible:odd").css({
        "background-color": "#f3f3f3"
    });
    $(".nomination-entry-container:visible").removeClass("nomination-entry-container-last");
    $(".nomination-entry-container:visible:last").addClass("nomination-entry-container-last");
    return false;
});

// mailto from the dashboard (from a div, not values from a textarea). 
$(".nomination-entry-share").click(function () {
    "use strict";
    $(this).closest(".nomination-entry-submissions").find(".store-nominator-notes").each(function () {
        var mailto = "mailto:nominate@adobe.com";
        var bodyStr = $(this).html().replace(/\<br>*/ig, "%0D%0A").replace(/\<p>*/ig, "").replace(/\<\/p\>*/ig, "%0D%0A%0D%0A"); //Needs to honor line breaks in body
        var nominee = $(this).closest(".nomination-entry-container").find(".store-nominee-enter").html();
        var award = $(this).closest(".nomination-entry-container").find(".store-nominator-award").html();
        var subjectStr = "subject=Thank You " + nominee + "!" + " - " + award;
        var cc = "?" + "cc=nominate@adobe.com,";
        window.location = mailto + cc + "&" + subjectStr + "&body=" + bodyStr + "%0D%0A%0D%0A%0D%0A Sincerely,%0D%0A Adobe Nominator";
    });
});

// enables the datepicker
$(".custom-select-date, .custom-date").on("click", function () {
    "use strict";
    $(".custom-dropdown-start-date, .custom-dropdown-end-date").datepicker({
        changeMonth: false,
        changeYear: false,
        numberOfMonths: 1,
        dateFormat: "mm-dd-yy",
        showAnim: "fadeIn",
    });
    $(this).closest(".custom-dropdown-outer").find(".custom-date").datepicker("show");
    $("body").trigger("click"); // closes all other open menus
    return false;
});


$('.store-nominator-date').each(function(i) {
    var sort_this = $(this).closest('.nomination-entry-submissions');
    var main_container = $(this).closest('.nomination-entry-submissions-container');
    $(sort_this).eq(i).sort(function(a, b) {
      if (a.textContent > b.textContent) {  // ascending: <  |  descending: >
        return -1;
      } else {
        return 1;
      }
    }).appendTo(main_container);
});