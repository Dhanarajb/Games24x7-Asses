// src/App.js
import React, { useState } from "react";
import GSTButton from "./component/GSTButton";
import GSTModalDesktop from "./component/GSTModalDesktop";
import "./App.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <GSTButton onClick={openModal} />
      <GSTModalDesktop isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
