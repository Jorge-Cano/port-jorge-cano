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



//taken for the down arrow
    $(function() {
    	$('a[href*=#]').on('click', function(e) {
    		e.preventDefault();
    		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    	});
    });



  });
});



// $('#js-flip-1').toggle(
//     function() {
//         $('#js-flip-1 .card').addClass('flipped');
//     },
//     function() { $('#js-flip-1 .card').removeClass('flipped');
//     }
// );
//
// $('#js-flip-2').bind('click mouseleave', function() {
//     $('#js-flip-2 .card').toggleClass('flipped');
// });
//
// $('#js-flip-3').bind({
//     click: function() {
//         $('#js-flip-3 .card').toggleClass('flipped');
//     },
//     mouseleave: function() {
//         $('#js-flip-3 .card').toggleClass('flipped');
//     }
// });
