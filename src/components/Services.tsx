import { motion } from 'motion/react';
import { SERVICES } from '../types';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';

export default function Services() {
  const lashServices = SERVICES.filter(s => s.category === 'Lashes');
  const nailServices = SERVICES.filter(s => s.category === 'Nails');

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-onyx to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 relative">
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t gold-border opacity-20 hidden md:block"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border gold-border text-[9px] uppercase tracking-[0.5em] gold-text mb-6 font-bold"
          >
            The Artistry Collection
          </motion.div>
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,4.5rem)] gold-text mb-6">Service Menu</h2>
          <p className="text-[11px] uppercase tracking-[0.5em] text-gray-500 max-w-lg mx-auto leading-loose italic">
            Meticulously crafted treatments designed to elevate your aesthetic identity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Lashes Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-6 mb-12">
              <h3 className="font-serif italic text-4xl text-white">Lash <span className="gold-text">Extensions</span></h3>
              <div className="h-[1px] flex-grow bg-gold/20" />
            </div>
            
            <div className="grid gap-8">
              {lashServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#0c0c0c] border gold-border/10 p-8 hover:gold-border/40 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg uppercase tracking-widest font-bold group-hover:gold-text transition-colors duration-300">{service.name}</h4>
                      <div className="flex items-center gap-4 mt-2">
                         <span className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {idx % 2 === 0 ? '90' : '120'} MIN
                         </span>
                         <span className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> MASTER LEVEL
                         </span>
                      </div>
                    </div>
                    <span className="text-xl font-serif gold-text mt-1">$85+</span>
                  </div>
                  <p className="text-[11px] text-gray-500 italic mb-8 leading-relaxed font-light">{service.description}</p>
                  <NavHashLink 
                    smooth 
                    to="/#contact" 
                    className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] gold-text font-bold hover:gap-4 transition-all"
                  >
                    Reserve Session <ArrowRight className="w-3 h-3" />
                  </NavHashLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nails Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-6 mb-12">
              <h3 className="font-serif italic text-4xl text-white">Nail <span className="gold-text">Couture</span></h3>
              <div className="h-[1px] flex-grow bg-gold/20" />
            </div>
            
            <div className="grid gap-8">
              {nailServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#0c0c0c] border gold-border/10 p-8 hover:gold-border/40 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg uppercase tracking-widest font-bold group-hover:gold-text transition-colors duration-300">{service.name}</h4>
                      <div className="flex items-center gap-4 mt-2">
                         <span className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {idx % 2 === 0 ? '60' : '90'} MIN
                         </span>
                         <span className="text-[9px] uppercase tracking-widest text-gold/60 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> BESPOKE
                         </span>
                      </div>
                    </div>
                    <span className="text-xl font-serif gold-text mt-1">$50+</span>
                  </div>
                  <p className="text-[11px] text-gray-500 italic mb-8 leading-relaxed font-light">{service.description}</p>
                  <NavHashLink 
                    smooth 
                    to="/#contact" 
                    className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] gold-text font-bold hover:gap-4 transition-all"
                  >
                    Reserve Session <ArrowRight className="w-3 h-3" />
                  </NavHashLink>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
