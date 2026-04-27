import { Instagram, MapPin, Phone, Mail, Calendar, Clock, Check, User, PhoneCall } from 'lucide-react';
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
    <footer id="contact" className="bg-onyx border-t gold-border pt-32 pb-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 lg:gap-24 mb-32">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 border gold-border text-[8px] uppercase tracking-[0.4em] gold-text mb-8 font-bold"
          >
            Elite Concierge
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif italic gold-text mb-8 uppercase tracking-widest">Connect With Us</h2>
          <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed mb-12 italic">
            Each appointment is a bespoke session tailored to your needs. Our artists ensure 
            perfection is the only outcome.
          </p>
          
          <div className="space-y-10 mb-16">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 border gold-border/30 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                 <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Our Flagship</p>
                 <span className="text-xs tracking-widest text-white">Lagos &bull; London &bull; Dubai</span>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 border gold-border/30 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-gold" />
              </div>
              <div>
                 <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Lines</p>
                 <span className="text-xs tracking-widest text-white">hello@lustrousbeauty.com</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 border gold-border/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer group">
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-[#0c0c0c] border gold-border p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-[1px] bg-gold opacity-30" />
            <div className="absolute top-0 left-0 w-[1px] h-32 bg-gold opacity-30" />
            
            <h3 className="serif italic text-4xl gold-text mb-4">Reserve Your Experience</h3>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-12">Submit your details for a master-level consultation</p>

            <AnimatePresence mode="wait">
              {bookingStep === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold/10 border gold-border flex items-center justify-center rounded-full mx-auto mb-8">
                    <Check className="text-gold w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif italic mb-3">Consultation Requested</h4>
                  <p className="text-gray-500 text-xs tracking-widest font-light italic max-w-xs mx-auto">
                    A Lustrous representative will reach out within 24 hours to confirm your reservation and discuss your aesthetic goals.
                  </p>
                  <button 
                    onClick={() => setBookingStep('idle')}
                    className="mt-12 py-3 px-8 border gold-border text-[10px] uppercase gold-text tracking-widest hover:bg-gold hover:text-onyx transition-all font-bold"
                  >
                    Another Booking
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleBooking} 
                  className="space-y-10"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                           <User className="w-3 h-3 text-gold/50" /> Full Name
                        </label>
                        <input required placeholder="YOUR NAME" className="w-full bg-onyx border gold-border/20 p-5 text-xs font-medium focus:gold-border outline-none transition-colors italic tracking-widest" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                           <PhoneCall className="w-3 h-3 text-gold/50" /> Contact Number
                        </label>
                        <input required type="tel" placeholder="+234 XXX XXX XXXX" className="w-full bg-onyx border gold-border/20 p-5 text-xs font-medium focus:gold-border outline-none transition-colors italic tracking-widest" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Select Artistry</label>
                        <select className="w-full bg-onyx border gold-border/20 p-5 text-xs font-medium focus:gold-border outline-none appearance-none cursor-pointer">
                            <option>Lash Extension</option>
                            <option>Nail Couture</option>
                        </select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Specific Treatment</label>
                        <select className="w-full bg-onyx border gold-border/20 p-5 text-xs font-medium focus:gold-border outline-none appearance-none cursor-pointer">
                            {SERVICES.map(s => <option key={s.id}>{s.name}</option>)}
                        </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Desired Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                            <input type="date" required className="w-full bg-onyx border gold-border/20 p-5 pl-14 text-xs font-medium focus:gold-border outline-none" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Preferred Slot</label>
                        <div className="relative">
                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                            <select required className="w-full bg-onyx border gold-border/20 p-5 pl-14 text-xs font-medium focus:gold-border outline-none appearance-none cursor-pointer">
                                <option>09:00 AM - 11:30 AM</option>
                                <option>12:00 PM - 02:30 PM</option>
                                <option>03:00 PM - 05:30 PM</option>
                                <option>06:00 PM - 08:30 PM</option>
                            </select>
                        </div>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={bookingStep === 'submitting'}
                    className="gold-button w-full flex items-center justify-center gap-3 py-6 group disabled:opacity-50 !rounded-none"
                  >
                    {bookingStep === 'submitting' ? 'Orchestrating Request...' : 'Finalize Reservation Request'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t gold-border/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
        <p>&copy; 2024 LUSTROUS BY HERJORKEH. THE GOLD STANDARD IN BEAUTY.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Digital Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Artistry Ethics</a>
        </div>
      </div>
    </footer>
  );
}
