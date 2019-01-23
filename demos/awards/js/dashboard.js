$(window).on("load", function () {
    "use strict";
    // counts total nominations per nominee without animation
    $('.nomination-entry-container:visible').each(function (i) {
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
            $(this).prop('Counter', 0).delay(750).animate({
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

// sorting
$(".custom-dropdown").on("click", function () {
    "use strict";
    $(".store-nominator-award").each(function () {
        var award_text = $(this).text();
        var award_val = $(this).closest("form").find(".custom-dropdown-dashboard").val();
        // changes the form"s action link on specific choices
        if (award_text === award_val) {
            $(this).closest(".nomination-entry-submissions").addClass("showthis").show();
        } else {
            $(this).closest(".nomination-entry-submissions").removeClass("showthis").addClass("hidethis").hide();
        }
    });

    // shows all
    $(".store-nominator-award").each(function () {
        var award_val = $(this).closest("form").find(".custom-dropdown-dashboard").val();
        if (award_val === "All Award Winners") {
            $(".nomination-entry-submissions").addClass("showthis").show();
        }
    });

    // filters all those with the showthis class
    $(".nomination-entry-submissions-container").each(function () {
        if ($(this).find(".nomination-entry-submissions").hasClass('showthis')) {
            $(this).closest(".nomination-entry-container").show();
        } else {
            $(this).closest(".nomination-entry-container").hide();
        }
    });

    // counts total nominations per nominee without animation
    $('.nomination-entry-container:visible').each(function (i) {
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
            $(this).prop('Counter', 0).animate({
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