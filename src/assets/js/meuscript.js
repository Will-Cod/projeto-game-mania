// $(document).ready(function(){
// 	$(".wish-icon i").click(function(){
// 		$(this).toggleClass("fa-heart fa-heart-o");
// 	});
// });	


// $(function () {


//     //HEADER
//     $(window).scroll(function () {
//           if($(this).scrollTop() > 200)
//           {
//               if (!$('.main_header').hasClass('fixed'))
//               {
//                   $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
//                       {
//                           'top': '0px'
//                       }, 500);
//               }
//           }
//           else
//           {
//               $('.main_header').removeClass('fixed');
//           }
//     });


// });



// Header fixed
window.onload = function(e) {
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial';
        }
    });
}