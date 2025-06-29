import React, { useState } from 'react';
import PilotWaitlistModal from './PilotWaitlistModal';

const PilotSpotlight: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pilot Spotlight: <a 
              href="https://GRIP.AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/50 hover:decoration-blue-300 underline-offset-4"
            >
              GRIP: Grievance Redressal & Improvement Program
            </a>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">Stopping Employee Attrition</p>
          
          <a 
            href="https://GRIP.AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12 cursor-pointer">
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl group-hover:bg-black/40 group-hover:border-green-400/40">
                <div className="text-4xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300">40%</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-white font-semibold group-hover:text-green-100">Fraud/Waste/Abuse:</span><br />
                  Catch them young, through<br />
                  your own employees
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl group-hover:bg-black/40 group-hover:border-red-400/40">
                <div className="text-4xl font-bold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300">12</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-white font-semibold group-hover:text-red-100">High-risk anomalies</span><br />
                  identified in Phase 1
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl group-hover:bg-black/40 group-hover:border-purple-400/40">
                <div className="text-4xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300">100%</div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  <span className="text-white font-semibold group-hover:text-purple-100">Anonymity guaranteed</span>
                </p>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-8">
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <span className="text-sm font-medium">Click to visit GRIP.AegisWhistle.com</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
          
          {/* Centered CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Apply for Aegis AI Pilot Waitlist</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <PilotWaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </>
  );
};

export default PilotSpotlight;