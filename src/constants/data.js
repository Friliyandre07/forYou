import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Dedicate myself in building responsive, user-friendly websites and applications. (Laravel & React JS)

With a focus on front-end and back-end development, I am always interested in exploring new technologies to create efficient, scalable solutions and passionate about turning ideas into functional, high-performing website. My goal is to deliver seamless user experiences through well-crafted code and innovative design.

In addition to technical expertise, I've honed strong communication and leadership skills through various experiences. As an easy-going individual, I value collaboration and teamwork, which allows me to connect with others and guide projects smoothly. Committed to continuous improvement, I strive to drive successful outcomes in every project undertaken.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Full Stack Developer",
    company: "Mr. & Ms. UMN 2024",
    description: `Led a team in developing and maintaining web applications using Laravel. It operates using MySQL database and can handle registration for committee registration, candidate, and can handle ticket purchases.`,
    technologies: ["Laravel", "TailwindCSS", "Javascript", "MySQL"],
  },
  {
    year: "November 2023 - December 2023",
    role: "Full Stack Developer",
    company: "Rhapsodie Music Space",
    description: `Collaborating on making full stack website (Laravel Framework) for a business owner where people can book a private room or music space to learn about music.`,
    technologies: ["Laravel", "CSS", "MySQL", "Figma", "Javascript"],
  },
  {
    year: "September 2023 - September 2023",
    role: "Full Stack Developer",
    company: "To Do List Project",
    description: `A to do list project that can record tasks that are about to be done, on progress, or done. All statuses will be entered into the database and if a task is completed, it will be moved to the "Completed Tasks" table.`,
    technologies: ["PHP", "Javascript", "CSS", "MySQL"],
  },
  {
    year: "September 2024",
    role: "Front End Developer",
    company: "Website Portfolio Personal Project",
    description: `Developing a personal website portfolio`,
    technologies: ["React JS", "TailwindCSS"],
  },
];

export const PROJECTS = [
  {
    title: "Campus Committee Website",
    image: project1,
    description:
      "A fully functional website with features like registration, buying tickets, and informations of the event",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Website for a Business Owner",
    image: project2,
    description:
      "A full stack website for a business owner where people can book a private room or music space to learn about music.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Task Management App",
    image: project3,
    description:
      "A to do list project that can record tasks that are about to be done, on progress, or done.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Website Portfolio",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML"],
  },
];

export const CONTACT = {
  address: "Tangerang, Banten, Indonesia ",
  phoneNo: "+62 896 0113 6789",
  email: "friliyandre72004@gmail.com",
};
