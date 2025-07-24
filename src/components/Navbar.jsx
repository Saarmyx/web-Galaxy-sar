import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, X } from 'lucide-react'
import '../styles/DoubleHeader.css'
import '../styles/LoginModal.css'

const DoubleHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const isActive = (path) => (location.pathname === path ? 'activo' : '')

  // Modal functions
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({ email: '', password: '', name: '' })
    setErrors({})
    setIsLogin(true)
    setShowPassword(false)
    setIsLoading(false)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'El nombre es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validateForm()) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      alert(isLogin ? 'Inicio de sesión exitoso!' : 'Registro exitoso!')
      console.log('Form data:', formData)
      closeModal()
    }, 1500)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.mobile-nav-content') && !e.target.closest('.hamburger')) {
        closeMenu()
      }
    }

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        if (isModalOpen) closeModal()
      }
    }

    if (menuOpen || isModalOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen, isModalOpen])

  return (
    <>
      <header>
        <div className="top-header">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo de la empresa" />
            </Link>
          </div>

          <div className="number">(+57) 300 9122259</div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menú de navegación"
            aria-expanded={menuOpen}
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div className="nav-bar">
          <nav className="desktop-nav">
            <ul>
              <li>
                <Link to="/" className={isActive('/')}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/empresas" className={isActive('/empresas')}>
                  EMPRESAS
                </Link>
              </li>
              <li>
                <Link to="/soporte" className={isActive('/soporte')}>
                  SOPORTE
                </Link>
              </li>
              <li>
                <Link to="/contacto" className={isActive('/contacto')}>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </nav>

          <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              <ul>
                <li>
                  <Link to="/" className={isActive('/')} onClick={closeMenu}>
                    INICIO
                  </Link>
                </li>
                <li>
                  <Link to="/empresas" className={isActive('/empresas')} onClick={closeMenu}>
                    EMPRESAS
                  </Link>
                </li>
                <li>
                  <Link to="/soporte" className={isActive('/soporte')} onClick={closeMenu}>
                    SOPORTE
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className={isActive('/contacto')} onClick={closeMenu}>
                    CONTACTO
                  </Link>
                </li>
              </ul>
              <div className="mobile-login">
                <button
                  onClick={() => {
                    openModal()
                    closeMenu()
                  }}
                  className="mobile-login-btn"
                >
                  Iniciar Sesión
                </button>
              </div>
              <div className="mobile-social-icons">
                <a
                  href="https://facebook.com/internextcolombia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/internextcolombia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close">
              <X size={24} />
            </button>

            <div className="login-card">
              <div className="login-header">
                <div className="login-avatar">
                  <User />
                </div>
                <h2 className="login-title">{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
                <p className="login-subtitle">
                  {isLogin ? 'Ingresa a tu cuenta' : 'Regístrate para comenzar'}
                </p>
              </div>

              <div className="login-form">
                {!isLogin && (
                  <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <div className="input-container">
                      <User className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <div className="input-container">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">Contraseña</label>
                  <div className="input-container">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-input with-toggle"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && <p className="form-error">{errors.password}</p>}
                </div>

                {isLogin && (
                  <div className="remember-container">
                    <label className="checkbox-container">
                      <input type="checkbox" className="checkbox-input" />
                      <span className="checkbox-label">Recordarme</span>
                    </label>
                    <a href="#" className="forgot-password">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                )}

                <button onClick={handleSubmit} disabled={isLoading} className="submit-button">
                  {isLoading ? (
                    <div className="loading-container">
                      <div className="loading-spinner"></div>
                      Procesando...
                    </div>
                  ) : isLogin ? (
                    'Iniciar Sesión'
                  ) : (
                    'Crear Cuenta'
                  )}
                </button>
              </div>

              <div className="divider-container">
                <div className="divider-line"></div>
                <span className="divider-text">o continúa con</span>
                <div className="divider-line"></div>
              </div>

              <div className="social-buttons">
                <button className="social-button">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continuar con Google
                </button>

                <button className="social-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                  Continuar con Apple
                </button>
              </div>

              <div className="toggle-container">
                <p className="toggle-text">
                  {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin)
                      setFormData({ email: '', password: '', name: '' })
                      setErrors({})
                    }}
                    className="toggle-button"
                  >
                    {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DoubleHeader
