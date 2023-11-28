import React from "react";
import "./Feed.css";
import TwiterBox from "./TwiterBox/TwiterBox";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 id="heading-2">Home</h2>
      </div>
      <TwiterBox></TwiterBox>
    </div>
  );
};

export default Feed;
