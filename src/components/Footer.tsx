import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neo-bg dark:bg-neo-darkbg pt-10 pb-8 border-t-3 border-neo-border dark:border-neo-darkborder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 mb-6 border-b-2 border-zinc-300 dark:border-zinc-800">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-2 border-neo-border bg-neo-yellow flex items-center justify-center shadow-neo-sm">
              <Code2 className="w-5 h-5 text-neo-black" />
            </div>
            <div>
              <span className="font-mono font-black text-base text-neo-black dark:text-zinc-100">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap gap-4 font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300">
            <a href="#about" className="hover:text-neo-orange transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-neo-orange transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-neo-orange transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-neo-orange transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-neo-orange transition-colors">CONTACT</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="neo-btn bg-white dark:bg-zinc-800 text-neo-black dark:text-zinc-100 text-xs font-mono py-1.5 px-3 flex items-center gap-1.5 cursor-pointer shadow-neo-sm"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>Crafted with Modern Neo-Brutalism</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Surabaya, Indonesia</span>
          </div>

          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
