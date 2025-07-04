import React from 'react';
import { Activity } from 'lucide-react';

const MonitoringSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Real-time AI Employee Engagement Analysis</h3>
              <span className="text-green-400 text-sm bg-green-400/20 px-3 py-1 rounded-full">AI Active</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">AI Fraud Detection</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full w-[99.7%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white">Employee Sentiment Analysis</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[99.7%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white">Employee Identity Protection</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">AI analyzing employee engagement reports in real-time</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Continuous AI Employee Monitoring</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our advanced AI employee engagement system continuously monitors and analyzes employee reports, 
              ensuring critical workplace issues are identified and addressed immediately with unprecedented accuracy.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15%</div>
                <p className="text-gray-300 text-sm">Employee Reward Rate</p>
                <p className="text-gray-400 text-xs">AI-Verified Compensation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <p className="text-gray-300 text-sm">Employee Anonymity</p>
                <p className="text-gray-400 text-xs">AI-Protected Identity</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">AI Employee Engagement Benefits:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Real-time employee sentiment tracking</li>
                <li>• Automated workplace issue detection</li>
                <li>• AI-powered employee feedback analysis</li>
                <li>• Predictive employee engagement insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;