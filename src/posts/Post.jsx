import React from "react";
import "./StylePost.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__avathar">
          <Avatar style={{backgroundColor:"black",border:"1px solid" }}> {user.charAt(0).toUpperCase()}</Avatar>
          {user} .<span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
          <div className="post__footerIcons">
            <div className="post__iconsMain">
              <FavoriteBorderIcon className="postIcon"/>
              <ChatBubbleOutlineIcon className="postIcon"/>
              <TelegramIcon className="postIcon"/>
            </div>
            <div className="post__iconsSave">
            <BookmarkBorderIcon className="postIcon"/>
              </div>
          </div>
          Liked by {likes} pepole
      </div>
    </div>
  );
}

export default Post;
