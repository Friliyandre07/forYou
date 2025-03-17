import React, { useState } from "react";
import TransitionScreen from "./components/TransitionScreen";
import MainContent from "./components/MainContent";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  const [hasTransitionEnded, setHasTransitionEnded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleTransitionEnd = () => {
    setHasTransitionEnded(true);
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased bg-black no-scrollbar">
      {!hasTransitionEnded && <TransitionScreen onTransitionEnd={handleTransitionEnd} />}
      {hasTransitionEnded && (
        <>
          <div
            className={`fixed inset-0 h-full w-full transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
            style={{
              background: "linear-gradient(180deg, #000 50%, #eea033 150%)",
            }}
          ></div>
          <div
            className={`relative z-10 container mx-auto px-8 transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}
          >
            <MainContent />
            <ExperienceSection />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
