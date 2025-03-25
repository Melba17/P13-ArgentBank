import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import { loginUser, getUserProfile } from '../../service/Api';
import Loader from "../../components/loader";
import './style.css';

/**
 * 🔹 Formulaire de connexion utilisateur.
 * - Permet à un utilisateur de se connecter avec son email et son mot de passe.
 * - Envoie une requête `POST` pour authentifier l'utilisateur et récupérer son profil.
 * - Stocke le token et les informations utilisateur dans Redux.
 * - Redirige l'utilisateur vers `/user` après connexion réussie.
 * 
 * @component
 * @returns {JSX.Element} - Composant du formulaire de connexion.
 */
function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    try {
      // 🔹 Connexion et récupération du token
      const { token } = await loginUser(username, password);
  
      // 🔹 Récupération des infos utilisateur
      const userProfile = await getUserProfile();
  
      // 🔹 Stocker Redux avec toutes les infos du profil
      dispatch(setUser({ token, ...userProfile }));
      navigate('/user'); 
      
    } catch (error) {
      setError(error.response?.data?.message || 'An error has occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <main className="main bg-dark">
      {isLoading ? (
        <Loader />
      ) : (
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className="sign-in-button" type="submit">Sign In</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default SignInForm;
