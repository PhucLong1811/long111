$().ready(function(){
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if (top>100) {
			$("#top").fadeIn('slow');
		}else{
			$("#top").fadeOut('slow');
		}
	});
	$("#top").click(function(){
		$("body").animate({scrollTop:0},1000)
	});
});	
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var j;
	var y = document.getElementsByClassName("Slides");
	if (n > y.length) {slideIndex = 1}
		if (n < 1) {slideIndex = y.length}
			for (j = 0; j < y.length; j++) {
				y[j].style.display = "none";  
			}
			y[slideIndex-1].style.display = "block";  
		}
		var myIndex = 0;
		carousel();

		function carousel() {
			var i;
			var x = document.getElementsByClassName("mySlides");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			myIndex++;
			if (myIndex > x.length) {myIndex = 1}    
				x[myIndex-1].style.display = "block";  
			setTimeout(carousel, 1000);
		}
		function date(){
			var today = new Date();
			var day = ["Sunday","Monday","Tuesday","Tuesday","Thursday","Friday","Saturday"];
			var Month = ["1","2","3","4","5","6","7","8","9","10","11","12"];
			document.getElementById("day").innerHTML = day[today.getDay()]+ " , " + today.getDate() + "/" + Month[today.getMonth()] + "/"+ today.getFullYear();
		}
		date();
		function time(){
			var today = new Date();
			var Hours = today.getHours();
			var Minutes = today.getMinutes();
			var Seconds = today.getSeconds();
			document.getElementById("time1").innerHTML = Hours + ":" + Minutes + ":" + Seconds;
			setTimeout(time,1000);
		}
		time();
		function plus(){
			document.getElementById("an").style.display = "none";
			document.getElementById("an1").style.display = "none";
		}
		function postcomment(){
			var inputComment = document.getElementById("comment_add").value;
			var addComment = document.getElementById("comment");
			var creatP = document.createElement("p");
			addComment.appendChild(creatP);
			var day = Date();
			var textNode = document.createTextNode(inputComment);
			var textNode1 = document.createTextNode(day);
			creatP.appendChild(textNode);
			creatP.appendChild(textNode1);
		}
