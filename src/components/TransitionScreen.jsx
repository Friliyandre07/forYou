import React, { useEffect, useState } from "react";

const TransitionScreen = ({ onTransitionEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showHi, setShowHi] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setShowHi(true);
    }, 1500);

    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
      onTransitionEnd();
    }, 7000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [onTransitionEnd]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-fade">
          {showHi && (
            <div className="fade-in text-white font-cinzel-deco font-light text-center text-5xl">
              Mission 01: Completed <br/>
              ADICARA
            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              background-color: transparent;
            }
          }
          body {
            background-color: black;
            margin: 0;
            overflow: hidden;
          }

          .transition-fade {
            animation: fadeOut 1s ease-out 6s forwards;
          }

          .fade-in {
            animation: fadeIn 1s ease-in;
          }
        `}
      </style>
    </>
  );
};

export default TransitionScreen;
