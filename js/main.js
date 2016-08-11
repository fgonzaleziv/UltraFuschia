$( document ).ready(function() {
	
	//nav bar highlighting -- fixx
	$('#nav-bar li').click(function(){
	var tab_id = $(this).attr('data-tab');
	
	$('#nav-bart li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
	
	})


	//code to make trailer fit
	$("#trailers").fitVids();
	
	
	//nav bar for contact
	$('#tab-contact li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('#tab-contact li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})



        $(window).scroll(function() {
			var scrollStr = 1;
            var yPos = -($(window).scrollTop() / scrollStr);      
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $(document.body).css({ backgroundPosition: coords });
        }); 
  
}); 