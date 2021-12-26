$(function(){

    $('.home-slider').owlCarousel({
    items:6,
    loop:false,
    nav:false,
    dots:false,
    autoplay:true,
    
    
    
    responsiveClass:true,
     responsive:{

        0:{
            items:2,
            
        },

        576:{
            items:2,
        },


         768:{
             items:3,
             
         },
         992:{
             items:4,
             
         },
         1200:{
             items:6,
             
             
         }
     }
 
      });
 
 
 
 
  });