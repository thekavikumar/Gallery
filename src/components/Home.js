import React, { useState } from "react";
import Title from "./Title";
import "./Home.css";
import Upload from "./Upload";
import Image from "./Image";
import Modal from "./Modal";
import Login from "./Login";
import Footer from "./Footer";
import Ffooter from "./Ffooter";
import { useUser } from '../hooks/useUser';

function Home () {
  const { signedIn } = useUser();
  const [darkMode, setDarkMode] = React.useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="home">
      <Title
        quote={
          !signedIn
            ? "You dont take photograph. You make it! Enjoy using this app"
            : "Photography is the art of making memories tangible."
        }
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {!signedIn && (
        <Login
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      {signedIn && <Upload />}
      {signedIn && <Image setSelectedImg={setSelectedImg} />}
      {signedIn && selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {signedIn && <Ffooter />}
      {!signedIn && <Footer />}
    </div>
  );
}

export default Home;
