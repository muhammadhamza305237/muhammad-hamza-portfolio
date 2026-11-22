import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Send, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './icons/BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/40">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Exceptional
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Currently open to Frontend Developer roles, React engineering opportunities, and technical collaborations.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left side: Value proposition */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Ready to elevate your frontend stack?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an open position, an ambitious project, or want to discuss React component architecture, my inbox is always open.
              </p>
              
              <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Response time: Usually within 24 hours
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Location: {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Right side: Interactive Actions */}
            <div className="flex flex-col space-y-4">
              
              {/* Email Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                      Direct Email
                    </p>
                    <p className="text-sm font-mono font-medium text-slate-200 truncate select-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-cyan-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={personalInfo.socials.email}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                    aria-label="Open email client"
                  >
                    <Send className="w-4 h-4 text-slate-300" />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
