import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from './providers/UserProvider';

function App () {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
