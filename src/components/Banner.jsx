import axios from "../axios";
import React, { useEffect, useState } from "react";
import BannerVideo from "../../assets/BannerVideo.mp4";
import "./Banner.css";
import requests from "../request";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  //   const [bannerLink, setBannerLink] = useState("");

  useEffect(() => {
    async function fetchBannerData() {
      const request = await axios.get(fetchUrl);
      const movieData = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
      //   const query = `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=e4ae8b78022a44ea39ee662b5ed4c6ae&language=en-US`;
      //   const videosRequest = await axios.get(query);
      //   const backDropVideos = videosRequest.data.results.filter((videoObj) => videoObj.site === "YouTube" && videoObj.type === "Trailer");
      //   console.log("https://www.youtube.com/watch?v=" + backDropVideos[0].key);
      //   setBannerLink("https://www.youtube.com/embed/" + backDropVideos[0].key);
      if (movieData?.backdrop_path) {
        setMovie(movieData);
      } else {
        fetchBannerData();
      }
    }
    fetchBannerData();
  }, []);
  //   console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header className="banner__container">
      {/* <iframe src={`${bannerLink}?vq=hd1080&autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1`} className="banner__video" frameborder="0"></iframe> */}
      <div
        className="banner__image"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "50% 50%",
        }}></div>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.original_title || movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="banner__description">{truncate(movie?.overview, 100)}</p>
        <div className="banner__buttons">
          <button className="banner__button button1">Play</button>
          <button className="banner__button button2">More Info</button>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
