import React, { useState } from "react";
import Title from "./Title";
import "./Home.css";
import Upload from "./Upload";
import Image from "./Image";
import Modal from "./Modal";
import Login from "./Login";

function Home() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="home">
      <Title
        signed={signed}
        setSigned={setSigned}
        setUser={setUser}
        user={user}
        quote={!signed? "You dont take photograph. You make it! Enjoy using this app" :"Photography is the art of making memories tangible."}
        darkMode ={darkMode}
        setDarkMode ={setDarkMode}
      />
      {!signed && <Login setSigned={setSigned} setUser={setUser}  darkMode ={darkMode} setDarkMode ={setDarkMode}/>}
      {signed && <Upload user={user} />}
      {signed && <Image setSelectedImg={setSelectedImg} user={user} />}
      {signed && selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
