import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Professional React Web Development Training',
    company: 'Digilians – Egyptian Military Academy (On-site)',
    period: 'Jan 2026 – Jun 2026',
    type: 'Training',
    description: 'Completed 120+ hours of intensive front-end and React-focused training. Built 3 full-stack web applications integrating React with RESTful APIs, and integrated 10+ API endpoints for dynamic data handling and seamless client-server communication.',
    highlights: [
      'Completed 120+ hours of intensive front-end and React-focused training',
      'Built 3 full-stack web applications integrating React with RESTful APIs',
      'Implemented Redux state management, reducing unnecessary re-renders by 25%',
      'Integrated 10+ API endpoints for dynamic data handling and seamless client-server communication',
      'Collaborated within a 5-member Agile team, managing pull requests and version control using Git/GitHub',
      'Delivered sprint-based projects under real-world development timelines'
    ],
  },
  {
    role: 'Full-Stack .NET Training',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Jun 2025 – Dec 2025',
    type: 'Training',
    description: 'Secured 1st place at the company level for delivering the highest-evaluated project. Developed and tested 15+ RESTful API endpoints implementing full CRUD operations, designed SQL queries, and optimized database performance by ~20%.',
    highlights: [
      'Ranked 1st among 30+ trainees for delivering the highest-scoring full-stack project',
      'Developed and tested 15+ RESTful API endpoints implementing full CRUD operations',
      'Designed SQL queries and optimized database performance by ~20%',
      'Built responsive UI modules across 5+ system features using HTML, CSS, and JavaScript',
      'Followed Agile methodology with bi-weekly sprint deliveries and peer code reviews'
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.exp-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.exp-title', start: 'top 85%' } }
    );
    gsap.fromTo('.exp-item',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.exp-item', start: 'top 90%' } }
    );
  }, { scope: sectionRef });

  return (
    <section id="experience-section" ref={sectionRef} className="relative bg-[#f2f2f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f0f0f0] w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center transition-colors duration-300">

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="exp-title mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Work History</p>
            <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a] dark:text-white">
              Experience
            </h2>
          </div>
          <p className="text-[#1a1a1a]/60 dark:text-white/60 text-sm md:text-base max-w-xs font-medium leading-relaxed">
            2+ years of hands-on experience building high-performance web applications and RESTful APIs.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#f03e3e] via-black/10 dark:via-white/10 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="exp-item group relative md:pl-12 py-10 border-b border-black/5 dark:border-white/5 last:border-0 transition-all duration-500 hover:bg-black/[0.03] dark:hover:bg-white/[0.02] rounded-2xl md:hover:pl-14 cursor-default"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-12 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#f03e3e] bg-white dark:bg-[#121212] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#f03e3e]" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">

                  {/* Left: Period */}
                  <div className="md:w-48 shrink-0">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#f03e3e] mb-1">{exp.period}</p>
                    <span className="text-xs font-bold text-black/30 dark:text-white/30 px-2 py-0.5 rounded border border-black/10 dark:border-white/10">{exp.type}</span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-[#1a1a1a] dark:text-white tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#f03e3e] font-bold text-sm tracking-wide mb-4">{exp.company}</p>
                    <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed mb-6 font-medium">{exp.description}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-black/40 dark:text-white/40 flex items-start gap-2 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-300">
                          <span className="text-[#f03e3e] shrink-0 mt-0.5">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
