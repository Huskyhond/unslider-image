jQuery(document).ready(function(){
						if(window.chrome) {
				jQuery('.banner_unslider li').css('background-size', '100% 100%');
			}
			
			jQuery('.banner_unslider').unslider({
				fluid: true,
				dots: true,
				speed: 1000
			});
		
			//  Find any element starting with a # in the URL
			//  And listen to any click events it fires
			jQuery('a[href^="#"]').click(function() {
				//  Find the target element
				var target = jQuery(jQuery(this).attr('href'));
				
				//  And get its position
				var pos = target.offset(); // fallback to scrolling to top || {left: 0, top: 0};
				
				//  jQuery will return false if there's no element
				//  and your code will throw errors if it tries to do .offset().left;
				if(pos) {
					//  Scroll the page
					jQuery('html, body').animate({
						scrollTop: pos.top,
						scrollLeft: pos.left
					}, 1000);
				}
				
				//  Don't let them visit the url, we'll scroll you there
				return false;
			});
			
			

		}); 	