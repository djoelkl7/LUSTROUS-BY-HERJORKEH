import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://picsum.photos/seed/beauty1/800/800',
  'https://picsum.photos/seed/beauty2/800/1000',
  'https://picsum.photos/seed/beauty3/800/600',
  'https://picsum.photos/seed/beauty4/800/1100',
  'https://picsum.photos/seed/beauty5/1000/800',
  'https://picsum.photos/seed/beauty6/800/900',
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % IMAGES.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white text-gold font-italic italic">Visual Artistry</h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm italic font-light">
            A showcase of our precision, creativity, and the stunning transformations 
            delivered to our exclusive clients.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {IMAGES.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedIdx(idx)}
              className="gallery-box mb-8 rounded-none group cursor-pointer relative overflow-hidden"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-gold transition-colors"
              onClick={() => setSelectedIdx(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-10 text-white/50 hover:text-gold transition-colors hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.img 
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={IMAGES[selectedIdx]} 
              className="max-w-full max-h-[80vh] object-contain gold-border border"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-10 text-white/50 hover:text-gold transition-colors hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="absolute bottom-10 left-10 right-10 flex justify-center gap-4">
              {IMAGES.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === selectedIdx ? 'bg-gold w-4' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
