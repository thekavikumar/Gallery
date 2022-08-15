import React, { useState } from "react";
import Title from "./Title";
import "./Home.css";
import Upload from "./Upload";
import Image from "./Image";
import Modal from "./Modal";
import Login from "./Login";

function Home() {
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
      />
      {!signed && <Login setSigned={setSigned} setUser={setUser} />}
      {signed && <Upload user={user} />}
      {signed && <Image setSelectedImg={setSelectedImg} user={user} />}
      {signed && selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
