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

    // defaults to current quarter (dynamically adjusts Quarter symbol based on today's date). Good for the next two years, or until 2021 quarter dates are released
    
   $(".nomination-totals-centerpiece h1").delay(100).fadeIn(900);
    $(function () {
        var FY2019_Q1 = "2018-12-01";
        var FY2019_Q2 = "2019-03-02";
        var FY2019_Q3 = "2019-06-01";
        var FY2019_Q4 = "2019-08-31";
        var FY2020_Q1 = "2020-11-30";
        var FY2020_Q2 = "2020-02-29";
        var FY2020_Q3 = "2020-05-30";
        var FY2020_Q4 = "2020-08-29";
        var FY2021_Q1 = "2020-11-28";

        var CurrentDate = new Date();
        FY2019_Q1 = new Date(FY2019_Q1);
        FY2019_Q2 = new Date(FY2019_Q2);
        FY2019_Q3 = new Date(FY2019_Q3);
        FY2019_Q4 = new Date(FY2019_Q4);
        FY2020_Q1 = new Date(FY2020_Q1);
        FY2020_Q2 = new Date(FY2020_Q2);
        FY2020_Q3 = new Date(FY2020_Q3);
        FY2020_Q4 = new Date(FY2020_Q4);

        // FY 2019
        if (CurrentDate >= FY2019_Q1 && CurrentDate <= FY2019_Q2) {
            $(".custom-dropdown-quarter").val("FY2019 Q1");
            $(".custom-dropdown-start-date").val("2018-12-01");
            $(".custom-dropdown-end-date").val("2019-03-01");
            $(".nomination-totals-centerpiece h1").text("Q1");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2019_Q2 && CurrentDate <= FY2019_Q3) {
            $(".custom-dropdown-quarter").val("FY2019 Q2");
            $(".custom-dropdown-start-date").val("2019-03-02");
            $(".custom-dropdown-end-date").val("2019-05-31");
            $(".nomination-totals-centerpiece h1").text("Q2");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2019_Q3 && CurrentDate <= FY2019_Q4) {
            $(".custom-dropdown-quarter").val("FY2019 Q3");
            $(".custom-dropdown-start-date").val("2019-06-01");
            $(".custom-dropdown-end-date").val("2019-08-30");
            $(".nomination-totals-centerpiece h1").text("Q3");
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2019_Q4 && CurrentDate <= FY2020_Q1) {
            $(".custom-dropdown-quarter").val("FY2019 Q4");
            $(".custom-dropdown-start-date").val("2019-08-31");
            $(".custom-dropdown-end-date").val("2019-11-29");
            $(".nomination-totals-centerpiece h1").text("Q4");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        // FY 2020
        if (CurrentDate >= FY2020_Q1 && CurrentDate <= FY2020_Q2) {
            $(".custom-dropdown-quarter").val("FY2020 Q1");
            $(".custom-dropdown-start-date").val("2020-11-30");
            $(".custom-dropdown-end-date").val("2020-02-28");
            $(".nomination-totals-centerpiece h1").text("Q1");
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2020_Q2 && CurrentDate <= FY2020_Q3) {
            $(".custom-dropdown-quarter").val("FY2020 Q2");
            $(".custom-dropdown-start-date").val("2020-02-29");
            $(".custom-dropdown-end-date").val("2020-05-29");
            $(".nomination-totals-centerpiece h1").text("Q2");
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2020_Q3 && CurrentDate <= FY2020_Q4) {
            $(".custom-dropdown-quarter").val("FY2020 Q3");
            $(".custom-dropdown-start-date").val("2020-05-30");
            $(".custom-dropdown-end-date").val("2020-08-28");
            $(".nomination-totals-centerpiece h1").text("Q3");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }

        if (CurrentDate >= FY2020_Q4 && CurrentDate <= FY2021_Q1) {
            $(".custom-dropdown-quarter").val("FY2020 Q4");
            $(".custom-dropdown-start-date").val("2020-08-29");
            $(".custom-dropdown-end-date").val("2020-11-27");
            $(".nomination-totals-centerpiece h1").text("Q4");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            setTimeout(function () {
            $(".store-go").trigger("click");
            }, 1200);
            return false;
        }
    });
    return false;
});

