"use strict";
// Première interface uniquement : aucun service externe, aucune sauvegarde.
const form=document.getElementById("account-form");
const feedback=document.getElementById("feedback");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const email=document.getElementById("email").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const profile=document.getElementById("profile").value.trim();
  if(!email&&!phone&&!profile){showFeedback("Ajoute au moins une information : une adresse e-mail, un numéro ou le nom du profil.");return;}
  if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showFeedback("L'adresse e-mail semble incomplète. Vérifie son format.");return;}
  if(phone&&phone.replace(/\D/g,"").length<6){showFeedback("Le numéro semble trop court. Vérifie les chiffres saisis.");return;}
  showFeedback("Informations saisies correctement. La connexion à Facebook n'est pas encore intégrée : aucune recherche réelle n'a été lancée et aucune donnée n'a été transmise.");
});
function showFeedback(message){feedback.textContent=message;feedback.hidden=false;}