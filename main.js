$(document).ready(function(){

  $(".dot-icon-menu").on("click",function(e){
    e.stopPropagation()
           $(".leptop-view-adress-col").toggleClass("adress-col-active");
           $(".dot-icon-menu").toggleClass("close-icon");
           $(".menu-bar-icon").removeClass("menu-bar-close-icon");
           $(".mobile-nav").removeClass("mobile-menu-active")
  })
  $(".menu-bar-icon").on("click", function(e){
    e.stopPropagation()
    
    $(this).toggleClass("menu-bar-close-icon")
    $(".dot-icon-menu , .leptop-view-adress-col").removeClass("close-icon adress-col-active");

  });

 $(".menu-bar-icon").on("click",function(){
           
  $(".mobile-nav").toggleClass("mobile-menu-active")
          

 })

 

 $(window).scroll(function() {
  if ($(document).scrollTop() > 43) {
    $(".nav-container").addClass("nav-container-scroll");
  } else {
    $(".nav-container").removeClass("nav-container-scroll");
  }
});







     $(document).on("click",function(){
       $(".leptop-view-adress-col").removeClass("adress-col-active")
       $(".dot-icon-menu").removeClass("close-icon")
       $(".menu-bar-icon").removeClass("menu-bar-close-icon")
       $(".mobile-nav").removeClass("mobile-menu-active")
       
     })   

     

  var formFields = $('.form-group');
  
    formFields.each(function() {
      var field = $(this);
      var input = field.find('input');
      var label = field.find('label');
      
      function checkInput() {
        var valueLength = input.val().length;
        
        if (valueLength > 0 ) {
          label.addClass('stay')
        } else {
              label.removeClass('stay')
        }
      }
      
      input.change(function() {
        checkInput()
      })
    });
     

      
      
      $('.owl-carousel').owlCarousel({
            items:3,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
        



        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            767:{
              items:2,
              nav:false,
            },
            991:{
                items:2,
                nav:false,
            },
         1200:{
           items:3
               
         }
        }
    })


  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); 

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); 

}); 



