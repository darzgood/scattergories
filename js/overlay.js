$('#customize').click(function(){
	$('#customize-overlay').fadeIn();
});

$('#customize-background').click(function(){
	$("#done").click();
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$("#done").click();
	}
});