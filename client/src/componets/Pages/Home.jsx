import React from "react";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebaar/Sidebar";
import Widgets from "./Widgets/Widgets";

const Home = () => {
  return (
    <>
      <Sidebar></Sidebar>

      <Feed></Feed>
      <Widgets></Widgets>
    </>
  );
};

export default Home;
