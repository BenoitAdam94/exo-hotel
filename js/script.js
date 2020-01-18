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

function d(arg) {
    document.write('<p>' + arg + '</p>')
  }


var civf = false
var nomf = false
var prenomf = false
var agef = false
var pseudof = false
var mdp1f = false
var mdp2f = false
var paysf = false



function redborder(nom) {
  nom.style.border = "2px solid red";
  }

function greenborder(nom) {
  nom.style.border = "2px solid green";
  }  

function func_formcomplete() {
  /*
  if (civf && nomf && prenomf && agef && pseudof && mdp1f && mdp2f && paysf) {
    soumettre.removeAttribute("disabled");
  }else{
    soumettre.setAttribute("disabled", "");
  }*/
}


function func_civilite() {
  console.info('lol');
  var radio = document.getElementsByName('civilite');
  rad = radio[0].checked || radio[1].checked
  if (!rad) {
    civilite_verif.innerHTML = 'Choisissez';
    civf = false;
  }else{
    civilite_verif.innerHTML = '';
    civf = true;
  }
  func_formcomplete();
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
  func_formcomplete();
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
  func_formcomplete();
}

function func_age() {
  agevalue = parseInt(age.value);
  if (agevalue < 5 || agevalue > 140 ) {
    age_verif.innerHTML = 'Entrez un chiffre entre 5 et 140';
    redborder(age);
    agef = false;
  }else{
    age_verif.innerHTML = '';
    greenborder(age);
    agef = true;
  }
  func_formcomplete();
}

function func_pseudo() {
  if (pseudo.value.length < 5) {
    pseudo_verif.innerHTML = 'Minimum 5 charactères';
    redborder(pseudo);
    pseudof = false;
  }else{
    pseudo_verif.innerHTML = '';
    greenborder(pseudo);
    pseudof = true;
  }
  func_formcomplete();
}

function func_mdp1() {
  if (motdepasse1.value.length < 5) {
    pwd1_verif.innerHTML = 'Minimum 5 charactères';
    redborder(motdepasse1);
    mdp1f = false;
  }else{
    pwd1_verif.innerHTML = '';
    greenborder(motdepasse1);
    mdp1f = true;
  }
  func_formcomplete();
}

function func_mdp2() {
  if (motdepasse2.value != motdepasse1.value) {
    pwd2_verif.innerHTML = 'Le mdp doit être identique';
    redborder(motdepasse2);
    mdp2f = false;
  }else{
    pwd2_verif.innerHTML = '';
    greenborder(motdepasse2);
    mdp2f = true;
  }
  func_formcomplete();
}
 
function func_pays() {
  if (pays.value == 0)
  {
    pays_verif.innerHTML = 'Selectionnez un pays';
    redborder(pays);
    paysf = false;
  }else{
    pays_verif.innerHTML = '';
    greenborder(pays);
    paysf = true;
  }
  func_formcomplete();
}

function log() {
  console.log(civf, nomf, prenomf, agef, pseudof, mdp1f, mdp2f, paysf);
  
}

function inscription() {
  log();
  if (civf && nomf && prenomf && agef && pseudof && mdp1f && mdp2f && paysf) {
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