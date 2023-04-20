			// Click on individual video to generate URL feature
			$(".btn-iframe").on("click", function() {
				"use strict";
				var url_video = $(this).closest(".container").find(".video-iframe").attr("src");
				alert(url_video);
				return false;
			});

			$(".btn-html").on("click", function() {
				"use strict";
				var url_video = $(this).closest(".container").find(".video-html source").attr("src");
				alert(url_video);
				return false;
			});

			$(".btn-fluid").on("click", function() {
				"use strict";
				var url_video = $(this).closest(".fluid-container").find(".video-html source").attr("src");
				alert(url_video);
				return false;
			});