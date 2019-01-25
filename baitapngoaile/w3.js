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