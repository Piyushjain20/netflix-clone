import React from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, redirect, useNavigate } from "react-router-dom";

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
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import useUserStore from "./app/userStore";
import MyListScreen from "./screens/MyListScreen.jsx";
// import isProtected from "./components/isProtected.js";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  const { login, logout, user } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        logout();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<LoginScreen />} />
            <Route
              path="/browse"
              element={<HomeScreen />}
              loader={async () => {
                if (!user) {
                  throw redirect("/login");
                }
                return null;
              }}
            />
            <Route
              path="/browse/my-list"
              element={<MyListScreen />}
              loader={async () => {
                if (!user) {
                  throw redirect("/login");
                }
                return null;
              }}
            />
            <Route
              path="/tv"
              element={<TvScreen />}
              loader={async () => {
                if (!user) {
                  throw redirect("/login");
                }
                return null;
              }}
            />
            <Route
              path="/movies"
              element={<MovieScreen />}
              loader={async () => {
                if (!user) {
                  throw redirect("/login");
                }
                return null;
              }}
            />
            <Route
              path="/profile"
              element={<ProfileScreen />}
              loader={async () => {
                if (!user) {
                  throw redirect("/login");
                }
                return null;
              }}
            />
          </Route>
        )
      )}
    />
  );
}
