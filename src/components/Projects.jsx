import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Layers,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Github } from './icons/BrandIcons';
import { featuredProjects, secondaryProjects, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derive categories dynamically from data
  const categories = useMemo(() => {
    const cats = ['All'];
    featuredProjects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return featuredProjects;
    return featuredProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Proven Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Engineered with clean architectural patterns, responsive designs, and production-tested state management.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasLiveDemo = project.liveUrl && project.liveUrl !== '#' && !project.liveUrl.includes('github.com');
            const isPending = project.liveUrl === '#';

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-950/20 hover:-translate-y-1"
              >
                {/* Accent line indicator */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${project.accent} opacity-40 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Top Meta: Category & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-[11px] font-mono font-medium text-cyan-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="mb-6 space-y-2 bg-slate-950/50 border border-slate-850 p-4 rounded-xl">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs font-mono border border-slate-700/50 hover:border-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  {hasLiveDemo ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-200 shadow-md shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : isPending ? (
                    <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 bg-slate-950/80 border border-slate-800 cursor-default">
                      <span>Live Demo Coming Soon</span>
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-200"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Secondary / Other Projects Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                More Projects
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Full-stack applications, state management architectures, and interactive React utilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-indigo-400 bg-indigo-950/40 border border-indigo-900/40 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`GitHub repo for ${item.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="font-bold text-slate-100 text-base group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pb-3">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions for Secondary Projects */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800/60">
                    {item.liveUrl ? (
                      <>
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                          aria-label={`GitHub repo for ${item.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </>
                    ) : (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                        aria-label={`GitHub repo for ${item.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Repositories Button / Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Looking for more codebases & experiments?
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Explore all open-source repositories, architectural templates, and components on my GitHub.
                </p>
              </div>
            </div>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-100 bg-slate-850 hover:bg-slate-800 border border-slate-750 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10 transition-all duration-200 group"
            >
              <span>View All Repositories on GitHub</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
