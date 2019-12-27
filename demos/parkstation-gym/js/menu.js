$(document).ready(function() {
        /* for keeping track of what's "open" */
        var activeClass = 'dropdown-active';

        /* recurse through dropdown menus */
        $('.menu').each(function() {
          /* track elements: menu, parent */
          var activeClass = "dropdown-active";
          var $menu = $(this);

          var dropdowns = $('.dropdownShow', $menu);
          var allWraps = $('.dropdownWrap', $menu);

          /* hide all menus, scoped */
          function hideAll() {
            dropdowns.removeClass(activeClass);
            allWraps.hide();
          }

          dropdowns.each(function(){
            var dropdown = $(this);
            var parent = dropdown.parent();
            var wraps = $('.dropdownWrap', parent);

            /* function to show menu when clicked */ 
            dropdown.click(function(e) { 
              if (dropdown.hasClass(activeClass)) {
                dropdown.removeClass(activeClass);
                wraps.hide();
              } 
              else {
                hideAll();
                dropdown.addClass(activeClass);
                wraps.show();
              }

              e.stopPropagation();
            });
          });

          $(document).click(hideAll);
        });
      });
