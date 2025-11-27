import React from 'react';
import { AlignLeft, CheckCircle2, Zap } from 'lucide-react';
import { KEY_FEATURES } from '../constants';

const Description: React.FC = () => {
  return (
    <section className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Text */}
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <AlignLeft className="text-lime-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Full Description</h2>
        </div>
        
        <div className="text-slate-300 leading-relaxed space-y-4">
          <p>
            Plants vs Zombies 2 is the award-winning hit action-strategy adventure where you meet, greet, and defeat legions of hilarious zombies from the dawn of time, to the end of days. Amass an army of amazing plants, supercharge them with Plant Food, and devise the ultimate plan to protect your brain.
          </p>
          <p>
            With this <strong>MOD version (Unlimited Coins/Gems/Suns)</strong>, you gain unprecedented freedom. Forget the grind for resources; unlock premium plants instantly, upgrade your defenses to the max level immediately, and deploy infinite sun power during intense waves. Whether you are battling in Ancient Egypt or the Far Future, this modification ensures you have the firepower to dominate every era.
          </p>
          <p>
            Experience enhanced gameplay balance, smoother performance on high-refresh-rate devices, and access to exclusive content usually locked behind paywalls.
          </p>
        </div>
      </div>

      {/* Features Sidebar */}
      <div className="md:col-span-1">
        <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-6 h-full">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-yellow-400" size={20} />
            <h3 className="text-lg font-bold text-white">MOD Features</h3>
          </div>
          
          <ul className="space-y-4">
            {KEY_FEATURES.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-lime-500 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-slate-300 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Description;