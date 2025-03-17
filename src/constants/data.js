import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-5.jpg";

import certificate1 from "../assets/phei_certificate1.jpg";

import gambar1 from "../assets/adicara.jpg";
import gambar2 from "../assets/garucana.jpg";
import gambar3 from "../assets/cakrawala.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_PHEI = [
  {
    name: 'Phei In',
    mission: '1/3',
    jabatan: 'Supervisi Mr. & Ms. UMN 2025',
  }
];

export const EXPERIENCES = [
  {
    image: gambar1,
    role: "ADICARA",
    company: "Grand Opening Mr. & Ms. UMN 2025",
    description: `Grand Opening merupakan kegiatan pembuka dari seluruh rangkaian kegiatan Mr. & Ms. UMN 2025 yang sekaligus juga menjadi awal pembukaan pendaftaran bagi mahasiswa yang ingin menjadi calon kandidate Mr. & Ms. UMN 2025. ⭐️✨`,
    technologies: ["PelitaAdikara", "LeadTheLightGuardingLegacy", "MrMsUMN2025"],
    certificate: certificate1,
  },
  {
    image: gambar2,
    role: "GARUCANA",
    company: "Talent Night Mr. & Ms. UMN 2025",
    description: `Talent Night adalah saat yang paling ditunggu-tunggu!, di acara ini, para Kandidat bakal menunjukkan bakat luar biasa mereka di depan seluruh audiens yang pastinya penuh semangat!. Dari sini, para Kandidat terbaik akan terpilih untuk melanjutkan perjalanan mereka menuju panggung besar Mr. & Ms. UMN 2025 🌟.`,
    technologies: ["PelitaAdikara", "LeadTheLightGuardingLegacy", "MrMsUMN2025"],
  },
  {
    image: gambar3,
    role: "CAKRAWALA",
    company: "Awarding Night Mr. & Ms. UMN 2025",
    description: `Awarding Night adalah malam penuh kemegahan yang akan menjadi puncak dari seluruh perjalanan Mr. & Ms. UMN 2025. Ini adalah saat yang ditunggu-tunggu, di mana para Calon Finalist yang luar biasa akan dinobatkan dan menerima gelar bergengsi mereka sebagai Mr. & Ms. UMN 2025! 👑✨.`,
    technologies: ["PelitaAdikara", "LeadTheLightGuardingLegacy", "MrMsUMN2025"],
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
