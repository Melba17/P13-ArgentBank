import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import axios from 'axios';
import './style.css';

/**
 * 🔹 Barre de navigation de l'application.
 * - Affiche le logo et les liens de navigation.
 * - Affiche le prénom et un bouton de déconnexion si l'utilisateur est connecté.
 * - Affiche un lien vers `/sign-in` si l'utilisateur n'est pas connecté.
 * - Redirige vers `/` après déconnexion.
 * 
 * @component
 * @returns {JSX.Element} - Composant de la barre de navigation.
 */
function Navbar() {
  const { token, firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
function handleLogout() {
  dispatch(logout()); // Réinitialise Redux
  delete axios.defaults.headers.common["Authorization"]; // Supprime le token global d'Axios => Évite que d’anciennes requêtes utilisent un token périmé ; Permet un changement de compte sans recharger la page ; Redux et Axios sont bien synchronisés.
  navigate('/'); 
}


  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="designs/argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <button className="main-nav-item logout-btn" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
