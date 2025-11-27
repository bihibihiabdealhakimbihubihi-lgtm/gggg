import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { BREADCRUMBS, SITE_NAME } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-950/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-lime-500 flex items-center justify-center text-slate-950 font-bold text-lg">
            L
          </div>
          <span className="text-xl font-bold tracking-tight text-white">{SITE_NAME}</span>
        </div>

        {/* Desktop Breadcrumbs & Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center text-sm text-slate-400">
            {BREADCRUMBS.map((crumb, index) => (
              <React.Fragment key={crumb}>
                <a href="#" className="hover:text-lime-400 transition-colors">{crumb}</a>
                {index < BREADCRUMBS.length - 1 && (
                  <span className="mx-2 text-slate-600">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 text-lime-400 text-sm font-medium hover:bg-lime-500/10 transition-all">
            <Download size={16} />
            ORIGINAL
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-4 py-4 space-y-4">
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              {BREADCRUMBS.map((crumb) => (
                <a key={crumb} href="#" className="block py-2 hover:text-lime-400 border-b border-white/5 last:border-0">
                  {crumb}
                </a>
              ))}
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-800 text-lime-400 font-medium">
              <Download size={16} />
              DOWNLOAD ORIGINAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;