function d(arg) {
  document.write('<p>' + arg + '</p>')
}

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


/* ****** Formulaire de contact ****** */




var civf = false
var nomf = false
var prenomf = false
var servicef = false
var zonedetextef = false



function redborder(nom) {
  nom.style.border = "2px solid red";
  }

function greenborder(nom) {
  nom.style.border = "2px solid green";
  }  




function func_civilite() {
  var radio = document.getElementsByName('civilite');
  rad = radio[0].checked || radio[1].checked
  if (!rad) {
    civilite_verif.innerHTML = 'Choisissez';
    civf = false;
  }else{
    civilite_verif.innerHTML = '';
    civf = true;
  }
}

function func_nom() {
  if (nom.value.length < 2) {
    nom_verif.innerHTML = 'Minimum 2 charactères';
    redborder(nom);
    nomf = false;
  }else{
    nom_verif.innerHTML = '';
    greenborder(nom);
    nomf = true;
  }
}

function func_prenom() {
  if (prenom.value.length < 2) {
    prenom_verif.innerHTML = 'Minimum 2 charactères';
    redborder(prenom);
    prenomf = false;
  }else{
    prenom_verif.innerHTML = '';
    greenborder(prenom);
    prenomf = true;
  }
}

function func_zonedetexte() {
  if (zonedetexte.value.length < 20) {
    zonedetexte_verif.innerHTML = 'Minimum 20 charactères';
    redborder(zonedetexte);
    zonedetextef = false;
  }else{
    zonedetexte_verif.innerHTML = '';
    greenborder(zonedetexte);
    zonedetextef = true;
  }
}



 
function func_service() {
  if (service.value == 0)
  {
    service_verif.innerHTML = 'Selectionnez un service';
    redborder(service);
    servicef = false;
  }else{
    service_verif.innerHTML = '';
    greenborder(service);
    servicef = true;
  }
}

function log() {
  console.log(civf, nomf, prenomf, servicef, zonedetextef);
  
}

function inscription() {
  log();
  if (civf && nomf && prenomf && servicef && zonedetextef) {
    alert('Inscription ok');
    event.preventDefault();
  }else{
    alert('Le formulaire est incomplet');
    event.preventDefault();
  }
  
}

document.querySelector("#civ").addEventListener("mouseout", func_civilite);

soumettre.addEventListener("click", inscription);



/*
document.querySelector("#checkbox").addEventListener("click", function(event) {
  alert('formulaire non rempli');
  event.preventDefault();
}, false);
*/