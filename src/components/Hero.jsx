import React from 'react';
import { ArrowDown, Mail, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './icons/BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Impactful Headline */}
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase font-semibold">
                Hi, I'm {personalInfo.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Frontend React{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </div>

            {/* Tagline & Bio */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* CTAs and Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
                <span>Contact Me</span>
              </a>

              {/* Social Quick Icons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.email}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 shadow-sm"
                  aria-label="Send direct email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full border-t border-slate-800/80">
              {personalInfo.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium truncate mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Code / Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl p-6 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">HamzaProfile.jsx</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>React 18</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="py-4 font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
                <p className="text-slate-500">// Technical Competency Snapshot</p>
                <p>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span>{' '}
                  <span className="text-slate-400">=</span> {'{'}
                </p>
                <div className="pl-4 space-y-1 text-slate-300">
                  <p>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">"{personalInfo.name}"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">specialization:</span>{' '}
                    <span className="text-emerald-400">"Frontend React Development"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-4 text-cyan-300">
                    "React.js", "Tailwind CSS", "Redux Toolkit", "Vite"
                  </p>
                  <p>] ,</p>
                  <p>
                    <span className="text-slate-400">architecture:</span>{' '}
                    <span className="text-indigo-300">"Modular & Performant"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-amber-300">"UI, State & REST APIs"</span>
                  </p>
                </div>
                <p className="text-slate-400">{'}'};</p>
              </div>

              {/* Feature highlight tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fast Rendering
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-950/40 text-indigo-400 border border-indigo-800/40">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Clean State Flow
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Responsive UI
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
