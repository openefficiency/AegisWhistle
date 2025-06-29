import React, { useState } from 'react';
import PilotWaitlistModal from './PilotWaitlistModal';

const PilotSpotlight: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pilot Spotlight: <span className="text-blue-400">GRIP: Grievance Redressal & Improvement Program</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">Stopping Employee Attrition</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-4xl font-bold text-green-400 mb-4">40%</div>
              <p className="text-gray-300">
                <span className="text-white font-semibold">Fraud/Waste/Abuse:</span><br />
                Catch them young, through<br />
                your own employees
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-4xl font-bold text-red-400 mb-4">12</div>
              <p className="text-gray-300">
                <span className="text-white font-semibold">High-risk anomalies</span><br />
                identified in Phase 1
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-4xl font-bold text-purple-400 mb-4">100%</div>
              <p className="text-gray-300">
                <span className="text-white font-semibold">Anonymity guaranteed</span>
              </p>
            </div>
          </div>
          
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