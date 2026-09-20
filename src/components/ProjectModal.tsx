import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto neo-box p-6 md:p-8 bg-white dark:bg-neo-darkcard"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border-2 border-neo-border dark:border-neo-darkborder bg-neo-yellow text-neo-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 pb-4 mb-6 border-b-3 border-neo-border dark:border-neo-darkborder">
          <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs font-bold">
            <span className="px-2.5 py-0.5 bg-neo-yellow text-neo-black border border-neo-border">
              {project.organization}
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
              {project.role} • {project.period}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neo-black dark:text-zinc-100">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Project Overview & Scope:
          </h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="p-4 border-2 border-neo-border dark:border-neo-darkborder bg-zinc-50 dark:bg-zinc-800/60 shadow-neo-sm mb-6">
          <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-neo-black dark:text-zinc-200 mb-3">
            Key Features & Technical Implementation:
          </h4>
          <div className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-neo-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(t => (
              <span 
                key={t}
                className="font-mono text-xs px-2.5 py-1 border border-neo-border dark:border-zinc-500 bg-white dark:bg-zinc-900 font-semibold shadow-neo-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t-2 border-neo-border dark:border-neo-darkborder flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-btn bg-white dark:bg-zinc-800 text-neo-black dark:text-zinc-100 text-xs font-mono py-2 px-3.5 flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="neo-btn bg-neo-cyan text-neo-black text-xs font-mono py-2 px-3.5 flex items-center gap-1.5"
              >
                <span>Visit Official Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="neo-btn bg-neo-black text-white dark:bg-zinc-100 dark:text-neo-black text-xs font-mono py-2 px-5 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
