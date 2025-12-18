import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always interested in discussing new opportunities in QA Automation, DevOps, and AI implementation in testing pipelines.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-qa-accent mr-4" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-qa-accent mr-4" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-qa-accent mr-4" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-xl font-bold text-white mb-4">Social Profiles</h3>
             <div className="flex flex-col gap-4">
               <a 
                 href={CONTACT_INFO.linkedin}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center p-4 bg-qa-card rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
               >
                 <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
                 <div>
                   <div className="font-bold text-white">LinkedIn</div>
                   <div className="text-sm text-gray-500">Connect professionally</div>
                 </div>
               </a>
               
               <a 
                 href={CONTACT_INFO.telegram}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center p-4 bg-qa-card rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
               >
                 <Send className="w-6 h-6 text-blue-300 mr-4" />
                 <div>
                   <div className="font-bold text-white">Telegram</div>
                   <div className="text-sm text-gray-500">@AfshinAP1381</div>
                 </div>
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Afshin Afsharpour. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;