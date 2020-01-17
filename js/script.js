/* Smooth Scroll */

$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	if (the_id === '#') {
		return;
	}
	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});

/* Search Bar responsive menu */

function searchbargrow(mediax) {
	var u = document.getElementById('search_field');
	console.log(u);
	if (mediax.matches) {
	  	u.style.width="100%";
	  	u.style.border="1px solid grey";
	  	console.log('if');
	} else {
		u.style.width="";
	  	u.style.border="1px solid transparent";
	  	console.log('else');
	}
  }

  console.info('info');
  var mediax = window.matchMedia("(max-width: 992px)");
  searchbargrow(mediax);
  mediax.addListener(searchbargrow);

  

/* Lydie */

$(document).ready(function(){
	$(".monBouton").click(function(){
		location.href="reservation.htm";
	});
	$('.monBouton').mouseout(function(){   
			$(this).css({'background-color':'rgba(148, 136, 30, 0.87)','color':'white'});
		});
	$('.monBouton').mouseover(function(){   
			$(this).css({'color':'rgba(148, 136, 30, 0.87)','background-color':'white'});
		});
	$('span').hover(
		function(){   
			$(this).css('color','grey');
		},
		function(){    
			$(this).css('color','black');
		}
	);
	$('.nav-item').mouseover(function(){   
			$(this).css('color','black');
		});
	$('.nav-item').mouseout(function(){   
			$(this).css('color','grey');
		});


});
