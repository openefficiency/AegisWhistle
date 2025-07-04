import React from 'react';
import { Users, FileText, Headphones, MessageSquare, TrendingUp, Search, Shield, Zap } from 'lucide-react';

const UseCasesSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-blue-400">AI Employee Engagement Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From advanced employee engagement analytics to HR automation and legal compliance, 
            Aegis AI 📣 transforms how businesses leverage AI for employee voice analysis and workplace intelligence.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* AI Employee Engagement Excellence */}
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
            {/* Visual Illustration */}
            <div className="mb-8 relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-400/30">
                {/* AI Employee Engagement Visual */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* AI Audio Waves */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-blue-400 to-indigo-400 rounded-full"
                        style={{
                          width: '3px',
                          height: `${15 + Math.sin(i) * 10}px`,
                          animation: `employeeWave${i} ${1.5 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                </div>
                
                {/* AI Sentiment Indicators */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-green-500/20 rounded-lg p-2 text-center">
                    <div className="text-green-400 font-bold text-sm">+0.8</div>
                    <div className="text-green-300 text-xs">AI Positive</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-2 text-center">
                    <div className="text-blue-400 font-bold text-sm">94%</div>
                    <div className="text-blue-300 text-xs">AI Confidence</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                    <div className="text-purple-400 font-bold text-sm">Real-time</div>
                    <div className="text-purple-300 text-xs">AI Analysis</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">AI Employee Engagement Excellence</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Automatically analyze employee communications with advanced AI, detect sentiment patterns, 
              and provide real-time insights to improve employee engagement, service quality, and workplace satisfaction 
              through intelligent AI-powered employee voice analysis.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Real-time AI employee sentiment analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Automated AI employee communication summarization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">AI-powered employee engagement quality assurance</span>
              </div>
            </div>
          </div>

          {/* AI Content & Media Processing */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
            {/* Visual Illustration */}
            <div className="mb-8 relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                {/* AI Content Processing Visual */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* AI Processing Arrow */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <Search className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* AI Content Categories */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                    <div className="text-purple-400 font-bold text-sm">AI Text</div>
                    <div className="text-purple-300 text-xs">Transcribed</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-2 text-center">
                    <div className="text-pink-400 font-bold text-sm">AI Tags</div>
                    <div className="text-pink-300 text-xs">Categorized</div>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-2 text-center">
                    <div className="text-teal-400 font-bold text-sm">AI Insights</div>
                    <div className="text-teal-300 text-xs">Extracted</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">AI Content & Media Intelligence</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform employee audio reports into searchable, actionable insights using advanced AI content processing 
              and intelligent media analysis for comprehensive employee engagement understanding.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Automatic AI employee voice transcription</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">AI-powered employee content categorization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Intelligent AI employee insight extraction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional AI Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Legal & Compliance */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-bold text-lg mb-3">AI Legal & Compliance</h4>
            <p className="text-gray-300 text-sm">
              Ensure regulatory compliance with automated AI monitoring and documentation of sensitive employee communications 
              for legal protection and workplace compliance.
            </p>
          </div>

          {/* AI HR Analytics */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-bold text-lg mb-3">AI HR Analytics</h4>
            <p className="text-gray-300 text-sm">
              Gain deep AI-powered insights into employee satisfaction, stress levels, and workplace dynamics 
              through advanced employee voice analysis and sentiment intelligence.
            </p>
          </div>

          {/* AI Crisis Management */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-bold text-lg mb-3">AI Crisis Management</h4>
            <p className="text-gray-300 text-sm">
              Rapidly identify and respond to critical employee situations through real-time AI audio monitoring 
              and intelligent alert systems for proactive crisis management.
            </p>
          </div>
        </div>

        {/* AI Employee Engagement CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Employee Engagement with AI?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses already revolutionizing their employee engagement strategies with Aegis AI 📣 technology.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">1000+</div>
                <p className="text-gray-400 text-sm">AI-Powered Businesses</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">99.7%</div>
                <p className="text-gray-400 text-sm">AI Accuracy Rate</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <p className="text-gray-400 text-sm">AI Employee Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for use case animations */}
      <style jsx>{`
        @keyframes employeeWave0 {
          0%, 100% { height: 15px; opacity: 0.7; }
          50% { height: 25px; opacity: 1; }
        }
        
        @keyframes employeeWave1 {
          0%, 100% { height: 20px; opacity: 0.6; }
          50% { height: 30px; opacity: 1; }
        }
        
        @keyframes employeeWave2 {
          0%, 100% { height: 18px; opacity: 0.8; }
          50% { height: 28px; opacity: 1; }
        }
        
        @keyframes employeeWave3 {
          0%, 100% { height: 22px; opacity: 0.7; }
          50% { height: 32px; opacity: 1; }
        }
        
        @keyframes employeeWave4 {
          0%, 100% { height: 16px; opacity: 0.6; }
          50% { height: 26px; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection;