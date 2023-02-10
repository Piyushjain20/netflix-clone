import React, { useState } from "react";
import "./LoginScreen.css";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const email = useRef(null);
  const password = useRef(null);
  const [credentials, setCredentials] = useState(null);
  const navigate = useNavigate();
  console.log(1);
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
  const handleChange = () => {
    setCredentials({ registerEmail: email.current.value, registerPassword: password.current.value });
  };
  return (
    <div className="login-screen">
      <div className="login-background"></div>
      <div className="nav-header">
        <Link to="/" className="netflix-logo">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </Link>
      </div>
      <form className="signIn-form" onSubmit={loginUser}>
        <h1>Sign In</h1>
        <input ref={email} type="email" placeholder="Email" autoComplete="email" onChange={handleChange} />
        <input ref={password} type="password" placeholder="Password" autoComplete="password" minLength={4} maxLength={60} onChange={handleChange} />
        <button className="signIn-btn">Sign In</button>
        <p>
          <span className="greyed-text">New to NetFlix? </span>
          <Link to="/signup" state={credentials}>
            <span className="signup-text">Sign up now</span>
          </Link>
        </p>
        <p className="greyed-text small">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  );
}
