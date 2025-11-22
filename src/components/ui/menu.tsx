'use client';
import React, { useEffect, useState } from 'react';
export default function Menu() {
    const [scrollProgress, setScrollProgress] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const progress = Math.min(scrollY / viewportHeight, 1.0);
          setScrollProgress(progress);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      

    return (
        <div className="fixed top-0 left-0 w-full p-4 flex justify-center z-20" style={{backdropFilter: "blur(10px) saturate(180%)", backgroundColor: 'rgba(2, 2, 5, 0.6)' }}>
            <nav>
                <ul className="flex space-x-6">
                    <Item title="About" href="#about" />
                    <Item title="Projects" href="#projects" />
                    <Item title="Contact" href="#contact" />
                    <Item title="GitHub" href="https://github.com/Evan-2007" external />
                </ul>
            </nav>
        </div>
    );
}

function Item ({
    title,
    href,   
    external
}:{
    title: string;
    href: string;
    external?: boolean;
}) {
    return (
        <li className='group w-fit relative'>
            <a 
                href={href} 
                target={external ? "_blank" : "_self"} 
                className="text-white  transition-colors duration-200 text-lg font-medium"
            >
                {title}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
        </li>
    );

}

