import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { auth } from "../firebase/config";
import { Button, Container, InputGroup } from "reactstrap";
import { signOut } from "firebase/auth";
import "../index.css";
import { ThemeContext, useTheme } from "../hooks/useTheme";
import "./Title.css";
import { themes } from '../providers/ThemeProvider';

function Title ({ signed, setSigned, setUser, user, quote }) {
  const { setTheme, isDarkMode } = useTheme();
  const signout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setSigned(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
            {signed && (
              <button className="signOut" onClick={signout}>
                Sign Out
              </button>
            )}
          </div>
          <InputGroup>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  className="mode"
                  color="black"
                  onClick={() => {
                    setTheme(isDarkMode ? themes.light : themes.dark);
                  }}
                >
                  <i
                    className={
                      isDarkMode ? "fas fa-sun fa-2x" : "fas fa-moon fa-2x"
                    }
                  ></i>
                </Button>
              )}
            </ThemeContext.Consumer>
          </InputGroup>
        </div>
      </div>
      <h2>Your Pictures</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Title;
