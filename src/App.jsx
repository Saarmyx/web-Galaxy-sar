import { Routes, Route } from 'react-router-dom'

import Header from './components/Navbar'
import Footer from './components/Footer'

import Inicio from './pages/Inicio'
import Empresas from './pages/Empresa'
import Soporte from './pages/Soporte'
import Contacto from './pages/Contacto'

import CtaSection from './components/CtaSection'

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
        </Routes>
      </main>
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
