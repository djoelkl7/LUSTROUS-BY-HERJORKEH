import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-onyx pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors mb-6 uppercase tracking-widest text-[10px] font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Studio
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif gold-text uppercase italic mb-4">The Collection</h1>
            <p className="text-gray-400 max-w-lg text-sm italic font-light tracking-wide">
              Curated essentials for the modern aesthetic. Professional grade care 
              delivered to your doorstep.
            </p>
          </div>
          <div className="bg-gold/10 border gold-border p-6 hidden lg:block">
            <div className="flex items-center gap-4 text-gold mb-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Complimentary Shipping</span>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">On orders over $150</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gold/5 border gold-border p-8 group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden mb-8 bg-onyx border gold-border/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-onyx/80 backdrop-blur-md border border-gold/20 px-3 py-1 text-[8px] tracking-[0.2em] font-bold gold-text uppercase">
                    In Stock
                  </div>
                </div>
                <h3 className="text-lg uppercase tracking-widest font-bold mb-3 gold-text">{product.name}</h3>
                <p className="text-gray-400 text-xs mb-8 italic font-light line-clamp-2">{product.description}</p>
              </Link>
              <div className="flex items-center justify-between border-t gold-border/20 pt-6">
                <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                <button className="gold-button !px-6 !py-2">
                  Add to Bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
