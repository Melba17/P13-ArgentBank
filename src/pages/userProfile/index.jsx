import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserHeader from '../../components/userHeader';
import './style.css';

/**
 * 🔹 Page du profil utilisateur.
 * - Redirige vers `/sign-in` si l'utilisateur n'est pas connecté.
 * - Affiche les informations du profil et les comptes bancaires.
 * 
 * @component
 * @returns {JSX.Element} - Page du profil utilisateur.
 */
function UserProfile() {
  const { token } = useSelector((state) => state.user); // Déstructuration pour extraire uniquement le token
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && window.location.pathname !== '/') {
      navigate('/sign-in');
    }
  }, [token, navigate]);

  if (!token) return null; // Évite le rendu inutile au moment de la redirection

  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
