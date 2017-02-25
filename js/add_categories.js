var newCategory;
var userList = [];

$('#add-category').click(function(){
	newCategory = $('#custom-categories').val();
	userList.push(newCategory);
	$('#custom-categories').val("");
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
    console.log(userList);
});