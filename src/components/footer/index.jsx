import './style.css';

/**
 * 🔹 Pied de page de l'application.
 * - Affiche le copyright d'Argent Bank.
 * 
 * @component
 * @returns {JSX.Element} - Composant du pied de page.
 */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  );
}

export default Footer;
