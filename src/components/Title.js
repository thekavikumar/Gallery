import { Avatar } from "@mui/material";
import React from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import "../index.css";
import { useTheme } from "../hooks/useTheme";
import "./Title.css";
import { useUser } from "../hooks/useUser";
import { themes } from "../providers/ThemeProvider";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import { useEffect } from "react";

function Title({ quote }) {
  const { setTheme, isDarkMode } = useTheme();
  const { user, setUser, signedIn } = useUser();
  const [matches, setMatches] = useState();
  const signout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches);
    };
    window.matchMedia("(max-width: 320px)").addEventListener("change", handler);
  });
  return (
    <div className="title">
      <div className="head">
        <h1>My Gallery</h1>
        <div className="right">
          <div className="sign">
            {user && (
              <Avatar
                alt="profile pic"
                src={user.photoURL}
                sx={{ height: 45, width: 45 }}
              />
            )}
            {signedIn && (
              <button className="signOut" onClick={signout}>
                Sign Out
              </button>
            )}
          </div>
          {!matches && (
            <DarkModeToggle
              className="mode"
              onChange={() => {
                setTheme(isDarkMode ? themes.light : themes.dark);
              }}
              checked={isDarkMode}
              size={80}
            />
          )}
          {matches && (
            <DarkModeToggle
              className="mode"
              onChange={() => {
                setTheme(isDarkMode ? themes.light : themes.dark);
              }}
              checked={isDarkMode}
              size={65}
            />
          )}
        </div>
      </div>
      <h2>Your Pictures</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Title;
