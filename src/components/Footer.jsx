import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>CONÓCENOS</h4>
        <ul>
          <li>
            <a href="https://internext.com.co/hosting" target="_blank" rel="noopener noreferrer">
              HOSTING
            </a>
          </li>
          <li>
            <a
              href="https://internext.com.co/email-corporativo"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-MAIL CORPORATIVO
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>SERVICIOS</h4>
        <ul>
          <li>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              HOGAR
            </Link>
          </li>
          <li>
            <Link
              to="/internet-dedicado"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              EMPRESAS
            </Link>
          </li>
          <li>
            <Link
              to="/tiempo-de-espera"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              SOPORTE TÉCNICO
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              CONTÁCTENOS
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>CONTÁCTENOS</h4>
        <ul>
          <li>
            <strong>E-MAIL:</strong>
            <br />
            <a href="mailto:ventas@internext.com.co">ventas@internext.com.co</a>
          </li>
          <li>
            <strong>TELÉFONO:</strong>
            <br />
            <a href="tel:+573009123399">(+57) 300 9123399</a>
          </li>
          <li>
            <strong>HORARIO:</strong>
            <br />
            LUN-VIE 9:00AM - 5:00PM
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>SÍGUENOS EN</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 Galaxy Internet. TODOS LOS DERECHOS RESERVADOS.</p>
    </div>
  </footer>
)

export default Footer
