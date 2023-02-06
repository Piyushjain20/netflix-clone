import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NetflixLogo from "../../assets/NetflixLogo.png";
import TvPhoto from "../../assets/tv.png";
import tvVideo from "../../assets/tvVideo.mp4";
import { useRef } from "react";
import { useState } from "react";

export default function LandingPage() {
  const email = useRef(null);
  const [registerEmail, setRegisterEmail] = useState("");
  const handleChange = () => {
    setRegisterEmail(email.current.value);
  };
  return (
    <div className="landing-page">
      <div className="section hero">
        <div className="hero-background"></div>
        <div className="nav-header">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
          <Link to="/login">
            <button className="signIn-btn">Sign In</button>
          </Link>
        </div>
        <div className="hero-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="hero-form">
            <input ref={email} type="email" placeholder="Email address" required autoComplete="email" onChange={handleChange} />
            <Link to="/signup" state={{ registerEmail: registerEmail }}>
              <button>Get Started</button>
            </Link>
          </form>
        </div>
      </div>
      <div className="section">
        <div className="section-innerContainer">
          <h1>Enjoy on your TV.</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          <div className="combined-tv-video">
            <img src={TvPhoto} />
            <div className="tv-video">
              <video src={tvVideo} autoPlay={true} muted={true} playsInline={true} loop={true}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
