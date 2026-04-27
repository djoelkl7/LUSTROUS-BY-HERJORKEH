import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoBanner() {
  return (
    <section className="bg-gold/10 border-y gold-border relative overflow-hidden py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-gold flex items-center justify-center rounded-full flex-shrink-0 animate-pulse">
            <Sparkles className="text-onyx w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif gold-text uppercase italic mb-2">Grand Opening Special</h3>
            <p className="text-gray-400 text-sm md:text-base font-light italic">
              Enjoy <span className="text-white font-bold tracking-widest">20% OFF</span> all lash services this month only. 
              <span className="hidden md:inline ml-2 text-gold-light opacity-60">Code: LUSTROUS20</span>
            </p>
          </div>
        </div>

        <Link 
          to="/shop" 
          className="gold-button flex items-center gap-3 group"
        >
          View Collections
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none whitespace-nowrap text-[120px] font-serif italic uppercase tracking-tighter">
        Exclusive Offers • New Arrivals • Lustrous Studio •
      </div>

      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 flex gap-10 text-[10px] uppercase tracking-[0.5em] text-gold/20 whitespace-nowrap pb-1"
      >
        <span>LUSTROUS BY HERJORKEH • GOLD STANDARD • BESPOKE ARTISTRY • </span>
        <span>LUSTROUS BY HERJORKEH • GOLD STANDARD • BESPOKE ARTISTRY • </span>
        <span>LUSTROUS BY HERJORKEH • GOLD STANDARD • BESPOKE ARTISTRY • </span>
      </motion.div>
    </section>
  );
}
