import { Avatar } from "@mui/material";
import React, { useMemo } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import "../index.css";
import { useTheme } from "../hooks/useTheme";
import "./Title.css";
import { useUser } from "../hooks/useUser";
import { themes } from "../providers/ThemeProvider";
import DarkModeToggle from "react-dark-mode-toggle";
import { useMediaQueryMatch } from '../hooks/useMediaQueryMatch';

function Title ({ quote }) {
  const { setTheme, isDarkMode } = useTheme();
  const { user, setUser, signedIn } = useUser();
  const smallScreen = useMediaQueryMatch({ maxWidth: 320 });
  const userInitials = useMemo(() => {
    const parts = (user?.displayName ?? '').split(' ');
    return `${parts[0][0] ?? '?'}${parts[1]?.[0] ?? ''}`.toUpperCase();
  }, [user?.displayName]);

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
              >
                {userInitials}
              </Avatar>
            )}
            {signedIn && (
              <button className="signOut" onClick={signout}>
                Sign Out
              </button>
            )}
          </div>
          <DarkModeToggle
            className="mode"
            onChange={() => {
              setTheme(isDarkMode ? themes.light : themes.dark);
            }}
            checked={isDarkMode}
            size={smallScreen ? 65 : 80}
          />
        </div>
      </div>
      <h2>Your Pictures</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Title;
