import React from "react";
import Nav from "../components/Nav.jsx";
import Banner from "../components/Banner.jsx";
import requests from "../request";
import Row from "../components/Row.jsx";
export default function TvScreen() {
  return (
    <>
      <Nav />
      <Banner fetchUrl={requests.fetchPopularTV} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginalsTV} isLargeRow={true} />
      <Row title="Trending" fetchUrl={requests.fetchTrendingTV} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedTV} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyTV} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceTV} />
      <Row title="Drama" fetchUrl={requests.fetchDramaTV} />
      <Row title="Action & Adventure" fetchUrl={requests.fetchActionTV} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesTV} />
    </>
  );
}
