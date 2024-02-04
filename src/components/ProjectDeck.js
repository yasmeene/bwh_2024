import React, { useState } from "react";

// Sample images array
const images = [
  require("./img/figma/phone1.png"),
  require("./img/figma/phone2.png"),
  require("./img/figma/phone3.png"),
  require("./img/figma/phone4.png"),
  require("./img/figma/phone5.png"),
  require("./img/figma/phone6.png"),
  require("./img/figma/phone7.png"),
  require("./img/figma/phone8.png"),
  require("./img/figma/phone9.png"),
  require("./img/figma/phone10.png"),
  // Add more image URLs as needed
];

function ProjectDeck() {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image if we reach the end
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop back to the last image if we reach the beginning
  };

  return (
    <section id="proj-scroll" className="project-deck">
      <div className="container text-center">
        <h2 className="main-title project-deck-title">Project Deck</h2>
        <p className="main-p project-deck-description">
          Your project deck content goes here.
        </p>
        {/* Carousel Content */}
        <div className="carousel">
          <img src={images[currentImageIndex]} alt="Project" />
          <div className="carousel-controls">
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDeck;
