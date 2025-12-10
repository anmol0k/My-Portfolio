import React, { useState, useEffect } from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiCanva,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
  SiMarketo,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";





export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next JS", icon: <RiNextjsFill className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "php", icon: <SiPhp className="text-blue-400" /> },
      { name: "Python", icon: <DiPython className="text-yellow-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-orange-400" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Prince Chauhan",
    position: "CEO, Khabai Tech",
    content:
      '"Anmol delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "/prince.webp",
  },
  {
    name: "Randhir Singh",
    position: "CEO & Founder, Bihar Innovation",
    content:
      '"Working with Anmol was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "/randhir.jpeg",
  },
  {
    name: "Ratan Raj",
    position: "CEO, Arvi It Solutions",
    content:
      '"Anmol technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "/ratan.png",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "Payroll Software",
    category: "Software Development",
    images: [        
      "/k1.png",
      "/k2.png",
    ],
  },
  {
    title: "Ngo Website",
    category: "Fullstack Development",
    image: "/n.png",
    link: "https://kumaredufoundation.org",
  },
  {
    title: "Online Puja Booking Platform",
    category: "Backend Development",
    image: "/m.png",
    link: "https://maabaglamukhi.guru/",
  },
  
];

export const experiences = [
  {
    id: 1,
    company: "Khabai Tech",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Fullstack Developer",
    period: "May 2024 - March 2025",
    description:
      "I have experience building responsive websites and web applications using PHP, JavaScript, React, Bootstrap, and MySQL, including projects for hospitals, NGOs, and small businesses.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Php",
      "MySQL",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    company: "Bihar Innovation",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Backend Developer",
    period: "Feb 2025 - May 2025",
    description:
      "At Bihar Innovation, I developed responsive websites and a POS system as a freelance developer, delivering simple, functional, and client-focused solutions.",
    skills: ["Php", "Bootstrap", "MySQL", "JavaScript"],
  },
  {
    id: 3,
    company: "Arvi IT Solutions",
    logo: <SiMarketo />, // new distinct logo
    title: "Digital Marketing & Cloud Server Handler",
    period: "Aug 2025 - Oct 2025",
    description:
      "Managed cloud servers, automated deployments, and led digital marketing efforts to improve uptime and increase user engagement.",
    skills: ["Cpanel", "Wordpress", "Canva", "Computer Network", "SEO"],
  },
];