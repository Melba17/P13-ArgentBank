import HeroSection from '../components/heroSection'; 
import FeatureSection from '../components/featureSection'; 

/**
 * 🔹 Page d'accueil de l'application.
 * - Affiche la bannière principale (`HeroSection`).
 * - Présente les fonctionnalités clés (`FeatureSection`).
 * 
 * @component
 * @returns {JSX.Element} - Page d'accueil.
 */
function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
    </div>
  );
}

export default Home;
