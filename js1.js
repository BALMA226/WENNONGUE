// On attend que la page soit chargée
window.onload = function() {
  // 1. Sélectionner le bouton hamburger et le menu
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("menu");

  // 2. Masquer le menu au départ
  menu.style.display = "none";

  // 3. Ajouter un style horizontal aux liens du menu
  menu.style.textAlign = "center"; // centre le menu
  menu.querySelectorAll("a").forEach(lien => {
    lien.style.display = "inline-block"; // alignement horizontal
    lien.style.margin = "0 15px";        // espace entre les liens
    lien.style.textDecoration = "none";  // enlever le soulignement
    lien.style.color = "blue";           // couleur des liens
    lien.style.fontWeight = "bold";      // texte en gras
  });

  // 4. Ajouter l’interactivité au bouton hamburger
  hamburger.addEventListener("click", function() {
    // Si le menu est masqué → on l’affiche
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      // Sinon → on le masque
      menu.style.display = "none";
    }
  });
};