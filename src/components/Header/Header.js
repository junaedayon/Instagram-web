import React, { useEffect, useState } from "react";
import "./Header.css";
import { auth } from "../../firebase";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SignUp from "../SignUp";
import SignIn from "../SignIn";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header({ user, signIn, signUp }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div className="header">
      <img
        className="header_img"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="instagram_logo"
      />

      <div className="modal">
        {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="login__container">
            <SignIn
              modalStyle={modalStyle}
              classes={classes}
              signIn={signIn}
              user={user}
            />
            <SignUp
              modalStyle={modalStyle}
              classes={classes}
              signUp={signUp}
              user={user}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
