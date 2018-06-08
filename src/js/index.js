$(document).ready(function(){ 
 $('.menu').click(function(){
     //$('.hamburger-menu').css({'background' : 'rgba(0,0,0, 0.5'});
     $('.hamburger-menu').toggleClass('bg-toggle', 10000);
     
   $('.nav-hamburger').animate({
    width:['toggle', "swing"]
     });
})
    
});