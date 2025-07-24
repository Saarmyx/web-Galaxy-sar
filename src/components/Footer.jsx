import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Conócenos */}
      <div className="footer-section">
        <h4>CONÓCENOS</h4>
        <ul>
          <li>
            <a href="https://internext.com.co/hosting" target="_blank" rel="noopener noreferrer">
              Hosting
            </a>
          </li>
          <li>
            <a
              href="https://internext.com.co/email-corporativo"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-mail Corporativo
            </a>
          </li>
        </ul>
      </div>

      {/* Servicios */}
      <div className="footer-section">
        <h4>SERVICIOS</h4>
        <ul>
          <li>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Hogar
            </Link>
          </li>
          <li>
            <Link to="/empresas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Empresas
            </Link>
          </li>
          <li>
            <Link to="/soporte" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Soporte Técnico
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Contáctenos
            </Link>
          </li>
        </ul>
      </div>

      {/* Contáctenos */}
      <div className="footer-section">
        <h4>CONTÁCTENOS</h4>
        <ul>
          <li>
            <strong>E-mail:</strong>
            <br />
            <a href="mailto:ventas@internext.com.co">ventas@galaxy.com.co</a>
          </li>
          <li>
            <strong>Teléfono:</strong>
            <br />
            <a href="tel:+573009123399">(+57) 300 9123399</a>
          </li>
          <li>
            <strong>Horario:</strong>
            <br />
            Lun - Vie, 9:00 AM - 5:00 PM
          </li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="footer-section">
        <h4>SÍGUENOS EN</h4>
        <div className="social-icons">
          <a
            href="https://facebook.com/internextcolombia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com/internextcolombia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Línea inferior */}
    <div className="footer-bottom">
      <p>&copy; 2024 Galaxy Internet. TODOS LOS DERECHOS RESERVADOS.</p>
    </div>
  </footer>
)

export default Footer
