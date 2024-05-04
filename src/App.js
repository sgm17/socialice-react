import './App.css';
import Home from './Home';
import About from './About';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/terms-of-use" Component={TermsOfUse} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;