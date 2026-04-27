import { motion } from 'motion/react';
import { SERVICES } from '../types';

export default function Services() {
  const lashServices = SERVICES.filter(s => s.category === 'Lashes');
  const nailServices = SERVICES.filter(s => s.category === 'Nails');

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t gold-border opacity-20 hidden md:block"></div>
          <h2 className="font-serif italic text-5xl md:text-6xl gold-text mb-4">Artistry Menu</h2>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500">Excellence in every detail</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Lashes Section */}
          <div className="bg-[#080808] p-10 border gold-border">
            <h3 className="font-serif italic text-3xl gold-text mb-10">Lash Extensions</h3>
            <div className="space-y-2">
              {lashServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="service-item flex justify-between items-end group"
                >
                  <div className="flex flex-col">
                    <span className="text-sm tracking-wide font-medium group-hover:text-gold transition-colors">{service.name}</span>
                    <span className="text-[10px] text-gray-500 italic mt-1">{service.description}</span>
                  </div>
                  <span className="gold-text text-sm font-medium">$85+</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nails Section */}
          <div className="bg-[#080808] p-10 border gold-border">
            <h3 className="font-serif italic text-3xl gold-text mb-10">Nail Couture</h3>
            <div className="space-y-2">
              {nailServices.map((service, idx) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="service-item flex justify-between items-end group"
                >
                  <div className="flex flex-col">
                    <span className="text-sm tracking-wide font-medium group-hover:text-gold transition-colors">{service.name}</span>
                    <span className="text-[10px] text-gray-500 italic mt-1">{service.description}</span>
                  </div>
                  <span className="gold-text text-sm font-medium">$50+</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
