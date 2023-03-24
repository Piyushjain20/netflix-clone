import React from "react";
import useModalStore from "../app/modalStore";
import "./ModalScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalScreen({ movie }) {
  const close = useModalStore((state) => state.close);
  console.log(movie);
  const closeModal = (event) => {
    event.stopPropagation();
    if (event.target.className === "modal__background" || event.target.closest(".close__btn")) {
      close();
    }
  };
  return (
    <div className="modal__background" onClick={closeModal}>
      <div className="modal">
        <button className="close__btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div
          className="banner__image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "50% 50%",
          }}>
          <div className="banner__fadeBottom"></div>
        </div>
      </div>
    </div>
  );
}
// const modalScreenLoader = async ({params}) => {

// }
