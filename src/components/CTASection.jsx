import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <div className="cta-text">
        <div>
          <h2>Adquiere tu plan</h2>
          <p>AL MEJOR COSTO BENEFICIO</p>
        </div>
        <Link to="/contacto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className="cta-button">Contáctanos Ahora</button>
        </Link>
      </div>

      <div className="cta-image">
        <img src="/pc.png" alt="Persona con laptop conectada" />
        <h2>Internet Dedicado</h2>
      </div>
    </div>
  </section>
)

export default CTASection
