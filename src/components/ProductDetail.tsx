import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Truck, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-onyx text-white">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link to="/" className="gold-text uppercase tracking-widest text-sm border-b border-gold">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-onyx pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors mb-12 uppercase tracking-widest text-[10px] font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-dark-gray border gold-border p-8 relative"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-gold text-onyx px-3 py-1 text-[10px] font-bold tracking-widest">
              LUSTROUS SELECT
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Professional Grade</span>
            <h1 className="text-5xl font-serif mb-6">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8 text-gold">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-gray-500 text-xs tracking-widest font-medium uppercase mt-1">128 Reviews</span>
            </div>

            <p className="text-3xl font-light mb-8">${product.price.toFixed(2)}</p>
            
            <div className="flex gap-4 mb-12">
              <button className="gold-button flex-grow flex items-center justify-center gap-3 py-5">
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`w-16 flex items-center justify-center border gold-border transition-all duration-300 ${isInWishlist(product.id) ? 'bg-gold text-onyx' : 'hover:bg-gold/10'}`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="prose prose-invert prose-sm max-w-none mb-12 text-gray-400 leading-relaxed font-light italic">
              <p>{product.description}</p>
              <p className="mt-4">Designed for those who demand excellence. This signature formula is crafted with premium ingredients to ensure your lashes and nails maintain that signature "Lustrous" glow long after your appointment.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t gold-border/20">
              <div className="flex items-start gap-4">
                <Truck className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-white">Global Shipping</h4>
                  <p className="text-[10px] text-gray-500 italic">Discrete luxury packaging.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-white">Quality Guard</h4>
                  <p className="text-[10px] text-gray-500 italic">Artist approved & tested.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
