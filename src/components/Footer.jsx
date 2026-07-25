import React from 'react';

const navLinks = ['Projects', 'Experience', 'Services', 'Contact'];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/Tasneem-eldeeb/' },
  { name: 'GitHub', url: 'https://github.com/Tasneem60' }
];

const Footer = () => {
  return (
    <footer className="relative bg-[#e2e2e2] dark:bg-[#0d0d0d] text-[#1a1a1a] dark:text-[#f0f0f0] font-inter overflow-hidden border-t border-black/5 dark:border-white/5 w-screen min-h-screen flex flex-col justify-center transition-colors duration-300">

      {/* Big Name watermark */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden">
        <p className="text-[25vw] md:text-[22vw] font-black uppercase tracking-tighter leading-none text-black/[0.04] dark:text-white/[0.03] whitespace-nowrap translate-y-[20%] md:translate-y-[20%]">
          Tasneem
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-20">

          {/* Name & tagline */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-[#1a1a1a] dark:text-white mb-4">
              Tasneem
            </h2>
            <p className="text-black/40 dark:text-white/40 text-sm md:text-base font-medium max-w-xs leading-relaxed">
              Full-Stack Developer crafting high-performance, responsive web applications.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:tasniime60@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f03e3e] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,62,62,0.35)] active:scale-95 w-fit"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-black/30 dark:text-white/30 text-xs font-medium">
              Available for new opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent mb-12 md:mb-16" />

        {/* Nav Links */}
        <div className="flex flex-wrap gap-6 mb-12">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}-section`}
              className="text-sm font-bold text-black/30 dark:text-white/30 hover:text-[#1a1a1a] dark:hover:text-white transition-colors duration-200 uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-black/25 dark:text-white/25 text-xs font-medium">
            © 2026 Tasneem Eldeeb. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-black/25 dark:text-white/25 hover:text-[#f03e3e] dark:hover:text-[#f03e3e] transition-colors duration-200 uppercase tracking-widest">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
