import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Componentes globales
import DoubleHeader from './components/DoubleHeader'
import Footer from './components/Footer'

// Secciones de la página principal
import HeroSection from './components/HeroSection'
import PlansSection from './components/PlansSection'
import CTASection from './components/CTASection'

// Páginas individuales
import TiempoDeEspera from './components/pages/TiempoDeEspera'
import InternetDedicado from './components/pages/InternetDedicado'

// Estilos
import './components/DoubleHeader.css'
import './components/HeroSection.css'
import './components/PlansSection.css'
import './components/CTASection.css'
import './components/Footer.css'
import './components/pages/TiempoDeEspera.css'
import './components/pages/Empresas.css'

function App() {
  return (
    <div className="app-container">
      <DoubleHeader />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <PlansSection />
                <CTASection />
              </>
            }
          />
          <Route path="/tiempo-de-espera" element={<TiempoDeEspera />} />
          <Route path="/internet-dedicado" element={<InternetDedicado />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
