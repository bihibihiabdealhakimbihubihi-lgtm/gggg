import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Screenshots from './components/Screenshots';
import Description from './components/Description';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-lime-500/30 selection:text-lime-200">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Hero />
        <Screenshots />
        <div className="bg-slate-900/30 rounded-3xl p-6 md:p-10 border border-white/5 backdrop-blur-sm">
          <Description />
        </div>
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;