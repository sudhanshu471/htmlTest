// custom js merge

	$(document).ready(function(){
		
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$(".nav-collapse").toggleClass('open');
		$('html body').toggleClass('collpase-frame');
	});
		
		$('.card-ico-block').click(function(){			
		$(".porperty-panel").toggleClass('open');	
	});
		$('.panel-close').click(function(){			
		$(".porperty-panel").removeClass('open');	
	});
		
		$(".fl-list").hover(
		  function () {
			$(this).addClass("show-preview");
		  },
		  function () {
			$(this).removeClass("show-preview");
		  }
		);
		
		
});

	

	