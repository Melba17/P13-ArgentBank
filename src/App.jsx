import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/home';
import SignInForm from './pages/signInForm';
import UserProfile from './pages/userProfile';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
