// VALIDATION DU FORMULAIRE
function validerLeFormulaire() {
    let formValide = true;
    let paragErreur = document.getElementById('erreur');
    paragErreur.innerHTML = ""; // vider le paragraphe

    // ETAPE 1 : Récupérer les valeurs des 3 champs
    let nom = document.getElementById('nom').value.trim();
    let prenom = document.getElementById('prenom').value.trim();
    let email = document.getElementById('email').value.trim();

    // ETAPE 2: Validation du formulaire
    // 1) Vérifier que tous les champs ont été saisis
    if(nom == '' || prenom == '' || email == '') {
        // alert('Merci de saisir tous les champs!');
        paragErreur.innerHTML += 'Merci de saisir tous les champs! <br>';
        formValide = false;
    }
    // 2) Vérifier la longueur du champ 'Nom'
    if(nom.length < 3) {
        paragErreur.innerHTML += "Le nom doit contenir 3 caractères minimum! <br>";
        formValide = false;
    }

    // alert("le formulaire a été envoyé!");
    return formValide;
}