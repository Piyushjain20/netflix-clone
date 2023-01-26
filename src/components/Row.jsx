import axios from "../axios";
import React, { useEffect, useState } from "react";
import Slider from "./slider_subcomponents/slider";
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [data, setData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setData(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(data);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        <Slider movies={data} isLargeRow={isLargeRow} />
      </div>
    </div>
  );
}
