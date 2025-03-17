// src/components/MainContent.jsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Tech from "./Tech";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
    </>
  );
};

export default MainContent;
