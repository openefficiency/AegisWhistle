import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import MonitoringSection from './components/MonitoringSection';
import LiveAudioAnalysis from './components/LiveAudioAnalysis';
import UseCasesSection from './components/UseCasesSection';
import WhyChooseSection from './components/WhyChooseSection';
import HowItWorks from './components/HowItWorks';
import VoiceAnalysis from './components/VoiceAnalysis';
import PilotSpotlight from './components/PilotSpotlight';
import FinalCTA from './components/FinalCTA';
import DemoPortal from './components/DemoPortal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <MonitoringSection />
      <LiveAudioAnalysis />
      <UseCasesSection />
      <WhyChooseSection />
      <HowItWorks />
      <VoiceAnalysis />
      <PilotSpotlight />
      <FinalCTA />
      <DemoPortal />
      <Footer />
    </div>
  );
}

export default App;