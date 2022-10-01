jQuery(document).ready(function() {
	var drop = jQuery('.dropdown-first').find(".dropdown-menu").first();
	var dropTwo = jQuery('.dropdown-first ul.dropdown-menu li.dropdown').find(".dropdown-menu").first();
	var dropS = jQuery('.dropdown-second').find(".dropdown-menu").first();
	var dropStwo = jQuery('.dropdown-second ul.dropdown-menu li.dropdown').find(".dropdown-menu").first();
	
	addShow();
	checkTop();
	jQuery(document).on('scroll', function(){
		
		if (jQuery(document).scrollTop() == 0){
			jQuery('.footer-to-top').css({'opacity':'0'});
		}else{
			jQuery('.footer-to-top').css({'opacity':'1'});
		}
	});
	function checkTop(){
		if (jQuery(document).scrollTop() == 0){
			jQuery('.footer-to-top').css({'opacity':'0'});
		}else{
			jQuery('.footer-to-top').css({'opacity':'1'});
		}
	}
	jQuery('#to-top').on('click', function(){
		jQuery(document).scrollTop(0);
	})

	function addShow(){
		jQuery('#collapse1').addClass('show');
	}
	jQuery('.active-button').on('click', ()=>{
		if(jQuery('.page-overlay').hasClass('undisplayed') || jQuery('.popup-container').hasClass('undisplayed')){
		jQuery('.popup-container').removeClass('undisplayed');
		jQuery('.page-overlay').removeClass('undisplayed');
		}
	})
	jQuery('#close_popup').on('click', ()=>{
		
			jQuery('.popup-container').addClass('undisplayed');
			jQuery('.page-overlay').addClass('undisplayed');
			

	})
	jQuery('#collapse_button').on('click', ()=>{
		if(jQuery('#navbarNavAltMarkup').hasClass('show'))
		{
			jQuery('#navbarNavAltMarkup').removeClass('show');
		}else{
			jQuery('#navbarNavAltMarkup').addClass('show');
		}
		
	})
	jQuery('.dropdown-first a').on('click', ()=>{
		
		if(jQuery(drop).hasClass('show')){
			jQuery(drop).removeClass('show');
		}else{
			jQuery(drop).addClass('show');
			jQuery(dropS).removeClass('show');
		}
	})
	jQuery('.dropdown-first ul.dropdown-menu li.dropdown a').on('click', ()=>{	
	
	jQuery(drop).addClass('show');
	if(jQuery(dropTwo).hasClass('show')){
		jQuery(dropTwo).removeClass('show');
	}else{
		jQuery(dropTwo).addClass('show');
	}
})
jQuery('.dropdown-second a').on('click', ()=>{
	
	if(jQuery(dropS).hasClass('show')){
		jQuery(dropS).removeClass('show');
	}else{
		jQuery(dropS).addClass('show');
		jQuery(drop).removeClass('show');
	}
})
jQuery('.dropdown-second ul.dropdown-menu li.dropdown a').on('click', ()=>{
	
jQuery(dropStwo).addClass('show');
if(jQuery(dropStwo).hasClass('show')){
	jQuery(dropStwo).removeClass('show');
}else{
	jQuery(dropStwo).addClass('show');
}
})
	

});