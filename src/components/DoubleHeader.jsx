import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DoubleHeader.css'

const DoubleHeader = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div>
      {/* Header superior */}
      <div className="top-header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="number">(+57) 300 9122259</div>
      </div>

      {/* Barra de navegación */}
      <div className="nav-bar">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>

        {/* Navegación escritorio */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  !active ||
                  (active !== 'dedicado' && active !== 'soporte' && active !== 'contacto')
                    ? 'activo'
                    : ''
                }
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/internet-dedicado" className={active === 'dedicado' ? 'activo' : ''}>
                EMPRESAS
              </Link>
            </li>
            <li>
              <Link to="/tiempo-de-espera" className={active === 'soporte' ? 'activo' : ''}>
                SOPORTE
              </Link>
            </li>
            <li>
              <Link to="/contacto" className={active === 'contacto' ? 'activo' : ''}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>

        {/* Navegación móvil */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={
                  !active ||
                  (active !== 'dedicado' && active !== 'soporte' && active !== 'contacto')
                    ? 'activo'
                    : ''
                }
                onClick={() => setMenuOpen(false)}
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/internet-dedicado"
                className={active === 'dedicado' ? 'activo' : ''}
                onClick={() => setMenuOpen(false)}
              >
                EMPRESAS
              </Link>
            </li>
            <li>
              <Link
                to="/tiempo-de-espera"
                className={active === 'soporte' ? 'activo' : ''}
                onClick={() => setMenuOpen(false)}
              >
                SOPORTE
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={active === 'contacto' ? 'activo' : ''}
                onClick={() => setMenuOpen(false)}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default DoubleHeader
