import React from 'react';
import { Upload, Brain, Scale } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          How Aegis AI Employee Engagement Works
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
          Our AI-powered employee engagement platform transforms workplace communication through three simple steps, 
          delivering unprecedented employee voice analysis and workplace intelligence.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Anonymous AI Employee Reporting</h3>
            <p className="text-gray-300">
              Employees share workplace insights anonymously through our AI-powered platform—no name, email, or digital trace. 
              Optional: Upload documents, photos, or recordings securely with military-grade AI encryption for complete employee protection.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Aegis AI Employee Intelligence Takes Over</h3>
            <p className="text-gray-300">
              Our advanced AI employee engagement system analyzes communication patterns using natural language processing; 
              Agentic AI prioritizes high-risk employee cases and workplace issues with 99.7% accuracy for immediate action.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI-Driven Employee Justice</h3>
            <p className="text-gray-300">
              Track progress via anonymized AI updates and real-time employee engagement insights. 
              Earn verified rewards through our AI-powered compensation system when workplace improvements are achieved and funds are recovered.
            </p>
          </div>
        </div>

        {/* Additional AI Employee Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">AI Employee Engagement Advantages</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-white font-semibold mb-3">Advanced AI Processing:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Real-time employee sentiment analysis</li>
                <li>• AI-powered workplace pattern recognition</li>
                <li>• Automated employee communication categorization</li>
                <li>• Intelligent employee risk assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Employee Protection Features:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Military-grade AI anonymity protection</li>
                <li>• Blockchain-secured employee data</li>
                <li>• Zero-knowledge employee identity proofs</li>
                <li>• AI-verified secure compensation system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;