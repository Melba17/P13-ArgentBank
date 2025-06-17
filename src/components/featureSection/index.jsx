import './style.css';

/**
 * 🔹 Section des fonctionnalités d'Argent Bank.
 * - Présente les principaux avantages de la banque (priorité client, taux d'intérêt, sécurité).
 * - Affiche des icônes et descriptions associées à chaque fonctionnalité.
 * 
 * @component
 * @returns {JSX.Element} - Composant affichant les fonctionnalités principales.
 */
function FeatureSection() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src="public/icon-chat.png" alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img src="public/icon-money.png" alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img src="public/icon-security.png" alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is always safe.
        </p>
      </div>
    </section>
  );
}

export default FeatureSection;
