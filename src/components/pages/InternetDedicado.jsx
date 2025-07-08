import React from 'react'
import './Empresas.css'
import Header from '../DoubleHeader'
import Footer from '../Footer'
import CTASection from '../CTASection'

const InternetDedicado = () => {
  return (
    <>
      <Header active="dedicado" />
      <main className="bg-white text-gray-800">
        {/* Sección principal */}
        <section className="dedicado-section" aria-labelledby="titulo-dedicado">
          <div className="dedicado-content">
            {/* Texto */}
            <div className="text-section">
              <div className="contenedor-estrellas-e">
                <h1 id="titulo-dedicado">
                  <span className="highlight">INTERNET</span> <br /> DEDICADO
                </h1>
                <img src="/estrellas.png" alt="Estrellas decorativas" className="estrellas-img" />
              </div>
              <p>
                Tu negocio requiere una conexión dedicada, así podrás brindarle mejores soluciones a
                tus clientes.
              </p>
            </div>

            {/* Imagen */}
            <div className="laptop">
              <img src="/settings.png" alt="Laptop con ajustes" />
            </div>
          </div>
        </section>

        {/* Sección de servicio */}
        <section className="service-container" aria-labelledby="servicios-confiables">
          <div className="service-inner">
            <img src="/handshake.png" alt="Manos estrechándose" />
            <h2 id="servicios-confiables">Servicios Confiables</h2>
            <p>
              Nuestra conexión es 100% en fibra óptica y nuestro soporte técnico es humano. ¡No
              usamos robots para atenderte!
            </p>
            <p className="note">
              Soporte 24 horas al día 7 dias a la semana, por que negocio merece lo mejor.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default InternetDedicado
