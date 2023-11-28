import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "./TwiterBox.css";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import axios from "axios";

const TwiterBox = () => {
    const [post, setPost] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [isLoading, setIsLoading] = useState("");

    const handleUploadImage = (e) => {
      setIsLoading(true);
      const image = e.target.files[0];

      const formData = new FormData();
      formData.set("image", image);

      axios
        .post(
          "https://api.imgbb.com/1/upload?key=66ae816553afedddeb69cdc1f1919d81",
          formData
        )
        .then((res) => {
          setImageURL(res.data.data.display_url);
          console.log(res.data.data.display_url);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  const handleTweet = (e) => {
    e.preventDefault();
    const userPost = {
      post: post,
      photo: imageURL,
    };
    console.log(userPost);
    setPost("");
    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleTweet}>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className="imageIcon_tweetButton">
          <label htmlFor="image" className="imageIcon">
            {isLoading ? (
              <p>Uploading Image</p>
            ) : (
              <p>
                {imageURL ? (
                  "Image Uploaded"
                ) : (
                  <AddPhotoAlternateOutlinedIcon />
                )}
              </p>
            )}
         
          </label>

          <input
            type="file"
            id="image"
            className="imageInput"
            onChange={handleUploadImage}
          />
         

          <Button className="tweetBox__tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TwiterBox;
