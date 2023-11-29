import React from "react";
import "../Page.css";
import MainProfile from "./MainProfile/MainProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Profile = () => {
  const { user } = useAuthState(auth);
  return (
    <div className="profilePage">
      <MainProfile user={user}></MainProfile>

    </div>
  );
};

export default Profile;
