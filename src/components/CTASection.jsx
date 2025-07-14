import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CTABanner.css'

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <div className="cta-text">
        <div>
          <h3>Adquiere tu plan</h3>
          <p>AL MEJOR COSTO BENEFICIO</p>
        </div>
        <Link
          to="/contacto"
          className="cta-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Contáctanos Ahora
        </Link>
      </div>

      <div className="cta-image">
        <img src="/pc.png" alt="Persona con laptop conectada" />
        <h3>Internet Dedicado</h3>
      </div>
    </div>
  </section>
)

export default CTASection
