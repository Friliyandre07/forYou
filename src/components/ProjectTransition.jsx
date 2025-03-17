import { motion } from 'framer-motion';

const ProjectTransition = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black"
      />
      <div className="relative z-10 px-4 sm:px-8">{children}</div>
    </div>
  );
};

export default ProjectTransition;
