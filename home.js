var=document.getelementbyclass(".drop").click(function() {
	var1=document.getelementbyclass(".stem").addClass("rain");
	
	setTimeout(function () { 
		$('.stem').removeClass('rain');
	}, 1200);  
});
