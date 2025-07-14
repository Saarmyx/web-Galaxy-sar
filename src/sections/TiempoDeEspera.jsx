import React from 'react'
import '../styles/TiempoDeEspera.css'

const TiempoDeEspera = () => {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-800" aria-label="Contenido principal">
        <section className="service-section">
          <div className="service-text">
            <div className="contenedor-estrellas-s">
              <h1>
                <span className="highlight">TIEMPO DE ESPERA</span>
              </h1>
            </div>
            <div className="service-description">
              <p>
                Atención y soporte técnico inmediato para garantizar que siempre cuentes con tu
                servicio de internet.
              </p>
            </div>
          </div>

          <div className="service-image">
            <img src="/contact.png" alt="Contacto soporte" />
          </div>
        </section>

        <section className="info-icons">
          <div className="info-item">
            <img src="/check.png" alt="Check icon" />
            <p>Contamos con personal altamente capacitado</p>
          </div>
          <div className="info-item">
            <img src="/technician.png" alt="Técnico icono" />
            <p>Listos para solucionar cualquier imprevisto lo más rápido posible</p>
          </div>
          <div className="info-item">
            <img src="/clock.png" alt="Reloj icono" />
            <p>Soporte y Respuesta inmediata</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default TiempoDeEspera
