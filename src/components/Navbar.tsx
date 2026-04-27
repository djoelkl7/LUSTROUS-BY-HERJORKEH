import { motion } from 'motion/react';
import { ShoppingBag, Instagram, Menu, X, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b gold-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex flex-col">
            <span className="text-[12px] tracking-[0.4em] uppercase font-bold gold-text leading-none">LUSTROUS</span>
            <span className="text-[7px] tracking-[0.2em] uppercase font-light text-gray-400 mt-1">By Herjorkeh</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-medium">
          <NavHashLink smooth to="/#services" className="gold-text hover:text-white transition-colors">Services</NavHashLink>
          <NavHashLink smooth to="/#store" className="hover:text-gold transition-colors">Store</NavHashLink>
          <NavHashLink smooth to="/#gallery" className="hover:text-gold transition-colors">Gallery</NavHashLink>
          <NavHashLink smooth to="/#contact" className="hover:text-gold transition-colors">Contact</NavHashLink>
        </div>

        <div className="flex items-center gap-6">
          <NavHashLink 
            smooth 
            to="/#contact" 
            className="hidden md:flex items-center gap-2 px-6 py-2 border gold-border text-[9px] tracking-widest uppercase cursor-pointer hover:bg-gold hover:text-black transition-all duration-500"
          >
            <Calendar className="w-3 h-3" />
            Book Appointment
          </NavHashLink>
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
          className="md:hidden bg-onyx border-b gold-border/20 p-8 flex flex-col gap-8 text-center"
        >
          <NavHashLink smooth to="/#services" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest gold-text">Services</NavHashLink>
          <NavHashLink smooth to="/#store" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Shop</NavHashLink>
          <NavHashLink smooth to="/#gallery" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Gallery</NavHashLink>
          <NavHashLink smooth to="/#contact" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest">Contact</NavHashLink>
          <NavHashLink 
            smooth 
            to="/#contact" 
            onClick={() => setIsOpen(false)}
            className="gold-button w-full text-center"
          >
            Book Appointment
          </NavHashLink>
        </motion.div>
      )}
    </nav>
  );
}
