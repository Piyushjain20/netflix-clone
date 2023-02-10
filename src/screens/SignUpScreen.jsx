import React from "react";
import "./SignUpScreen.css";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
  const email = useRef(null);
  const password = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      email.current.value = location.state.registerEmail ? location.state.registerEmail : "";
      password.current.value = location.state.registerPassword ? location.state.registerPassword : "";
    }
  }, []);

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
    <div className="signup-screen">
      <div className="signup-background"></div>
      <div className="nav-header">
        <Link to="/" className="netflix-logo">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
        </Link>
      </div>
      <form className="signup-form" onSubmit={registerUser}>
        <h1>Sign Up</h1>
        <input ref={email} type="email" placeholder="Email" autoComplete="email" />
        <input ref={password} type="password" placeholder="Password" autoComplete="password" minLength={4} maxLength={60} />
        <button className="signup-btn">Sign Up</button>
        <p className="greyed-text small">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  );
}
