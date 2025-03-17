import React from "react";

const StarsBackground = () => {
  const stars = Array.from({ length: 150 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
