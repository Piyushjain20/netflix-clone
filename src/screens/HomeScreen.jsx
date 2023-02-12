import React from "react";
import Nav from "../components/Nav.jsx";
import Banner from "../components/Banner.jsx";
import requests from "../request";
import Row from "../components/Row.jsx";
import useModalStore from "../app/modalStore.js";
import ModalScreen from "./ModalScreen.jsx";

export default function HomeScreen() {
  const modalElement = useModalStore((state) => state.modalElement);
  return (
    <>
      {modalElement}
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <Nav />
        <Banner fetchUrl={requests.fetchPopularMovies} />
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginalsMovies} isLargeRow={true} />
        <Row title="Trending" fetchUrl={requests.fetchTrendingMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchActionMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Action" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
      </div>
    </>
  );
}
