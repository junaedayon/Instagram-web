import React, {useState} from "react";
import "./Header.css";
import { auth } from "../../firebase";
import { Button } from "@material-ui/core";

function Header({  }) {
  // const [open, setOpen] = useState(false);

  // const [openSignIn, setOpenSignIn] = useState(false);
  // const [user, setUser] = useState(null);


  return (
    <div className="header">
      <img
        className="header_img"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="instagram_logo"
      />

  
    </div>
  );
}

export default Header;
