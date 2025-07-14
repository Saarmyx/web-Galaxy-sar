import React from 'react'
import '../styles/PlanSection.css'

export default function PlansSection() {
  const plans = [
    {
      name: 'PLAN BRONCE',
      promoPrice: '$ 42.450',
      megas: '100',
      features: ['1 PUNTO DE TV DIGITAL HD'],
      regularPrice: '$84.900/MES',
    },
    {
      name: 'PLAN ORO',
      promoPrice: '$ 62.430',
      megas: '400',
      features: ['2 PUNTOS DE TV DIGITAL HD', '2 PUNTOS DE TV APP', 'WIFI 5G'],
      regularPrice: '$124.900/MES',
    },
    {
      name: 'PLAN PLATA',
      promoPrice: '$ 52.450',
      megas: '200',
      features: ['2 PUNTOS DE TV DIGITAL HD', '1 PUNTO DE TV APP'],
      regularPrice: '$104.900/MES',
    },
  ]

  return (
    <div>
      <div className="plans-header">
        <h2>PLANES ILIMITADOS</h2>
        <p>
          Todos nuestros planes son instalados utilizando
          <br />
          Fibra Óptica de alta velocidad
        </p>
      </div>
      <section className="plans-section">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-header">
              <h3>{plan.name}</h3>
            </div>
            <div className="plan-price">
              <h3>{plan.promoPrice}</h3>
              <p>El primer mes</p>
            </div>
            <div className="plan-features">
              <h4>Incluye</h4>
              <div className="features-list">
                <div className="feature-item mega-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-highlight">
                    {plan.megas} <span className="feature-unit">MEGAS</span>
                  </span>
                </div>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span className="feature-description">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="plan-regular-price">
              <h4>{plan.regularPrice}</h4>
              <p>
                VALOR A CANCELAR A PARTIR DEL
                <br />
                SEGUNDO MES
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
