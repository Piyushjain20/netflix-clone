import React from "react";
import NetflixLogo from "../../assets/NetflixLogo.png";
import Avatar from "../../assets/profileAvatar.png";
import "./Nav.css";
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [NavBlack, setNavBlack] = useState(false);
  const navigate = useNavigate();

  function changeNavbar() {
    if (window.scrollY > 20) {
      setNavBlack(true);
    } else {
      setNavBlack(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div className={`nav${NavBlack ? " nav__black" : ""}`}>
      <div className="nav__contents">
        <Link to="/browse" className="logo__link">
          <img src={NetflixLogo} alt="Netflix Logo" className="nav__logo" />
        </Link>
        <ul className="nav__links__container">
          <NavLink to="/browse" className="nav__link">
            <li>Home</li>
          </NavLink>
          <NavLink to="/tv" className="nav__link">
            <li>TV Shows</li>
          </NavLink>
          <NavLink to="/movies" className="nav__link">
            <li>Movies</li>
          </NavLink>
          <NavLink to="/browse/my-list" className="nav__link">
            <li>My List</li>
          </NavLink>
        </ul>
        <img src={Avatar} alt="Profile Avatar" className="nav__avatar" onClick={() => navigate("/profile")} />
      </div>
    </div>
  );
}
