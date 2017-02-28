var timerLength = 150;

$('#set-timer').click(function(){
	timerLength = $('#timer-length').val();
	timerLength = parseInt(timerLength);
	if (Number.isInteger(timerLength)){
		seconds = timerLength;
		$('.timer').empty().append(timerLength);
		$('#timer-length').val("");
	}
});

$('.timer').click(function(){
	$("#customize-overlay").fadeIn();
});

$("#timer-length").keyup(function(event){
	if(event.keyCode == 13){
		$("#set-timer").click();
	}
});