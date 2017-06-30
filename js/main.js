$('#hamburger').on('click',function(){
	$('nav').toggle(800);
});


$('.movie-box > img').on('click', function (){
    var url = $(this).attr('src');
    $('#light-box img').attr('src', url);
    $('#light-box,.glyphicon-remove').fadeIn();

});

$('#light-box,.glyphicon-remove').on('click', function () {
  	$(this).fadeOut();
});

$('.rate-button').on('click',function(){
	$(this).siblings().last().slideToggle('slow');
});

$(function(){
	var windowWidth = $(window).width();
	$('header').offset({ left: - windowWidth });
	

	setTimeout(function(){
		$('header').animate({'left' : '0'},2000);
	},200);
});

$(function(){
	setTimeout(function(){
		$('#content').slideDown(2000);
	},400);
});