import './style.css';

/**
 * 🔹 Section principale de la page d'accueil.
 * - Affiche le message promotionnel d'Argent Bank.
 * - Met en avant les avantages tels que l'absence de frais et les taux d'intérêt élevés.
 * 
 * @component
 * @returns {JSX.Element} - Composant de la section promotionnelle.
 */
function HeroSection() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default HeroSection;
