import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../context/ThemeContext';
import aboutImg from '../assets/about/about.png';
import kapkapImg from '../assets/about/kapkap_20260616220228690_sys.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();

  useGSAP(() => {
    // Initial states
    gsap.set('.about-text', { y: -100, opacity: 0 });
    gsap.set('.me-text', { y: 100, opacity: 0 });
    gsap.set('.about-line', { scaleY: 0, transformOrigin: 'top' });
    gsap.set('.me-line', { scaleY: 0, transformOrigin: 'bottom' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to('.about-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
          .to('.me-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, '<')
          .to('.about-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '-=0.8')
          .to('.me-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '<');
      }
    });

    gsap.to('.about-word', {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.about-paragraph',
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about-section" className="bg-[#f2f2f2] dark:bg-[#121212] h-screen w-screen relative flex flex-col font-inter text-[#1a1a1a] dark:text-[#f0f0f0] px-6 py-6 md:px-12 md:py-10 overflow-hidden z-[50] transition-colors duration-300">

      {/* Top Right Portrait Image — large and prominent */}
      <div className="absolute top-0 right-0 w-[55vw] md:w-[36vw] max-w-[500px] h-[40vh] md:h-[70vh] overflow-hidden z-0">
        <img
          src={aboutImg}
          alt="Tasneem Bahaa Eldeeb Portrait"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'contrast(1.08) grayscale(0.1)' }}
        />
        {/* Fade into page on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f2] dark:from-[#121212] via-transparent to-transparent pointer-events-none transition-colors duration-300" />
        {/* Fade into page on the bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f2f2f2] dark:from-[#121212] via-transparent to-transparent pointer-events-none transition-colors duration-300" />
      </div>

      {/* Main Typography */}
      <div className="flex-1 flex flex-col justify-center relative w-full h-full max-w-screen-xl mx-auto">

        <div className="relative z-50 flex flex-col h-full mt-8">

          <div className="w-full flex items-end mt-[15vh] md:mt-0">
            <h1 className="about-text text-[clamp(100px,22vh,24vw)] font-black leading-[0.75] tracking-[-0.06em] m-0 ml-[-1vw] relative">
              about
              {/* vertical line */}
              <div className="about-line absolute bottom-[74%] left-[56.5%] w-[2px] bg-black dark:bg-white/40 h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          <div className="w-full flex items-center mt-4 md:mt-6">
            <h1 className="me-text text-[clamp(100px,22vh,24vw)] font-black leading-[0.75] tracking-[-0.06em] m-0 relative ml-[-1vw] text-[#1a1a1a] dark:text-white z-10">
              me.
              <div className="me-line absolute top-[75%] left-[25.5%] md:left-[23.5%] w-[2px] bg-black dark:bg-white/40 h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-auto max-w-2xl pl-0 sm:pl-[10%] md:pl-[22%] relative z-10 pb-20 md:pb-12">

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['Full-Stack', 'React.js', 'Node.js', '.NET', 'Egypt'].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#f03e3e]/30 text-[#f03e3e] bg-[#f03e3e]/5">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-[clamp(18px,4vw,3rem)] font-black tracking-tight mb-4 md:mb-6 leading-none whitespace-nowrap text-[#1a1a1a] dark:text-white">
              nice to meet you!
            </h2>
            <p className="about-paragraph text-[10px] md:text-xs lg:text-sm font-bold leading-relaxed tracking-tight max-w-lg text-justify">
              {"I'm Tasneem Bahaa Eldeeb, a Full-Stack Developer with 2+ years of hands-on experience building responsive web applications. I specialize in frontend technologies like React.js and Next.js, and backend systems using Node.js, Express.js, and .NET. With a background in Mathematics and Computer Science, I love solving complex problems, optimizing application speed, and translating Figma designs into clean, maintainable code. Glad you're here — thank you for your support!".split(' ').map((word, index) => (
                <span key={index} className="about-word opacity-25 text-[#1a1a1a] dark:text-white transition-colors duration-300 mr-[0.25em] inline-block">
                  {word}
                </span>
              ))}
            </p>

            {/* Stats row */}
            <div className="hidden md:flex gap-8 mt-6">
              {[['2+', 'Years Exp.'], ['10+', 'Projects'], ['1st', 'Place Award']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-[#f03e3e] leading-none">{num}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-12 text-xl md:text-3xl font-black tracking-tighter shrink-0 z-20 bg-[#f2f2f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-white px-2 transition-colors duration-300">
        ~ Tasneem
      </div>

      {/* Bottom Right Decoration */}
      <img src={kapkapImg} alt="Decoration" className="absolute bottom-0 right-0 w-36 md:w-52 lg:w-64 object-contain pointer-events-none z-10" />

    </section>
  );
};

export default AboutSection;
