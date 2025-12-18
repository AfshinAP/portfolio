import React from 'react';
import { FEATURED_CONTENT } from '../constants';
import { ExternalLink, Linkedin, BookOpen } from 'lucide-react';

const FeaturedContent: React.FC = () => {
  return (
    <section id="featured" className="py-20 bg-qa-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Insights</h2>
          <p className="text-gray-400">Sharing knowledge on AI agents, Self-healing tests, and QAOps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_CONTENT.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full"
            >
              <div className="bg-qa-card h-full p-8 rounded-2xl border border-gray-700 hover:border-qa-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg ${item.platform === 'LinkedIn' ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-700/50 text-white'}`}>
                    {item.platform === 'LinkedIn' ? <Linkedin className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-qa-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-qa-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 flex-grow leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-qa-accent">
                  Read on {item.platform}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;