import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({userName , caption , imageUrl}) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt={userName}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>

      <img
        className="post_img"
        src={imageUrl}
        alt="post_image_imstagram"
      />

      <h4 className="post_text">
        {" "}
        <strong> {userName}</strong> {caption}{" "}
      </h4>
    </div>
  );
}

export default Post;
