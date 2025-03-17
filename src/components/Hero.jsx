import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const text =
        "Hi Phei, ga kerasa ya rangkaian acara Mr. & Ms. UMN 2025 yang pertama sudah selesai. I remember when you first announced that you've become supervisor HAHAHHAHAHA, tantrum. The first time you panicked mencari-cari BPH and Koor while other panit udah dapet kabinet. Now that acara Mr. & Ms. udah berjalan, apa pun yang terjadi, you have to be proud of yourself ya. Your journey masih panjang and I hope kamu bisa berkembang jadi lebih baik lagi, and selalu belajar dari kesalahan-kesalahan yang terjadi. Rangkaian-rangkaian selanjutnya masih beberapa bulan lagi and semoga kamu bisa dapet istirahat yang cukup yaa, and don't forget to jaga kesehatan!!!";

    const textRef = useRef(null);
    const isInView = useInView(textRef, { triggerOnce: true, margin: "-50px" });

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col">
                <div className="w-full lg:w-full lg:pb-24">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="pb-4 pt-8 sm:pt-16 text-4xl sm:text-5xl lg:text-4xl font-cinzel font-light text-center tracking-tight"
                        >
                            CONGRATULATIONS ON THE <br /> FIRST MR. & MS. UMN 2025 EVENT.
                        </motion.h1>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="bg-gradient-to-r from-amber-50 via-yellow-100 to-red-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-cinzel-deco text-transparent font-bold"
                        >
                            ~ PHEI IN ~
                        </motion.span>
                    </div>
                </div>

                {/* Centered Text Animation */}
                <div className="w-full lg:w-full lg:p-8 mt-8 max-w-4xl mx-auto">
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-wrap justify-center items-center pt-12"
                    >
                        {text.split(" ").map((word, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, delay: 1.5 + idx * 0.05 }}
                                className="inline-block mr-1 text-white text-lg sm:text-xl lg:text-lg font-light text-center tracking-wider leading-relaxed"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
