import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceItem = ({ experience, index }) => {
  const roleRef = useRef(null);
  const companyRef = useRef(null);
  const descriptionRef = useRef(null);
  const technologiesRef = useRef(null);

  const roleInView = useInView(roleRef, { triggerOnce: true });
  const companyInView = useInView(companyRef, { triggerOnce: true });
  const descriptionInView = useInView(descriptionRef, { triggerOnce: true });
  const technologiesInView = useInView(technologiesRef, { triggerOnce: true });

  useEffect(() => {
    AOS.init();
  }, []);

  const [checked, setChecked] = useState(true);
  const isFaded = index !== 0;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = experience.certificate;
    link.download = "Certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`mb-16 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-10 ${
        isFaded ? "opacity-100 grayscale" : ""
      }`}
    >
      <motion.div
        className="w-full lg:w-1/3 flex justify-center lg:justify-start pl-6 lg:pl-36"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <img
          src={experience.image}
          alt={experience.role}
          className="w-[180px] sm:w-[200px] lg:w-[220px] h-[180px] sm:h-[200px] lg:h-[220px] rounded-3xl shadow-lg object-cover transition duration-500"
        />
      </motion.div>

      <div className="w-full lg:w-2/3 max-w-3xl text-center font-cinzel lg:text-left px-4">
        <motion.div
          ref={roleRef}
          className="flex items-center justify-center lg:justify-start gap-3"
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={roleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
        >
          <h6
            className={`text-xl lg:text-2xl font-bold font-cinzel-deco ${
              isFaded ? "text-neutral-500" : "text-white"
            }`}
          >
            {experience.role}
          </h6>

          <div className="relative">
            <input type="checkbox" checked={checked} readOnly className="hidden peer" />
            <div
              className="w-6 h-6 border-2 border-pink-500 bg-transparent rounded-md flex items-center justify-center cursor-pointer peer-checked:bg-black transition duration-300 ml-4"
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
        </motion.div>

        <motion.p
          ref={companyRef}
          className={`text-md lg:text-lg font-semibold mb-3 ${
            isFaded ? "text-neutral-500" : "text-pink-400"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={companyInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        >
          {experience.company}
        </motion.p>

        <p
          className={`text-sm sm:text-md leading-relaxed ${
            isFaded ? "text-neutral-500" : "text-neutral-300"
          }`}
          ref={descriptionRef}
        >
          {experience.description.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
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
              className={`mr-2 mb-2 rounded px-3 py-1 text-xs sm:text-sm font-medium ${
                isFaded ? "bg-neutral-800 text-neutral-500" : "bg-neutral-900 text-[#E5E5E5]"
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-6 py-3 text-lg font-semibold text-white border-2 border-pink-500 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-900"
          >
            Download Certificate
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
