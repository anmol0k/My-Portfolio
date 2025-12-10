import React from 'react'
import { testimonials } from '../data/data';
import { FaRegStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
const Testimonials = () => {
    return (
        <section id='testimonials' className='py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">My <span className='text-outline'>Testimonials</span></h2>

                <p className="text-gray-500 text-center mb-12">
                    The tools and technologies I use to bring ideas to life.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        testimonials.map((item, index) => (
                          
                            <div key={index} className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10'>

                                <div className='items-center object-cover mb-4'>
                                    <div className='h-12 w-12 rounded-full overflow-hidden mr-4 mb-4'>
                                        <img 
                                        src={item.image} 
                                        alt=''
                                        className='w-full h-full object-cover' />
                                    </div>
                                    <div >
                                        <h4 className='font-semibold text-white'>{item.name}</h4>
                                        <p className='text-teal-400 text-sm'>{item.position}</p>
                                    </div>
                                    <p className='text-slate-300 text-sm py-2'>{item.content}</p>
                                    <div className='flex gap-1 mt-4'>
                                    {Array.from({ length:5 }).map((_, i) => (
                                        <IoIosStar key={i} className='text-white' />
                                    ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;