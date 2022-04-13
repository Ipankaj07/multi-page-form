import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import UserDetailsPage from "./components/UserDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/user" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
