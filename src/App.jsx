import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import PoliticaPrivacidad from './components/Legal/Politica/PoliticaPrivacidad';
import TerminosCondiciones from './components/Legal/Terminos/TerminosCondiciones';
import EliminarCuenta from './components/Legal/EliminarCuenta/EliminarCuenta';
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
