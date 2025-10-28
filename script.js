const produits = [
  {
    id: 1,
    nom: 'Ancien Moniteur 24 pouces',
    description:
      'Moniteur LCD 24 pouces, idéal pour un deuxième écran de bureautique. État correct.',
    prix: 45.0,
    type: 'Physique', // Physique, Numérique, Service
    image: 'placeholder-moniteur.jpg', // Image à ajouter plus tard
  },
  {
    id: 2,
    nom: 'Ebook : Les Bases de HTML/CSS',
    description:
      'Un guide PDF pour les débutants souhaitant maîtriser les fondamentaux du développement web.',
    prix: 19.99,
    type: 'Numérique',
    image: 'placeholder-ebook.jpg',
  },
  {
    id: 3,
    nom: 'Service de relecture de code (1h)',
    description:
      'Obtenez une heure de consultation et relecture de votre code JS/HTML/CSS par un expert.',
    prix: 75.0,
    type: 'Service',
    image: 'placeholder-service.jpg',
  },
  {
    id: 4,
    nom: 'Clavier mécanique usagé',
    description:
      'Clavier mécanique TKL, parfait pour le gaming ou la frappe intense.',
    prix: 60.5,
    type: 'Physique',
    image: 'placeholder-clavier.jpg',
  },
];

/**
 * @param {object} produit - L'objet contenant les détails du produit.
 * @returns {string} Le bloc HTML de la carte produit.
 */
function creerCarteProduit(produit) {
  return `
        <article class="produit-carte" data-id="${
          produit.id
        }" data-type="${produit.type.toLowerCase()}">
            <div class="produit-image-container">
                <img src="./images/${produit.image}" alt="Image du produit: ${
    produit.nom
  }" loading="lazy">
            </div>
            <div class="produit-infos">
                <h3 class="produit-nom">${produit.nom}</h3>
                <p class="produit-description">${produit.description}</p>
                <div class="produit-details">
                    <span class="produit-prix">${produit.prix.toFixed(
                      2
                    )} €</span>
                    <span class="produit-type">${produit.type}</span>
                </div>
                <button class="btn-ajouter-panier" data-produit-id="${
                  produit.id
                }" aria-label="Ajouter ${produit.nom} au panier">
                    Ajouter au panier
                </button>
            </div>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
  // Récupérer le conteneur où les produits doivent être affichés
  const conteneurProduits = document.getElementById('produits-container');

  // Vérification de sécurité : S'assurer que le conteneur existe
  if (!conteneurProduits) {
    console.error(
      "Erreur critique : Le conteneur avec l'ID 'produits-container' n'a pas été trouvé."
    );
    return; // Arrêter le script si l'élément n'est pas là
  }

  // Générer le HTML pour tous les produits
  const htmlProduits = produits
    .map(creerCarteProduit) // Appelle creerCarteProduit pour chaque produit
    .join(''); // Joint toutes les chaînes HTML en une seule grande chaîne

  // Injection dans le DOM
  conteneurProduits.innerHTML = htmlProduits;

  // Ajouter des écouteurs d'événements pour les boutons "Ajouter au panier"
});
