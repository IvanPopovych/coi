$(document).ready( function(){

	$('.menu-button').on('click', function(){
		$(this).toggleClass('active');
		$('.menu-active').toggleClass('active');
	});

// gallary slider
	$('.gallary').owlCarousel({
		items: 1,
		nav: true,
		navText: ["<img src='/img/arrow-gallary-left.png'>","<img src='/img/arrow-gallary-right.png'>"],
		dots: false
	});

// customer slider
	$('.customers-slider').owlCarousel({
		items: 1,
		nav: true,
		navText: ["<div class='bg-customer_arrow_prew'></div>","<div class='bg-customer_arrow_next'></div>"],
		dots: false
	});


// scroll on click
	$('.menu li, .menu-active li ').on('click', 'a', function(){

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1000);
	});

// fixed menu-button on scroll
	var elementPosition = $('.menu-button').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.menu-button').css('position','fixed').css('top','20px');
              $('.menu-active').css('position','fixed').css('top','25px').css('left','160px');
        } else {
            $('.menu-button').css('position','absolute').css('top','60px');
            $('.menu-active').css('position','absolute').css('top','70px').css('left','160px');
        }    
});
});





