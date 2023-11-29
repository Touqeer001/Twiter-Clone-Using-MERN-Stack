import "./Feed.css";
import Post from "./Post/Post";
import TwiterBox from "./TwiterBox/TwiterBox";
import React, { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        // console.log(data);
      });
  }, [posts]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 id="heading-2">Home</h2>
      </div>
      <TwiterBox></TwiterBox>
      {posts.map((p) => (
        <Post key={p._id} p={p}></Post>
      ))}
    </div>
  );
};

export default Feed;
