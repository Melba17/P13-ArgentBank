import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../features/userSlice';
import axios from 'axios';
import './style.css';

function SignInForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction pour récupérer les informations utilisateur après connexion
  async function fetchUserProfile(token) {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {}, // Pas besoin de body
        {
          headers: { Authorization: `Bearer ${token}` },
        } // On envoie le token pour s'authentifier
      );

      dispatch(setUser({
        token,
        email: response.data.body.email,
        firstName: response.data.body.firstName,
        lastName: response.data.body.lastName,
      }));

      navigate('/user');
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: username,
        password: password,
      });
  
      if (response.data.body && response.data.body.token) {
        const token = response.data.body.token;
  
        // On stocke uniquement le token d'abord
        dispatch(setUser({ token }));
  
        // Ensuite, on récupère le profil complet
        fetchUserProfile(token);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Affiche le message d'erreur associé du backend 
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };
  
  return (
    <main className="main bg-dark">
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
          {error && <p className="error-message">{error}</p>}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignInForm;
