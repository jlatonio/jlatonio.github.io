$(".img-container-image").click(function() {
	var url_image = $(this).attr('src');
	alert(url_image);
	return false;
});


// List all broken URLs in an ordered list
$(".img-container-image").each(function() {
    "use strict";
	$(this).error(function() {
		$(this).closest(".img-container").addClass("img-container-error");
		$(this).closest(".img-container").find("p");
		var label_image = $(this).closest(".img-container").find(".image-label").text();
		var broken_url = $(this).attr("src");

		$('.broken-image-urls').text('Broken Image URL Report:');
		$('.broken-image-urls').after('<li>' + label_image + ' - ' + broken_url);

		$(".broken-image-urls-container li").sort(asc_sort).appendTo('.broken-image-urls-container');
 
		// accending sort
		function asc_sort(a, b) {
			return ($(b).text()) < ($(a).text()) ? 1 : -1;
		}

		return false;
	});
});


// Click on individual image to generate URL feature
$(".img-container-image").on("click", function() {
	"use strict";
	var inspect_url = $(this).attr("src");
	var inspect_preset = inspect_url + "&req=resolve";

	$(".inspect_url").attr("src", inspect_preset);
	return false;
});