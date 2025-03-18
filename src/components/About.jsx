import { ABOUT_PHEI } from "../constants/data";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pheiImage from "../assets/profPict.jpg";
import ExperienceSection from "./ExperienceSection";

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [showExperience, setShowExperience] = useState(false);

    const handleShowExperience = () => {
        setShowExperience(true);
    };

    const handleCloseExperience = () => {
        setShowExperience(false);
    };

    return (
        <div className="border-b-4 border-pink-500 bg-gradient-to-b from-transparent to-black pb-4 rounded-b-2xl mb-12">
            <h1 className="my-20 text-center text-4xl text-white" data-aos="fade-up" data-aos-duration="1000">
                About <span className="text-pink-400"> Phei</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-5xl mx-auto px-6">
                <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right" data-aos-duration="1200">
                    <img
                        src={pheiImage}
                        alt="Phei"
                        className="w-[250px] sm:w-[300px] lg:w-[300px] rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 absolute left-60 bottom-24 -z-10" data-aos="fade-right" data-aos-duration="1200">
                    <img
                        src={pheiImage}
                        alt="Phei"
                        className="w-[250px] sm:w-[300px] lg:w-[300px] rounded-lg shadow-lg opacity-50"
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:p-8 text-center lg:text-left">
                    <h2 className="text-8xl font-semibold text-white" data-aos="fade-left" data-aos-duration="1500">
                        {ABOUT_PHEI[0].name}
                    </h2>
                    <h2 className="text-2xl font-semibold mb-4 text-pink-400" data-aos="fade-left" data-aos-duration="1800">
                        {ABOUT_PHEI[0].jabatan}
                    </h2>
                    <p className="font-semibold tracking-tighter text-neutral-300 text-2xl" data-aos="fade-left" data-aos-duration="2000">
                        Mission: <span className="text-yellow-400">{ABOUT_PHEI[0].mission}</span>
                    </p>

                    <div className="mt-6">
                        <button
                            data-aos="fade-up"
                            data-aos-duration="2200"
                            onClick={handleShowExperience}
                            className="px-6 py-3 text-lg font-semibold text-white border-2 border-pink-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:text-black"
                        >
                            Check Missions
                        </button>
                    </div>

                    <ExperienceSection isVisible={showExperience} onClose={handleCloseExperience} />
                </div>
            </div>
        </div>
    );
};

export default About;
