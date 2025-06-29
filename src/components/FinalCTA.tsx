import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-pink-900 via-rose-900 to-red-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
          The next Enron is brewing. Will you shield it—<br />
          <span className="text-red-400">or expose it?</span>
        </h2>
        
        <a 
          href="https://backfeed.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-white to-gray-100 text-red-900 px-8 py-4 rounded-lg text-lg font-bold hover:from-gray-100 hover:to-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 mx-auto w-fit"
        >
          <span>How can Aegis AI 📣 help you today?</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;