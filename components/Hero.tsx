import React, { useState, useEffect } from 'react';
import { Linkedin, Send, Terminal, ShieldCheck, Activity, GitBranch } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO, PROFILE_IMAGE_URL } from '../constants';

const PipelineStatus: React.FC = () => (
  // Positioned at bottom-right with high z-index to avoid being hidden behind the image
  <div className="absolute bottom-10 right-10 hidden 2xl:block animate-fade-in-up z-30">
    <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-4 font-mono text-xs shadow-2xl backdrop-blur-md w-72">
      <div className="flex items-center gap-2 mb-3 text-gray-400 border-b border-gray-800 pb-2">
        <Terminal size={14} className="text-qa-accent" />
        <span className="font-bold tracking-wider">PIPELINE_STATUS</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">build_core</span>
          <span className="text-emerald-500 flex items-center gap-2 bg-emerald-500/10 px-2 py-0.5 rounded">
            PASS <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">unit_tests</span>
          <span className="text-emerald-500 flex items-center gap-2 bg-emerald-500/10 px-2 py-0.5 rounded">
            PASS
          </span>
        </div>
         <div className="flex items-center justify-between">
          <span className="text-gray-400">e2e_suites</span>
          <span className="text-emerald-500 flex items-center gap-2 bg-emerald-500/10 px-2 py-0.5 rounded">
            PASS
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">deploy_prod</span>
          <span className="text-blue-400 flex items-center gap-2 bg-blue-500/10 px-2 py-0.5 rounded">
            <span className="animate-spin duration-3000">⟳</span> RUNNING
          </span>
        </div>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-800 text-[10px] text-gray-500 flex justify-between">
        <span>commit: 8f3a2c1</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE_URL);

  useEffect(() => {
    setImgSrc(PROFILE_IMAGE_URL);
  }, []);

  const handleImageError = () => {
    // Smart fallback mechanism
    if (imgSrc === "/afshin.jpeg") {
      console.log("afshin.jpeg not found, trying afshin.jpg");
      setImgSrc("/afshin.jpg");
    } else if (imgSrc === "/afshin.jpg") {
      console.log("afshin.jpg not found, trying profile.png");
      setImgSrc("/profile.png");
    } else if (imgSrc !== "https://picsum.photos/400/400?grayscale") {
      // Final fallback to placeholder
      setImgSrc("https://picsum.photos/400/400?grayscale");
    }
  };

  return (
    <section id="about" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-qa-dark">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative gradient glowing orbs - darker/subtler for professional look */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <PipelineStatus />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono mb-4">
              <Activity className="w-3 h-3 mr-2 animate-pulse" />
              SYSTEM OPERATIONAL // OPEN TO WORK
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-mono flex items-center justify-center md:justify-start gap-2">
                <span className="text-emerald-500">./</span>
                <span className="terminal-cursor">{PERSONAL_INFO.role}</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed border-l-2 border-slate-700 pl-6 mx-auto md:mx-0">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-6 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] group"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </a>
              <a 
                href="#contact"
                className="flex items-center px-6 py-3 rounded border border-slate-600 bg-slate-800/50 hover:bg-slate-700 hover:border-emerald-500/50 text-white font-medium transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Rotating rings for technical feel */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 w-full h-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-blue-500/20 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-800 shadow-2xl">
                 <img 
                  src={imgSrc} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={handleImageError}
                />
              </div>

              {/* Badges */}
              <div className="absolute -top-4 right-10 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl flex items-center gap-2 transform rotate-3 group-hover:rotate-0 transition-transform">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-gray-200">QA Certified</span>
              </div>
              <div className="absolute -bottom-4 left-10 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl flex items-center gap-2 transform -rotate-3 group-hover:rotate-0 transition-transform">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono font-bold text-gray-200">CI/CD Expert</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;