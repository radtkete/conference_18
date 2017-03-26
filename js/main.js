// (function($){
//     "use strict"; // Start of use strict
    
    
//     /* ---------------------------------------------
//      Scripts initialization
//      --------------------------------------------- */
    
//     $(window).load(function(){
        
        
//         // Hash menu forwarding
//         if ((window.location.hash) && ($(window.location.hash).length)){
//             var hash_offset = $(window.location.hash).offset().top;
//             $("html, body").animate({
//                 scrollTop: hash_offset
//             });
//         }
        
//     });
    
//     $(document).ready(function(){
//         $(window).trigger("resize");            
//     });
    
//     $(window).resize(function(){
//       init_classic_menu_resize();
//       js_height_init();
//     });
    
    
//     /* --------------------------------------------
//      Platform detect
//      --------------------------------------------- */
//     var mobileTest;
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//         mobileTest = true;
//         $("html").addClass("mobile");
//     }
//     else {
//         mobileTest = false;
//         $("html").addClass("no-mobile");
//     }
    
//     var mozillaTest;
//     if (/mozilla/.test(navigator.userAgent)) {
//         mozillaTest = true;
//     }
//     else {
//         mozillaTest = false;
//     }
//     var safariTest;
//     if (/safari/.test(navigator.userAgent)) {
//         safariTest = true;
//     }
//     else {
//         safariTest = false;
//     }
    
//     // Detect touch devices    
//     if (!("ontouchstart" in document.documentElement)) {
//         document.documentElement.className += " no-touch";
//     }
    
    
//     /* ---------------------------------------------
//      Sections helpers
//      --------------------------------------------- */
    
//     // Sections backgrounds
    
//     var pageSection = $(".home-section, .page-section, .small-section, .split-section");
//     pageSection.each(function(indx){
        
//         if ($(this).attr("data-background")){
//             $(this).css("background-image", "url(" + $(this).data("background") + ")");
//         }
//     });
    
//     // Function for block height 100%
//     function height_line(height_object, height_donor){
//         height_object.height(height_donor.height());
//         height_object.css({
//             "line-height": height_donor.height() + "px"
//         });
//     }
    
//     // Function equal height
//     !function(a){
//         a.fn.equalHeights = function(){
//             var b = 0, c = a(this);
//             return c.each(function(){
//                 var c = a(this).innerHeight();
//                 c > b && (b = c)
//             }), c.css("height", b)
//         }, a("[data-equal]").each(function(){
//             var b = a(this), c = b.data("equal");
//             b.find(c).equalHeights()
//         })
//     }(jQuery);
    
    

    
    

//      ---------------------------------------------
//      Nav panel classic
//      --------------------------------------------- 
    
//     var mobile_nav = $(".mobile-nav");
//     var desktop_nav = $(".desktop-nav");
    

    


//     function init_classic_menu_resize() {

//         // Mobile menu style toggle
//         if ($(window).width() <= 900) {
//             $(".header").addClass("mobile-on");
//             $("#header").sticky({ topSpacing: 0 });
//         } 
//         else if ($(window).width() > 900) {
//             $(".header").removeClass("mobile-on");
//             $(".my-cool-navbar").sticky({ topSpacing: 0 });
//             // desktop_nav.show();
//         }
//     }



    













// $(document).ready(function() {
//   var menuToggle = $('#js-mobile-menu').unbind();
//   $('#js-navigation-menu').removeClass("show");

//   menuToggle.on('click', function(e) {
//     e.preventDefault();
//     $('#js-navigation-menu').slideToggle(function(){
//       if($('#js-navigation-menu').is(':hidden')) {
//         $('#js-navigation-menu').removeAttr('style');
//       }
//     });
//   });
// });












// $('.tabgroup > div').hide();
// $('.tabgroup > div:first-of-type').show();
// $('.tabs a').click(function(e) {
//   e.preventDefault();
//   var $this = $(this),
//     tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
//     others = $this.closest('li').siblings().children('a'),
//     target = $this.attr('href');
//   others.removeClass('active');
//   $this.addClass('active');
//   $(tabgroup).children('div').hide();
//   $(target).show();

// })









    
    

    
    
    








// CountDownTimer('05/19/2017 10:00 AM');

// function CountDownTimer(dt) {
//   var end = new Date(dt);

//   var _second = 1000;
//   var _minute = _second * 60;
//   var _hour = _minute * 60;
//   var _day = _hour * 24;
//   var timer;

//   function showRemaining() {
//     var now = new Date();
//     var distance = end - now;
//     if (distance < 0) {

//       clearInterval(timer);
//       document.getElementById('welcome').innerHTML = 'EXPIRED!';

//       return;
//     }

//     var days = Math.floor(distance / _day);
//     var hours = Math.floor((distance % _day) / _hour);
//     var minutes = Math.floor((distance % _hour) / _minute);
//     var seconds = Math.floor((distance % _minute) / _second);

//     document.getElementById('days').innerHTML = days;
//     document.getElementById('hours').innerHTML = hours;
//     document.getElementById('minutes').innerHTML = minutes;
//     document.getElementById('seconds').innerHTML = seconds;
//   }

//   timer = setInterval(showRemaining, 1000);
// }







    

    

    
    
// })(jQuery); // End of use strict














// /* ---------------------------------------------
//  Height 100%
//  --------------------------------------------- */
// function js_height_init(){
//     (function($){
//         $(".js-height-full").height($(window).height());
//         $(".js-height-parent").each(function(){
//             $(this).height($(this).parent().first().height());
//         });
//     })(jQuery);
// }












