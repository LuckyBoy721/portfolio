import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      scrolled 
        ? 'py-2.5 bg-neo-bg/95 dark:bg-neo-darkbg/95 border-b-3 border-neo-border dark:border-neo-darkborder' 
        : 'py-4 bg-neo-bg dark:bg-neo-darkbg border-b-3 border-neo-border dark:border-neo-darkborder'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 font-mono font-extrabold text-base sm:text-lg tracking-tight text-neo-black dark:text-zinc-100 focus:outline-none"
        >
          <div className="w-9 h-9 border-2 border-neo-border dark:border-neo-darkborder bg-neo-yellow dark:bg-neo-cyan flex items-center justify-center shadow-neo-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
            <Code2 className="w-5 h-5 text-neo-black" />
          </div>
          <span>
            RADIFAN<span className="text-neo-orange font-black">.DEV</span>
          </span>
        </a>

        {/* Status Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard shadow-neo-sm text-xs font-mono font-bold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neo-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neo-green"></span>
          </span>
          <span className="text-zinc-800 dark:text-zinc-200">7TH SEMESTER // OPEN TO WORK</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 font-mono text-xs sm:text-sm font-bold text-neo-black dark:text-zinc-100 hover:bg-neo-yellow dark:hover:bg-zinc-800 border-2 border-transparent hover:border-neo-border dark:hover:border-neo-darkborder transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 w-9 h-9 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-zinc-800 flex items-center justify-center shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-neo-black dark:text-zinc-100 cursor-pointer"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-neo-yellow" /> : <Moon className="w-4 h-4 text-neo-black" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-2 neo-btn bg-neo-yellow text-neo-black text-xs font-mono uppercase tracking-wider py-2 px-3.5 flex items-center gap-1"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-zinc-800 flex items-center justify-center shadow-neo-sm text-neo-black dark:text-zinc-100"
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-neo-yellow" /> : <Moon className="w-4 h-4 text-neo-black" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 border-2 border-neo-border dark:border-neo-darkborder bg-neo-yellow text-neo-black flex items-center justify-center shadow-neo-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-3 border-neo-border dark:border-neo-darkborder bg-neo-bg dark:bg-neo-darkbg px-4 py-5 shadow-neo">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 pb-2 mb-1 border-b-2 border-zinc-200 dark:border-zinc-800 text-xs font-mono font-bold">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-neo-green"></span>
              <span>7TH SEMESTER // OPEN TO WORK</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-bold font-mono border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard shadow-neo-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 py-2.5 px-3 text-center font-bold font-mono text-xs uppercase bg-neo-yellow text-neo-black border-2 border-neo-border shadow-neo-sm flex items-center justify-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
