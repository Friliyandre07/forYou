import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "aos/dist/aos.css";
import backgroundMusic from "../assets/soundtrack.mp3";
const Hero = () => {
    const text =
        "Hiiii Pheiii, ga kerasa yaaaa rangkaian acara Mr. & Ms. UMN 2025 yang pertama sudah selesaiii nihhh EHHEHEHE CONGRATSS YAAAAA! To be honest akuu pengen banget nonton but I think this time gabisaaa, padahal akuu pengennnn bgttt liat your journey once againn setelah SOMNIAREEE, but okayy I think masih bisa di Talent NIght & Awarding Night (maybe HAHHAHAHA). Ga kerasaaa yaaa, I remember when you first announced that you've becomee supervisor, se tantrum apa KWKWK. The first time you panicked mencari-cari BPH and Koor while other panit udah dapet kabinet. Tapi sekarang acara Mr. & Ms. udah berjalan, apa pun yang terjadiii, you have to be proud of yourself yaaa. Your journey masih panjang and I hope kamu bisa berkembang jadi lebih baik lagiii, and selalu belajar dari kesalahan-kesalahan yang terjadi. Rangkaian-rangkaian selanjutnya masih beberapa bulan lagi and semoga kamu bisa dapet istirahat yang cukup yaaa, and don't forget to jaga kesehatannn!!! I would like to see you become the highest in the room di acara-acara selanjutnyaaaa hehehee.";

    const textRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    const [confettiPieces, setConfettiPieces] = useState(1500);
    const { width, height } = useWindowSize();
    const audioRef = useRef(new Audio(backgroundMusic));

    useEffect(() => {
        AOS.init();
        document.body.style.overflow = "hidden";

        const unlockAudio = () => {
            if (audioRef.current.paused) {
                audioRef.current.play().catch((error) => console.error("Music play error:", error));
            }
            document.removeEventListener("click", unlockAudio);
            document.removeEventListener("keydown", unlockAudio);
            document.removeEventListener("mousemove", unlockAudio);
        };

        document.addEventListener("click", unlockAudio);
        document.addEventListener("keydown", unlockAudio);
        document.addEventListener("mousemove", unlockAudio);

        audioRef.current.volume = 0.5;
        audioRef.current.loop = true;

        const interval = setInterval(() => {
            setConfettiPieces((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 10;
            });
        }, 200);

        return () => {
            clearInterval(interval);
            if (audioRef.current) audioRef.current.pause();
        };
    }, []);

    const enableScroll = () => {
        document.body.style.overflow = "auto";
        setCanScroll(true);
        textRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            {confettiPieces > 0 && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={confettiPieces}
                    recycle={false}
                    colors={["#D2691E", "#b5a07f", "#c0c0c0", "#FAFAD2", "#f5e6ca", "#d4af37", "#ffffff"]}
                />
            )}

            <div className="flex flex-col">
                <div className="w-full lg:w-full lg:pb-24">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="pb-4 pt-8 sm:pt-16 text-4xl sm:text-5xl lg:text-4xl font-cinzel font-light text-center tracking-tight"
                        >
                            CONGRATULATIONS FOR THE <br /> FIRST MR. & MS. UMN 2025 EVENT.
                        </motion.h1>

                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                textShadow: [
                                    "0px 0px 8px rgba(255, 223, 186, 0.8)",
                                    "0px 0px 12px rgba(255, 223, 186, 0.6)",
                                    "0px 0px 16px rgba(255, 223, 186, 0.4)",
                                    "0px 0px 12px rgba(255, 223, 186, 0.6)",
                                    "0px 0px 8px rgba(255, 223, 186, 0.8)",
                                ],
                            }}
                            transition={{ duration: 1, delay: 0.7 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-amber-50 via-purple-300 to-red-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-cinzel-deco text-transparent font-light"
                        >
                            ~ PHEI IN ~
                        </motion.span>

                        {!canScroll && (
                            <motion.div
                                className="mt-8 cursor-pointer"
                                initial={{ y: 0 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                onClick={enableScroll}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="w-full lg:w-full lg:p-8 mt-8 max-w-4xl mx-auto">
                    <div ref={textRef} className="flex flex-wrap justify-center items-center pt-12">
                        {text.split(" ").map((word, idx) => (
                            <span
                                key={idx}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                className="inline-block mr-1 text-white text-lg sm:text-xl lg:text-base font-light text-center tracking-wider leading-loose"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
