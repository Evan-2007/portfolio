'use client';
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Background = () => {
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


  const baseLightness = 15;
  const dynamicLightness = baseLightness + (scrollProgress * 50); 
  

  const startColor = `rgb(${dynamicLightness + 30}, ${dynamicLightness}, ${dynamicLightness + 60})`;
  
  const endColor = 'rgb(2, 2, 5)';

  const spread = 30 + (scrollProgress * 40);

  const backgroundStyle = {
    background: `radial-gradient(
      circle at 50% 100%, 
      ${startColor} 0%, 
      ${endColor} ${spread}%
    )`,
    transition: 'background 0.1s linear', 
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      <div 
        className="absolute inset-0 w-full h-full"
        style={backgroundStyle}
      />
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
       >
        <span className="text-xs uppercase tracking-widest">My Projects</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
      
      {/* <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      /> */}
    </div>
  );
};