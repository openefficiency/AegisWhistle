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
              Ready to start a <span className="text-white">conversation with</span> <span className="text-blue-400">Aegis AI?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Scan to access demo portal - no login needed
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-blue-400">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">Scan with your phone camera</span>
              </div>
              <div className="text-gray-500">or</div>
              <a 
                href="https://backfeed.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                <span>visit BackFeed.xyz</span>
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
                    alt="QR Code for BackFeed.xyz"
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-black font-semibold text-sm">BackFeed.xyz</p>
                  <p className="text-gray-600 text-xs">Demo Portal Access</p>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <div className="flex items-center justify-center space-x-2 text-blue-400 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Demo Available</span>
                </div>
                <p className="text-gray-300 text-sm">No registration required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPortal;