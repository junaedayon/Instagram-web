import React, { useEffect, useState } from "react";
import "./ModalUI.css";
import ImageUpload from "../ImageUploader/ImageUpload";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { auth } from "../../firebase";

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

function ModalUI() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [openSignIn , setOpenSignIn ] =useState(false)
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);

        // if (authUser.displayName) {
        // } else {
        //   return authUser.updateProfile({
        //     displayName: userName,
        //   });
        // }
      } else {
        setUser(null);
      }
    });
  }, [user, userName]);

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: userName
        })
      })
      .catch((error) => alert(error.message));

      setOpen(false)
  };

  const signIn = (e) => {
    e.preventDefault();


    auth
    .signInWithEmailAndPassword(email , password)
    .catch ((error) => alert(error.message))

    setOpenSignIn(false)

  }

  return (
    <div className="mainOk">

{/* <div className="header">
      <img
        className="header_img"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="instagram_logo"
      />

      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className="login__container">
          <Button onClick={() => setOpenSignIn(true)}>LogIn</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )}
    </div> */}


{user?.displayName ? (
      <ImageUpload username={user.displayName}></ImageUpload>
           
      ) : (
        <h3>Sorry you need to login to upload an image</h3>
      )}

    <div className="modal">
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (

        <div className="login__container"> 

        <Button onClick={() => setOpenSignIn(true)} >LogIn</Button>
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
         
        
        </div>
      )}

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


      {/* Another Modal */}

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
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

            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>



    </div>

   

    </div>
  );
}

export default ModalUI;
