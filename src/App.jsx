import React from "react";
import "./App.css";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Netflix Fonts
import "../assets/fonts/NetflixSans-Bold.woff2";
import "../assets/fonts/NetflixSans-Light.woff2";
import "../assets/fonts/NetflixSans-Medium.woff2";
import "../assets/fonts/NetflixSans-Regular.woff2";
import HomeScreen from "./screens/HomeScreen";
import TvScreen from "./screens/TvScreen";
import MovieScreen from "./screens/MovieScreen";
import LandingPage from "./screens/LandingPage";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <RouterProvider router={router} />;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<h1>Error Page</h1>}>
      <Route index element={<LandingPage />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/signup" element={<LoginScreen isSignUpPage={true} />}></Route>
      <Route path="/browse" element={<HomeScreen />}></Route>
      <Route path="/tv" element={<TvScreen />}></Route>
      <Route path="/movies" element={<MovieScreen />}></Route>
    </Route>
  )
);
