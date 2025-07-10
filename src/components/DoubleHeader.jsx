import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './DoubleHeader.css'

const DoubleHeader = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const closeMenu = () => setMenuOpen(false)

  // Cerrar menú al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.hamburger')) {
        closeMenu()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu()
      }
    }

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

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
          {/* Overlay para cerrar el menú */}
          <div className="mobile-nav-overlay" onClick={closeMenu}></div>

          <div className="mobile-nav-content">
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
                  onClick={closeMenu}
                >
                  INICIO
                </Link>
              </li>
              <li>
                <Link
                  to="/internet-dedicado"
                  className={active === 'dedicado' ? 'activo' : ''}
                  onClick={closeMenu}
                >
                  EMPRESAS
                </Link>
              </li>
              <li>
                <Link
                  to="/tiempo-de-espera"
                  className={active === 'soporte' ? 'activo' : ''}
                  onClick={closeMenu}
                >
                  SOPORTE
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className={active === 'contacto' ? 'activo' : ''}
                  onClick={closeMenu}
                >
                  CONTACTO
                </Link>
              </li>
            </ul>

            <div className="mobile-social-icons">
              <a
                href="https://facebook.com/internextcolombia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/internextcolombia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default DoubleHeader
