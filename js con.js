// On attend que la page soit chargée avant d'exécuter le script
window.onload = function() {

  // 1. Sélectionner le formulaire
  const form = document.querySelector("form");

  // 2. Intercepter l'événement "submit" (quand on clique sur valider)
  form.addEventListener("submit", function(event) {
    // Empêcher le rechargement automatique de la page
    event.preventDefault();

    // 3. Récupérer les valeurs des champs
    const nom = document.getElementById("name").value;
    const prenom = document.getElementById("prenom").value;
    const pays = document.getElementById("pays").value;
    const gmail = document.getElementById("gmail").value;
    const numero = document.getElementById("numero").value;
    const age = document.getElementById("age").value;
    const genre = document.getElementById("gender").value;
    const message = document.querySelector("textarea").value;
    const cgv = document.getElementById("cgv").checked; // true si coché

    // 4. Vérifier que les champs obligatoires sont remplis
    if (!nom || !prenom || !gmail) {
      alert("⚠️ Veuillez remplir au minimum votre nom, prénom et gmail.");
      return; // stoppe la fonction si condition non respectée
    }

    if (!cgv) {
      alert("⚠️ Vous devez accepter les conditions générales.");
      return;
    }

    // 5. Afficher un résumé des informations saisies
    let resume = 
      "✅ Formulaire envoyé avec succès !\n\n" +
      "Nom: " + nom + "\n" +
      "Prénom: " + prenom + "\n" +
      "Pays: " + pays + "\n" +
      "Gmail: " + gmail + "\n" +
      "Numéro: " + numero + "\n" +
      "Âge: " + age + "\n" +
      "Genre: " + genre + "\n" +
      "Message: " + message;

    alert(resume);

    // 6. Réinitialiser le formulaire après envoi
    form.reset();
  });
};