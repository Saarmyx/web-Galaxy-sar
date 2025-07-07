import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import InternetDedicado from "./components/pages/InternetDedicado";
import TiempoDeEspera from "./components/pages/TiempoDeEspera";
import Contacto from "./components/pages/Contacto"; // 🟡 << AÑADIDO

import "@fontsource/roboto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/internet-dedicado" element={<InternetDedicado />} />
        <Route path="/tiempo-de-espera" element={<TiempoDeEspera />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
