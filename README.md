# 🌐 Proyecto Galaxy Internet - Web Corporativa

**Galaxy Internet** es una aplicación web desarrollada con **React + Vite**, diseñada para ofrecer una experiencia rápida, moderna y accesible a clientes residenciales y empresariales. Esta aplicación presenta información clave sobre servicios de conectividad, soporte técnico y contacto directo, con una arquitectura modular y escalable.

---

## 🚀 Tecnologías Principales

- ⚛️ **React 18** – Librería para la interfaz de usuario.
- ⚡ **Vite** – Bundler ultrarrápido con HMR nativo.
- 🎨 **CSS personalizado / Tailwind (si aplica)** – Estilos responsive.
- 🔍 **ESLint** – Linting de calidad de código.
- 📁 Estructura basada en componentes reutilizables y páginas desacopladas.

---

## 📦 Instalación

```bash
git clone https://github.com/Saarmyx/web-Galaxy-sar.git
cd web-Galaxy-sar
npm install
```

## 🧪 Desarrollo local

Inicia el entorno de desarrollo con Hot Reloading:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173.

## 📁 Estructura del Proyecto

web-Galaxy/
│
├── public/ # Archivos públicos (favicon, index.html, etc.)
├── src/ # Código fuente
│ ├── assets/ # Imágenes, íconos y recursos estáticos
│ ├── components/ # Componentes reutilizables
│ │ ├── layout/ # Header, Footer, CTA, etc.
│ │ └── empresas/ # Secciones específicas para "Empresas"
│ ├── pages/ # Vistas principales (Inicio, Contacto, Soporte, etc.)
│ ├── hooks/ # Custom React Hooks
│ ├── services/ # Lógica de negocio y peticiones HTTP (axios, fetch, etc.)
│ ├── utils/ # Funciones auxiliares y helpers
│ ├── App.jsx # Componente raíz (estructura general + rutas)
│ └── index.css # Estilos globales
│
├── .eslintrc.cjs # Reglas de calidad de código
├── vite.config.js # Configuración de Vite
└── package.json # Scripts, dependencias y metainformación

## 🔗 Navegación

La app utiliza react-router-dom para enrutamiento SPA. Rutas disponibles:

/ – Página de Inicio

/empresas – Internet Dedicado (empresarial)

/soporte – Estado del servicio y asistencia

/contacto – Formulario de contacto y CTA

## 🧰 Linting y Mejores Prácticas

Este proyecto utiliza ESLint para mantener un código limpio:

```bash
npm run lint
```

Se recomienda extenderlo con TypeScript y typescript-eslint en entornos de producción. Revisa la plantilla oficial TS + React.

### 📡 Plugins y Rendimiento

Este proyecto está optimizado para rendimiento con los siguientes plugins oficiales:

@vitejs/plugin-react – Fast Refresh con Babel.

@vitejs/plugin-react-swc – Alternativa rápida basada en SWC.

### 🧠 Siguientes pasos sugeridos

Migrar a TypeScript para mayor seguridad.

Integrar CMS headless (ej. Sanity, Strapi) si se requiere contenido dinámico.

Agregar testing (React Testing Library + Jest).

Implementar SSR o SSG si se busca SEO avanzado (Next.js o Astro como posibles migraciones).

### 🛰️ Créditos

Desarrollado por @Saarmyx como parte del ecosistema Galaxy Internet.

###📝 Licencia
Este proyecto es de código cerrado. Todos los derechos reservados © Galaxy Internet 2024.
