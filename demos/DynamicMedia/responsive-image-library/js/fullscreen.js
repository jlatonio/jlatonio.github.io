$(document).ready(function () {
    $("#cancel-fullscreen").hide();
});

$("#view-fullscreen").click(function () {
    $("#view-fullscreen").delay(250).queue(function () {
        $("#view-fullscreen").hide();
        $("#cancel-fullscreen").show();
        $("#view-fullscreen").dequeue();
    });
});

$("#cancel-fullscreen").click(function () {
    $("#cancel-fullscreen").delay(250).queue(function () {
        $("#cancel-fullscreen").hide();
        $("#view-fullscreen").show();
        $("#cancel-fullscreen").dequeue();
    });
});

if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

function exitHandler() {
    if (document.webkitIsFullScreen === false) {
        $("#cancel-fullscreen").delay(250).queue(function () {
            $("#cancel-fullscreen").hide();
            $("#view-fullscreen").show();
            $("#cancel-fullscreen").dequeue();
        });
    } else if (document.mozFullScreen === false) {
        $("#cancel-fullscreen").delay(250).queue(function () {
            $("#cancel-fullscreen").hide();
            $("#view-fullscreen").show();
            $("#cancel-fullscreen").dequeue();
        });
    } else if (document.msFullscreenElement === false) {
        $("#cancel-fullscreen").delay(250).queue(function () {
            $("#cancel-fullscreen").hide();
            $("#view-fullscreen").show();
            $("#cancel-fullscreen").dequeue();
        });
    }
}

(function () {
    var viewFullScreen = document.getElementById("view-fullscreen");
    if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function () {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                if (docElm === document.documentElement) { //check element
                    docElm = document.body; //overwrite the element (for IE)
                }
                docElm.msRequestFullscreen();
            }
        }, false);
    }
    var cancelFullScreen = document.getElementById("cancel-fullscreen");
    if (cancelFullScreen) {
        cancelFullScreen.addEventListener("click", function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }, false);
    }
    var fullscreenState = document.getElementById("fullscreen-state");
    if (fullscreenState) {
        document.addEventListener("fullscreenchange", function () {
            fullscreenState.innerHTML = (document.fullscreenElement) ? "" : "not ";
        }, false);
        document.addEventListener("msfullscreenchange", function () {
            fullscreenState.innerHTML = (document.msFullscreenElement) ? "" : "not ";
        }, false);
        document.addEventListener("mozfullscreenchange", function () {
            fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
        }, false);
        document.addEventListener("webkitfullscreenchange", function () {
            fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
        }, false);
    }
    var video = document.getElementById("video")
    videoFullscreen = document.getElementById("video-fullscreen");
    if (video && videoFullscreen) {
        videoFullscreen.addEventListener("click", function (evt) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullScreen) {
                video.webkitRequestFullScreen();
            }
        }, false);
    }
})();

// Show year at Footer
$("#year").text(new Date().getFullYear());


// autofill fields as user types. static html only
$(function() {
  "use strict";
  $("input[type='text'], input[type='number']").on("keyup change", function() {
    var option = $(this).val();
    var item = option;
    if (option.length === 0) {
      $(this).closest(".custom-dropdown-outer").find(".custom-select-close").hide();
    }
    if (option.length > 0) {
      $(this).closest(".custom-dropdown-outer").find(".custom-select-close").show();
    }
  });
  return false;
});

// resets search when user clicks close
$(".custom-select-close").hide();
$("input[type='text'],input[type='number']").closest(".custom-dropdown-outer").find(".custom-select-close").on("click", function() {
 "use strict";
 var input_place_holder = $(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").attr("data-placeholder");
 $(this).hide();
 $(this).closest(".custom-dropdown-outer").find("input[type='text'],input[type='number']").val("").focusout().attr("placeholder", input_place_holder).css({
  "background": ""
 });
 $(this).closest(".custom-dropdown-outer").find(".custom-dropdown-group").hide();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-date").show();
 $(this).closest(".custom-dropdown-outer").find(".custom-select-search").show();
 return false;
});

// closes menu when user clicks away
$("html, body, input").on("click", function() {
 "use strict";
 if ($(this).not(".custom-dropdown-outer")) {
  $(".custom-dropdown-close").trigger("click");
 }
});

// menu icon hover
$(".custom-dropdown-relative").hover(function() {
  $(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", "1");
  }, function(){
  $(this).find('.custom-dropdown-arrow-toggle, .custom-dropdown-arrow-open, .custom-dropdown-arrow-close, .custom-select-close').css("opacity", ".4");
    return false;
});