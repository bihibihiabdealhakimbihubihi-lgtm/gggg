import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© 2025 likomy.site — All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-lime-400 transition-colors">DMCA</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-1 text-slate-600">
          Made with <Heart size={12} className="text-red-900" /> for Gamers
        </div>
      </div>
    </footer>
  );
};

export default Footer;