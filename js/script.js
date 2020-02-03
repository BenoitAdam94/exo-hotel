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

/* Lydie 

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
*/

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

var civf = false // Obsolete

var nomf = false
var prenomf = false
var entreprisef = false
var emailf = false
var paysf = false
var sujetf = false
var servicef = false
var zonedetextef = false
var cvf = false
var lmf = false

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

function func_entreprise() {
  if (entreprise.value.length < 2) {
    entreprise_verif.innerHTML = 'Minimum 2 charactères';
    redborder(entreprise);
    entreprisef = false;
  }else{
    entreprise_verif.innerHTML = '';
    greenborder(entreprise);
    entreprisef = true;
  }
}

function func_pays() {
  if (pays.value.length < 2) {
    pays_verif.innerHTML = 'Minimum 2 charactères';
    redborder(pays);
    paysf = false;
  }else{
    pays_verif.innerHTML = '';
    greenborder(pays);
    paysf = true;
  }
}

function func_sujet() {
  if (sujet.value.length < 2) {
    sujet_verif.innerHTML = 'Minimum 2 charactères';
    redborder(sujet);
    sujetf = false;
  }else{
    sujet_verif.innerHTML = '';
    greenborder(sujet);
    sujetf = true;
  }
}

function func_email() {
  
if (email.value.length < 7) {
    email_verif.innerHTML = 'Minimum 7 charactères';
    redborder(email);
    emailf = false;
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

function func_pj(pj) {
  if (pj.value == 0)
  {
    redborder(pj);
    if (pj.id == 'cv'){ cvf = false; }
    else if (pj.id == 'lm') { lmf = false; }
  }
  else{
    greenborder(pj);
    if (pj.id == 'cv'){ cvf = true; }
    else if (pj.id == 'lm') { lmf = true; }
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

function inscription() {
  console.log(nomf, prenomf, emailf, paysf, sujetf, entreprisef, servicef, zonedetextef);
  func_service();
  if (nomf && prenomf && emailf && paysf && sujetf && entreprisef && servicef && zonedetextef) {
    alert('Le message a bien été envoyé');
    event.preventDefault();
  }else{
    alert('Le formulaire est incomplet');
    event.preventDefault();
  }
}

// var soumettre = document.getElementById('soumettre');
// soumettre.addEventListener("click", inscription);

function envoyer_cv() {
  console.log(nomf, prenomf, entreprisef, emailf, cvf, lmf, zonedetextef);
  if (nomf && prenomf && entreprise && emailf && cvf && lmf && zonedetextef) {
    alert('Le CV a bien été envoyé');
    event.preventDefault();
  }else{
    alert('Le formulaire est incomplet');
    event.preventDefault();
  }
}

// var envoyercv = document.getElementById('envoyercv');
// envoyercv.addEventListener("click", envoyer_cv);

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

function yyyymmdd() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    var yyyymmdd = parseInt(yyyymmdd);
    return yyyymmdd;
}

// var date = '01/21/2020'; // date example

function convertion_date_jquery(date) {
    console.info('function datejquery');
    var day = date.slice(3,5);
    var month = date.slice(0,2);
    var year = date.slice(6,10);
    var cdj = year + month + day;
    var cdj = parseInt(cdj);
    console.log('cdj = ' +cdj+typeof(cdj));
    return cdj
}

var date_arvf = false;
var date_depf = false;
var date_ajd = yyyymmdd();
date_ajd = parseInt(date_ajd);

console.info('date_adj = '+date_ajd+typeof(date_ajd));  


function checkdate(date) {
  console.info('function checkdate_arrivee');
  var dateArrivee = document.getElementById(date).value;
  var dateArrivee = convertion_date_jquery(dateArrivee);
  console.log('dateArrivee = ' +dateArrivee+typeof(dateArrivee));
  return dateArrivee;
}


function func_dateJourOk() {
  console.info('function func_datejourOK');
  var dateArrivee = checkdate('date_arv');
  if (dateArrivee < date_ajd || isNaN(dateArrivee)) {
    date_arv_verif.innerHTML = 'Veuillez sélectionner une date valide'; // la date d'arrivée ne peut pas être antérieure à la date du jour
    redborder(date_arv);
    date_arvf = false;
  } else {
    date_arv_verif.innerHTML = '';
    greenborder(date_arv);
    date_arvf = true;
  }
}


function func_verifDate() {
  console.info('function func_verifdate');
  var dateArrivee = checkdate('date_arv');
  var dateDepart = checkdate('date_dep');
  if (dateArrivee > dateDepart || isNaN(dateDepart)) {
    date_dep_verif.innerHTML = 'Veuillez sélectionner une date valide'; // la date d'arrivée ne peut pas être ultérieure à la date de départ
    redborder(date_dep);
    date_depf = false;
  } else {
    date_dep_verif.innerHTML = '';
    greenborder(date_dep);
    date_depf = true;
  }
}

function reserver_chambre () {
    func_dateJourOk();
    func_verifDate();
    console.log(date_arvf, date_depf);
    if (date_arvf && date_depf) {
    alert('Formulaire Ok');
    event.preventDefault();
  } else{
    alert('Le formulaire est incomplet');
    event.preventDefault();
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


/* A Actualiser lorsque la f° marchera pour la resa chambre
function func_dateJour(){
  if(dateArrivee2 < dateJour){
    alert("false");
  }
  else{
    alert('La date choisie ne peut pas être antérieure à la date actuelle');
  }
}
*/

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

