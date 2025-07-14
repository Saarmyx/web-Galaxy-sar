import React, { useState, useEffect } from 'react'
import '../styles/HeroSection.css'

const slides = [
  {
    id: 1,
    image: '/sl-1.png',
    mobileImage: '/sl-1-mobile.png',
    alt: 'Slide 1',
  },
  {
    id: 2,
    image: '/sl-2.png',
    mobileImage: '/sl-2-mobile.png',
    alt: 'Slide 2',
  },
  {
    id: 3,
    image: '/sl-3.png',
    mobileImage: '/sl-3-mobile.png',
    alt: 'Slide 3',
  },
]

const HeroImageSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-carousel">
      <div className="hero-carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`hero-slide ${index === current ? 'active' : ''}`}>
            <picture>
              <source media="(max-width: 430px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroImageSlider
