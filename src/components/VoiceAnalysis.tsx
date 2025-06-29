import React from 'react';
import { Mic, Activity } from 'lucide-react';

const VoiceAnalysis: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              AI-Powered Voice Analysis
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our advanced AI system analyzes voice reports in real-time, detecting patterns and urgency levels to prioritize critical cases.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
                <p className="text-gray-300 text-sm">Detection Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2.3s</div>
                <p className="text-gray-300 text-sm">Processing Time</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Voice Analysis Active</span>
              </div>
              <span className="text-purple-400 text-sm bg-purple-400/20 px-3 py-1 rounded-full animate-pulse">Processing</span>
            </div>
            
            {/* Enhanced Voice Analysis Visualization */}
            <div className="mb-6">
              <div className="space-y-4">
                {/* Main processing bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 h-4 rounded-full" 
                       style={{
                         width: '85%',
                         animation: 'analysisWave 3s ease-in-out infinite'
                       }}></div>
                </div>
                
                {/* Secondary analysis bars */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div className="bg-green-400 h-2 rounded-full" 
                         style={{
                           width: '70%',
                           animation: 'subWave1 2s ease-in-out infinite'
                         }}></div>
                  </div>
                  <div className="bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-400 h-2 rounded-full" 
                         style={{
                           width: '85%',
                           animation: 'subWave2 2.5s ease-in-out infinite 0.5s'
                         }}></div>
                  </div>
                  <div className="bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div className="bg-purple-400 h-2 rounded-full" 
                         style={{
                           width: '60%',
                           animation: 'subWave3 1.8s ease-in-out infinite 1s'
                         }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-white text-center font-medium">Analyzing whistleblower reports with 99.7% accuracy</p>
            <p className="text-gray-400 text-sm text-center mt-2">Real-time pattern recognition active</p>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for voice analysis animations */}
      <style jsx>{`
        @keyframes analysisWave {
          0%, 100% { width: 85%; opacity: 0.8; }
          25% { width: 95%; opacity: 1; }
          50% { width: 75%; opacity: 0.9; }
          75% { width: 90%; opacity: 1; }
        }
        
        @keyframes subWave1 {
          0%, 100% { width: 70%; }
          50% { width: 85%; }
        }
        
        @keyframes subWave2 {
          0%, 100% { width: 85%; }
          50% { width: 95%; }
        }
        
        @keyframes subWave3 {
          0%, 100% { width: 60%; }
          50% { width: 80%; }
        }
      `}</style>
    </section>
  );
};

export default VoiceAnalysis;