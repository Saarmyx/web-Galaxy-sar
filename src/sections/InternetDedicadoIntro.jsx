// src/components/empresas/InternetDedicadoIntro.jsx
import React from 'react'

const InternetDedicadoIntro = () => (
  <section className="dedicado-section" aria-labelledby="titulo-dedicado">
    <div className="dedicado-content">
      {/* Imagen */}
      <div className="laptop">
        <img src="/settings.png" alt="Laptop con ajustes" />
      </div>

      {/* Texto */}
      <div className="text-section">
        <div className="contenedor-estrellas-e">
          <h1 id="titulo-dedicado">
            <span className="highlight">INTERNET</span> <br /> DEDICADO
          </h1>
          <img src="/estrellas.png" alt="Estrellas decorativas" className="estrellas-img" />
        </div>
        <p>
          Tu negocio requiere una conexión dedicada, así podrás brindarle mejores soluciones a tus
          clientes.
        </p>
      </div>
    </div>
  </section>
)

export default InternetDedicadoIntro
