// ProjectDeck.js
import React, { useState, useEffect } from "react";

function ProjectDeck() {
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

  return (
    <section class="slider-wrapper" className="text-center">
        <button class="slide-arrow" id="slide-arrow-prev">
            &#8249;
        </button>
        <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
        </button>
        <ul class="slides-container" id="slides-container">
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
        </ul>
    </section>
);
}

export default ProjectDeck;
