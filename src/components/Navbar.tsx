import { motion } from 'motion/react';
import { ShoppingBag, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b gold-border">
      <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="text-xs tracking-[0.3em] uppercase font-semibold gold-text">LUSTROUS</Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-widest">
          <a href="#services" className="gold-text hover:text-white transition-colors">Services</a>
          <a href="#store" className="hover:text-gold transition-colors">Store</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:block px-6 py-2 border gold-border text-[10px] tracking-widest uppercase cursor-pointer hover:bg-gold hover:text-black transition-colors">
            Book Appointment
          </a>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="gold-text" /> : <Menu className="gold-text" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-onyx border-b border-white/5 p-6 flex flex-col gap-6 text-center"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-serif">Services</a>
          <a href="#store" onClick={() => setIsOpen(false)} className="text-xl font-serif">Shop</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-xl font-serif">Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-serif">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
