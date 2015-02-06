var n=128;

$(document).ready(function (){
	
});

function createDivs(num){
	var side=$("#wrapper").width();
	console.log(side);
	var divSide=side/num;
	for(var i=1; i<=num*num; i++){
		var divCreate=$("<div class='createdDiv'></div>");
		$("#wrapper").append(divCreate);
	}
	$(".createdDiv").width(divSide);
	$(".createdDiv").height(divSide);
}

function clearAll(){
	$(".createdDiv").css("background", "none");
}

function start(){
	createDivs(n);
	$(".createdDiv").hover(function (){
	$(this).css("background-color", "black");
});
}

function normalColor(){

}

function randomColor(){
	$(".createdDiv").hover(function (){
	var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	$(this).css("background-color", col);
});
}