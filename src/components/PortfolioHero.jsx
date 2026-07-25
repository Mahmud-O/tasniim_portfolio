import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import flowerImg from '../assets/Flower/image-1.png';

const PortfolioHero = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut', duration: 1.5, delay: 0.5 } });

    // Expand the frame to full screen width/height by animating padding to 0
    tl.to(containerRef.current, {
      padding: 0,
    });

    // Rotate the corner flowers clockwise
    tl.to('.flower-img', {
      rotation: "+=180", // 2D clockwise spin
      scale: 1.1,
    }, "<");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#e5e0d8] dark:bg-[#151412] h-screen w-screen p-8 md:p-16 lg:p-24 flex font-inter text-[#1a1a1a] dark:text-[#f0f0f0] overflow-hidden transition-colors duration-300">
      {/* Square shape margin / Frame */}
      <div className="flex-1 border-[3px] border-[#166534] dark:border-[#388e3c] rounded-sm flex flex-col relative overflow-hidden bg-[#dadada] dark:bg-[#1a1a1a] shadow-xl transition-colors duration-300">
        
        {/* Top Left Flower */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20" />
        
        {/* Top Right Flower (Mirrored) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 scale-x-[-1] w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20" />
        
        {/* Bottom Left Flower (Flipped vertically) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 scale-y-[-1] w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20" />
        
        {/* Bottom Right Flower (Flipped both ways) */}
        <img src={flowerImg} alt="Flower decoration" className="flower-img absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180 w-48 md:w-64 lg:w-80 object-contain pointer-events-none z-20" />
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col relative p-8 md:p-16 z-10">
          <div className="flex-1 flex justify-center items-center relative">
            <h1 className="text-[20vw] md:text-[18vw] font-black tracking-[-0.05em] m-0 leading-none text-[#1d1d1d] dark:text-white lowercase select-none">
              portfolio
            </h1>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] font-cursive text-[16vw] md:text-[10vw] text-[#f03e3e] m-0 whitespace-nowrap select-none drop-shadow-md">
              Tasneem
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
