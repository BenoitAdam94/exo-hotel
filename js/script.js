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
	// console.log(u);
	if (mediax.matches) {
	  	u.style.width="100%";
	  	u.style.border="1px solid grey";
	  	// console.log('if');
	} else {
		u.style.width="";
	  	u.style.border="1px solid transparent";
	  	// console.log('else');
	}
  }

  // console.info('info');
  var mediax = window.matchMedia("(max-width: 992px)");
  searchbargrow(mediax);
  mediax.addListener(searchbargrow);

/* Lydie */

$(document).ready(function(){
	$(".reserver-style").click(function(){
		location.href="reservation.htm";
	});
	$('.reserver-style').mouseout(function(){   
			$(this).css({'background-color':'rgba(148, 136, 30, 0.87)','color':'white'});
		});
	$('.reserver-style').mouseover(function(){   
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

/* heure repas selon Midi ou Soir */

$('#midi_h').show();
$('#soir_h').hide();

function func_midisoir() {  
  var radio = document.getElementsByName('midisoir');  
  if (radio[0].checked) {
    $('#soir_h').hide();
    $('#midi_h').show(); 
  }
  else if (radio[1].checked) {
    $('#midi_h').hide();
    $('#soir_h').show();
  }
}

/* Image reservation */

$('#chambre-resa').show();
$('#table-resa').hide();
$('#soin-resa').hide();


function func_chambre_img() {  
  console.log('chambre');
  $('#table-resa').hide();
  $('#soin-resa').hide();
  $('#chambre-resa').show();
}

function func_table_img() { 
  console.log('table');
  $('#chambre-resa').hide();
  $('#soin-resa').hide();
  $('#table-resa').show();
}

function func_soins_img() { 
  console.log('soin');
  $('#chambre-resa').hide();
  $('#table-resa').hide();
  $('#soin-resa').show();
}



/* ****** Formulaire de contact ****** */

var civf = false
var nomf = false
var prenomf = false
var emailf = false
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
    console.info(civf);
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

function func_email() {
  
  for (i = 0; i < email.value.length; i++) {
  console.log(email[i]);
    }
  if (email.value.length < 7) {
    email_verif.innerHTML = 'Minimum 7 charactères';
    redborder(email);
    emailf = false;
  if(email.value.length){

  }
  }else{
    email_verif.innerHTML = '';
    greenborder(email);
    emailf = true;
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
    service_verif.innerHTML = 'Sélectionnez le service';
    redborder(service);
    servicef = false;
  }else{
    service_verif.innerHTML = '';
    greenborder(service);
    servicef = true;
  }
}

function log() {
  console.log(civf, nomf, prenomf, emailf, servicef, zonedetextef);
}

function inscription() {
  log();
  if (civf && nomf && prenomf && emailf && servicef && zonedetextef) {
    alert('Le message a bien été envoyé');
    event.preventDefault();
  }else{
    alert('Le formulaire est incomplet');
    event.preventDefault();
  }
}


/* ******* fonctions formulaire avis ******/

var thematiquef = false
var zonedetexte2f = false


function func_thematique() {
  if (thematique.value == 0)
  {
    thematique_verif.innerHTML = 'Sélectionnez votre thématique';
    redborder(thematique);
    thematiquef = false;
  }else{
    thematique_verif.innerHTML = '';
    greenborder(thematique);
    thematiquef = true;
  }
}



function func_zonedetexte2() {
  if (zonedetexte2.value.length < 20) {
    zonedetexte2_verif.innerHTML = 'Minimum 20 caractères';
    redborder(zonedetexte2);
    zonedetexte2f = false;
  }else{
    zonedetexte2_verif.innerHTML = '';
    greenborder(zonedetexte2);
    zonedetexte2f = true;
  }
}

/* ********** formulaire réservation chambre ***** */

var dateArrivee = date_arv.value;
var dateJour = new Date();

var date    = new Date(),
    yr      = date.getFullYear(),
    month   = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth(),
    day     = date.getDate()  < 10 ? '0' + date.getDate()  : date.getDate(),
    newDate = day + '/' + month + '/' + yr;
console.log(newDate);


console.log(dateJour);


function func_dateJour(){
  
  if(dateArrivee < dateJour){
    alert("false");
  }
  else{
    alert('La date choisie ne peut pas être antérieure à la date actuelle');
  }
}

function func_verifDate(){
  var a=new Date('date_arv');			// date d'arrivée
  var b=new Date('date_dep'); // date de départ
  if(a > b){ 
    alert("false");
  }
  else{
    alert("La date de départ doit être ultérieure à la date d'arrivée");
  }
 }

 function func_log_resa(){
   console.info(dateArrivee);
 }

/* ************ Formulaire réservation Table ******** */

var heuretablemidif = false
var heuretablesoirf = false
var personnesf = false
var dateArrivee2 = 'date_table';


function func_dateJour(){
  if(dateArrivee2 < dateJour){
    alert("false");
  }
  else{
    alert('La date choisie ne peut pas être antérieure à la date actuelle');
  }
}

function func_heuretablemidi() {
  if (midi_heure.value == 0)
  {
    heuretablemidi_verif.innerHTML = 'Sélectionnez un horaire';
    redborder(midi_heure);
    heuretablemidif = false;
  }else{
    heuretablemidi_verif.innerHTML = '';
    greenborder(midi_heure);
    heuretablemidif = true;
  }
}

function func_heuretablesoir() {
  if (soir_heure.value == 0)
  {
    heuretablesoir_verif.innerHTML = 'Sélectionnez un horaire';
    redborder(soir_heure);
    heuretablesoirf = false;
  }else{
    heuretablesoir_verif.innerHTML = '';
    greenborder(soir_heure);
    heuretablesoirf = true;
  }
}

function func_personnes() {
  if (personnes.value < 1)
  {
    personnes_verif.innerHTML = 'Sélectionnez un nombre de personne(s)';
    redborder(personnes);
    personnesf = false;
  }else{
    personnes_verif.innerHTML = '';
    greenborder(personnes);
    personnesf = true;
  }
}


/* ************ Formulaire réservation Spa ******** */

var typesoinf = false
var heuresoinf = false
var dateSoin = new Date('date_soin');


function func_dateJour(){
  if(dateSoin < dateJour){
    alert("false");
  }
  else{
    alert('La date choisie ne peut pas être antérieure à la date actuelle');
  }
}

function func_typesoin() {
  if (typesoin.value == 0)
  {
    typesoin_verif.innerHTML = 'Sélectionnez un soin';
    redborder(typesoin);
    typesoinf = false;
  }else{
    typesoin_verif.innerHTML = '';
    greenborder(typesoin);
    typesoinf = true;
  }
}

function func_heuresoin() {
  if (heuresoin.value == 0)
  {
    heuresoin_verif.innerHTML = 'Sélectionnez un horaire';
    redborder(heuresoin);
    heuresoinf = false;
  }else{
    heuresoin_verif.innerHTML = '';
    greenborder(heuresoin);
    heuresoinf = true;
  }
}

// soumettre.addEventListener("click", inscription);