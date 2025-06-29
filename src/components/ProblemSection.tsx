import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Why Silence Costs Trillions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="text-4xl font-bold text-red-400 mb-4">72%</div>
            <p className="text-gray-300">Face retaliation (Deloitte, 2023)</p>
          </div>
          <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="text-4xl font-bold text-orange-400 mb-4">63%</div>
            <p className="text-gray-300">Fraud exposed by tips, but most go unreported (ACFE)</p>
          </div>
        </div>
        
        <p className="text-xl text-gray-300">
          Legacy systems leak identities, delay justice, and let fraudsters win
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;