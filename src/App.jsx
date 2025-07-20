import { Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Header from './components/Navbar'
import Footer from './components/Footer'

import Inicio from './pages/Inicio'
import Empresas from './pages/Empresa'
import Soporte from './pages/Soporte'
import Contacto from './pages/Contacto'
import InicioSeccion from './pages/InicioSeccion'

import CtaSection from './components/CTASection'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/InicioSeccion" element={<InicioSeccion />} />
        </Routes>
      </main>
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
