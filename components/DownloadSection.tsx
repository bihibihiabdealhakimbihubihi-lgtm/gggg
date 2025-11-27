import React from 'react';
import { Download, Smartphone, Box } from 'lucide-react';
import { DOWNLOAD_OPTIONS } from '../constants';

const DownloadSection: React.FC = () => {
  return (
    <section id="download-section" className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Download Links</h2>
        <p className="text-slate-400">Select the version you want to install.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOWNLOAD_OPTIONS.map((option, index) => (
          <div 
            key={index}
            className={`relative group rounded-2xl p-6 transition-all duration-300 ${
              option.recommended 
                ? 'bg-slate-900 border-2 border-lime-500 shadow-[0_0_30px_-10px_rgba(132,204,22,0.3)]' 
                : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
            }`}
          >
            {option.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Recommended
              </div>
            )}

            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-slate-800 text-lime-400">
                  <Box size={24} />
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-500">Version</span>
                  <span className="block text-sm font-mono text-white">{option.version}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1">
                  <Box size={14} /> {option.size}
                </span>
                <span className="flex items-center gap-1">
                  <Smartphone size={14} /> Android 5.0+
                </span>
              </div>

              <div className="mt-auto">
                <button className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  option.recommended
                    ? 'bg-lime-500 hover:bg-lime-400 text-slate-900 shadow-lg shadow-lime-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                }`}>
                  <Download size={18} />
                  DOWNLOAD {option.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-sm text-center">
        <strong>Note:</strong> If the download doesn't start, try disabling your adblocker or open the link in a new tab.
      </div>
    </section>
  );
};

export default DownloadSection;