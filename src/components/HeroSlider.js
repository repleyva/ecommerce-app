import React from "react";
import HeroSliderItem from "./HeroSliderItem";

const HeroSlider = (props) => {
  const activeSlide = 0;
  return (
    <div className="hero-slider">
      {props.data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {props.control && (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item">
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__item">
            <i className="index">
              {activeSlide + 1}/{props.data.length}
            </i>
          </div>
          <div className="hero-slider__control__item">
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
