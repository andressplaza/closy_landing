import Layout from './Layout';
import './EliminarCuenta.css'; // Asegúrate de crear y enlazar correctamente este archivo CSS

const EliminarCuenta = () => {
    return (
        <Layout>
            <div className="delete-account-container">
                <h1 className="title">Closy</h1>
                <h2 className="subtitle">Te echaremos de menos</h2>
                <p className="description">
                    Si quieres borrar tu cuenta y todos tus datos de Closy, solo necesitas ingresar tu correo abajo. 
                    Te enviaremos un mail de confirmación para asegurarnos de que realmente quieres hacerlo.
                </p>
                <input type="email" className="email-input" placeholder="Correo electrónico" />
                <p className="important-text">Importante: Esta acción no se puede deshacer.</p>
                <button className="delete-button">Solicitar eliminación</button>
                <div className="footer-links">
                    <a href="/terminos-condiciones">Términos y condiciones</a> |
                    <a href="/privacidad">Política de privacidad</a> |
                    <a href="/eliminar-cuenta">Eliminar mi cuenta</a>
                </div>
            </div>
        </Layout>
    );
};

export default EliminarCuenta;
