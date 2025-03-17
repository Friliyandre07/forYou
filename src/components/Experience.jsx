import { EXPERIENCES } from "../constants/data";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";

const Experience = ({ startAnimation }) => {
  const letters = "Experience".split("");
  return (
    <div className="border-b border-neutral-800 pb-4 relative">
      <motion.div
        className="absolute w-40 h-8 sm:w-80 sm:h-12 bg-yellow-700 left-[420px] z-10 rounded-tl-lg rounded-br-3xl min-[320px]:left-28 lg:left-[420px]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={startAnimation ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-40 h-8 sm:w-80 sm:h-12 bg-red-950 left-[490px] top-3 sm:top-4 z-0 rounded-tr-3xl rounded-bl-lg rounded-br-lg min-[320px]:left-40 lg:left-[490px]"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={startAnimation ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
      ></motion.div>

      <div className="my-16 sm:my-20 text-center relative z-20">
        <div className="flex justify-center space-x-1">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-2xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={startAnimation ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              style={{
                display: "inline-block",
                transformOrigin: "center",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
