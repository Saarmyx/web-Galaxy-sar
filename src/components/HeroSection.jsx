import React from 'react'

const HeroSection = () => (
  <section className="seccion-hero">
    <div className="filtro-lado filtro-izquierdo"></div>
    <div className="filtro-lado filtro-derecho"></div>

    <div className="contenido-hero">
      <div className="zona-texto">
        <div className="contenedor-estrellas">
          <h1>
            PÁSATE <br />
            AL NUEVO
          </h1>
          <img src="/estrellas.png" alt="Estrellas" />
        </div>
        <h2 className="inter">INTERNET</h2>
        <h2 className="subrayado">ILIMITADO</h2>
        <div className="caja-resaltada">
          <p className="tv-adicional">+ TV DIGITAL</p>
        </div>
      </div>
      <div className="zona-imagen">
        <img src="/mujer-hero.png" alt="Mujer con laptop" />
      </div>
    </div>
  </section>
)

export default HeroSection
