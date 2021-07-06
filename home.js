$(".drop").click(function() {
	$(".stem").addClass("rain");
	
	setTimeout(function () { 
		$('.stem').removeClass('rain');
	}, 1200);  
});
