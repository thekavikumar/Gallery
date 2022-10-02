import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { auth } from "../firebase/config";
import { Button, Container, InputGroup } from "reactstrap";
import { signOut } from "firebase/auth";
import "../index.css";
import { ThemeContext, themes } from "../hooks/theme";
import "./Title.css";
import { useUser } from '../hooks/useUser';

function Title ({ quote, darkMode, setDarkMode }) {
  const { user, setUser, signedIn } = useUser();
  const signout = () => {
    signOut(auth)
      .then(() => {
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
          <InputGroup>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  className="mode"
                  color="black"
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                >
                  <i
                    className={
                      darkMode ? "fas fa-sun fa-2x" : "fas fa-moon fa-2x"
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
