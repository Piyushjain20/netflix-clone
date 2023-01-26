import React from "react";
import "./sliderItem.css";

const SliderItem = ({ movie, width, isLargeRow }) => {
  return (
    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
      <div className={`slider-item${isLargeRow ? " large" : ""}`} style={{ width: `${width}%` }}>
        <img className="slider-image" src={isLargeRow ? `http://image.tmdb.org/t/p/w780${movie.poster_path}` : `http://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
      </div>
    )
  );
};

export default SliderItem;
