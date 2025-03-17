import { Fireworks } from 'fireworks-js';
import { useEffect, useRef } from 'react';

const FireworksEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return; // Prevent errors if ref isn't set

    const options = {
      hue: { min: 0, max: 360 },
      rocketsPoint: 50, // Adjust firework starting position
      speed: 2,
      acceleration: 1.02,
      friction: 0.98,
      gravity: 1.5,
      particles: 150, // More sparks
      trace: 3,
      explosion: 6,
      boundaries: { top: 0, bottom: window.innerHeight, left: 0, right: window.innerWidth },
      mouse: { click: false, move: false, max: 0 },
    };

    const fireworks = new Fireworks(containerRef.current, options);
    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default FireworksEffect;
