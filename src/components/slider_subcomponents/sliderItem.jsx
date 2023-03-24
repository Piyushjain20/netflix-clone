import React from "react";
import ModalScreen from "../../screens/ModalScreen";
import "./sliderItem.css";
import useModalStore from "../../app/modalStore";

const SliderItem = ({ movie, width, isLargeRow }) => {
  const open = useModalStore((state) => state.open);
  const openModal = () => {
    open(<ModalScreen movie={movie} />);
  };
  return (
    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
      <div className={`slider-item${isLargeRow ? " large" : ""}`} style={{ width: `${width}%` }} onClick={openModal}>
        <img className="slider-image" src={isLargeRow ? `http://image.tmdb.org/t/p/w780${movie.poster_path}` : `http://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
      </div>
    )
  );
};

export default SliderItem;
