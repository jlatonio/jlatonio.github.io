// loads latest every session
$(".store-data").each(function() {
    var name = $(this).attr("name");
    var value = localStorage.getItem(name);
    $(this).val(value);
    // If textarea is empty, a new class is added        
    if ($.trim($(this).val()) == "") {
        $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
    } else {
        $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
    }
    $(this).attr("name");
});

// save icon. hidden by default
$(".notes-btn-each").hide();

// saves data on click
$(".store-save").on("click", function() {
    $(this).closest("form").find("input[type='text'],textarea").css({
        "background": ""
    });
    $(this).closest(".notes-container").find(".store-data").each(function() {
        var name = $(this).attr("name");
        var value = $(this).val();
        localStorage.setItem(name, value);
    });
    // gets data and store-data in each field
    $(".store-data").each(function() {
        var name = $(this).attr("name");
        var value = localStorage.getItem(name);
        $(this).val(value);
    });
    $(".nominee-save").each(function() {
        var name = $(this).attr("name");
        var value = $(this).val();
        localStorage.setItem(name, value);
    });
    // gets data and store-data in each field
    $(".nominee-save").each(function() {
        var name = $(this).attr("name");
        var value = localStorage.getItem(name);
        $(this).val(value);
    });

    // save animation
    $(".notes-btn-each").show();
    $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-empty").addClass("notes-btn-each-active");
    setTimeout(function() {
        $(".notes-btn-each").fadeOut();
    }, 1000);
    return false;
});

// saves data on changes
$(".store-data").change(function() {
    $(".store-save").trigger("click");
});

// resets each field 
$(".store-reset").on("click", function() {
    $(this).closest("form").find(".custom-dropdown-menu").val("");
    $(this).closest("form").find("input[type='text']").val("");
    $(this).closest("form").find("input[type='text'],textarea").css({
        "background": ""
    });
    $(this).closest(".notes-container").find(".store-data").val("");
    $(".store-data").each(function() {
        var name = $(this).attr("name");
        var value = $(this).val();
        localStorage.setItem(name, value);
    });
    $(".store-data").each(function() {
        var name = $(this).attr("name");
        var value = localStorage.getItem(name);
        $(this).val(value);
    });
    $(this).closest("form").find(".notes-btn-each").removeClass("notes-btn-each-active").addClass("notes-btn-each-empty");
    return false;
});

// sends nomination. alerts if input is blank. adds focus to empty input area
$(".store-nominate").click(function() {
    $("textarea").each(function() {
        var option = $("textarea").val();
        if (option.length === 0) {
            $(this).css({
                "background": "#fff2f2"
            });
            $(".modal-alert").show();
        }
        if (option.length > 0) {
            $("form").removeAttr("action");
            $("form").attr("action", "confirmation.html");
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

$(".nomination-complete").click(function() {
    localStorage.clear();
    return false;
});