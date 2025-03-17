import { ABOUT_TEXT } from "../constants/data";
import React, {useEffect} from 'react'
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl" data-aos="fade-up" data-aos-duration="1000">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex justify-center text-center">
                <div className="w-full lg:w-3/4 lg:p-8">
                    <p className="tracking-tighter" data-aos="fade-up" data-aos-duration="1500">{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    )
}

export default About;