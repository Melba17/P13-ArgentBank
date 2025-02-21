import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import SignIn from './components/SignIn';  
import UserProfile from './components/UserProfile'; 

/////// ROUTAGE ///////
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  </Router>
      
  );
};

export default App;
