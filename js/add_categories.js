var newCategory;
var userList = [];

$('#add-category').click(function(){
	newCategory = $('#custom-categories').val();
	if (newCategory.length > 1 && /[a-zA-Z]/.test(newCategory) ){
		userList.push(newCategory);
		$('#custom-categories').val("");
	}
});

$("#custom-categories").keyup(function(event){
	if(event.keyCode == 13){
		$("#add-category").click();
	}
});

$('#done').click(function(){
	populate();
	$('#custom-categories').val("");
    $(".categories-form").fadeOut();
});