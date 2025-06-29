import React from 'react';
import { Upload, Brain, Scale } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Report Anonymously</h3>
            <p className="text-gray-300">
              Share what you know—no name, email, or trace. Optional: Upload documents, photos, or recordings securely
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Aegis AI Takes Over</h3>
            <p className="text-gray-300">
              Our NLP analyzes patterns; Agentic AI prioritizes high-risk cases.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Justice in Motion</h3>
            <p className="text-gray-300">
              Track progress via anonymized updates. Earn rewards if funds are recovered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;