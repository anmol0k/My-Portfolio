import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">About <span className='text-outline'>Me</span></h2>

                <p className="text-gray-500 text-center mb-12">
                    Get to know more about my background and experience.
                </p>

                <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Who am I?</h3>
                        <p className='text-slate-300 mb-4'>
                            I’m Anmol Kumar, a dedicated Web Developer with strong skills in JavaScript, PHP, React, Bootstrap, and MySQL. I’ve worked on real-world projects including websites for hospitals, NGOs, and small businesses, as well as POS and payroll systems. I focus on building responsive, user-friendly, and efficient web applications that deliver smooth and meaningful user experiences.
                        </p>
                        <p className='text-slate-300'>
                           My journey started during my Computer Science diploma and grew through internships and freelance development. I enjoy creating functional interfaces, solving problems, and turning ideas into working products. I’m continuously learning new technologies and improving my skills to grow as a full-stack developer and contribute to impactful digital projects.
                        </p>
                        <div className='mt-8 grid grid-cols-2 gap-4 text-gray-300'>
                            <div>
                                <p>Name:</p>
                                <p className='font-medium text-white'>Anmol Kumar</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p className='font-medium text-white'>anmolkr356@gmail.com</p>
                            </div>
                            <div>
                                <p>Phone No:</p>
                                <p className='font-medium text-white'>8651380151</p>
                            </div>
                            <div>
                                <p>Availability:</p>
                                <p className='font-medium text-white'>Part Time/Freelancer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4 text-white'>
                            My Experience
                        </h3>

                        <div className='space-y-6'>
                            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h4 className='font-semibold text-white'>Full Stack Developer</h4>
                                        <p className='text-teal-400 text-sm'>Khabai Tech</p>
                                    </div>
                                    <span className='px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm'>May/2024-March/2025</span>
                                </div>
                            </div>

                            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h4 className='font-semibold text-white'>Backend Developer (Freelancing) </h4>
                                        <p className='text-teal-400 text-sm'>Bihar Innovation</p>
                                    </div>
                                    <span className='px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm'>Feb/2025-May/2025</span>
                                </div>
                            </div>

                            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h4 className='font-semibold text-white'>Digital Marketing & Cloud Server Handler</h4>
                                        <p className='text-teal-400 text-sm'>Arvi IT Solutions</p>
                                    </div>
                                    <span className='px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm'>Aug/2025-Oct/2025</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default About;