import React from "react";
import "./Login.css";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUser } from '../hooks/useUser';

function Login ({ darkMode, setDarkMode }) {
  const { setUser } = useUser();
  const provider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.photoURL);
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="login">
      <h3>Sign In to Upload Images</h3>
      <button type="button" className="login-with-google-btn" onClick={signIn} style={!darkMode ? { boxShadow: 'rgba(232, 70, 0, 0.5) 0px 10px 20px' } : {}}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
