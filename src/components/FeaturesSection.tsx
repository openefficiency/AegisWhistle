import React, { useState } from 'react';
import { Shield, TrendingUp, Link, Coins, Play, Star } from 'lucide-react';
import PilotWaitlistModal from './PilotWaitlistModal';

const FeaturesSection: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-fuchsia-900 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Advanced AI Employee Engagement Technology</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Aegis AI 📣 Revolutionizes<br />
                <span className="text-blue-400">Employee Engagement</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8">
                Transform your workplace with cutting-edge AI employee engagement technology that delivers unprecedented results. 
                Our AI-powered platform provides real-time sentiment analysis, fraud detection, and anonymous reporting capabilities 
                that traditional employee engagement solutions simply cannot match.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-gradient-to-r from-white to-gray-100 text-black px-8 py-4 rounded-lg font-semibold hover:from-gray-100 hover:to-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                  aria-label="Apply for Aegis AI Employee Engagement Pilot Program"
                >
                  <span>Apply for Aegis AI 📣 Employee Engagement Pilot</span>
                  <span>→</span>
                </button>
                <a 
                  href="https://backfeed.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white border border-white/30 px-8 py-4 rounded-lg hover:border-white/50 transition-all duration-300 hover:bg-white/10 font-semibold backdrop-blur-sm flex items-center justify-center space-x-2 hover:scale-105"
                  aria-label="Watch Aegis AI Employee Engagement Platform Demo"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch AI Employee Engagement Demo</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300">Trusted by forward-thinking businesses for AI employee engagement worldwide</span>
              </div>
            </div>
            
            <div className="bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">AI Employee Engagement Processing</span>
                </div>
                <span className="text-green-400 text-sm bg-green-400/20 px-3 py-1 rounded-full animate-pulse">Live AI</span>
              </div>
              
              {/* Enhanced Voice Visualization */}
              <div className="py-8">
                <div className="space-y-3 mb-6">
                  {/* Voice Line 1 - Green */}
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full animate-pulse" 
                         style={{
                           width: '85%',
                           animation: 'voiceWave1 2s ease-in-out infinite'
                         }}></div>
                  </div>
                  
                  {/* Voice Line 2 - Purple */}
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full" 
                         style={{
                           width: '65%',
                           animation: 'voiceWave2 1.8s ease-in-out infinite 0.3s'
                         }}></div>
                  </div>
                  
                  {/* Voice Line 3 - Pink */}
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-3 rounded-full" 
                         style={{
                           width: '75%',
                           animation: 'voiceWave3 2.2s ease-in-out infinite 0.6s'
                         }}></div>
                  </div>
                </div>
                
                <p className="text-white text-lg text-center">AI processing employee sentiment with 98.5% accuracy</p>
                <p className="text-gray-400 text-sm text-center mt-2 flex items-center justify-center space-x-1">
                  <span>Advanced AI employee engagement analysis active...</span>
                  <span className="text-lg">🎙️</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-4">
              Your Employee Voice. <span className="text-blue-400">AI-Amplified.</span>
            </h3>
            <p className="text-gray-300 text-center mb-12">Aegis AI employee engagement platform combines:</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Military-Grade AI Security</h4>
                <p className="text-gray-300 text-sm">Advanced AI encryption with Tor networks + zero-knowledge proofs for employee protection</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">AI-Driven Employee Analytics</h4>
                <p className="text-gray-300 text-sm">94% fraud detection accuracy with real-time employee sentiment analysis</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <Link className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Blockchain Employee Records</h4>
                <p className="text-gray-300 text-sm">Tamper-proof employee data with Hyperledger + IPFS technology</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
                <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">AI-Verified Employee Rewards</h4>
                <p className="text-gray-300 text-sm">Secure crypto payouts for verified employee contributions</p>
              </div>
            </div>
          </div>

          {/* AI Footer Section */}
          <div className="mt-16 text-center border-t border-white/10 pt-12">
            <p className="text-gray-300 text-lg mb-2 flex items-center justify-center space-x-2">
              <span>AI employee engagement technology that actually listens and understands your workforce.</span>
              <span className="text-xl">🎙️</span>
            </p>
            <p className="text-gray-400 text-sm">
              Processing employee audio and sentiment data with 99.7% AI accuracy
            </p>
          </div>
        </div>
        
        {/* Custom CSS for voice wave animations */}
        <style jsx>{`
          @keyframes voiceWave1 {
            0%, 100% { width: 85%; opacity: 0.8; }
            50% { width: 95%; opacity: 1; }
          }
          
          @keyframes voiceWave2 {
            0%, 100% { width: 65%; opacity: 0.7; }
            50% { width: 80%; opacity: 1; }
          }
          
          @keyframes voiceWave3 {
            0%, 100% { width: 75%; opacity: 0.6; }
            50% { width: 90%; opacity: 1; }
          }
        `}</style>
      </section>

      <PilotWaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </>
  );
};

export default FeaturesSection;