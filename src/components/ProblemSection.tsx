import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Why Traditional Employee Engagement Fails
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Without AI-powered employee engagement solutions, workplace silence costs organizations trillions in lost productivity, fraud, and employee turnover.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="text-4xl font-bold text-red-400 mb-4">72%</div>
            <h3 className="text-xl font-semibold text-white mb-3">Employee Retaliation Crisis</h3>
            <p className="text-gray-300">Face retaliation when reporting workplace issues without AI-powered anonymity protection (Deloitte, 2023)</p>
          </div>
          <div className="bg-black/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="text-4xl font-bold text-orange-400 mb-4">63%</div>
            <h3 className="text-xl font-semibold text-white mb-3">Fraud Detection Gap</h3>
            <p className="text-gray-300">Fraud exposed by employee tips, but most go unreported without proper AI employee engagement systems (ACFE)</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">The Cost of Silence</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Legacy employee engagement systems leak identities, delay justice, and let fraudsters win. 
            <span className="text-red-400 font-semibold"> Without AI-powered solutions like Aegis AI, organizations lose billions annually</span> 
            to preventable fraud, compliance violations, and employee disengagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;