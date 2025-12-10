import React, { Fragment, useEffect, useState } from 'react';
import { navItems } from '../data/data';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const topOffset = window.pageYOffset + rect.top;
        if (window.pageYOffset >= topOffset - 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <Fragment>
      <nav className="fixed bg-transparent top-0 w-full py-2 z-50 backdrop-blur-sm border-b border-white/20 px-3 transition-all">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-2xl text-outline font-bold">coder</div>

          <ul className="hidden md:flex space-x-8 text-white text-sm font-light uppercase">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-teal-500 cursor-pointer transition-colors ${activeSection === item.id ? 'text-teal-400' : ''}`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:anmolkr356@gmail.com?subject=Hiring%20Inquiry"
            className="ml-4 inline-block px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all"
            aria-label="Hire Me - send email"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;