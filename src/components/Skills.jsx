import React from "react";
import { skillsData } from "../data/data";
import {motion} from 'framer-motion';

const Skills = () => {
  return (
    <section id='skills' className="py-20 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
        <div className="container mx-auto">
            <h2 className="text-3xl text-gray-300 font-bold text-center mb-2">
                My <span className="text-outline">Skills</span>
            </h2>
            <p className="text-slate-300 text-center mx-auto mb-12 text-sm">A strong technical Skills that helps me build fast, responsive, and modern web experiences.</p>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    skillsData.map((item, index)=>(
                        <motion.div key={index} whileHover={{
                            rotateX: 8,
                            rotateY: -8,
                            scale: 1.05,
                            background:"transparent",
                            border: "1px solid oklch(77.7%, 0.152 181.912)"
                        }} transition={{type: "spring", stiffness: 200, damping: 15}}
                         className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
                        >
                          <h3 className="text-2xl font-semibold mb-4 text-teal-400">{item.title}</h3>
                          <div className="flex flex-wrap gap-4">
                            {
                                item.skills.map((skill, index)=>(
                                    <motion.div key={index} whileHover={{
                                        scale: 1.05,
                                        rotateY: 5,
                                        boxShadow: "0px 10px 20px rgba(0, 225, 200, 0.4)"
                                    }}
                                    transition={{type: "spring", stiffness: 200, damping: 15}}
                                    className="flex item-center gap-2 px-3 py-2 bg-black/40 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="text-sm text-gray-300">{skill.name}</span>
                                    </motion.div>
                                ))
                            }
                            </div>  
                        </motion.div>

                    ))
                }
            </div>
        </div>
    </section>
  )
};

export default Skills;