import React from 'react'
import { Link } from 'react-router-dom'
import './DoubleHeader.css'

const DoubleHeader = ({ active }) => {
  return (
    <div>
      {/* Header superior */}
      <div className="top-header">
        {/* Logo para escritorio */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Icono para móvil */}
        <div className="icono">
          <img src="/icono.png" alt="Icon" />
        </div>

        <div className="number">(+57) 300 9122259</div>
      </div>

      {/* Barra de navegación */}
      <div className="nav-bar">
        <nav>
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
                HOGAR
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
      </div>
    </div>
  )
}

export default DoubleHeader
