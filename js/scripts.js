/* Preloader */
$(window).load(function() {
	'use strict';
	$('.preloader').delay(600).fadeOut();
	$('loading-webpage').delay(1000).fadeOut('slow');
});

/* About me section tab-nav function */
$(window).ready(function() {
	'use strict';

	$('.tab-nav li').on('click', function(e) {
		var this_li = $(this),
			tabs = this_li.parent().parent(),
			target = $.trim(this_li.find('a').attr('href').substring(1)),
			all_tab_li = tabs.find('ul li');
			
			all_tab_li.removeClass('tab-selected').find('a[href="#'+ target +'"]')
			.parent().addClass('tab-selected');
			
			tabs.find('.tab').fadeIn();
			tabs.find('.tab:not(".'+ target +'")').hide();
			e.preventDefault();
			
	});


	$('.navigator').onePageNav({
		currentClass: 'current',
		scrollSpeed: 1000
	});
});

/* FADEIN Y TOGGLE BOTON DE CONTACTO MUESTRA REDES SOCIALES*/

$(document).ready(function(){
  $('#btn-networks').click(function(){
    $('#social-networks').fadeToggle();
  });
});

$(document).ready(function(){
  $('#btn-networks-nav').click(function(){
    $('#social-networks').fadeToggle();
  });
});