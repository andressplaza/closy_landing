import React from 'react';
import Layout from '../Layout';
import vestyLegal from '../../../assets/vesty-legal.png';


const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <img src={vestyLegal} alt="Logo Vesty Legal" className="logo-legal" />
      <h1>Política de Privacidad</h1>
      <p>En Vesty valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación.</p>

      <h2>1. ¿Qué datos recopilamos?</h2>
      <p>Cuando usas Vesty, podemos recopilar:</p>
      <ul>
        <li><strong>Datos personales:</strong> nombre, correo electrónico y foto de perfil (si te registras).</li>
        <li><strong>Contenido que subes:</strong> imágenes de prendas, fotos para el probador virtual y outfits.</li>
        <li><strong>Datos técnicos:</strong> modelo de dispositivo, sistema operativo, idioma y versión de la app.</li>
        <li><strong>Datos de uso:</strong> interacciones dentro de la app para mejorar el servicio.</li>
      </ul>

      <h2>2. ¿Para qué usamos tus datos?</h2>
      <p>Usamos tu información para:</p>
      <ul>
        <li>Ofrecerte las funciones principales de Vesty (como probar ropa virtualmente).</li>
        <li>Personalizar tu experiencia.</li>
        <li>Mejorar y optimizar la aplicación.</li>
        <li>Enviarte comunicaciones relacionadas con la app (si así lo aceptas).</li>
        <li>Cumplir con obligaciones legales.</li>
      </ul>

      <h2>3. ¿Compartimos tus datos?</h2>
      <p>No vendemos ni compartimos tus datos personales con terceros, excepto:</p>
      <ul>
        <li>Proveedores de servicios que nos ayudan a operar Vesty (por ejemplo, servidores o procesamiento de imágenes).</li>
        <li>Si es requerido por ley o autoridad competente.</li>
      </ul>

      <h2>4. ¿Dónde se almacenan tus datos?</h2>
      <p>Tus datos se almacenan de forma segura en servidores protegidos. Aplicamos medidas técnicas y organizativas para evitar accesos no autorizados, pérdida o alteración de tu información.</p>

      <h2>5. ¿Cuánto tiempo conservamos tus datos?</h2>
      <p>Guardamos tus datos mientras tengas una cuenta activa en Vesty o mientras sean necesarios para proporcionarte nuestros servicios. Puedes solicitar su eliminación en cualquier momento.</p>

      <h2>6. ¿Cuáles son tus derechos?</h2>
      <p>Puedes ejercer los siguientes derechos sobre tus datos:</p>
      <ul>
        <li>Acceso a tu información.</li>
        <li>Rectificación de datos incorrectos.</li>
        <li>Eliminación de tus datos.</li>
        <li>Limitación del tratamiento.</li>
        <li>Portabilidad.</li>
        <li>Oposición al uso de tus datos.</li>
      </ul>
      <p>Puedes ejercer estos derechos escribiéndonos a:</p>
      <p><strong>vestyappes@gmail.com</strong></p>

      <h2>7. Cambios en esta política</h2>
      <p>Podemos actualizar esta Política de Privacidad. Si hacemos cambios importantes, te lo notificaremos a través de la app o por correo electrónico.</p>
    </Layout>
  );
};

export default PoliticaPrivacidad;
