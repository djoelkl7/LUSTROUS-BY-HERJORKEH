/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Store from './components/Store';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Shop from './components/Shop';
import { WishlistProvider } from './context/WishlistContext';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <section className="relative z-10 bg-onyx">
        <Services />
        <Store />
        <Gallery />
      </section>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <WishlistProvider>
        <div className="relative scroll-smooth overflow-x-hidden min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>

          <Footer />

          {/* Luxury Background Accents */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </WishlistProvider>
    </Router>
  );
}
