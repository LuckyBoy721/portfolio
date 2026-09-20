import React from 'react';
import { ArrowDown, Mail, Database, Bot, BarChart3, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-8 pb-14 md:pt-12 md:pb-20 border-b-3 border-neo-border dark:border-neo-darkborder overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-3 border-neo-border dark:border-neo-darkborder bg-neo-yellow/30 dark:bg-neo-yellow/10 pointer-events-none rotate-12 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neo-yellow text-neo-black border-2 border-neo-border dark:border-neo-darkborder font-mono text-xs font-black shadow-neo-sm uppercase mb-4">
              <Bot className="w-3.5 h-3.5 text-neo-black" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Name & Main Headline */}
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] text-neo-black dark:text-zinc-100 mb-4">
              MUHAMMAD RADIFAN <br />
              <span className="bg-neo-cyan px-2.5 py-0.5 border-2 border-neo-border text-neo-black shadow-neo-sm inline-block my-1">
                ASYAURI
              </span>
            </h1>

            {/* Subtitle / Authentic Bio */}
            <p className="font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
              Active <strong>7th-semester Data Science</strong> undergraduate based in Surabaya. Experienced as an <strong>Automation Engineer at SuperFood</strong> (engineering web scraping pipelines for hundreds of merchants on GrabFood and food delivery platforms) and as a <strong>Data Science Intern at Diskominfo Surabaya</strong> contributing to the official city portal, PPID complaint system, and interactive demographic map.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a 
                href="#projects"
                className="neo-btn bg-neo-yellow hover:opacity-90 text-neo-black text-xs sm:text-sm font-extrabold flex items-center gap-2 py-2.5 px-5"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a 
                href="#experience"
                className="neo-btn bg-white dark:bg-zinc-800 text-neo-black dark:text-zinc-100 text-xs sm:text-sm font-extrabold flex items-center gap-2 py-2.5 px-5"
              >
                <span>Work Experience</span>
              </a>
            </div>

            {/* Direct Social & Contact */}
            <div className="flex items-center gap-3 font-mono text-xs font-bold">
              <span className="text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-[11px]">Direct Connect:</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                title="GitHub: LuckyBoy721"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-neo-black dark:text-zinc-100" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-neo-black dark:text-zinc-100" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                title={`Email: ${PERSONAL_INFO.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-neo-black dark:text-zinc-100" />
              </a>
              <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 px-2 py-1 bg-zinc-100 dark:bg-zinc-800">
                {PERSONAL_INFO.location}
              </span>
            </div>

          </div>

          {/* Right Column: Neo-Brutalist Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-full max-w-sm">
              
              <div className="border-3 border-neo-border dark:border-neo-darkborder bg-white dark:bg-neo-darkcard p-3 shadow-neo-xl dark:shadow-neo-dark-xl">
                
                {/* Header Strip of Photo */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-neo-border dark:border-neo-darkborder font-mono text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-neo-border inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300 border border-neo-border inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-neo-border inline-block"></span>
                    <span className="ml-1 text-[11px] text-neo-black dark:text-zinc-100">radifan-asyauri.webp</span>
                  </span>
                  <span className="text-[10px] bg-neo-yellow text-neo-black px-1.5 py-0.5 border border-black font-extrabold">
                    SMT 7
                  </span>
                </div>

                {/* Profile Photo */}
                <div className="relative overflow-hidden border-2 border-neo-border dark:border-neo-darkborder aspect-[3/4] bg-zinc-100 dark:bg-zinc-800">
                  <img 
                    src="/profile.webp" 
                    alt="Muhammad Radifan Asyauri" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-neo-yellow text-neo-black font-mono font-bold text-[10px] border-2 border-neo-border shadow-neo-sm">
                    DATA SCIENCE // AUTOMATION
                  </div>
                </div>

                {/* Real Academic & Work Status Strip */}
                <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs">
                  <div className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">EDUCATION</span>
                    <span className="font-bold text-neo-black dark:text-zinc-100 text-[11px]">B.S. Data Science (3.50)</span>
                  </div>
                  <div className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">ACTIVE EXPERIENCE</span>
                    <span className="font-bold text-neo-green text-[11px]">SuperFood & Diskominfo</span>
                  </div>
                </div>

              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 -left-3 bg-neo-green text-neo-black border-2 border-neo-border font-mono font-black text-[11px] px-3 py-1 shadow-neo -rotate-2">
                SUPERFOOD • DISKOMINFO SURABAYA
              </div>

            </div>

          </div>

        </div>

        {/* 4 Core Pillars Strip */}
        <div className="mt-12 pt-8 border-t-2 border-zinc-300 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="neo-box p-4 bg-white dark:bg-neo-darkcard">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 bg-neo-yellow border-2 border-neo-border text-neo-black font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <h3 className="font-mono font-bold text-sm text-neo-black dark:text-zinc-100">Web Automation</h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Automated data extraction for hundreds of GrabFood merchants using Playwright, session management, and Excel reporting.
            </p>
          </div>

          <div className="neo-box p-4 bg-white dark:bg-neo-darkcard">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 bg-neo-cyan border-2 border-neo-border text-neo-black font-bold">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="font-mono font-bold text-sm text-neo-black dark:text-zinc-100">Web Portals & GIS</h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Contributor to Surabaya official city portal, PPID citizen complaint workflows, and interactive demographic maps.
            </p>
          </div>

          <div className="neo-box p-4 bg-white dark:bg-neo-darkcard">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 bg-neo-green border-2 border-neo-border text-neo-black font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="font-mono font-bold text-sm text-neo-black dark:text-zinc-100">Data Analytics & NLP</h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              CVMatch AI (semantic similarity resume matching), exploratory data analysis (EDA), and RAG chatbot workflows.
            </p>
          </div>

          <div className="neo-box p-4 bg-white dark:bg-neo-darkcard">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 bg-neo-orange border-2 border-neo-border text-white font-bold">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="font-mono font-bold text-sm text-neo-black dark:text-zinc-100">Data Pipelines</h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tabular data preprocessing, multi-city data ingestion, and relational SQL database querying.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
