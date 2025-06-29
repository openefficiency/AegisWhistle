import React from 'react';
import { Cpu, Shield, Zap, Globe, Target, Puzzle } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 relative overflow-hidden">
      {/* Background Fluid Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-500 to-violet-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Aegis AI 📣?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our advanced AI technology delivers unmatched performance in audio analysis and understanding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Advanced Audio Processing */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon with Animation */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Advanced Audio Processing</h3>
              <p className="text-gray-300 leading-relaxed">
                State-of-the-art algorithms that process and understand audio with human-level comprehension.
              </p>
              
              {/* Visual Indicator */}
              <div className="mt-6 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-blue-400 to-indigo-400 rounded-full"
                      style={{
                        height: `${12 + i * 4}px`,
                        animation: `processingWave${i} ${1.5 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                <span className="text-blue-400 text-sm font-medium">Processing...</span>
              </div>
            </div>
          </div>

          {/* Enterprise Security */}
          <div className="group bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level encryption and security protocols to protect your sensitive audio data.
              </p>
              
              {/* Security Indicator */}
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Secured</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Real-time Analysis */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast processing that delivers insights and responses in milliseconds.
              </p>
              
              {/* Speed Indicator */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm">Processing Speed</span>
                  <span className="text-purple-300 text-sm font-bold">{'< 100ms'}</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full" 
                       style={{
                         width: '95%',
                         animation: 'speedPulse 2s ease-in-out infinite'
                       }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-language Support */}
          <div className="group bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Multi-language Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Understand and process audio in over 100 languages with native-level accuracy.
              </p>
              
              {/* Language Indicators */}
              <div className="mt-6 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {['EN', 'ES', 'FR', 'DE', 'ZH'].map((lang, i) => (
                    <div
                      key={lang}
                      className="w-8 h-6 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 border border-cyan-400/30 rounded text-cyan-300 text-xs flex items-center justify-center font-medium"
                      style={{
                        animation: `langPulse 2s ease-in-out infinite ${i * 0.3}s`
                      }}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
                <span className="text-cyan-400 text-sm">+95 more</span>
              </div>
            </div>
          </div>

          {/* 99.7% Accuracy */}
          <div className="group bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">99.7% Accuracy</h3>
              <p className="text-gray-300 leading-relaxed">
                Industry-leading accuracy rates that you can trust for mission-critical applications.
              </p>
              
              {/* Accuracy Meter */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400 text-sm">Accuracy Rate</span>
                  <span className="text-orange-300 text-sm font-bold">99.7%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full relative" 
                       style={{
                         width: '99.7%',
                         animation: 'accuracyPulse 3s ease-in-out infinite'
                       }}>
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Easy Integration */}
          <div className="group bg-gradient-to-br from-pink-900/30 to-rose-900/30 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Puzzle className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Simple APIs and SDKs that integrate seamlessly with your existing systems.
              </p>
              
              {/* Integration Steps */}
              <div className="mt-6 space-y-2">
                {['Connect', 'Configure', 'Deploy'].map((step, i) => (
                  <div key={step} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-400/50 to-transparent rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to experience the future of audio intelligence?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses already transforming their operations with Aegis AI 📣.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">1000+</div>
                <p className="text-gray-400 text-sm">Active Users</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">99.7%</div>
                <p className="text-gray-400 text-sm">Accuracy Rate</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes processingWave0 {
          0%, 100% { height: 12px; opacity: 0.7; }
          50% { height: 20px; opacity: 1; }
        }
        
        @keyframes processingWave1 {
          0%, 100% { height: 16px; opacity: 0.6; }
          50% { height: 24px; opacity: 1; }
        }
        
        @keyframes processingWave2 {
          0%, 100% { height: 20px; opacity: 0.8; }
          50% { height: 28px; opacity: 1; }
        }
        
        @keyframes processingWave3 {
          0%, 100% { height: 24px; opacity: 0.7; }
          50% { height: 32px; opacity: 1; }
        }
        
        @keyframes speedPulse {
          0%, 100% { opacity: 0.8; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.02); }
        }
        
        @keyframes accuracyPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        
        @keyframes langPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;