$(".custom-dropdown-sort").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function () {
    "use strict";
    // Please QA all sorting features. The logic is to apply the child text as a data attribute to the parent and sort the attribute. Please update as needed.

    // Sorting by Name (A - Z)
    $(".nomination-entry-container").removeAttr("data");

    var award_val = $(this).closest("form").find(".custom-dropdown-sort").val();
    var main_container = $(".nomination-entry-container-outer");

    if (award_val === "By Name (A - Z)") {
        $(".store-nominee-enter").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort < b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
    }

    // Sorting by Name (Z - A)
    if (award_val === "By Name (Z - A)") {
        $(".store-nominee-enter").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort > b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
    }

    // Sorting by Nominations (descending)
    if (award_val === "Total Nominations (Least)") {
        $(".store-nominee-total-nominations").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort < b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
    }

    // Sorting by Nominations (ascending)
    if (award_val === "Total Nominations (Most)") {
        $(".store-nominee-total-nominations").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort > b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
    }

    // per name, sort defaults to date (Newest)
    if (award_val === "Latest Date (Each Nominee)") {
        $(".nomination-entry-submissions-container").each(function () {
            var main_container = $(this).find(".nomination-entry-submissions");
            $(main_container).sort(function (a, b) {
                if (a.dataset.date > b.dataset.date) { // ascending: <  |  descending: >
                    return -1;
                } else {
                    return 1;
                }
            }).appendTo(this);
        });
    }

    // per name, sort defaults to date (Oldest)
    if (award_val === "Oldest Date (Each Nominee)") {
        $(".nomination-entry-submissions-container").each(function () {
            var main_container = $(this).find(".nomination-entry-submissions");
            $(main_container).sort(function (a, b) {
                if (a.dataset.date < b.dataset.date) { // ascending: <  |  descending: >
                    return -1;
                } else {
                    return 1;
                }
            }).appendTo(this);
        });
    }

    // Sorting by overall Date (Newest)
    if (award_val === "Latest Date (Overall)") {
        $(".nomination-entry-submissions-container").each(function () {
            var main_container = $(this).find(".nomination-entry-submissions");
            $(main_container).sort(function (a, b) {
                if (a.dataset.date > b.dataset.date) { // ascending: <  |  descending: >
                    return -1;
                } else {
                    return 1;
                }
            }).appendTo(this);
        });
        $(".nomination-entry-submissions:first-child").find(".store-nominator-date").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort > b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
    }

    // Sorting by overall Date (Oldest)
    if (award_val === "Oldest Date (Overall)") {
        $(".nomination-entry-submissions-container").each(function () {
            var main_container = $(this).find(".nomination-entry-submissions");
            $(main_container).sort(function (a, b) {
                if (a.dataset.date < b.dataset.date) { // ascending: <  |  descending: >
                    return -1;
                } else {
                    return 1;
                }
            }).appendTo(this);
        });
        $(".nomination-entry-submissions:first-child").find(".store-nominator-date").each(function (i) {
            var result = $(this).text();
            $(".nomination-entry-container").eq(i).attr("data-sort", result);
        });
        $(".nomination-entry-container").sort(function (a, b) {
            if (a.dataset.sort < b.dataset.sort) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(main_container);
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

// Filtering
$(".custom-dropdown-award, .custom-dropdown-quarter").closest(".custom-dropdown-outer").find(".custom-dropdown").on("click", function () {
    "use strict";
    $(".nomination-entry-submissions").removeClass("hidethis").removeClass("showthis");
    $(".store-nominator-award").each(function () {
        var award_text = $(this).text();
        var award_val = $(this).closest("form").find(".custom-dropdown-award").val();
        // changes the form"s action link on specific choices
        if (award_text === award_val) {
            $(this).closest(".nomination-entry-submissions").removeClass("hidethis").addClass("showthis");
        } else {
            $(this).closest(".nomination-entry-submissions").removeClass("showthis").addClass("hidethis");
        }
    });

    // shows all
    $(".store-nominator-award").each(function () {
        var award_val = $(this).closest("form").find(".custom-dropdown-award").val();
        if (award_val === "All Award Winners") {
            $(".nomination-entry-submissions").removeClass("hidethis").addClass("showthis");
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

    // adds a 0 before single digits. Also needed for sorting
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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
    });

    // Shows no submission message
    $(".nomination-no-entries").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-container:visible");
        if (option.length === 0) {
            $(".nomination-no-entries").show();
            $("html, body").animate({
                    scrollTop: $(".custom-dropdown-outer").offset().top - 170
                },
                200, "easeInOutQuad");
            return false;
        } else {
            $(".nomination-no-entries").hide();
            $("html, body").animate({
                    scrollTop: $(".custom-dropdown-outer").offset().top - 170
                },
                200, "easeInOutQuad");
            return false;
        }
    });

    // Quick Links (FY Quarters)
    var quarter_val = $(this).closest("form").find(".custom-dropdown-quarter").val();
    if (quarter_val === "FY2019 Q1") {
        $(".custom-dropdown-start-date").val("2018-12-01");
        $(".custom-dropdown-end-date").val("2019-03-01");
        $(".nomination-totals-centerpiece h1").text("Q1");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2019 Q2") {
        $(".custom-dropdown-start-date").val("2019-03-02");
        $(".custom-dropdown-end-date").val("2019-05-31");
        $(".nomination-totals-centerpiece h1").text("Q2");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2019 Q3") {
        $(".custom-dropdown-start-date").val("2019-06-01");
        $(".custom-dropdown-end-date").val("2019-08-30");
        $(".nomination-totals-centerpiece h1").text("Q3");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2019 Q4") {
        $(".custom-dropdown-start-date").val("2019-08-31");
        $(".custom-dropdown-end-date").val("2019-11-29");
        $(".nomination-totals-centerpiece h1").text("Q4");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2019 (Annual Q1-Q4)") {
        $(".custom-dropdown-start-date").val("2018-12-01");
        $(".custom-dropdown-end-date").val("2019-11-29");
        $(".nomination-totals-centerpiece h1").text("FY");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2020 Q1") {
        $(".custom-dropdown-start-date").val("2020-11-30");
        $(".custom-dropdown-end-date").val("2020-02-28");
        $(".nomination-totals-centerpiece h1").text("Q1");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2020 Q2") {
        $(".custom-dropdown-start-date").val("2020-02-29");
        $(".custom-dropdown-end-date").val("2020-05-29");
        $(".nomination-totals-centerpiece h1").text("Q2");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2020 Q3") {
        $(".custom-dropdown-start-date").val("2020-05-30");
        $(".custom-dropdown-end-date").val("2020-08-28");
        $(".nomination-totals-centerpiece h1").text("Q3");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2020 Q4") {
        $(".custom-dropdown-start-date").val("2020-08-29");
        $(".custom-dropdown-end-date").val("2020-11-27");
        $(".nomination-totals-centerpiece h1").text("Q4");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
    }

    if (quarter_val === "FY2020 (Annual Q1-Q4)") {
        $(".custom-dropdown-start-date").val("2020-11-30");
        $(".custom-dropdown-end-date").val("2020-11-27");
        $(".nomination-totals-centerpiece h1").text("FY");
        $(".custom-select-close").show();
        $(".custom-select-date").hide();
        $(".store-go").trigger("click");
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
        dateFormat: "yy-mm-dd",
        showAnim: "fadeIn"
    });
    $(this).closest(".custom-dropdown-outer").find(".custom-date").datepicker("show");
    $("body").trigger("click"); // closes all other open menus
    return false;
});

// resets quick link if user searches with a new custom date
$(".custom-date").on("change", function () {
    "use strict";
    $(".custom-dropdown-quarter").val("");
    $(".custom-dropdown-award").val("All Award Winners");
    
    // resets active states for search
    $(".nomination-entry-container").show();
    $(".nomination-entry-submissions").removeClass("hidethis").removeClass("showthis");
    $(".custom-dropdown-award, .custom-dropdown-quarter").closest(".custom-dropdown-outer").find(".custom-dropdown").each(function () {
    $(this).css({
            "background-color": ""
        });
    });
    
    // Quarter automatically shows, depending on the custom dates chosen
    $(function () {
        var start_date = $(".custom-dropdown-start-date").val();
        var end_date = $(".custom-dropdown-end-date").val();
        var FY2019_Q1 = "2018-12-01";
        var FY2019_Q2 = "2019-03-02";
        var FY2019_Q3 = "2019-06-01";
        var FY2019_Q4 = "2019-08-31";
        var FY2020_Q1 = "2020-11-30";
        var FY2020_Q2 = "2020-02-29";
        var FY2020_Q3 = "2020-05-30";
        var FY2020_Q4 = "2020-08-29";
        var FY2021_Q1 = "2020-11-28";

        // FY 2019
        if (start_date >= FY2019_Q1 && end_date < FY2019_Q2) {
            $(".nomination-totals-centerpiece h1").text("Q1");
            return false;
        }

        if (start_date >= FY2019_Q2 && end_date <= FY2019_Q3) {
            $(".nomination-totals-centerpiece h1").text("Q2");
            return false;
        }

        if (start_date >= FY2019_Q3 && end_date <= FY2019_Q4) {
            $(".nomination-totals-centerpiece h1").text("Q3");
            return false;
        }

        if (start_date >= FY2019_Q4 && end_date <= FY2020_Q1) {
            $(".nomination-totals-centerpiece h1").text("Q4");
            return false;
        }

        // FY 2020
        if (start_date >= FY2020_Q1 && end_date <= FY2020_Q2) {
            $(".nomination-totals-centerpiece h1").text("Q1");
            return false;
        }

        if (start_date >= FY2020_Q2 && end_date <= FY2020_Q3) {
            $(".nomination-totals-centerpiece h1").text("Q2");
            return false;
        }

        if (start_date >= FY2020_Q3 && end_date <= FY2020_Q4) {
            $(".nomination-totals-centerpiece h1").text("Q3");
            return false;
        }

        if (start_date >= FY2020_Q4 && end_date <= FY2021_Q1) {
            $(".nomination-totals-centerpiece h1").text("Q4");
            return false;
        }
        else {
            $(".nomination-totals-centerpiece h1").text("");
            return false;
        }
    });
   
});

// sort defaults by name (A-Z)
$(".store-nominee-enter").each(function (i) {
    "use strict";
    var result = $(this).text();
    $(".nomination-entry-container").eq(i).attr("data-sort", result);
});
var main_container = $(".nomination-entry-container-outer");
$(".nomination-entry-container").sort(function (a, b) {
    "use strict";
    if (a.dataset.sort < b.dataset.sort) { // ascending: <  |  descending: >
        return -1;
    } else {
        return 1;
    }
}).appendTo(main_container);

// per name, sort defaults to date (latest)
$(".store-nominator-date").each(function (i) {
    "use strict";
    var result = $(this).text();
    $(".nomination-entry-submissions").eq(i).attr("data-date", result);
});
$(".nomination-entry-submissions-container:visible").each(function () {
    "use strict";
    var main_container = $(this).find(".nomination-entry-submissions");
    $(main_container).sort(function (a, b) {
        if (a.dataset.date > b.dataset.date) { // ascending: <  |  descending: >
            return -1;
        } else {
            return 1;
        }
    }).appendTo(this);
});

// dashboard options
$(".store-options").click(function () {
    "use strict";
    $(".custom-dropdown-close").trigger("click");
    $(".column-container-options-outer").toggle("slideDown");
    if ($(this).val() === "Show Options") {
        $(this).val("Hide Options");
    } else {
        $(this).val("Show Options");
    }
    $("html, body").animate({
            scrollTop: $(".custom-dropdown-outer").offset().top - 170
        },
        300, "easeInOutQuad");
    return false;
});

// Date filtering
$(".store-go").on("click", function () {
    "use strict";
    $(".custom-dropdown-close").trigger("click");
       $(".store-nominator-date").each(function () {
            var start_date = $(".custom-dropdown-start-date").val();
            var end_date = $(".custom-dropdown-end-date").val();
            var submit_date = $(this).text();
            if (submit_date >= start_date && submit_date <= end_date) {
                $(this).closest(".nomination-entry-submissions:visible").removeClass("hidethis").addClass("showthis");
            } else {
                $(this).closest(".nomination-entry-submissions:visible").removeClass("showthis").addClass("hidethis");
            }
        });
 
    // filters all those with the showthis class
    $(".nomination-entry-submissions-container:visible").each(function () {
        if ($(this).find(".nomination-entry-submissions").hasClass("showthis")) {
            $(this).closest(".nomination-entry-container").show();
        } else {
            $(this).closest(".nomination-entry-container").hide();
        }
    });

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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
    });

    // Shows no submission message
    $(".nomination-no-entries").each(function () {
        var option = $(this).closest("form").find(".nomination-entry-container:visible");
        if (option.length === 0) {
            $(".nomination-no-entries").show();
            $("html, body").animate({
                    scrollTop: $(".custom-dropdown-outer").offset().top - 170
                },
                300, "easeInOutQuad");
            return false;
        } else {
            $(".nomination-no-entries").hide();
            return false;
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

// resets all queries
$(".store-go-reset").on("click", function () {
    "use strict";
    $(".nomination-entry-submissions").removeClass("hidethis").addClass("showthis");
    $(".nomination-entry-container").show();

    // sort defaults by name (A-Z)
    $(".store-nominee-enter").each(function (i) {
        var result = $(this).text();
        $(".nomination-entry-container").eq(i).attr("data-sort", result);
    });
    var main_container = $(".nomination-entry-container-outer");
    $(".nomination-entry-container").sort(function (a, b) {
        if (a.dataset.sort < b.dataset.sort) { // ascending: <  |  descending: >
            return -1;
        } else {
            return 1;
        }
    }).appendTo(main_container);

    // per name, sort defaults to date (latest)
    $(".store-nominator-date").each(function (i) {
        var result = $(this).text();
        $(".nomination-entry-submissions").eq(i).attr("data-date", result);
    });
    $(".nomination-entry-submissions-container:visible").each(function () {
        var main_container = $(this).find(".nomination-entry-submissions");
        $(main_container).sort(function (a, b) {
            if (a.dataset.date > b.dataset.date) { // ascending: <  |  descending: >
                return -1;
            } else {
                return 1;
            }
        }).appendTo(this);
    });

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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
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
                duration: 4000,
                easing: "easeOutQuint",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
        return false;
    });

    // closes menu and resets all fields
    $(".nomination-no-entries").hide();
    $(".custom-dropdown-award").val("All Award Winners");
    $(".custom-dropdown-sort").val("By Name (A - Z)");
    $(".custom-dropdown-quarter").val("");
    $(".custom-dropdown-close, .custom-select-close").trigger("click");
    $("input[type='text']").css({
        "background": ""
    });

    // defaults to current quarter (dynamically adjusts Quarter symbol based on today's date). Good for the next two years, or until 2021 quarter dates are released
    $(function () {
        var FY2019_Q1 = "2018-12-01";
        var FY2019_Q2 = "2019-03-02";
        var FY2019_Q3 = "2019-06-01";
        var FY2019_Q4 = "2019-08-31";
        var FY2020_Q1 = "2020-11-30";
        var FY2020_Q2 = "2020-02-29";
        var FY2020_Q3 = "2020-05-30";
        var FY2020_Q4 = "2020-08-29";
        var FY2021_Q1 = "2020-11-28";

        var CurrentDate = new Date();
        FY2019_Q1 = new Date(FY2019_Q1);
        FY2019_Q2 = new Date(FY2019_Q2);
        FY2019_Q3 = new Date(FY2019_Q3);
        FY2019_Q4 = new Date(FY2019_Q4);
        FY2020_Q1 = new Date(FY2020_Q1);
        FY2020_Q2 = new Date(FY2020_Q2);
        FY2020_Q3 = new Date(FY2020_Q3);
        FY2020_Q4 = new Date(FY2020_Q4);

        // FY 2019
        if (CurrentDate >= FY2019_Q1 && CurrentDate <= FY2019_Q2) {
            $(".custom-dropdown-quarter").val("FY2019 Q1");
            $(".custom-dropdown-start-date").val("2018-12-01");
            $(".custom-dropdown-end-date").val("2019-03-01");
            $(".nomination-totals-centerpiece h1").text("Q1");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2019_Q2 && CurrentDate <= FY2019_Q3) {
            $(".custom-dropdown-quarter").val("FY2019 Q2");
            $(".custom-dropdown-start-date").val("2019-03-02");
            $(".custom-dropdown-end-date").val("2019-05-31");
            $(".nomination-totals-centerpiece h1").text("Q2");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2019_Q3 && CurrentDate <= FY2019_Q4) {
            $(".custom-dropdown-quarter").val("FY2019 Q3");
            $(".custom-dropdown-start-date").val("2019-06-01");
            $(".custom-dropdown-end-date").val("2019-08-30");
            $(".nomination-totals-centerpiece h1").text("Q3");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2019_Q4 && CurrentDate <= FY2020_Q1) {
            $(".custom-dropdown-quarter").val("FY2019 Q4");
            $(".custom-dropdown-start-date").val("2019-08-31");
            $(".custom-dropdown-end-date").val("2019-11-29");
            $(".nomination-totals-centerpiece h1").text("Q4");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        // FY 2020
        if (CurrentDate >= FY2020_Q1 && CurrentDate <= FY2020_Q2) {
            $(".custom-dropdown-quarter").val("FY2020 Q1");
            $(".custom-dropdown-start-date").val("2020-11-30");
            $(".custom-dropdown-end-date").val("2020-02-28");
            $(".nomination-totals-centerpiece h1").text("Q1");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2020_Q2 && CurrentDate <= FY2020_Q3) {
            $(".custom-dropdown-quarter").val("FY2020 Q2");
            $(".custom-dropdown-start-date").val("2020-02-29");
            $(".custom-dropdown-end-date").val("2020-05-29");
            $(".nomination-totals-centerpiece h1").text("Q2");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2020_Q3 && CurrentDate <= FY2020_Q4) {
            $(".custom-dropdown-quarter").val("FY2020 Q3");
            $(".custom-dropdown-start-date").val("2020-05-30");
            $(".custom-dropdown-end-date").val("2020-08-28");
            $(".nomination-totals-centerpiece h1").text("Q3");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
        }

        if (CurrentDate >= FY2020_Q4 && CurrentDate <= FY2021_Q1) {
            $(".custom-dropdown-quarter").val("FY2020 Q4");
            $(".custom-dropdown-start-date").val("2020-08-29");
            $(".custom-dropdown-end-date").val("2020-11-27");
            $(".nomination-totals-centerpiece h1").text("Q4");
            $(".custom-select-close").show();
            $(".custom-select-date").hide();
            $(".store-go").trigger("click");
            return false;
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