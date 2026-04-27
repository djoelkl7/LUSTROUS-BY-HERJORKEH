import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/studio/1920/1080?blur=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/90 via-onyx/70 to-onyx" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.4em] gold-text mb-6 block"
        >
          By Herjorkeh
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-7xl md:text-8xl leading-[0.9] mb-10 tracking-tight"
        >
          LUSTROUS<br />
          <span className="italic opacity-80 text-gold-light">Studio</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-md mx-auto text-sm md:text-base mb-12 leading-relaxed"
        >
          Bespoke beauty services tailored to your unique features. Experience the gold standard in premium lash and nail couture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="gold-button flex items-center justify-center gap-2">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all font-medium">
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/30 rotate-90 origin-left">
          Est. 2024 • Professional Artistry
        </div>
      </div>
    </section>
  );
}
