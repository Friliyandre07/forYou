import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants/data";
import ProjectMarquee from "./ProjectMarquee";
import Contact from "./Contact";
import StarsBackground from "./StarsBackground";

const Projects = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((img, index) => {
      if (img) {
        observer.observe(img);
        observer.observe(containerRefs.current[index]);
        observer.observe(textRefs.current[index]);
      }
    });

    return () => {
      imageRefs.current.forEach((img, index) => {
        if (img) observer.unobserve(img);
        if (containerRefs.current[index]) observer.unobserve(containerRefs.current[index]);
        if (textRefs.current[index]) observer.unobserve(textRefs.current[index]);
      });
    };
  }, []);

  return (
    <div className="relative border-b border-neutral-900 pb-20 bg-black px-4 sm:px-0">
      {/* Stars background */}
      <StarsBackground />

      <h2 className="my-16 text-center text-6xl sm:text-6xl font-playfair text-yellow-600 overflow-hidden">
        PROJECTS
        <ProjectMarquee />
      </h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
            <div
              ref={(el) => (containerRefs.current[index] = el)}
              className="w-full lg:w-1/4 flex justify-center lg:justify-end project-image-container"
            >
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-[150px] sm:w-[200px] lg:w-[250px] project-image"
              />
            </div>
            <div
              ref={(el) => (textRefs.current[index] = el)}
              className="w-full max-w-xs sm:max-w-xl lg:w-3/4 project-text"
            >
              <h6 className="mb-2 text-lg sm:text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-sm sm:text-base text-neutral-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Projects;
