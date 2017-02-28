var newCategory;
var userList = [];

$("#custom-categories").keyup(function(event){
	if(event.keyCode == 13){
		$("#add-category").click();
	}
});

$('#done').click(function(){
	populate();
	$('#custom-categories').val("");
	$('#customize-overlay').fadeOut();
	$('.customize-column-right').empty();
	$('.custom-stuff').animate({width: '450px'}, 500);
	$('.customize-column-left').css({'width': '100%', 'padding-right': '0px'});
	$('.customize-column-right').fadeOut(0);
});

var mq = window.matchMedia("(max-width: 667px)");

if (mq.matches) {

	$('#add-category').click(function(){
		newCategory = $('#custom-categories').val();
		if (newCategory.length > 1 && /[a-zA-Z]/.test(newCategory) ){
			newCategory = newCategory.toLowerCase();
			newCategory = newCategory.toTitleCase();
			userList.push(newCategory);
			$('#custom-categories').val("");
			$('.customize-column-right').prepend('<div class="category-row">' + newCategory +'</div>');
			$('.customize-column-right').delay(100).fadeIn();
			
		}
	});
} else{
	$('#add-category').click(function(){
		newCategory = $('#custom-categories').val();
		if (newCategory.length > 1 && /[a-zA-Z]/.test(newCategory) ){
			newCategory = newCategory.toLowerCase();
			newCategory = newCategory.toTitleCase();
			userList.push(newCategory);
			$('#custom-categories').val("");
			$('.customize-column-right').prepend('<div class="category-row">' + newCategory +'</div>');
			$('.custom-stuff').animate({width: '700px'}, 500);
			$('.customize-column-left').css({'width': '50%', 'padding-right': '35px'});
			$('.customize-column-right').delay(100).fadeIn();
			
		}
	});
}