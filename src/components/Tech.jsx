import { RiReactjsLine } from "react-icons/ri";
import React, { useEffect } from 'react'
import { SiLaravel } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';


const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Tech = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div
                    variants={iconVar(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p4"
                    data-aos="fade-right" data-aos-duration="2000">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div
                    data-aos="fade-right" data-aos-duration="1000">
                    <SiLaravel className="text-7xl text-orange-600" />
                </div>
                <div
                    data-aos="fade-right" data-aos-duration="500">
                    <GrMysql className="text-7xl text-blue-900" />
                </div>
                <div
                    data-aos="zoom-in-up" data-aos-duration="1000">
                    <SiPython className="text-7xl text-red-700" />
                </div>
                <div
                    data-aos="fade-left" data-aos-duration="500">
                    <SiCplusplus className="text-7xl text-blue-600" />
                </div>
                <div
                    data-aos="fade-left" data-aos-duration="1000">
                    <SiJavascript className="text-7xl text-yellow-400" />
                </div>
                <div
                    data-aos="fade-left" data-aos-duration="2000">
                    <SiPhp className="text-7xl text-blue-400" />
                </div>
            </div>
        </div>
    )
}

export default Tech