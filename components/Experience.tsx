import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, GitCommit } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-qa-dark relative overflow-hidden">
      {/* Subtle grid background for section consistency */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-exp" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-exp)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional History</h2>
          <div className="flex items-center justify-center gap-2 text-qa-accent opacity-60">
             <div className="h-px w-12 bg-qa-accent"></div>
             <GitCommit size={16} />
             <div className="h-px w-12 bg-qa-accent"></div>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line - designed to look like a git branch */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-qa-dark border-2 border-emerald-400 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)] mt-6">
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4 group">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:bg-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <span className="inline-flex items-center text-xs font-mono text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded border border-emerald-900/50">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm">
                          <span className="mr-3 mt-1.5 text-emerald-500 opacity-70">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;