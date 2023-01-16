$(document).ready(function() {
    $(".add-html-clear").hide();
	$(".broken-image-urls-container").hide();
	$(".close-report").hide();


	// Sticky nav
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#sticky-anchor').offset().top;
		if (window_top > div_top) {
			$('.hero-crumbs').addClass('stick');
			$('.hero-crumbs').removeClass('sticky');
		}
		if (window_top < div_top) {
			$('.hero-crumbs').addClass('sticky');
			$('.hero-crumbs').removeClass('stick');
		}
		return false;
	}

    // Sticky nav
	$(function() {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});

	// adds HTML
	$(".add-html-go").on("click", function() {
		"use strict";

		var find_html = $(".add-html-form").val();
        $(this).hide();
        $(".add-html-clear").show();
        $(".view-report").show();
        $(".close-report").hide();
		$(".broken-image-urls-container").hide();
		$(".add-html-here").html(find_html);
		$(".add-html-here,.inspect-url").fadeIn(2000, "swing");

		// List all broken URLs in an ordered list
		$(".img-container-image").each(function() {
			"use strict";
			$(this).error(function() {
				$(this).closest(".img-container").addClass("img-container-error");

				var label_image = $(this).closest(".img-container").find(".image-label").text();
				var broken_url = $(this).attr("src");
				$('.broken-image-urls').text('Broken URL Report:');
				$('.broken-image-urls').after('<li>' + label_image + ' - ' + broken_url);
				$(".broken-image-urls-container li").sort(asc_sort).appendTo('.broken-image-urls-container');

				// accending sort
				function asc_sort(a, b) {
					return ($(b).text()) < ($(a).text()) ? 1 : -1;
				}
                
				// image error counter
				var imgErrors = $('.img-container-error').length;
				var totalImg = $('.img-container-image').length;
				$(".image-error-count").text(imgErrors);
                $(".image-total-count").text(totalImg);
                
				return false;
			});
		});

		$(".video-container-image source").each(function() {
			"use strict";
			$(this).error(function() {
				$(this).closest(".video-container").addClass("video-container-error");

				var label_image = $(this).closest(".video-container").find(".image-label").text();
				var broken_url = $(this).closest(".video-container").find(".video-container-image source").attr("src");
				$('.broken-image-urls').text('Broken URL Report:');
				$('.broken-image-urls').after('<li>' + label_image + ' - ' + broken_url);
				$(".broken-image-urls-container li").sort(asc_sort).appendTo('.broken-image-urls-container');

				// accending sort
				function asc_sort(a, b) {
					return ($(b).text()) < ($(a).text()) ? 1 : -1;
				}

				// video error counter
				var imgErrors = $('.img-container-error').length;
				var vidErrors = $('.video-container-error').length;
				var totalImg = $('.img-container-image').length;
				var totalVid = $('.video-container-image').length;
				var numErrors = imgErrors + vidErrors;
				var numItems = totalImg + totalVid;

				$(".image-error-count").text(imgErrors);
				$(".image-total-count").text(totalImg);

				$(".video-error-count").text(vidErrors);
				$(".video-total-count").text(totalVid);

				$(".total-error-count").text(numErrors);
				$(".total-count").text(numItems);
                
				return false;
			});
		});

		$(function() {
                // total error counter
				var imgErrors = $('.img-container-error').length;
				var vidErrors = $('.video-container-error').length;
				var totalImg = $('.img-container-image').length;
				var totalVid = $('.video-container-image').length;
				var numErrors = imgErrors + vidErrors;
				var numItems = totalImg + totalVid;

				$(".image-error-count").text(imgErrors);
				$(".image-total-count").text(totalImg);

				$(".video-error-count").text(vidErrors);
				$(".video-total-count").text(totalVid);

				$(".total-error-count").text(numErrors);
				$(".total-count").text(numItems);
            
            // Inspect URL feature 
			$(".inspect-url-icon").on("click", function() {
				"use strict";
				$(".inspect-url").removeAttr("srcdoc");
				var url_image = $(this).closest(".img-container").find(".img-container-image").attr('src');
				$(".inspect-url").attr("srcdoc", url_image);
				return false;
			});

			// Click on individual image to generate URL feature
			$(".inspect-preset-icon").on("click", function() {
				"use strict";
				$(".inspect-url").removeAttr("srcdoc");
				var inspect_url = $(this).closest(".img-container").find(".img-container-image").attr("src");
				var inspect_preset = inspect_url + "&req=resolve";
				$(".inspect-url").attr("src", inspect_preset);
				return false;
			});

			// Click on individual video to generate URL feature
			$(".inspect-video-icon").on("click", function() {
				"use strict";
				$(".inspect-url").removeAttr("srcdoc");
				var url_video = $(this).closest(".video-container").find(".video-container-image source").attr("src");
				$(".inspect-url").attr("srcdoc", url_video);
				return false;
			});

			// Report feature
			$(".view-report").click(function() {
				"use strict";
				$(".close-report").show();
				$(".add-html-here,.inspect-url").hide();
				$(".broken-image-urls-container").show();

				$("html, body").animate({
						scrollTop: $(".broken-image-urls-container").offset().top - 170
					},
					300, "easeInOutQuad");
				return false;
			});

			$(".close-report").click(function() {
				"use strict";
				$(this).hide();
				$(".view-report").show();
				$(".add-html-here,.inspect-url").slideDown();
				$(".broken-image-urls-container").slideUp();
				return false;
			});

			$(".add-html-clear").click(function() {
				"use strict";
                $(this).hide();
                $(".add-html-go").show();
				$(".add-html-form").val('');
				$(".add-html-form").focus();
				return false;
			});        
            
			$(".add-html-reset").click(function() {
				"use strict";
                $(".add-html-clear").hide();
                $(".add-html-go").show();
                $(".view-report").show();
                $(".close-report").hide();
				$(".add-html-form").val('');
				$(".add-html-here").empty();
				$(".broken-image-urls-container li").remove();
				$(".add-html-form").focus();

				$(".image-error-count").text("0");
				$(".image-total-count").text("0");

				$(".video-error-count").text("0");
				$(".video-total-count").text("0");

				$(".total-error-count").text("0");
				$(".total-count").text("0");
				return false;
			});

			$('.add-html-form').click(function() {


				return false;
			});

		});
		return false;
	});
});