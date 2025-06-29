import React from 'react';
import { Activity } from 'lucide-react';

const MonitoringSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Real-time Report Analysis</h3>
              <span className="text-green-400 text-sm bg-green-400/20 px-3 py-1 rounded-full">Active</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Fraud Detection</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full w-[99.7%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white">Threat Assessment</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[99.7%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white">Identity Protection</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">Analyzing whistleblower reports in real-time</p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Continuous Monitoring</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our system continuously monitors and analyzes reports, ensuring critical issues are identified and addressed immediately.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15%</div>
                <p className="text-gray-300 text-sm">Reward Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <p className="text-gray-300 text-sm">Anonymity Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;