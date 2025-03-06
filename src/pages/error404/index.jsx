import { Link } from "react-router-dom";
import "./style.css"; 

/**
 * 🔹 Page d'erreur 404.
 * - Affiche un message indiquant que la page demandée n'existe pas.
 * - Propose un lien pour retourner à la page d'accueil.
 * 
 * @component
 * @returns {JSX.Element} - Page d'erreur 404.
 */
function Error404() {
  return (
    <main className="error-container">
      <h1 className="error-title">404</h1>
      <p className="err-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="error-link">Go back to Home</Link>
    </main>
  );
}

export default Error404;
