import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/DoubleHeader.css'

const DoubleHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const isActive = (path) => (location.pathname === path ? 'activo' : '')

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.mobile-nav-content') && !e.target.closest('.hamburger')) {
        closeMenu()
      }
    }

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
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
    <header>
      <div className="top-header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo de la empresa" />
          </Link>
        </div>
        <div className="number">(+57) 300 9122259</div>
      </div>

      <div className="nav-bar">
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="/" className={isActive('/')}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/empresas" className={isActive('/empresas')}>
                EMPRESAS
              </Link>
            </li>
            <li>
              <Link to="/soporte" className={isActive('/soporte')}>
                SOPORTE
              </Link>
            </li>
            <li>
              <Link to="/contacto" className={isActive('/contacto')}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul>
              <li>
                <Link to="/" className={isActive('/')} onClick={closeMenu}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/empresas" className={isActive('/empresas')} onClick={closeMenu}>
                  EMPRESAS
                </Link>
              </li>
              <li>
                <Link to="/soporte" className={isActive('/soporte')} onClick={closeMenu}>
                  SOPORTE
                </Link>
              </li>
              <li>
                <Link to="/contacto" className={isActive('/contacto')} onClick={closeMenu}>
                  CONTACTO
                </Link>
              </li>
            </ul>
            <div className="mobile-social-icons">
              <a
                href="https://facebook.com/internextcolombia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/internextcolombia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default DoubleHeader
