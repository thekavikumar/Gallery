import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import "./Title.css";

function Title({ signed, setSigned, setUser, user }) {
  const signout = () => {
    signOut(auth)
      .then(() => {
        setSigned(false);
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="title">
      <div className="head">
        <h1>My Gallery</h1>
        <div className="sign">
          {user && (
            <Avatar alt="" src={user.photoURL} sx={{ height: 45, width: 45 }} />
          )}
          {signed && (
            <button className="signOut" onClick={signout}>
              Sign Out
            </button>
          )}
        </div>
      </div>
      <h2>Your Pictures</h2>
      <p>Welcome to My Gallery, Hope you love using this application.</p>
    </div>
  );
}

export default Title;
