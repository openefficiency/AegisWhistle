import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

const EmpowerEmployeesCTA: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Keen to empower<br />
            <span className="text-blue-400">Your Employees</span><br />
            with Aegis AI 📣?
          </h2>
          
          <button 
            onClick={openPopup}
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Talk to Aegis AI 📣 itself to know more about her</span>
          </button>
          
          <p className="text-gray-300 text-sm">
            Open Popup to interact with Aegis | Click Start after popup launches
          </p>
        </div>
      </section>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[999999999] bg-black/50 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="fixed top-4 right-4 z-[9999999999] bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Iframe Container */}
          <div className="fixed bottom-0 right-5 z-[999999999]">
            <iframe 
              src="https://spaces.napsterai.com/view/N2NlNjVhNGQtMzEyMC00M2Q5LTlkYTItMmYwZjZjY2M5YzhhOmFmN2M3M2Q1LWZiZDQtNDg2Ni04ZmIzLWY3OGM2ODM5MDBjZg==" 
              style={{
                width: '1280px',
                aspectRatio: '16/9',
                background: 'transparent'
              }}
              frameBorder="0" 
              allow="microphone; camera; autoplay; clipboard-write; encrypted-media" 
              allowTransparency={true}
              allowFullScreen 
              referrerPolicy="strict-origin-when-cross-origin" 
              title="Napster Spaces Experience"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EmpowerEmployeesCTA;