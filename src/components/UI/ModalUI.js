import React, { useEffect, useState } from "react";
import "./ModalUI.css";
import ImageUpload from "../ImageUploader/ImageUpload";

function ModalUI({ user }) {
  return (
    <div className="mainOk">
      {user?.displayName ? (
        <ImageUpload username={user.displayName}></ImageUpload>
      ) : (
        <div className="border">
        <h3 className="headline">Sorry you need to login to upload an image</h3>
        </div>
      )}
    </div>
  );
}

export default ModalUI;
