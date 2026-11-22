import React from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Layout,
  Navigation,
  Cpu,
  Layers,
  Zap,
  Workflow,
  Flame,
  GitBranch,
  Globe,
  Database,
  Server,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { skillsData } from '../data/portfolioData';

// Icon dictionary for dynamic rendering
const iconMap = {
  Code2,
  FileCode,
  Palette,
  Layout,
  Navigation,
  Cpu,
  Layers,
  Zap,
  Workflow,
  Flame,
  GitBranch,
  Github,
  Globe,
  Database,
  Server,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/40">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proficiencies organized by core architectural domains, from modern React fundamentals to state flow and CI/CD deployment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/50 border border-slate-850 hover:border-cyan-500/30 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-200">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                            skill.level === 'Expert'
                              ? 'text-cyan-300 bg-cyan-950/40 border-cyan-800/40'
                              : skill.level === 'Advanced'
                              ? 'text-indigo-300 bg-indigo-950/40 border-indigo-800/40'
                              : 'text-slate-400 bg-slate-800/40 border-slate-700/40'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quality Checklist */}
              <div className="mt-6 pt-4 border-t border-slate-850 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
