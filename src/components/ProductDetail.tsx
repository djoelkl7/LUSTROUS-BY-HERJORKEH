import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../types';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Truck, Heart, User, Send, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useWishlist } from '../context/WishlistContext';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [reviews, setReviews] = useState<Review[]>([
    { id: '1', user: 'Sophia L.', rating: 5, comment: 'Absolutely divine! The quality is unmatched and the packaging felt so luxurious.', date: '2024-03-15' },
    { id: '2', user: 'Marcus G.', rating: 4, comment: 'Great product, definitely noticed a difference in lash longevity.', date: '2024-03-10' }
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productUrl = window.location.href;
  const shareText = `Check out this exclusive ${product?.name} from LUSTROUS Studio!`;

  const shareLinks = [
    { name: 'Facebook', icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}` },
    { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}` },
    { name: 'Pinterest', icon: Share2, url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}&description=${encodeURIComponent(shareText)}` }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        user: 'Guest User',
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews(prev => [review, ...prev]);
      setNewReview({ rating: 5, comment: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
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
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) ? 'fill-current' : 'opacity-30'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs tracking-widest font-medium uppercase mt-1">
                {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
              </span>
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

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Share Masterpiece</span>
                <div className="h-[1px] flex-grow bg-gold/10" />
              </div>
              <div className="flex gap-4">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border gold-border/20 flex items-center justify-center hover:bg-gold hover:text-onyx transition-all duration-300 group"
                    title={`Share on ${link.name}`}
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
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

        {/* Reviews Section */}
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif mb-2">Client Experience</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Share your thoughts with us</p>
            
            <form onSubmit={handleSubmitReview} className="bg-dark-gray border gold-border/20 p-8 space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block">Impact Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      className="transition-transform active:scale-90"
                    >
                      <Star className={`w-6 h-6 ${star <= newReview.rating ? 'text-gold fill-current' : 'text-gray-800'}`} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block">Your Perspective</label>
                <textarea
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  placeholder="Describe your lustrous experience..."
                  className="w-full bg-onyx border gold-border/20 p-4 text-xs font-light italic text-white focus:border-gold outline-none min-h-[120px] transition-colors"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="gold-button w-full flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Recording...' : (
                  <>Submit Review <Send className="w-3 h-3" /></>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-12 border-b gold-border/20 pb-4">
               <h3 className="text-xs uppercase tracking-[0.4em] text-gold font-bold">Public Journal</h3>
               <span className="text-[10px] text-gray-500 uppercase tracking-widest">{reviews.length} Total</span>
            </div>

            <div className="space-y-12">
              <AnimatePresence mode="popLayout">
                {reviews.map((review) => (
                  <motion.div 
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border gold-border/30 flex items-center justify-center bg-gold/5">
                          <User className="w-4 h-4 text-gold/60" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest">{review.user}</p>
                          <p className="text-[9px] text-gray-500 uppercase">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-gold fill-current' : 'text-gray-800'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-light italic text-gray-400 leading-relaxed border-l-2 gold-border/20 pl-6 group-hover:border-gold transition-colors">
                      "{review.comment}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
