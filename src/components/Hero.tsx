import React from 'react';
import { Mic, CheckCircle, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">AI Employee Engagement • Speak Safely • Be Heard • Change Everything</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The World's #1 <span className="text-blue-400">AI-Powered Employee Engagement Platform</span><br />
            with Advanced <span className="text-green-400">Aegis AI</span> Technology
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Aegis AI 📣 revolutionizes employee engagement with military-grade anonymity, real-time sentiment analysis, and AI-driven fraud detection. 
            Empower your workforce with the most advanced AI employee engagement solution—<br />
            <span className="text-blue-300 font-semibold">99.7% accuracy guaranteed, 100% anonymous, completely secure.</span>
          </p>
        </div>

        {/* Enhanced AI Assistant Interface */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 w-full max-w-md hover:border-purple-400/50 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Aegis AI 📣 Employee Engagement Assistant</span>
              </div>
              <span className="text-green-400 text-sm bg-green-400/20 px-2 py-1 rounded-full animate-pulse">Live AI</span>
            </div>
            
            {/* Enhanced Voice Visualization */}
            <div className="space-y-3 mb-4">
              {/* Voice Line 1 - Green with dynamic animation */}
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" 
                     style={{
                       width: '80%',
                       animation: 'heroVoice1 2.5s ease-in-out infinite'
                     }}></div>
              </div>
              
              {/* Voice Line 2 - Purple with offset animation */}
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" 
                     style={{
                       width: '60%',
                       animation: 'heroVoice2 2s ease-in-out infinite 0.4s'
                     }}></div>
              </div>
              
              {/* Voice Line 3 - Pink with different timing */}
              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-2 rounded-full" 
                     style={{
                       width: '67%',
                       animation: 'heroVoice3 2.2s ease-in-out infinite 0.8s'
                     }}></div>
              </div>
            </div>
            
            <a 
              href="https://backfeed.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Experience Aegis AI Employee Engagement Platform Demo"
            >
              <Mic className="w-5 h-5" />
              <span>Experience Aegis AI 📣 Employee Engagement</span>
            </a>
            
            <p className="text-gray-400 text-xs text-center mt-3 flex items-center justify-center space-x-1">
              <span>Powered by Advanced</span>
              <span className="text-lg">🎙️</span>
              <span>AI Technology</span>
            </p>
          </div>
        </div>

        {/* Enhanced Statistics with SEO Keywords */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">72%</div>
            <p className="text-gray-300 text-sm">Employees Face Retaliation</p>
            <p className="text-gray-400 text-xs">Without AI Protection</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">99.7%</div>
            <p className="text-gray-300 text-sm">AI Detection Accuracy</p>
            <p className="text-gray-400 text-xs">Industry-Leading Precision</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">15%</div>
            <p className="text-gray-300 text-sm">Employee Reward Rate</p>
            <p className="text-gray-400 text-xs">Crypto Compensation</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">100%</div>
            <p className="text-gray-300 text-sm">Anonymity Guaranteed</p>
            <p className="text-gray-400 text-xs">Military-Grade Security</p>
          </div>
        </div>

        {/* SEO-Enhanced Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">
            Trusted by Fortune 500 companies for AI-powered employee engagement solutions
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <span>✓ SOC 2 Certified AI Platform</span>
            <span>✓ GDPR Compliant Employee Data</span>
            <span>✓ 24/7 AI Monitoring</span>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for hero voice wave animations */}
      <style jsx>{`
        @keyframes heroVoice1 {
          0%, 100% { width: 80%; opacity: 0.7; }
          50% { width: 90%; opacity: 1; }
        }
        
        @keyframes heroVoice2 {
          0%, 100% { width: 60%; opacity: 0.6; }
          50% { width: 75%; opacity: 1; }
        }
        
        @keyframes heroVoice3 {
          0%, 100% { width: 67%; opacity: 0.8; }
          50% { width: 85%; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;