import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./sliderControl.css";

const SliderControl = ({ arrowDirection, onClick }) => {
  return (
    <div className={`slider-control ${arrowDirection}`}>
      <div className="slider-control-arrow" onClick={onClick}>
        {arrowDirection === "right" ? <RightArrow /> : <LeftArrow />}
      </div>
    </div>
  );
};

export default SliderControl;
