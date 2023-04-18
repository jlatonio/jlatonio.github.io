    $(document).ready(function() {
      var video_title = $('#videosrc').attr("src");
      var new_video_title = video_title.replace("https://assets.verizon.com/is/content/verizondev/", '');
      $(".video-title p").text("Asset ID: " + new_video_title);  
    });