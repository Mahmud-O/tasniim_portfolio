import React, { useRef, useState } from 'react';
import leftImg from '../assets/service/left.png';
import rightImg from '../assets/service/right.png';

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    features: [
      'Responsive web apps (React.js, Next.js)',
      'State management (Redux Toolkit, Zustand)',
      'Modern styling (Tailwind CSS, Shadcn/UI)',
      'Data fetching (TanStack Query, Router)',
      'Figma-to-code translation'
    ]
  },
  {
    id: 2,
    title: 'Backend & API Engineering',
    features: [
      'Server-side logic (Node.js, Express.js)',
      'RESTful & GraphQL API design',
      'Secure authentication (JWT, RBAC)',
      'Real-time features (Socket.Io)',
      'Third-party API integrations'
    ]
  },
  {
    id: 3,
    title: 'Database & ORM Management',
    features: [
      'Relational & NoSQL (PostgreSQL, MongoDB)',
      'Object mapping (Prisma, Mongoose)',
      'Query optimization & performance tuning',
      'Backend databases (Supabase, Firebase)',
      'Caching solutions (Redis)'
    ]
  },
  {
    id: 4,
    title: 'DevOps & Architecture',
    features: [
      'Containers & version control (Docker, Git)',
      'CI/CD & cloud deployments (Vercel, Netlify)',
      'Architecture patterns (Clean Architecture)',
      'SOLID principles & clean code',
      'Agile development & collaboration'
    ]
  }
];

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
    const rotateY = ((x - centerX) / centerX) * 15;  // Max 15deg rotation
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section id="services-section" className="relative bg-[#f2f2f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f0f0f0] w-full min-h-screen py-16 md:py-32 font-inter overflow-hidden transition-colors duration-300">

      {/* Big SERVICES Header */}
      <div className="w-full flex justify-end pr-4 md:pr-16 mb-12 md:mb-32 overflow-hidden pointer-events-none">
        <h2 className="text-[14vw] md:text-[20vw] font-black uppercase leading-[0.75] tracking-tighter text-[#1a1a1a] dark:text-white/10 select-none whitespace-nowrap">
          SERVICES
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative w-full flex flex-col gap-16 md:gap-40 mt-10 z-0">

        {services.map((service, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`service-row relative w-full flex items-center justify-between z-[999]`}
            >

              {/* Card Container - Constrained */}
              <div className={`w-full max-w-screen-xl mx-auto px-6 md:px-12 flex ${isLeft ? 'justify-start' : 'justify-end'} relative z-[999]`}>
                <TiltCard className="service-card w-[90%] sm:w-[85%] md:w-[45%] lg:w-[40%] max-w-[500px]">
                  <div className="w-full bg-[#fcfcfc] dark:bg-[#1d1d1d] p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-zinc-800/50 flex flex-col gap-4 relative overflow-hidden group transition-all duration-500 hover:shadow-3xl transition-colors duration-300">

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-[#f03e3e] font-black text-xl mb-1 tracking-widest">
                        0{service.id}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 text-[#1a1a1a] dark:text-white">
                        {service.title}
                      </h3>
                      <div className="w-10 h-1 bg-black dark:bg-white mb-5 transition-all duration-500 group-hover:w-20 group-hover:bg-[#f03e3e] dark:group-hover:bg-[#f03e3e]"></div>
                      <ul className="flex flex-col gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-xs md:text-sm font-bold text-gray-500 dark:text-zinc-400 leading-relaxed flex items-start group-hover:text-gray-800 dark:group-hover:text-zinc-200 transition-colors duration-300">
                            <span className="text-[#f03e3e] mr-2 mt-[2px] shrink-0 text-[10px]">✦</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Opposite Image Container - Flush to viewport edge */}
              <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'} w-[45vw] lg:w-[40vw] h-full pointer-events-none -z-10 ${isLeft ? 'justify-end' : 'justify-start'} items-center`}>
                <img
                  src={isLeft ? rightImg : leftImg}
                  alt="Service Illustration"
                  className={`service-image w-full h-auto max-h-[80vh] object-contain ${isLeft ? 'object-right' : 'object-left'}`}
                />
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default ServiceSection;
