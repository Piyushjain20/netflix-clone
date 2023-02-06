import React from "react";
import Nav from "../components/Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";
import Avatar from "../../assets/profileAvatar.png";
import useUserStore from "../app/userStore";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function ProfileScreen() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1 className="profileScreen__title">Edit Profile</h1>
        <img className="profileScreen__avatar" src={Avatar} alt="Profile Avatar" />
        <div className="user__info">
          <h2 className="user__email">{user.email}</h2>
          <h3 className="user__current__plan">Plans</h3>
        </div>
        <div className="user__plans">
          <PlanScreen user={user} />
          <button className="signOut__btn" onClick={() => signOut(auth)}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
