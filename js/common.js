$('.slick01').slick({
    autoplay:true,
    autoplaySpeed:3000
});
$('.catch').fadeIn(3000);
$(function(){
    $(".ef").css({opacity:"0"});
    $(window).scroll(function (){
        $('.ef').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

// $(function(){
// 	$(window).scroll(function (){
// 		$('.fadein_block').each(function(){
// 			var elemPos = $(this).offset().top;
// 			var scroll = $(window).scrollTop();
// 			var windowHeight = $(window).height();
// 			var target = $('.fadein_block');
// 			var speed = 1000;
// 			if(scroll > elemPos - windowHeight){
//                 target.find('fadein').addClass('scrollin');
// 				setTimeout(function(){
// 					target.find('fadein').addClass('scrollin');
// 					setTimeout(function(){
// 						target.find('fadein').addClass('scrollin');
// 					},speed);
// 				},speed);
// 			}
// 		});
// 	});
// });
