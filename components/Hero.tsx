import React from 'react';
import { ShieldCheck, Star, Calendar, HardDrive, Cpu, Download } from 'lucide-react';
import { GAME_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-lime-500/20 blur-[120px] rounded-full -z-10" />

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/50">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Icon Section */}
          <div className="flex-shrink-0 relative mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 group">
              <img 
                src={GAME_INFO.iconUrl} 
                alt="Game Icon" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-slate-900 text-lime-400 p-2 rounded-full border border-lime-500/30 shadow-lg">
              <ShieldCheck size={20} />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-grow text-center md:text-left space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={12} /> Verified & Safe
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {GAME_INFO.title}
              </h1>
              <p className="text-slate-400 font-medium">{GAME_INFO.developer}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold mb-1">
                  {GAME_INFO.rating} <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs text-slate-500">{GAME_INFO.reviews} Reviews</span>
              </div>
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-blue-400 text-sm font-bold mb-1">
                  <Download size={14} /> {GAME_INFO.downloads}
                </div>
                <span className="text-xs text-slate-500">Downloads</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold mb-1">
                  <HardDrive size={14} /> {GAME_INFO.size}
                </div>
                <span className="text-xs text-slate-500">Size</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-purple-400 text-sm font-bold mb-1">
                  <Calendar size={14} /> {GAME_INFO.updatedDate}
                </div>
                <span className="text-xs text-slate-500">Updated</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4">
              <a 
                href="#download-section"
                className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-lime-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={20} strokeWidth={2.5} />
                GO TO DOWNLOAD
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;