import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>CONOCENOS</h4>
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
      <div className="footer-section">
        <h4>SERVICIOS</h4>
        <ul>
          <li>
            <a href="/" rel="noopener noreferrer">
              Hogar
            </a>
          </li>
          <li>
            <a href="/internet-dedicado" rel="noopener noreferrer">
              Empresas
            </a>
          </li>
          <li>
            <a href="/tiempo-de-espera" rel="noopener noreferrer">
              Soporte Tecnico
            </a>
          </li>
          <li>
            <a href="/contacto" rel="noopener noreferrer">
              Contactenos
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONTÁCTENOS</h4>
        <ul>
          <li>
            <strong> E-mail:</strong> <br />
            <a href="mailto:ventas@internext.com.co">ventas@internext.com.co</a>
          </li>
          <li>
            <strong>Teléfono: </strong>
            <br />
            <a href="tel:+573009123399">(+57) 300 9123399</a>
          </li>
          <li>
            <strong>Horario:</strong> <br />
            Lun-Vie 9:00AM - 5:00PM
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SÍGUENOS EN:</h4>
        <ul>
          {/* Ejemplo de redes sociales */}
          <li>
            <a
              href="https://facebook.com/internextcolombia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/internextcolombia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Galaxy Internet. Todos los derechos reservados.</p>
    </div>
  </footer>
)

export default Footer
