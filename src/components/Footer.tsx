import { Instagram, MapPin, Phone, Mail, Calendar, Clock, Check } from 'lucide-react';
import React, { useState } from 'react';
import { SERVICES } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [bookingStep, setBookingStep] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('submitting');
    setTimeout(() => setBookingStep('success'), 2000);
  };

  return (
    <footer id="contact" className="bg-onyx border-t gold-border py-24 px-12 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 lg:gap-24 mb-24">
        <div className="lg:col-span-2">
          <h2 className="text-xs tracking-[0.3em] uppercase font-semibold gold-text mb-8">LUSTROUS</h2>
          <p className="text-gray-400 max-w-xs text-xs font-light leading-relaxed mb-12 italic">
            Defining excellence in aesthetics through curated experiences and master-level 
            craftsmanship in every set we deliver.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4 text-[11px] uppercase tracking-widest text-gray-400">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Lagos &bull; London &bull; Dubai</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-400">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <span>hello@lustrousbeauty.com</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 border gold-border flex items-center justify-center hover:bg-gold hover:text-black transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-[#080808] border gold-border p-8 md:p-12 relative overflow-hidden">
            <h3 className="serif italic text-3xl gold-text mb-2">Book Your Session</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Secure your slot in our studio</p>

            <AnimatePresence mode="wait">
              {bookingStep === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-gold/20 flex items-center justify-center rounded-full mx-auto mb-6">
                    <Check className="text-gold w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif mb-2">Request Received</h4>
                  <p className="text-gray-500 text-xs tracking-widest font-light">Our concierge will contact you shortly to confirm.</p>
                  <button 
                    onClick={() => setBookingStep('idle')}
                    className="mt-8 text-[10px] uppercase gold-text border-b border-gold"
                  >
                    New Booking
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBooking} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Service Category</label>
                        <select className="w-full bg-onyx border gold-border/20 p-4 text-xs font-medium focus:border-gold outline-none appearance-none">
                            <option>Lash Extension</option>
                            <option>Nail Couture</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Select Treatment</label>
                        <select className="w-full bg-onyx border gold-border/20 p-4 text-xs font-medium focus:border-gold outline-none appearance-none">
                            {SERVICES.map(s => <option key={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Preferred Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold opacity-50" />
                            <input type="date" required className="w-full bg-onyx border gold-border/20 p-4 pl-12 text-xs font-medium focus:border-gold outline-none" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Preferred Time</label>
                        <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold opacity-50" />
                            <select required className="w-full bg-onyx border gold-border/20 p-4 pl-12 text-xs font-medium focus:border-gold outline-none appearance-none">
                                <option>09:00 AM</option>
                                <option>11:00 AM</option>
                                <option>02:00 PM</option>
                                <option>04:00 PM</option>
                            </select>
                        </div>
                    </div>
                  </div>

                  <button 
                    disabled={bookingStep === 'submitting'}
                    className="gold-button w-full flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {bookingStep === 'submitting' ? 'Processing...' : 'Reserve Appointment'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t gold-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
        <p>&copy; 2024 LUSTROUS BY HERJORKEH. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
