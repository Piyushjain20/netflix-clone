import React from "react";
import useModalStore from "../app/modalStore";
import "./ModalScreen.css";

export default function ModalScreen({ movie }) {
  const close = useModalStore((state) => state.close);
  const closeModal = (event) => {
    if (event.target.className === "modal__background" || event.target.className === "close__btn") {
      close();
    }
  };
  return (
    <div className="modal__background" onClick={closeModal}>
      <div className="modal">
        <div className="close__btn" onClick={closeModal}>
          X
        </div>
        <div
          className="banner__image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "50% 50%",
          }}></div>
      </div>
    </div>
  );
}
// const modalScreenLoader = async ({params}) => {

// }
