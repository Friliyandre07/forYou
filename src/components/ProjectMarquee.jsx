import { motion } from "framer-motion";

const ProjectMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2000], // Adjust based on the width of the text
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Adjust speed as needed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="whitespace-nowrap">
      <motion.div
        className="text-5xl sm:text-7xl md:text-9xl font-playfair relative -top-8 sm:-top-16 inline-block"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px white",
          textStroke: "1px white",
        }}
        variants={marqueeVariants}
        animate="animate"
      >
        {Array(10)
          .fill("PROJECTS")
          .map((text, index) => (
            <span key={index} className="mr-4 sm:mr-8">
              {text}
            </span>
          ))}
      </motion.div>
    </div>
  );
};

export default ProjectMarquee;
