import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>CONOCENOS</h4>
        <ul>
          <li>
            <a href="#">Hosting</a>
          </li>
          <li>
            <a href="#">E-mail Corporativo</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SERVICIOS</h4>
        <ul>
          <li>
            <a href="#">Hogar</a>
          </li>
          <li>
            <a href="#">Empresas</a>
          </li>
          <li>
            <a href="#">Soporte Tecnico</a>
          </li>
          <li>
            <a href="#">Contactenos</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONTÁCTENOS</h4>
        <ul>
          <li>
            <strong> E-mail:</strong> <br />
            ventas@internext.com.co
          </li>
          <li>
            <strong>Teléfono: </strong>
            <br />
            (+57) 300 9123399
          </li>
          <li>
            <strong>Horario:</strong> <br />
            Lun-Vie 9:00AM - 5:00PM
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SÍGUENOS EN:</h4>
        <ul></ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Galaxy Internet. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
