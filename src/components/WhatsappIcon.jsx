import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../styles/whatsappIcon.css'

const whatsappNumber = '+573009123399'

const WhatsappIcon = () => (
  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="WhatsApp"
  >
    <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
  </a>
)

export default WhatsappIcon
