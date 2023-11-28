import React from "react";
import { Avatar, Button } from "@mui/material";
import "./TwiterBox.css"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const TwiterBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <input  type="text" placeholder="What's happening?" />
        </div>
        <div className="imageIcon_tweetButton">
          <label htmlFor="image" className="imageIcon"><AddPhotoAlternateOutlinedIcon ></AddPhotoAlternateOutlinedIcon></label>

          <input type="file" id="image" className="imageInput" />
          <Button className="tweetBox__tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TwiterBox;
