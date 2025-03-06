import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegar hacia la página de inicio
import './Layout.css'; // Asegúrate de que el CSS esté bien importado
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = ({ children }) => {
    const navigate = useNavigate(); // Inicializamos useNavigate para la navegación

    const goBackToHome = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <div className="layout-legal">
            <div className="header-legal">
                <button className="back-button" onClick={goBackToHome}>
                    <FontAwesomeIcon icon={faArrowLeft} />
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