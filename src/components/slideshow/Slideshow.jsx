import React, { useState, useEffect, useCallback } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoized function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          key={index}
        >
          <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          {image.caption && <div className="caption">{image.caption}</div>}
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
