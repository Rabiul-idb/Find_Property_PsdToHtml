/* var mixer = mixitup('.filtering'); (Only for mixitup filtering )*/

      /* For mixitup filtering and tab-area */
      var tab_nav= document.querySelector('.filtering');
      var mixer = mixitup(tab_nav, {
        selectors:{
          control: '[data-mixitup-control]'
        }
      });

      /* Owl carosel */
          $(document).ready(function(){
         $(".owl-carousel").owlCarousel({
            items: 4,
            loop:true, 
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed:1500,            
            autoplayHoverPause: true
             
         });
        });


        $(document).ready(function(){
          // Add smooth scrolling to all links
          $("a").on('click', function(event) {
        
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              var hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });