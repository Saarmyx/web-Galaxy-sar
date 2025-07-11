import React, { useState, useEffect } from 'react'

const HeroImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array de imágenes para el slider
  const slides = [
    {
      id: 1,
      image: '/sl-1.png',
      alt: 'Slide 1',
    },
    {
      id: 2,
      image: '/sl-2.png',
      alt: 'Slide 2',
    },
    {
      id: 3,
      image: '/sl-2.pngo',
      alt: 'Slide 3',
    },
  ]

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.alt} className="slide-image" />
          </div>
        ))}
      </div>

      {/* Controles del slider */}
      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroImageSlider
