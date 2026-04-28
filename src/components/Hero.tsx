import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/95 via-onyx/70 to-onyx" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-8 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold">
            Master Esthetics Studio
          </span>
          <div className="h-[1px] w-8 bg-gold/50" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] mb-12 tracking-tight"
        >
          LUSTROUS<br />
          <span className="italic gold-text font-light text-[clamp(2.5rem,8vw,6rem)]">By Herjorkeh</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-16 leading-relaxed font-light italic"
        >
          Where luxury meets precision. We craft bespoke lash and nail couture using premium techniques for a signature aesthetic that endures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <HashLink 
            smooth 
            to="/#contact" 
            className="gold-button flex items-center justify-center gap-3 py-5 px-10 group"
          >
            <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
            Book Appointment 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </HashLink>
          <HashLink 
            smooth 
            to="/#services" 
            className="px-10 py-5 rounded-none border gold-border hover:bg-gold/5 transition-all text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explore Services
          </HashLink>
        </motion.div>
      </div>

      {/* Luxury Decorative Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full" />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>

      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="text-[9px] uppercase tracking-[0.6em] text-gold/40 rotate-90 origin-left font-bold">
           ESTABLISHED ARTISTRY • PARIS • LONDON • GLOBAL
        </div>
      </div>
    </section>
  );
}
