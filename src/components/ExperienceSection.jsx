import React, { useState, useEffect, useRef } from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const ExperienceSection = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [startExperienceAnimation, setStartExperienceAnimation] = useState(false);
  const experienceRef = useRef(null);

  const handleScroll = () => {
    const triggerPoint = 1500;
    if (window.scrollY + window.innerHeight >= triggerPoint) {
      setTimeout(() => {
        setShowExperience(true);
      }, 1200);
    } else {
      setShowExperience(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showExperience) {
      setTimeout(() => {
        setStartExperienceAnimation(true);
      }, 500);
    }
  }, [showExperience]);

  return (
    <div
      ref={experienceRef}
      className={`fixed rounded-t-3xl inset-0 transition-transform duration-1000 ${
        showExperience ? "translate-y-0" : "translate-y-full"
      } z-20 overflow-y-auto no-scrollbar`}
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #000 50%, #eea033 150%)",
      }}
    >
      <Experience startAnimation={startExperienceAnimation} />
      <Projects />
    </div>
  );
};

export default ExperienceSection;
