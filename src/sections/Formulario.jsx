import React, { useState } from 'react'
import '../styles/Formulario.css' // Asegúrate de tener este CSS

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentario: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('Gracias por contactarnos 😄')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      comentario: '',
    })
  }

  return (
    <section className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>
          DÉJANOS TUS DATOS Y EN <br />
          BREVE NOS COMUNICAREMOS
        </h2>

        <label htmlFor="nombre">NOMBRE</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">TELÉFONO</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="comentario">COMENTARIOS</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="4"
          value={formData.comentario}
          onChange={handleChange}
        ></textarea>

        <button type="submit">ENVIAR</button>
      </form>
    </section>
  )
}

export default Formulario
