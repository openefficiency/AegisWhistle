import React from 'react';
import { Mic, Activity } from 'lucide-react';

const VoiceAnalysis: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              AI-Powered Employee Voice Analysis
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our advanced AI employee engagement system analyzes employee voice reports in real-time, 
              detecting communication patterns, sentiment levels, and urgency indicators to prioritize critical workplace cases 
              and deliver actionable employee engagement insights.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
                <p className="text-gray-300 text-sm">AI Detection Accuracy</p>
                <p className="text-gray-400 text-xs">Employee Voice Analysis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2.3s</div>
                <p className="text-gray-300 text-sm">AI Processing Time</p>
                <p className="text-gray-400 text-xs">Real-time Employee Analysis</p>
              </div>
            </div>

            {/* AI Employee Features */}
            <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">AI Employee Voice Capabilities:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Multi-language employee sentiment detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">AI-powered employee emotional pattern recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Employee stress level AI monitoring and analysis</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">AI Employee Voice Analysis Active</span>
              </div>
              <span className="text-purple-400 text-sm bg-purple-400/20 px-3 py-1 rounded-full animate-pulse">AI Processing</span>
            </div>
            
            {/* Enhanced AI Voice Analysis Visualization */}
            <div className="mb-6">
              <div className="space-y-4">
                {/* Main AI processing bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 h-4 rounded-full" 
                       style={{
                         width: '85%',
                         animation: 'analysisWave 3s ease-in-out infinite'
                       }}></div>
                </div>
                
                {/* Secondary AI analysis bars */}
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
            
            <p className="text-white text-center font-medium">AI analyzing employee voice reports with 99.7% accuracy</p>
            <p className="text-gray-400 text-sm text-center mt-2">Real-time employee engagement pattern recognition active</p>
            
            {/* AI Metrics */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-green-400 font-bold text-lg">94%</div>
                  <div className="text-gray-400 text-xs">Employee Satisfaction</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg">1.2M</div>
                  <div className="text-gray-400 text-xs">AI Samples/Sec</div>
                </div>
              </div>
            </div>
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