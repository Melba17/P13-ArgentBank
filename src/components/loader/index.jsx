import "./style.css"; 

/**
 * 🔹 Composant d'affichage du chargement.
 * - Affiche un message "Loading..." lors du chargement des données.
 * 
 * @component
 * @returns {JSX.Element} - Composant de chargement.
 */
function Loader() {
  return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
