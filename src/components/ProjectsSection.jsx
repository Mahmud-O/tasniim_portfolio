import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../context/ThemeContext';
// import designImg1 from '../assets/service/left.png';
// import designImg2 from '../assets/service/right.png';
// import designImg3 from '../assets/about/about.png';

import project1Img from '../assets/project/mailStock.png';
import project2Img from '../assets/project/newsapp.png';
import project3Img from '../assets/project/studentbazar.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'Milstock',
    category: 'Inventory Management System · MERN Stack',
    description: 'A full-stack inventory management system supporting 1,000+ products, featuring a responsive React dashboard with real-time stock tracking and supplier management, optimized MongoDB queries, and secure RBAC.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC'],
    year: '2026',
    color: '#f03e3e',
    img: project1Img,
    githubLink: 'https://github.com/Tasneem60',
    LiveDemo:"https://milstock-b4yo.vercel.app/"
  },
  {
    id: '02',
    title: 'News App Platform',
    category: 'News',
    description: 'A responsive news app that delivers the latest headlines across multiple categories, with real-time article updates, searchable content, and a clean reading experience built for fast browsing.',
    tags: ['React.js', 'Node.js', 'Clean Architecture', 'REST APIs', 'JWT'],
    year: '2026',
    color: '#7c3aed',
    img: project2Img,
    githubLink: 'https://github.com/Tasneem60',
  },
  {
    id: '03',
    title: 'Student Bazaar',
    category: 'Student Marketplace Platform',
    description: 'A student marketplace platform supporting 500+ product listings. Implemented using Clean Architecture with 15+ RESTful APIs, JWT authentication, and role-based authorization. Awarded a Patent Certificate for innovation.',
    tags: ['React.js', 'Node.js', 'Clean Architecture', 'REST APIs', 'JWT'],
    year: '2025',
    color: '#7c3aed',
    img: project3Img,
    githubLink: 'https://github.com/Tasneem60',
  },
  
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { isDark } = useTheme();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card group cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="relative w-full rounded-3xl border overflow-hidden transition-all duration-300 bg-[#fcfcfc] dark:bg-[#1d1d1d] transition-colors duration-300"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          border: hovered ? `1px solid ${project.color}50` : isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
          boxShadow: hovered
            ? (isDark ? `0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}30` : `0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px ${project.color}30`)
            : (isDark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.08)'),
        }}
      >
        {/* Project image preview */}
        <div className="w-full h-40 md:h-52 overflow-hidden relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfcfc] dark:to-[#1d1d1d] pointer-events-none transition-colors duration-300" />
          <span
            className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white"
            style={{ background: project.color }}
          >
            {project.year}
          </span>
        </div>
        {/* Content */}
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          {/* Number */}
          <div className="shrink-0">
            <span
              className="text-6xl md:text-7xl font-black leading-none select-none transition-all duration-300"
              style={{ color: hovered ? project.color : isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.08)', WebkitTextStroke: hovered ? '0px' : isDark ? `2px ${project.color}20` : `2px ${project.color}50` }}
            >
              {project.id}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                {project.category}
              </span>
              <span className="text-xs font-bold text-white/30">{project.year}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] dark:text-white tracking-tight leading-none">
              {project.title}
            </h3>
            <p className="text-black/50 dark:text-white/50 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-black/40 dark:text-white/40 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            {(project.LiveDemo || project.githubLink) && (
              <div className="flex flex-wrap gap-4 mt-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black/70 dark:text-white/70 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="text-xs font-bold text-black/70 dark:text-white/70">GitHub</span>
                  </a>
                )}
                {project.LiveDemo && (
                  <a href={project.LiveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-black/70 dark:text-white/70 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 3h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-bold text-black/70 dark:text-white/70">Demo Live</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="shrink-0 self-center">
            
              <a
                href={project.LiveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: hovered ? project.color : 'rgba(255,255,255,0.1)',
                  background: hovered ? project.color : 'transparent',
                  transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-title', {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-title', start: 'top 85%' }
    });
    gsap.from('.project-card', {
      y: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.project-card', start: 'top 90%' }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects-section" ref={sectionRef} className="relative bg-[#f2f2f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f0f0f0] w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center transition-colors duration-300">

      {/* Light grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="projects-title mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Selected Work</p>
          <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a] dark:text-white">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
