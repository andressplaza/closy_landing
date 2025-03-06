import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import PoliticaPrivacidad from './components/Legal/PoliticaPrivacidad';
import TerminosCondiciones from './components/Legal/TerminosCondiciones';
import 'font-awesome/css/font-awesome.min.css';
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
      </Routes>
    </Router>
  );
}

export default App;
