import React from "react";

const PlanCard = ({ title, firstMonth, speed, features, monthly }) => (
  <div className="plan-card">
    <div className="plan-header">{title}</div>
    <div className="plan-price">$ {firstMonth}</div>
    <div className="plan-period">El primer mes</div>

    <div className="plan-features">
      <h4>Incluye</h4>
      <div className="plan-speed">
        {speed} <span>MEGAS</span>
      </div>
      <div className="plan-details">
        {features.map((f, i) => (
          <div className="plan-detail-item" key={i}>
            <div className="check-icon"></div>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="plan-bottom">
      <div className="plan-monthly">${monthly}/mes</div>
      <div className="plan-disclaimer">
        VALOR A CANCELAR A PARTIR DEL
        <br />
        SEGUNDO MES
      </div>
    </div>
  </div>
);

const PlansSection = () => (
  <section className="plans-section">
    <div className="plans-content">
      <h2 className="plans-title">Planes Ilimitados</h2>
      <p className="plans-subtitle">
        Todos nuestros planes son instalados utilizando
        <br />
        Fibra Óptica de alta velocidad
      </p>

      <div className="plans-grid">
        <PlanCard
          title="PLAN BRONCE"
          firstMonth="42.450"
          speed="100"
          monthly="84.900"
          features={["1 PUNTO DE TV DIGITAL HD"]}
        />
        <PlanCard
          title="PLAN ORO"
          firstMonth="62.430"
          speed="400"
          monthly="124.900"
          features={[
            "2 PUNTOS DE TV DIGITAL HD",
            "2 PUNTOS DE TV APP",
            "WIFI 5G",
          ]}
        />
        <PlanCard
          title="PLAN PLATA"
          firstMonth="52.450"
          speed="200"
          monthly="104.900"
          features={["2 PUNTOS DE TV DIGITAL HD", "1 PUNTO DE TV APP"]}
        />
      </div>
    </div>
  </section>
);

export default PlansSection;
