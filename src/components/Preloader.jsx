import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smoothly track progress
  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  useEffect(() => {
    // Force completion after 4 seconds as a fallback
    const forceTimer = setTimeout(() => {
      if (!isLoaded) setIsLoaded(true);
    }, 4000);

    // When progress hits 100, set loaded after a small delay
    if (progress === 100) {
      const loadTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      return () => clearTimeout(loadTimer);
    }

    return () => clearTimeout(forceTimer);
  }, [progress, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });
      
      tl.to(['.preloader-progress', '.preloader-text'], {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.inOut',
      })
      .to('.preloader-col', {
        yPercent: -100,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.inOut',
      }, "-=0.2")
      .set('.preloader-wrapper', {
        display: 'none'
      });
    }
  }, [isLoaded]);

  return (
    <div className="preloader-wrapper fixed inset-0 z-[100] pointer-events-auto">
      
      {/* Vertical Columns Background */}
      <div className="absolute inset-0 flex pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="preloader-col flex-1 h-full bg-[#f2f2f2] dark:bg-[#121212] origin-top border-r border-b border-black dark:border-white/10 last:border-r-0 transition-colors duration-300" />
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-[#1a1a1a] dark:text-[#f0f0f0]">
        {/* Name Text with Water Fill Effect */}
        <div className="preloader-text flex items-center mb-8">
          <div className="relative">
            {/* Outline text */}
            <h1 
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter" 
              style={{ WebkitTextStroke: '2px rgba(0,0,0,0.1)', color: 'transparent' }}
            >
              Tasneem
            </h1>

            {/* Water filled text */}
            <h1 
              className="absolute top-0 left-0 w-full h-full text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#1a1a1a] dark:text-[#f0f0f0]"
              style={{ 
                clipPath: `polygon(0 ${100 - displayProgress}%, 100% ${100 - displayProgress}%, 100% 100%, 0% 100%)`,
                transition: 'clip-path 0.2s ease-out'
              }}
            >
              Tasneem
            </h1>
          </div>
          <div className="w-3 h-3 md:w-5 md:h-5 bg-[#f03e3e] rounded-full self-end mb-2 md:mb-3 ml-2" />
        </div>
        
        {/* Progress Information */}
        <div className="preloader-progress flex flex-col items-center gap-2">
          <div className="font-bold text-[10px] md:text-xs tracking-[0.4em] text-black/40 dark:text-white/40 uppercase">
            Loading Experience
          </div>
          <div className="font-black text-sm md:text-base tracking-[0.2em] text-[#f03e3e]">
            {Math.round(displayProgress)}%
          </div>
        </div>
      </div>

    </div>
  );
};

export default Preloader;
