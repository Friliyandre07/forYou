// src/components/Marquee.js
import { motion } from "framer-motion";

const Marquee = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1000], // Adjust this based on the width of the text
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10, // Adjust the speed of scrolling
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-900">
            <motion.div
                className="text-2xl font-bold text-white"
                variants={marqueeVariants}
                animate="animate"
            >
                {Array(10).fill("FRILIYANDRE — Full-Stack Developer ").map((text, index) => (
                    <span key={index} className="mr-8">{text}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
