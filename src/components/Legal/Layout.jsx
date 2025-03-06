import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegar hacia la página de inicio
import './Layout.css'; // Asegúrate de que el CSS esté bien importado

const Layout = ({ children }) => {
    const navigate = useNavigate(); // Inicializamos useNavigate para la navegación
  
    const goBackToHome = () => {
      navigate('/'); // Redirige a la página de inicio
    };
  
    return (
      <div className="layout-legal">
        <div className="header-legal">
          <button className="back-button" onClick={goBackToHome}>
          <i className="fas fa-arrow-left"></i> 
          </button>
        </div>
        <div className="leftSide-legal"></div>
        <div className="body-legal">
          {children}
        </div>
        <div className="rightSide-legal"></div>
        <div className="footer-legal"></div>
      </div>
    );
  };
  

  export default Layout;