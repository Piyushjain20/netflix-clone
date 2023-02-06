import React from "react";
import "./LoginScreen.css";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LoginScreen() {
  const email = useRef(null);
  const password = useRef(null);
  //   Location Hook provided by react router to get state data from previous route
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUpPage, setIsSignUpPage] = useState(location.pathname == "/signup" ? true : false);
  useEffect(() => {
    setIsSignUpPage(location.pathname == "/signup" ? true : false);
  }, [location.pathname]);
  console.log(1);
  useEffect(() => {
    if (isSignUpPage && location.state) {
      email.current.value = location.state.registerEmail ? location.state.registerEmail : "";
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((authUser) => {
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((authUser) => {
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login-screen">
      <div className="login-background"></div>
      <div className="nav-header">
        <Link to="/" className="netflix-logo">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </Link>
      </div>
      <form className="signIn-form" onSubmit={isSignUpPage ? registerUser : loginUser}>
        <h1>{isSignUpPage ? "Sign Up" : "Sign In"}</h1>
        <input ref={email} type="email" placeholder="Email" autoComplete="email" />
        <input ref={password} type="password" placeholder="Password" autoComplete="password" minLength={4} maxLength={60} />
        <button className="signIn-btn">{isSignUpPage ? "Sign Up" : "Sign In"}</button>
        {!isSignUpPage && (
          <p>
            <span className="greyed-text">New to NetFlix? </span>
            <Link to="/signup">
              <span className="signup-text">Sign up now</span>
            </Link>
          </p>
        )}
        <p className="greyed-text small">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  );
}
