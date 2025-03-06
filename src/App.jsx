import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/home';
import SignInForm from './pages/signInForm';
import UserProfile from './pages/userProfile';
import Error404 from './pages/error404';
import Footer from './components/footer';

/**
 * 🔹 Composant principal de l'application.
 * - Gère la navigation avec `react-router-dom`.
 * - Affiche la barre de navigation (`Navbar`) et le pied de page (`Footer`) quelque soit la page.
 * - Définit les routes principales :
 *   - `/` → Page d'accueil (`Home`).
 *   - `/sign-in` → Connexion (`SignInForm`).
 *   - `/user` → Profil utilisateur (`UserProfile`).
 *   - `*` → Page 404 (`Error404`).
 * 
 * @component
 * @returns {JSX.Element} - Structure principale de l'application.
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
