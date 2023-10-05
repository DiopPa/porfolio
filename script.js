function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(document).ready(function() {
  // Définissez le waypoint pour chaque paragraphe animé
  $('.animated-paragraph').waypoint(function() {
    $(this.element).addClass('scroll-animation');
  }, {
    offset: '75%' // Ajoutez la classe lorsque le paragraphe est à 75% de la vue
  });
});

const animatedElements = document.querySelectorAll('.animated-text');

// Supprimez le curseur de texte à la fin de l'animation
animatedElements.forEach((element) => {
  element.addEventListener('animationend', () => {
    element.style.borderRight = 'transparent'; // Cachez le curseur de texte
  });
});

const profilePicture = document.getElementById('profile-picture');

// Créez une animation avec anime.js
anime({
  targets: profilePicture,
  scale: [0, 1], // Échelle de 0 à 1 (pour un effet d'apparition)
  opacity: [0, 1], // Opacité de 0 à 1
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'easeOutQuad', // Fonction d'interpolation pour une animation fluide
  delay: 500, // Délai avant le début de l'animation (en millisecondes)
});