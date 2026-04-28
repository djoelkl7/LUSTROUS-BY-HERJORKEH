import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service } from '../types';
import { ArrowRight, Clock, Star, X, Info, ShieldCheck } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

function ServiceDetailModal({ service, onClose }: { service: Service, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-[#0c0c0c] border gold-border w-full max-w-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t gold-border opacity-20 pointer-events-none" />
        
        <div className="p-8 md:p-12">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gold hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] gold-text font-bold mb-4 block">
              {service.category === 'Lashes' ? 'Master Artistry' : 'Bespoke Couture'}
            </span>
            <h2 className="text-4xl font-serif italic mb-2">{service.name}</h2>
            <div className="flex items-center gap-6 text-gold/60 text-xs mt-4">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {service.duration}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" /> $85+
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 flex items-center gap-2">
                <Info className="w-3 h-3 text-gold" /> The Treatment
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed italic">
                {service.inDepth}
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-gold" /> Aftercare Protocol
              </h3>
              <ul className="space-y-4">
                {service.aftercare?.map((item, idx) => (
                  <li key={idx} className="text-[11px] text-gray-400 font-light flex items-start gap-3 italic">
                    <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <HashLink 
              smooth 
              to="/#contact" 
              onClick={onClose}
              className="gold-button flex-grow flex items-center justify-center gap-3 py-5 px-10 group text-[10px] uppercase tracking-widest font-bold"
            >
              Secure Appointment 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </HashLink>
            <button 
              onClick={onClose}
              className="px-10 py-5 border gold-border/20 text-[10px] uppercase tracking-widest font-bold hover:gold-border transition-all"
            >
              Return Home
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
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
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <HashLink 
                      smooth 
                      to="/#contact" 
                      className="flex items-center justify-center gap-3 py-4 border gold-border/20 text-[9px] uppercase tracking-[0.3em] gold-text font-bold hover:bg-gold hover:text-onyx transition-all duration-300"
                    >
                      Book Now <ArrowRight className="w-3 h-3" />
                    </HashLink>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex items-center justify-center gap-3 py-4 border gold-border/10 text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:gold-border transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
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
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <HashLink 
                      smooth 
                      to="/#contact" 
                      className="flex items-center justify-center gap-3 py-4 border gold-border/20 text-[9px] uppercase tracking-[0.3em] gold-text font-bold hover:bg-gold hover:text-onyx transition-all duration-300"
                    >
                      Book Now <ArrowRight className="w-3 h-3" />
                    </HashLink>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex items-center justify-center gap-3 py-4 border gold-border/10 text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold hover:gold-border transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
