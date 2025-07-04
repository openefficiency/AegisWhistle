import React from 'react';
import { Activity, Mic, TrendingUp } from 'lucide-react';

const LiveAudioAnalysis: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg flex items-center space-x-2">
                <Mic className="w-5 h-5 text-emerald-400" />
                <span>Live AI Employee Voice Analysis</span>
              </h3>
              <span className="text-green-400 text-sm bg-green-400/20 px-3 py-1 rounded-full animate-pulse">AI Active</span>
            </div>
            
            <div className="space-y-6">
              {/* Employee Sentiment Score */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">Employee Sentiment Score</span>
                </div>
                <span className="text-emerald-400 font-bold text-xl">+0.85</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full relative" 
                     style={{
                       width: '85%',
                       animation: 'sentimentPulse 2.5s ease-in-out infinite'
                     }}>
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* AI Confidence Level */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">AI Confidence Level</span>
                </div>
                <span className="text-cyan-400 font-bold text-xl">99.7%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full relative" 
                     style={{
                       width: '99.7%',
                       animation: 'confidencePulse 2s ease-in-out infinite'
                     }}>
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Real-time Employee Audio Waveform */}
              <div className="mt-8">
                <p className="text-gray-300 text-sm mb-4">Real-time Employee Voice Processing</p>
                <div className="flex items-end justify-center space-x-1 h-16">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-full"
                      style={{
                        width: '4px',
                        height: `${Math.random() * 60 + 10}px`,
                        animation: `audioBar${i % 4} ${1.5 + (i % 3) * 0.5}s ease-in-out infinite ${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-emerald-300 font-semibold text-center">
                AI processes 1.2M employee audio samples per second
              </p>
              <p className="text-gray-400 text-sm text-center mt-2">
                Real-time employee sentiment and engagement analysis
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Advanced AI Employee Voice Intelligence
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our cutting-edge AI employee engagement technology processes employee voice communications in real-time, 
              analyzing sentiment, confidence levels, and emotional patterns to provide unprecedented insights into 
              employee engagement and workplace dynamics.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.7%</div>
                <p className="text-gray-300 text-sm">AI Processing Accuracy</p>
                <p className="text-gray-400 text-xs">Employee Voice Analysis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1.2M</div>
                <p className="text-gray-300 text-sm">Samples/Second</p>
                <p className="text-gray-400 text-xs">Real-time AI Processing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">Real-time</div>
                <p className="text-gray-300 text-sm">Employee Analysis</p>
                <p className="text-gray-400 text-xs">Instant AI Insights</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-300 text-sm">AI Monitoring</p>
                <p className="text-gray-400 text-xs">Continuous Engagement</p>
              </div>
            </div>

            {/* Additional AI Employee Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Multi-language employee sentiment detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">AI-powered employee emotional pattern recognition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Employee stress level AI monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for audio analysis animations */}
      <style jsx>{`
        @keyframes sentimentPulse {
          0%, 100% { opacity: 0.8; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.02); }
        }
        
        @keyframes confidencePulse {
          0%, 100% { opacity: 0.9; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.01); }
        }
        
        @keyframes audioBar0 {
          0%, 100% { height: 20px; opacity: 0.7; }
          50% { height: 50px; opacity: 1; }
        }
        
        @keyframes audioBar1 {
          0%, 100% { height: 30px; opacity: 0.6; }
          50% { height: 45px; opacity: 1; }
        }
        
        @keyframes audioBar2 {
          0%, 100% { height: 25px; opacity: 0.8; }
          50% { height: 55px; opacity: 1; }
        }
        
        @keyframes audioBar3 {
          0%, 100% { height: 35px; opacity: 0.7; }
          50% { height: 40px; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default LiveAudioAnalysis;