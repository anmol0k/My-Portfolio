import React, { useState } from 'react'
import { portfolioItems } from '../data/data';

export const Portfolio = () => {

    // ---- NEW STATES ----
    const ITEMS_PER_PAGE = 6;
    const [showMore, setShowMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Image zoom modal
    const [previewImage, setPreviewImage] = useState(null);

    // Slider index for each card
    const [slideIndex, setSlideIndex] = useState({});

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = currentPage * ITEMS_PER_PAGE;

    const visibleItems = showMore
        ? portfolioItems.slice(start, end)
        : portfolioItems.slice(0, 3);

    const totalPages = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

    const nextSlide = (i, total) => {
        setSlideIndex(prev => ({
            ...prev,
            [i]: prev[i] === total - 1 ? 0 : (prev[i] || 0) + 1
        }));
    };

    const prevSlide = (i, total) => {
        setSlideIndex(prev => ({
            ...prev,
            [i]: prev[i] === 0 ? total - 1 : (prev[i] || 0) - 1
        }));
    };

    return (
        <section id='portfolio' className='py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
                    My <span className='text-outline'>Portfolio</span>
                </h2>

                <p className="text-gray-500 text-center mb-12">
                    The tools and technologies I use to bring ideas to life.
                </p>


                {/* --- PROJECT GRID --- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {visibleItems.map((item, index) => {
                        const hasSlider = item.images && item.images.length > 1;
                        const currentSlide = slideIndex[index] || 0;

                        return (
                            <div
                                key={index}
                                className='bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform'
                            >

                                {/* --- IMAGE SECTION (with slider support) --- */}
                                <div className='h-48 overflow-hidden relative group'>

                                    {hasSlider ? (
                                        <>
                                            {/* Slide Images */}
                                            <img
                                                src={item.images[currentSlide]}
                                                className='w-full h-full object-cover transition hover:scale-105 cursor-pointer'
                                                onClick={() => setPreviewImage(item.images[currentSlide])}
                                                alt=''
                                            />

                                            {/* Left Button */}
                                            <button
                                                onClick={() => prevSlide(index, item.images.length)}
                                                className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition'
                                            >
                                                ‹
                                            </button>

                                            {/* Right Button */}
                                            <button
                                                onClick={() => nextSlide(index, item.images.length)}
                                                className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition'
                                            >
                                                ›
                                            </button>
                                        </>
                                    ) : (
                                        <img
                                            src={item.image}
                                            className='w-full h-full object-cover transition hover:scale-105 cursor-pointer'
                                            onClick={() => setPreviewImage(item.image)}
                                            alt=''
                                        />
                                    )}
                                </div>


                                {/* --- TITLE + CATEGORY --- */}
                                <div className='p-5'>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        className='font-semibold text-lg text-white hover:text-teal-300 transition'
                                    >
                                        {item.title}
                                    </a>

                                    <p className='text-slate-400 mt-2'>{item.category}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>



                {/* --- VIEW MORE BUTTON --- */}
                {!showMore && portfolioItems.length > 3 && (
                    <button
                        onClick={() => setShowMore(true)}
                        className='mt-10 px-6 py-2 mx-auto block text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg transition'
                    >
                        View More
                    </button>
                )}


                {/* --- PAGINATION --- */}
                {showMore && totalPages > 1 && (
                    <div className='flex justify-center gap-3 mt-10'>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded-lg text-sm transition 
                                    ${currentPage === i + 1
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}


                {/* --- IMAGE ZOOM MODAL --- */}
                {previewImage && (
                    <div
                        className='fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-[999]'
                        onClick={() => setPreviewImage(null)}
                    >
                        <img
                            src={previewImage}
                            className='max-w-[90%] max-h-[90%] rounded-xl shadow-xl'
                            alt='Preview'
                        />
                    </div>
                )}

            </div>
        </section>
    )
}

export default Portfolio;
