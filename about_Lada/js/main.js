$( document ).ready(function(){
	$('.popup-action').click(function(){
		$('.popup').show();
		$('body').addClass('g-hidden');
	});
	$('.overlay, .popup__close').click(function(){
		$('.popup').hide();
		$('body').removeClass('g-hidden');
	});
});