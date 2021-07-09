import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db  } from '../../firebase'
// import InstagramEmbed from 'react-instagram-embed';

function Post({postId,   userName , caption , imageUrl}) {

  const [comments , setComments] = useState ([])
  const [comment , setComment] = useState ("")


  useEffect(()=> {
    let unsubscribe ;

    if(postId) {
      unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments( snapshot.docs.map((doc) => doc.data))
          })
    }
    return () => {
      unsubscribe()
    }
  },[postId])


  const postComment = (event) => {

  }


  return (
    <div className="mainPost">

      <div className="imagePost" >




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

      <div className="post_comment">
        {comments.map((comment) => (
            <p>
              <strong>{comment.userName}</strong> {comment.text}
            </p>
          ))}
      </div>

      
<form className="comment_box">

<input 
    className="post_input"
    type="text"
    placeholder="Add a comment..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}

/>

<button
      className="post_button"
      disabled={!comment}
      type="submit"
      onClick={postComment}
  >
Post
 </button>
</form>


      </div>

  



    </div>
  );
}

export default Post;
