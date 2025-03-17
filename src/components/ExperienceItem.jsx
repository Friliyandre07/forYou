import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceItem = ({ experience, index }) => {
  const yearRef = useRef(null);
  const roleRef = useRef(null);
  const companyRef = useRef(null);
  const descriptionRef = useRef(null);
  const technologiesRef = useRef(null);

  const yearInView = useInView(yearRef, { triggerOnce: true });
  const roleInView = useInView(roleRef, { triggerOnce: true });
  const companyInView = useInView(companyRef, { triggerOnce: true });
  const descriptionInView = useInView(descriptionRef, { triggerOnce: true });
  const technologiesInView = useInView(technologiesRef, { triggerOnce: true });

  return (
    <div className="mb-8 flex flex-col items-center space-x-4 lg:flex-row lg:justify-center">
      <motion.div
        ref={yearRef}
        className="w-full lg:w-1/4 text-center lg:text-right text-xs sm:text-sm text-neutral-400"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={yearInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <p className="mb-2">{experience.year}</p>
      </motion.div>

      <div className="w-full lg:w-3/4 max-w-full sm:max-w-2xl text-center lg:text-left">
        <motion.h6
          ref={roleRef}
          className="mb-2 text-base sm:text-lg font-semibold text-white"
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={roleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
        >
          {experience.role} -{" "}
          <motion.span
            ref={companyRef}
            className="text-xs sm:text-sm text-purple-100"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={companyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          >
            {experience.company}
          </motion.span>
        </motion.h6>

        <p className="mb-2 text-xs sm:text-sm text-neutral-400 flex-wrap pl-4 pr-4" ref={descriptionRef}>
          {experience.description.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <div className="flex flex-wrap mt-4 justify-center lg:justify-start" ref={technologiesRef}>
          {experience.technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-yellow-600 flex space-x-2"
            >
              {tech.split(" ").map((word, wordIdx) => (
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: wordIdx * 0.1,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
