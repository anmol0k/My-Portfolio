import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-4 px-6 border-t border-teal-900 bg-gradient-to-r from-[#01191d] to-[#022c2b]'>
        <div className='container mx-auto text-center'>
            <p className='text-white text-sm'>@{currentYear} All Rights Reserved</p>
        </div>
    </footer>
  )
}
export default Footer;