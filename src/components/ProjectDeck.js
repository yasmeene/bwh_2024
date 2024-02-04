// ProjectDeck.js
import React, { useState, useEffect } from "react";

function ProjectDeck() {
  // Sample array of image URLs
  const images = [
    "path-to-your-image1.jpg",
    "path-to-your-image2.jpg",
    "path-to-your-image3.jpg",
    // Add more image URLs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, images.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section id="proj-scroll" className="project-deck">
    <div className="container text-center">
      <h2 className="main-title project-deck-title">Project Deck</h2>
      <p className="main-p project-deck-description">
        Your project deck content goes here.
      </p>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100%", display: index === currentSlide ? "block" : "none" }}
          />
        ))}
        <div className="carousel-controls">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              &#9679;
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}

export default ProjectDeck;
