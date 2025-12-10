import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';

export const Contact = () => {
    const form = useRef();

    useEffect(() => {
        // initialize EmailJS with public key (ensure VITE_PUBLIC_KEY is set in .env)
        if (import.meta.env.VITE_PUBLIC_KEY) {
            emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
        } else {
            console.warn('VITE_PUBLIC_KEY is not defined in .env');
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('sendEmail fired');

        if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID) {
            alert('Email service not configured. Check env variables.');
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current
        ).then(
            () => {
                alert("Message Sent Successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message.");
                console.error(error);
            }
        );
    };

    return (
        <section id='contact' className='py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
                    Get In<span className='text-outline'>  Touch</span>
                </h2>

                <p className="text-gray-500 text-center mb-12">
                    The tools and technologies I use to bring ideas to life.
                </p>

                <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20'>
                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>Contact Details</h3>
                        <div className='space-y-6'>

                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <IoLocationSharp className="text-white" />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Location</h4>
                                    <p className='text-slate-300'>Bihar, India</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <MdEmail className="text-white" />
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Email</h4>
                                    <a href="mailto:anmolkr356@gmail.com" className='text-slate-300 hover:text-teal-400 transition-colors'>
                                        anmolkr356@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20'>
                                    <a href="tel:+918651380151" className="text-white hover:text-teal-400 transition-colors">
                                        <PiPhone className="text-white" />
                                    </a>
                                </div>
                                <div>
                                    <h4 className='text-white font-semibold'>Phone</h4>
                                    <a href="tel:+918651380151" className='text-slate-300 hover:text-teal-400 transition-colors'>
                                        +91 8651380151
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className='mt-8'>
                            <h4 className='font-semibold mb-4 text-white'>Follow Me</h4>
                            <div className='flex gap-4'>
                                <a href="https://www.instagram.com/_anmol_k.23/" target="_blank" rel="noopener noreferrer" className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-colors'>
                                    <FaInstagram />
                                </a>

                                <a href="https://www.facebook.com/anmol.k.23/" target="_blank" rel="noopener noreferrer" className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-colors'>
                                    <FaFacebook />
                                </a>

                                <a href="https://www.linkedin.com/in/anmol-kumar-55b28121b/" target="_blank" rel="noopener noreferrer" className='p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-colors'>
                                    <LiaLinkedin />
                                </a>

                                <a href="https://wa.me/918651380151" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20 transition-colors">
                                    <BsWhatsapp />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* FORM */}
                    <div>
                        <h3 className='text-xl font-semibold mb-6 text-white'>Send me a message</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-4">

                            <div>
                                <label className='block mb-2 text-slate-300'>Your Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400'
                                />
                            </div>

                            <div>
                                <label className='block mb-2 text-slate-300'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400'
                                />
                            </div>

                            <div>
                                <label className='block mb-2 text-slate-300'>Subject</label>
                                <input
                                    type='text'
                                    name='title'
                                    required
                                    className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400'
                                />
                            </div>

                            <div>
                                <label className='block mb-2 text-slate-300'>Message</label>
                                <textarea
                                    name='message'
                                    required
                                    className='w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400'
                                />
                            </div>

                            <button className='px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-700 text-white'>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;