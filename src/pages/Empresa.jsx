// src/components/empresas/InternetDedicado.jsx
import React from 'react'
import InternetDedicadoIntro from '../sections/InternetDedicadoIntro'
import ServiciosConfiables from '../sections/ServiciosConfiables'
import '../styles/Empresas.css'

const InternetDedicado = () => {
  console.log('Renderizando InternetDedicado')
  return (
    <>
      <InternetDedicadoIntro />
      <ServiciosConfiables />
    </>
  )
}

export default InternetDedicado
