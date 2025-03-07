import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import PoliticaPrivacidad from './components/Legal/PoliticaPrivacidad';
import TerminosCondiciones from './components/Legal/TerminosCondiciones';
import EliminarCuenta from './components/Legal/EliminarCuenta';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
      </Routes>
    </Router>
  );
}

export default App;
