import { useEffect, useState } from 'react'

const AnimatedTitles = () => {
    const roles = [
        { title: "Web Developer" },
        { title: "Front Developer" },
        { title: "Software Developer" },
    ];

    const [currentRoleIndex, setCurrIndex] = useState(0);
    const [currentText, setCurText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setOnTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex].title;
            if (!isDeleting) {
                if (currentText === current) {
                    setTimeout(() => setIsDeleting(true), 2000);
                    setOnTypingSpeed(500);
                } else {
                    setCurText(current.substring(0, currentText.length + 1));
                    setOnTypingSpeed(150);
                }
            } else {
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrIndex((prev) => (prev + 1) % roles.length);
                    setOnTypingSpeed(500);
                } else {
                    setCurText(current.substring(0, currentText.length - 1));
                    setOnTypingSpeed(150);
                }
            }

        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, typingSpeed, currentRoleIndex, roles]);
    return (<div className='text-center md:text-start'>
        <h1 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            <span className='text-outline pb-1'>{currentText}</span>
            <span className='inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml animate-pulse'>|</span>
        </h1>

    </div>);
};
export default AnimatedTitles