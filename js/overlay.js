$('#customize').click(function(){
	$('#customize-overlay').fadeIn();
});

$('#customize-background').click(function(){
	$('#customize-overlay').fadeOut();
	populate();
	$('.customize-column-right').empty();
	$('.custom-stuff').animate({width: '450px'}, 500);
	$('.customize-column-left').css({'width': '100%', 'padding-right': '0px'});
	$('.customize-column-right').fadeOut(0);
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$("#customize-overlay").fadeOut();
		populate();
		$('.customize-column-right').empty();
		$('.custom-stuff').animate({width: '450px'}, 500);
		$('.customize-column-left').css({'width': '100%', 'padding-right': '0px'});
		$('.customize-column-right').fadeOut(0);
	}
});