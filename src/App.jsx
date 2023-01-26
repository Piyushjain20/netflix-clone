import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Banner from "./components/Banner.jsx";
import requests from "./request";
import Row from "./components/Row.jsx";

import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Netflix Fonts
import "../assets/fonts/NetflixSans-Bold.woff2";
import "../assets/fonts/NetflixSans-Light.woff2";
import "../assets/fonts/NetflixSans-Medium.woff2";
import "../assets/fonts/NetflixSans-Regular.woff2";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <>
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
    </> */
}
