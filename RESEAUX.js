// On attend que la page soit chargée
window.onload = function() {
  // 1. Sélectionner toutes les images des réseaux sociaux
  const icons = document.querySelectorAll("a img");

  // 2. Parcourir chaque icône
  icons.forEach(icon => {
    // Ajouter un événement au clic
    icon.addEventListener("click", function(event) {
      event.preventDefault(); // empêche le comportement par défaut (ouvrir directement le lien)

      // Récupérer le lien associé
      const lien = icon.parentElement.href;

      // Afficher un message de confirmation
      alert("🔗 Vous allez être redirigé vers : " + lien);

      // Ouvrir le lien dans un nouvel onglet
      window.open(lien, "_blank");
    });

    // 3. Ajouter un effet visuel au survol
    icon.addEventListener("mouseover", function() {
      icon.style.transform = "scale(1.1)"; // agrandit légèrement
      icon.style.transition = "transform 0.3s";
    });

    icon.addEventListener("mouseout", function() {
      icon.style.transform = "scale(1)"; // revient à la taille normale
    });
  });
};