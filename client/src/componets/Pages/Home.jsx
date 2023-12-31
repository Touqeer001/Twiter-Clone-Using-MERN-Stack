import React from "react";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebaar/Sidebar";
import Widgets from "./Widgets/Widgets";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Outlet } from "react-router-dom";

const Home = () => {
  
  const user=useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="App">
      <Sidebar handleLogout={handleLogout} user={user}></Sidebar>
      <Outlet></Outlet>

      <Widgets></Widgets>
    </div>
  );
};

export default Home;
