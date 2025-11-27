import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { SCREENSHOT_CONFIG } from '../constants';

const Screenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images, autoPlay, intervalSeconds } = SCREENSHOT_CONFIG;

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [autoPlay, images.length, intervalSeconds]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-8 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <ImageIcon className="text-lime-400" size={24} />
        <h2 className="text-2xl font-bold text-white">{SCREENSHOT_CONFIG.title}</h2>
      </div>

      <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-slate-900">
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={src} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-lime-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-lime-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-lime-500' : 'bg-white/40 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;