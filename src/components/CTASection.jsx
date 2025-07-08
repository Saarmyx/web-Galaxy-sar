import React from 'react'

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <div className="cta-text">
        <div>
          <h2>Adquiere tu plan</h2>
          <p>AL MEJOR COSTO BENEFICIO</p>
        </div>
        <a href="/contacto">
          <button className="cta-button">Contáctanos Ahora</button>
        </a>
      </div>

      <div className="cta-image">
        <img src="/pc.png" alt="Persona con laptop conectada" />
        <h2>Internet Dedicado</h2>
      </div>
    </div>
  </section>
)

export default CTASection
