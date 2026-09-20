import React from 'react';
import { REAL_EXPERIENCE, EDUCATION_INFO } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle, MapPin, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 md:py-20 border-b-3 border-neo-border dark:border-neo-darkborder bg-zinc-50/50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 font-mono text-xs font-bold uppercase bg-neo-yellow text-neo-black border-2 border-neo-border shadow-neo-sm mb-3">
            01 // EXPERIENCE & TRACK RECORD
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neo-black dark:text-zinc-100">
            WORK EXPERIENCE, INTERNSHIPS & EDUCATION
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-base max-w-2xl">
            Practical track record in startup automation engineering and civic digital technology contributions for the City of Surabaya.
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="space-y-6 mb-12">
          {REAL_EXPERIENCE.map((exp) => (
            <div 
              key={exp.id}
              className="neo-box p-6 md:p-7 bg-white dark:bg-neo-darkcard hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-neo-border dark:border-neo-darkborder">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-neo-cyan text-neo-black border border-neo-border">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neo-black dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="font-mono font-bold text-sm text-neo-orange dark:text-neo-yellow mt-0.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold border-2 border-neo-border dark:border-neo-darkborder bg-zinc-100 dark:bg-zinc-800 text-neo-black dark:text-zinc-100 self-start md:self-center shadow-neo-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5 font-sans">
                {exp.description}
              </p>

              {/* Responsibilities & Impact */}
              <div className="space-y-2.5 mb-5">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Key Contributions & Impact:
                </h4>
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-neo-green shrink-0 mt-0.5" />
                    <span className="leading-normal">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Tech & Tools:
                </span>
                {exp.stack.map(tech => (
                  <span 
                    key={tech}
                    className="font-mono text-xs px-2.5 py-0.5 border border-neo-border dark:border-zinc-500 bg-zinc-50 dark:bg-zinc-900 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Education Card */}
          <div className="md:col-span-7 neo-box p-6 bg-white dark:bg-neo-darkcard">
            <div className="flex items-center gap-3 pb-3 mb-4 border-b-2 border-neo-border dark:border-neo-darkborder">
              <div className="p-2 border-2 border-neo-border bg-neo-yellow text-neo-black">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-base text-neo-black dark:text-zinc-100">
                  Academic Education
                </h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {EDUCATION_INFO.period}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base sm:text-lg text-neo-black dark:text-zinc-100">
                  {EDUCATION_INFO.degree}
                </h4>
                <span className="px-2.5 py-0.5 bg-neo-green text-neo-black font-mono font-bold text-xs border border-neo-border shadow-neo-sm">
                  GPA: {EDUCATION_INFO.gpa}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Status: <strong className="text-neo-black dark:text-zinc-200">{EDUCATION_INFO.status}</strong>
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-200 dark:border-zinc-800">
                {EDUCATION_INFO.details}
              </p>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="md:col-span-5 neo-box p-6 bg-white dark:bg-neo-darkcard flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-3 mb-4 border-b-2 border-neo-border dark:border-neo-darkborder">
                <div className="p-2 border-2 border-neo-border bg-neo-green text-neo-black">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-base text-neo-black dark:text-zinc-100">
                    Programs & Certifications
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    Collaborative Training 2026
                  </span>
                </div>
              </div>

              <div className="p-3.5 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800/80 shadow-neo-sm">
                <h4 className="font-bold text-sm text-neo-black dark:text-zinc-100 mb-1">
                  Pijak in Collaboration with IBM SkillsBuild Program (2026)
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Successfully completed the comprehensive program covering practical data science principles, cloud infrastructure, and modern analytics applications.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
              STATUS: VERIFIED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
