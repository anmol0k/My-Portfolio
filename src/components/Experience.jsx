import React from 'react'
import { experiences } from '../data/data';

export const Experience = () => {
    return (
        <section id='experience' className='py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">My <span className='text-outline'>Experience</span></h2>

                <p className="text-gray-500 text-center mb-12">
                    The tools and technologies I use to bring ideas to life.
                </p>

                <div className='relative w-full mx-w-5xl mx-auto px-4 py-12'>
                    <div className='absolute left-1/2 md:left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-teal-800 transform -translate-x-1/2'></div>
                    <div className='space-y-16'>
                        {
                            experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div key={index} className={`relative flex items-center w-full ${isLeft?"md:justify-start":"md:justify-end"} justify-center`}>
                                        <div className='absolute left-1/2 md:flex hidden transform -translate-1/2 z-10'>
                                            <div className='h-10 w-10 rounded-full shadow-lg flex justify-center items-center bg-teal-600'>
                                                <span className='text-2xl text-teal-100'>{exp.logo}</span>
                                            </div>
                                        </div>

                                        <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border-teal-900 bg-teal-950/50 hover:scale-105 transition-transform duration-300
                                            ${isLeft?"md:text-right md:mr-12":"md:ml-12"} text-left
                                            `}>
                                                <h3 className='text-xl font-semibold text-gray-100'>{exp.company}</h3>
                                                <p className='text-sm text-gray-500 mb-3'>{exp.period}</p>
                                                <p className='text-sm text-gray-400 text-justify mb-4'>{exp.description}</p>

                                                <div className='flex flex-wrap gap-2 md:justify-end justify-start'>
                                                    {
                                                        exp.skills.map((skil, i) => (
                                                            <span key={i} className='px-3 py-1 bg-gray-100 rounded-md text-sm font-light'>{skil}</span>
                                                        ))
                                                    }
                                                </div>
                                        </div>

                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Experience;