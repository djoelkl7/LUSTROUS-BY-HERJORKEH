import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Store() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <section id="store" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] block mb-4">The Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Lustrous Essentials</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm italic font-light">
            Luxury care for your lashes and nails. Curated products to maintain 
            the "Lustrous" glow at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gold/5 border gold-border p-6 group flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="block relative">
                <div className="relative aspect-square overflow-hidden mb-6 bg-onyx border gold-border/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                  className={`absolute top-4 right-4 p-2 rounded-full border gold-border z-10 transition-all duration-300 ${isInWishlist(product.id) ? 'bg-gold text-onyx' : 'bg-black/40 text-white hover:bg-gold/10'}`}
                >
                  <Heart className={`w-3 h-3 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </button>
                <h3 className="text-sm uppercase tracking-widest font-bold mb-2 gold-text">{product.name}</h3>
                <p className="text-gray-400 text-[10px] mb-6 flex-grow">{product.description}</p>
              </Link>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
                <Link to={`/product/${product.id}`} className="text-[10px] uppercase font-bold gold-text border-b border-gold hover:text-white hover:border-white transition-all">
                  Details &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Link to="/shop" className="text-gold border-b border-gold px-2 py-1 tracking-widest text-sm uppercase hover:text-white hover:border-white transition-all">
                View Full Shop
            </Link>
        </div>
      </div>
    </section>
  );
}
