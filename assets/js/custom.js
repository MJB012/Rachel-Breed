jQuery(document).ready(function($){

  $('.banner-slider .owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
  });

  $('.listings .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  });

  $(".header-nav .bars").click(function(){
    $(".header-nav nav ul").slideToggle();
  });
  
  $(".banner-slider .banner-content").matchHeight({
    byRow: true,
    property: 'min-height',
    target: null,
    remove: false
  });

  $(".header-nav nav ul li a").on('click', function(event) {

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
      }, 800);
    } // End if
  });

});


