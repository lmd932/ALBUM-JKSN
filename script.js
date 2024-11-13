// Fonction pour afficher les détails de l'album dans une fenêtre modale
function showDetails(element) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Récupération des informations de l'album
    const imgSrc = element.querySelector("img").src;
    const title = element.querySelector("p").innerText;

    // Mise à jour du contenu de la modale
    modalImage.src = imgSrc;
    modalTitle.innerText = title;
    modalDescription.innerText = ` ${title} jeune rappeur du 93 sort son première album nommé CRACK qui contient 9 morceaux`;

    // Affichage de la modale
    modal.style.display = "flex";
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fermer la modale en cliquant à l'extérieur du contenu
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
