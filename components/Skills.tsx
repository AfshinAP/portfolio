import React from 'react';
import { SKILLS, PERSONAL_INFO } from '../constants';
import { Cpu, Code2, Cloud, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Automation')) return <Cpu className="w-6 h-6 text-qa-accent" />;
    if (title.includes('Languages')) return <Code2 className="w-6 h-6 text-blue-400" />;
    if (title.includes('DevOps')) return <Cloud className="w-6 h-6 text-purple-400" />;
    return <Terminal className="w-6 h-6 text-orange-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset for building, testing, and deploying scalable infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-qa-card rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  {getIcon(category.title)}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm rounded-md border border-gray-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section embedded in Skills area for layout balance */}
        <div className="mt-16 bg-gradient-to-r from-qa-card to-slate-800 rounded-2xl p-8 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-xl text-qa-accent">{PERSONAL_INFO.education.degree}</p>
              <p className="text-gray-400">{PERSONAL_INFO.education.university}</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <p className="text-gray-300 font-mono text-sm">{PERSONAL_INFO.education.period}</p>
              <p className="text-gray-300 text-sm">{PERSONAL_INFO.education.location}</p>
              <div className="mt-2 inline-block bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-400 mr-2">GPA</span>
                <span className="text-lg font-bold text-white">{PERSONAL_INFO.education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;