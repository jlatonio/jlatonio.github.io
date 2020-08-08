$("#view-print").click(function () {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var dpi = document.getElementById("finddpi").offsetHeight * devicePixelRatio * .5;
    var width = 550;
    var widthtotal = width / dpi;
    var widthheight = widthtotal + "in ";
    var cssPagedMedia = (function () {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return function (rule) {
            style.innerHTML = rule;
        };
    }());
    cssPagedMedia.size = function (size) {
        cssPagedMedia("@page {size: " + widthheight + "}");
    };
    cssPagedMedia.size("portrait");
    window.print();
});