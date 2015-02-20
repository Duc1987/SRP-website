$(document).ready(function(){
	$('a img').animate({
		opacity: 0.5
	});
	$('a img').hover(function(){
		$(this).stop().animate({opacity:1});
	}, function(){
		$(this).stop().animate({opacity: 0.5}, 'slow')
		});

	$("section p").hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active', 'slow');
    });

	$('span.nav-btn').click(function(){
		$('nav > ul').slideToggle();
	});

	$(window).resize(function(){
		if( $(window).width() > 600){
			$('nav > ul').removeAttr('style');
		}
	});

});
