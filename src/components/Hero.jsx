import React from 'react';
import iphone from '@/assets/iphone.svg';
import titleLogo from '@/assets/closy-h1.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <img src={titleLogo} alt="Closy" className="hero__title" />
          <p className="hero__subtitle">
            Encuentra el Outfit perfecto sin siquiera probártelo.
          </p>
          <div className="hero__buttons">
            <button className="hero__button hero__button--light">Descargar en Android</button>
            <button className="hero__button hero__button--light">Descargar en iOS</button>
          </div>
        </div>

        <div className="hero__phone">
          <img src={iphone} alt="Vista previa de la app" className="hero__iphone" />
        </div>
      </div>    
    </section>
  );
};

export default Hero;
