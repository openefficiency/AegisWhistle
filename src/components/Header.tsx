import React, { useState } from 'react';
import { Shield, Play } from 'lucide-react';
import PilotWaitlistModal from './PilotWaitlistModal';

const Header: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <>
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">AegisWhistle</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsWaitlistModalOpen(true)}
              className="hidden sm:block text-white/90 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 font-medium backdrop-blur-sm hover:scale-105"
            >
              Apply for Aegis AI Pilot Waitlist
            </button>
            <a 
              href="https://backfeed.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Play className="w-4 h-4" />
              <span>Watch Aegis AI in Action</span>
            </a>
          </div>
        </nav>
      </header>

      <PilotWaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </>
  );
};

export default Header;