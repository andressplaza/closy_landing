import React from 'react';
import iphone from '@/assets/iphone.svg';
import titleLogo from '@/assets/closy-h1.svg';
import androidLogo from '@/assets/android.svg';
import appleLogo from '@/assets/apple.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="layout">
      <div className="header"></div>
      <div className="leftSide"></div>
      
      <div className="body">
        <div className="hero__content">
          <div className="hero__text">
            <img src={titleLogo} alt="Closy" className="hero__logo" />
            <p className="hero__subtitle">
              Encuentra el Outfit <strong>perfecto</strong> sin siquiera probártelo.
            </p>
            <div className="hero__buttons">
              <button className="hero__button hero__button--light">
                <img src={androidLogo} alt="Logo Android" className="hero__store-logo" />
                Descargar en Android
              </button>
              <button className="hero__button hero__button--light">
                <img src={appleLogo} alt="Logo Apple" className="hero__store-logo" />
                Descargar en iOS
              </button>
            </div>
          </div>
          <div className="hero__phone">
            <img
              src={iphone}
              alt="Vista previa de la app"
              className="hero__iphone"
            />
          </div>
        </div>
      </div>
      
      <div className="rightSide"></div>
      
      <div className="footer">
        <div className="footer__left">Closy - 2025</div>
        <div className="footer__right">
          <a href="/terminos-condiciones" className="footer__link">
            Términos y condiciones
          </a>
          <a href="/privacidad" className="footer__link">
            Política de privacidad
          </a>
          <a href="/eliminar-cuenta" className="footer__link">
            Eliminar mi cuenta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
