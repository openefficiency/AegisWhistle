import React from 'react';
import { QrCode, Smartphone, ArrowRight } from 'lucide-react';

const DemoPortal: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to experience <span className="text-white">AI-powered employee engagement with</span> <span className="text-blue-400">Aegis AI 📣?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Scan to access our AI employee engagement demo portal - no login needed. 
              Experience the future of workplace intelligence and employee voice analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-blue-400">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">Scan with your phone camera for AI demo</span>
              </div>
              <div className="text-gray-500">or</div>
              <a 
                href="https://backfeed.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                aria-label="Visit BackFeed.xyz AI Employee Engagement Demo"
              >
                <span>visit BackFeed.xyz AI Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Right QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl hover:scale-105">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                {/* Real QR Code using QR Server API */}
                <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https://backfeed.xyz/&format=png&margin=10&bgcolor=ffffff&color=000000"
                    alt="QR Code for Aegis AI Employee Engagement Demo at BackFeed.xyz"
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-black font-semibold text-sm">BackFeed.xyz</p>
                  <p className="text-gray-600 text-xs">AI Employee Engagement Demo Portal</p>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <div className="flex items-center justify-center space-x-2 text-blue-400 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live AI Employee Demo Available</span>
                </div>
                <p className="text-gray-300 text-sm">No registration required - Experience AI employee engagement instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional AI Demo Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Experience AI Employee Engagement Features:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">Real-time AI Voice Analysis</h4>
              <p className="text-gray-300 text-sm">Experience live employee sentiment detection and AI-powered voice processing</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">AI Employee Intelligence</h4>
              <p className="text-gray-300 text-sm">See how our AI analyzes employee communications and workplace patterns</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">Anonymous AI Protection</h4>
              <p className="text-gray-300 text-sm">Test our military-grade AI security and employee anonymity features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPortal;