import React, {Fragment} from "react";
import AnimatedTitles from "./utils/AnimatedTitles";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Hero = () => {
  return (
    <Fragment>
        <section id='home' className="relative min-h-screen flex items-center justify-center pt-16 pb-20">
            <div className="absolute inset-0 bg-[url('./assets/mybg5.png')] bg-center bg-cover bg-no-repeat">
            </div>
            <div className="absolute inset-0"></div>

            {/* content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-light capitalize-wide text-teal-500">
                        I'm Anmol Kumar
                    </h3>
                    <AnimatedTitles />
                    <p className="mt-4 text-gray-300 max-w-xl">
                        I create beautiful, functional website and applications with modern  technologies. Let's work together your ideas to life.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Web Design</span>
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Frontend Developer</span>
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Software Developer</span>
                    </div>
                    <div className="flex text-gray-400 gap-5 mt-8 justify-center md:justify-start">
                        <a
                          href="https://www.facebook.com/anmol.k.23/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="https://wa.me/918651380151"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp"
                          className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors"
                        >
                          <BsWhatsapp />
                        </a>

                        <a
                          href="https://www.linkedin.com/in/anmol-kumar-55b28121b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors"
                        >
                          <LiaLinkedin />
                        </a>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a href="#portfolio" className="px-6 inline-block cursor-pointer py-2 text-sm rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 transition-opacity" aria-label="View My Works">
                          View My Works
                        </a>
                        
                        <a 
                          href="/anmolkumarcv.pdf" 
                          download="Anmol_Kumar_Resume.pdf"
                          className="px-6 inline-block py-2 text-sm rounded-full bg-white/10 backdrop-blur-md font-light text-white hover:opacity-70 transition-opacity"
                          aria-label="Download Resume"
                        >
                          Download CV
                        </a>

                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
};

export default Hero;