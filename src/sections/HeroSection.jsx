import React from 'react'
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
    image: '/sl-2.png',
    mobileImage: '/sl-2-mobile.png',
    alt: 'Slide 3',
  },
]

const HeroImageSlider = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores estilizados */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <picture>
              <source media="(max-width: 430px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroImageSlider
