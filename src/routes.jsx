import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Empresa from './pages/Empresa'
import Soporte from './pages/Soporte'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="empresas" element={<Empresa />} />
        <Route path="soporte" element={<Soporte />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRoutes
