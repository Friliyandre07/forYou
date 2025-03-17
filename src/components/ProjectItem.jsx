import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectItem = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100 + index * 50);

  return (
    <motion.div
      ref={ref}
      className="mb-8 flex flex-col lg:flex-row lg:justify-center"
      style={{ y }}
    >
      <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
        <img
          src={project.image}
          width={200}
          height={200}
          alt={project.title}
          className="mb-6 rounded w-[150px] sm:w-[200px] lg:w-[250px]"
        />
      </div>
      <div className="w-full max-w-xs sm:max-w-xl lg:w-3/4 px-4 sm:px-0">
        <motion.h6
          className="mb-2 text-xl sm:text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {project.title}
        </motion.h6>
        <motion.p
          className="mb-4 text-sm sm:text-base text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
