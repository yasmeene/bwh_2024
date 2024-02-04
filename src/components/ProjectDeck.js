// ProjectDeck.js
import React, { useState } from "react";

function ProjectDeck() {
const [currentSlide, setCurrentSlide] = useState(0);
const totalSlides = 4; // Assuming you have 4 slides

const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
};

const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + totalSlides - 1) % totalSlides);
};

return (
    <section className="slider-wrapper text-center">
    <button className="slide-arrow" id="slide-arrow-prev" onClick={prevSlide}>
        &#8249;
    </button>
    <div className="slides-container">
        {[...Array(totalSlides)].map((_, index) => (
        <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
            {/* Updated image source path */}
            <img src={require(`./img/figma/phone${index + 1}.png`)} alt={`Slide ${index + 1}`} />
        </div>
        ))}
    </div>
    <button className="slide-arrow" id="slide-arrow-next" onClick={nextSlide}>
        &#8250;
    </button>
    </section>
);
}

export default ProjectDeck;
