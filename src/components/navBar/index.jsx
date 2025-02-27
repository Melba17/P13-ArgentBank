import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  function handleLogout() {
    dispatch(logout()); // Réinitialise Redux
    navigate('/'); // Redirige vers la page d'accueil
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="designs/img/argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user.token ? (
          // Affichage du prénom + Sign Out si l'utilisateur est connecté
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </Link>
            <button className="main-nav-item logout-btn" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </div>
        ) : (
          // Affichage de Sign In si l'utilisateur n'est pas connecté
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
