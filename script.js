var settings = {
  toggle: "#sliiider-toggle", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
  exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
  animation_duration: "0.5s", //how long it takes to slide the menu
  place: "bottom", //where is the menu sliding from, possible options are (left | right | top | bottom)
  animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
  body_slide: false, //set it to true if you want to use the effect where the entire page slides and not just the div
  no_scroll: true, //set to true if you want the scrolling disabled while the menu is active
  auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
};

$('#menu').sliiide(settings); //initialize sliiide

// -------------------------- JQUERY FADEIN TEXT-------------------//

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
     }, 1000);

      }

    });

  });

});

// --------------------------------------------------------//
