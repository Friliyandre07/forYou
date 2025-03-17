import { CONTACT } from "../constants/data";
import { motion, useAnimation } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        const yValue = window.innerWidth <= 640 ? 30 : 60;
        if (inView) {
            controls.start((i) => ({
                y: i * yValue,
                opacity: 1 / Math.pow(1.5, i),
                transition: { duration: 1, delay: i * 0.2, ease: "easeOut" },
            }));
        } else {
            controls.start((i) => ({
                y: 0,
                opacity: i === 0 ? 1 : 0,
                transition: { duration: 0.5, ease: "easeOut" },
            }));
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="border-b border-neutral-900 pb-10 pt-10 sm:pb-20 sm:pt-20 text-neutral-100 relative px-4 sm:px-0">
            <div className="relative text-center">
                {[...Array(4)].map((_, i) => (
                    <motion.h1
                        key={i}
                        custom={i}
                        initial={{ y: 0, opacity: i === 0 ? 1 : 0 }}
                        animate={controls}
                        className={`absolute inset-0 text-4xl sm:text-6xl md:text-8xl font-roboto font-bold min-[320px]:text-3xl ${
                            i === 0 ? "text-white" : "text-transparent"
                        }`}
                        style={{
                            WebkitTextStroke: i === 0 ? "0px" : "1px white",
                        }}
                    >
                        LET'S WORK TOGETHER
                    </motion.h1>
                ))}
            </div>

            <motion.h1
                className="mt-40 sm:mt-60 text-center text-3xl sm:text-5xl font-playfair text-yellow-400 -mt-10 sm:-mt-20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Get in Touch
            </motion.h1>

            <div className="text-center tracking-tight font-playfair text-base sm:text-xl">
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center my-2 sm:my-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                    <p>{CONTACT.address}</p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center my-2 sm:my-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <FaPhone className="mr-2 text-yellow-400" />
                    <p>{CONTACT.phoneNo}</p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center my-2 sm:my-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <FaEnvelope className="mr-2 text-yellow-400" />
                    <motion.a
                        href={`mailto:${CONTACT.email}`}
                        className="border-b border-yellow-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {CONTACT.email}
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
