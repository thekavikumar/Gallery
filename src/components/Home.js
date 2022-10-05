import React, { useState } from "react";
import Title from "./Title";
import "./Home.css";
import Upload from "./Upload";
import Image from "./Image";
import Modal from "./Modal";
import Login from "./Login";
import Footer from "./Footer";
import { useUser } from '../hooks/useUser';

function Home () {
  const { signedIn } = useUser();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="home">
      <Title
        quote={
          !signedIn
            ? "You dont take photograph. You make it! Enjoy using this app and store your photgraphs here!"
            : "Photography is the art of making memories tangible.A picture speaks a thousand words......"
        }
      />
      {!signedIn && (
        <Login />
      )}
      {signedIn && <Upload />}
      {signedIn && <Image setSelectedImg={setSelectedImg} />}
      {signedIn && selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer fixed={!signedIn} />
    </div>
  );
}

export default Home;
