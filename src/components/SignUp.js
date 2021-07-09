import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { auth } from "../firebase";

function SignUp({ modalStyle, classes }) {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  return (
    <div className="modal">
      <div className="login__container">
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <center>
              <img
                className="header_img"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="instagram_logo"
              />
            </center>

            <Input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button type="submit" onClick={signUp}>
              Sign up
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
