import { HERO_CONTENT } from "../constants/data";
import profPict from "../assets/profPict.jpg";
import { motion } from "framer-motion";
import cvFile from "../assets/CV_Friliyandre Yap.pdf";
import Marquee from "./Marquee";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <Marquee />
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="pb-4 pt-8 sm:pt-16 text-4xl sm:text-5xl lg:text-7xl font-roboto font-bold tracking-tight"
                        >
                            FRILIYANDRE
                        </motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="bg-gradient-to-r from-amber-50 via-yellow-100 to-red-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent font-bold"
                        >
                            Full-Stack Developer
                        </motion.span>

                        <a
                            href={cvFile}
                            download="CV_Friliyandre.pdf"
                            className="relative inline-block mt-4 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gray-950 text-white font-bold rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-600 transition duration-300"
                        >
                            <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 animate-spin-border"></span>
                            <span className="relative">Download CV</span>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex justify-center relative z-10">
                        <img className="h-[250px] sm:h-[400px] lg:h-[500px] rounded-xl" src={profPict} alt="profile picture" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-[48%] sm:mt-20 mt-10 sm:ml-20 ml-10 lg:ml-32 min-[320px]:ml-28 min-[320px]:mb-48">
                        <img className="h-[250px] sm:h-[400px] lg:h-[500px] rounded-xl opacity-30" src={profPict} alt="profile picture" />
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes border-spin {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 200% 50%;
                    }
                }
                .animate-spin-border {
                    background-size: 200% 200%;
                    animation: border-spin 3s linear infinite;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                }
            `}</style>
        </div>
    );
};

export default Hero;
