import React, { useState } from 'react';
import { REAL_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Bot, Globe, Sparkles, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'automation':
        return <Bot className="w-5 h-5 text-neo-black" />;
      case 'data-science':
        return <Globe className="w-5 h-5 text-neo-black" />;
      case 'ai-nlp':
        return <Sparkles className="w-5 h-5 text-neo-black" />;
      default:
        return <Database className="w-5 h-5 text-neo-black" />;
    }
  };

  const filteredProjects = activeCategory === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-14 md:py-20 border-b-3 border-neo-border dark:border-neo-darkborder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-3 py-1 font-mono text-xs font-bold uppercase bg-neo-cyan text-neo-black border-2 border-neo-border shadow-neo-sm mb-3">
              02 // FEATURED PROJECTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neo-black dark:text-zinc-100">
              REAL-WORLD WORK & IMPLEMENTATIONS
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-xl font-sans text-sm sm:text-base">
              Hands-on engineering projects deployed in production environments or developed for academic and data science research.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 border-2 border-neo-border dark:border-neo-darkborder transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-neo-black text-white dark:bg-zinc-100 dark:text-neo-black shadow-neo-sm'
                  : 'bg-white dark:bg-neo-darkcard text-neo-black dark:text-zinc-200 hover:bg-zinc-100'
              }`}
            >
              ALL [{REAL_PROJECTS.length}]
            </button>
            <button
              onClick={() => setActiveCategory('automation')}
              className={`px-3 py-1.5 border-2 border-neo-border dark:border-neo-darkborder transition-all cursor-pointer ${
                activeCategory === 'automation'
                  ? 'bg-neo-yellow text-neo-black shadow-neo-sm'
                  : 'bg-white dark:bg-neo-darkcard text-neo-black dark:text-zinc-200 hover:bg-zinc-100'
              }`}
            >
              AUTOMATION
            </button>
            <button
              onClick={() => setActiveCategory('data-science')}
              className={`px-3 py-1.5 border-2 border-neo-border dark:border-neo-darkborder transition-all cursor-pointer ${
                activeCategory === 'data-science'
                  ? 'bg-neo-green text-neo-black shadow-neo-sm'
                  : 'bg-white dark:bg-neo-darkcard text-neo-black dark:text-zinc-200 hover:bg-zinc-100'
              }`}
            >
              PORTALS & GIS
            </button>
            <button
              onClick={() => setActiveCategory('ai-nlp')}
              className={`px-3 py-1.5 border-2 border-neo-border dark:border-neo-darkborder transition-all cursor-pointer ${
                activeCategory === 'ai-nlp'
                  ? 'bg-neo-purple text-neo-black shadow-neo-sm'
                  : 'bg-white dark:bg-neo-darkcard text-neo-black dark:text-zinc-200 hover:bg-zinc-100'
              }`}
            >
              AI & NLP
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={proj.id}
              className="neo-box p-6 md:p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b-2 border-neo-border dark:border-neo-darkborder">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 border-2 border-neo-border bg-neo-yellow flex items-center justify-center shadow-neo-sm">
                      {getCategoryIcon(proj.category)}
                    </div>
                    <div>
                      <span className="font-mono font-bold text-xs uppercase px-2 py-0.5 border border-neo-border bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                        {proj.organization}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-neo-black dark:text-zinc-100 mb-2 leading-snug">
                  {proj.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 font-sans">
                  {proj.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <span className="font-bold text-neo-orange font-mono">•</span>
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[11px] font-mono font-semibold px-2 py-0.5 border border-neo-border dark:border-zinc-500 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-neo-border dark:border-neo-darkborder flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex-1 neo-btn bg-neo-yellow hover:opacity-90 text-neo-black text-xs font-mono py-2 px-3 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Case Study Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-white dark:bg-zinc-800 shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-mono font-bold flex items-center gap-1 text-neo-black dark:text-zinc-100"
                    title="View Code on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border-2 border-neo-border dark:border-neo-darkborder bg-neo-cyan text-neo-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs font-mono font-bold"
                    title="Visit Official Website"
                  >
                    WEB
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
