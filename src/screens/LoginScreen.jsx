import React from "react";
import "./LoginScreen.css";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

export default function LoginScreen({ isSignUpPage }) {
  const email = useRef(null);
  const password = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (isSignUpPage) {
      email.current.value = location.registerEmail;
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };
  const registerUser = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };
  return (
    <div className="login-screen">
      <div className="login-background"></div>
      <div className="nav-header">
        <Link to="/" className="netflix-logo">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </Link>
      </div>
      <form className="signIn-form" onSubmit={isSignUpPage ? loginUser : registerUser}>
        <h1>{isSignUpPage ? "Sign Up" : "Sign In"}</h1>
        <input ref={email} type="email" placeholder="Email" autoComplete="email" />
        <input ref={password} type="password" placeholder="Password" autoComplete="password" minLength={4} maxLength={60} />
        <button className="signIn-btn">{isSignUpPage ? "Sign Up" : "Sign In"}</button>
        {!isSignUpPage && (
          <p>
            <span className="greyed-text">New to NetFlix?</span> <span className="signup-text">Sign up now</span>
          </p>
        )}
        <p className="greyed-text small">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  );
}
