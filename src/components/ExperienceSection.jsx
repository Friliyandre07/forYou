// import React, { useState, useEffect, useRef } from "react";
// import Experience from "./Experience";
// import Projects from "./Projects";

// const ExperienceSection = () => {
//   const [showExperience, setShowExperience] = useState(false);
//   const [startExperienceAnimation, setStartExperienceAnimation] = useState(false);
//   const experienceRef = useRef(null);

//   const handleScroll = () => {
//     const triggerPoint = 1500;
//     if (window.scrollY + window.innerHeight >= triggerPoint) {
//       setTimeout(() => {
//         setShowExperience(true);
//       }, 1200);
//     } else {
//       setShowExperience(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (showExperience) {
//       setTimeout(() => {
//         setStartExperienceAnimation(true);
//       }, 500);
//     }
//   }, [showExperience]);

//   return (
//     <div
//       ref={experienceRef}
//       className={`fixed rounded-t-3xl inset-0 transition-transform duration-1000 ${
//         showExperience ? "translate-y-0" : "translate-y-full"
//       } z-20 overflow-y-auto no-scrollbar`}
//       style={{
//         height: "100vh",
//         background: "linear-gradient(180deg, #000 50%, #eea033 150%)",
//       }}
//     >
//       <Experience startAnimation={startExperienceAnimation} />
//       <Projects />
//     </div>
//   );
// };

// export default ExperienceSection;
import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import Projects from "./Projects";

const ExperienceSection = ({ isVisible, onClose }) => {
  const [startExperienceAnimation, setStartExperienceAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setStartExperienceAnimation(true);
      }, 500);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed rounded-t-3xl inset-0 transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-full"
        } z-20 overflow-y-auto no-scrollbar`}
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #0B0B0D 50%, #D85A88 150%)",
      }}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="px-4 py-2 text-white border-2 border-pink-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:text-black"
        >
          Close
        </button>
      </div>

      <Experience startAnimation={startExperienceAnimation} />
      <Projects />
    </div>
  );
};

export default ExperienceSection;

