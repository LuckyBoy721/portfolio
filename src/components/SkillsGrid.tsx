import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { BarChart3, Bot, Globe, Database } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const getGroupIcon = (category: string) => {
    switch (category) {
      case 'data-science':
        return <BarChart3 className="w-5 h-5 text-neo-black" />;
      case 'automation':
        return <Bot className="w-5 h-5 text-neo-black" />;
      case 'web-dev':
        return <Globe className="w-5 h-5 text-neo-black" />;
      default:
        return <Database className="w-5 h-5 text-neo-black" />;
    }
  };

  return (
    <section id="skills" className="py-14 md:py-20 border-b-3 border-neo-border dark:border-neo-darkborder bg-zinc-50/50 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 font-mono text-xs font-bold uppercase bg-neo-green text-neo-black border-2 border-neo-border shadow-neo-sm mb-3">
            03 // SKILLS & TOOLSET
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neo-black dark:text-zinc-100">
            DATA SCIENCE & TECHNICAL PROFICIENCIES
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-xl font-sans text-sm sm:text-base">
            Technical proficiencies sharpened through Data Science coursework, production automation workflows, and public civic tech internships.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div 
              key={group.title}
              className="neo-box p-6 bg-white dark:bg-neo-darkcard flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-neo-border dark:border-neo-darkborder">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 border-2 border-neo-border ${group.accentColor} shadow-neo-sm`}>
                      {getGroupIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-base text-neo-black dark:text-zinc-100">
                        {group.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-sans">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono font-bold border-2 border-neo-border dark:border-zinc-500 bg-zinc-50 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 shadow-neo-sm hover:bg-neo-yellow dark:hover:bg-zinc-700 hover:text-neo-black transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-500 flex justify-between">
                <span>VERIFIED IN PRODUCTION & PROJECTS</span>
                <span>{group.skills.length} SKILLS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
