import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "How long do lash extensions typically last?",
    answer: "With proper aftercare, Lustrous lash extensions typically last 4-6 weeks. We recommend a fill every 2-3 weeks to maintain maximum fullness and design integrity."
  },
  {
    question: "Is there anything I should do to prepare for my appointment?",
    answer: "Please arrive with clean, makeup-free eyes and lashes. Avoid caffeine before your session to ensure relaxation, and wear comfortable clothing as you'll be reclined for an extended period."
  },
  {
    question: "Can I get my lash extensions wet?",
    answer: "Our advanced adhesive curing process allows you to get them wet 24 hours after application. However, we recommend avoiding steam and intense heat for the first 48 hours."
  },
  {
    question: "Do you offer removal services for work from other studios?",
    answer: "For quality and safety assurance, we provide removal services for external work. We generally do not perform 'fills' on lash sets from other studios to ensure our signature aesthetic is maintained."
  },
  {
    question: "How do I care for my nail couture at home?",
    answer: "Avoid using your nails as tools, apply cuticle oil daily, and wear gloves when using harsh chemicals. Our Lustrous aftercare kit includes everything you need to maintain that salon-fresh glow."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4"
          >
            Knowledge Base
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif italic gold-text mb-8">Common Inquiries</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border gold-border/20 bg-onyx/50 overflow-hidden transition-all duration-500 hover:gold-border/40"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className="text-sm md:text-base font-serif italic group-hover:gold-text transition-colors">
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-500 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                  {activeIndex === idx ? (
                    <Minus className="w-4 h-4 text-gold" />
                  ) : (
                    <Plus className="w-4 h-4 text-gold/40" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-sm text-gray-400 font-light leading-relaxed italic border-t gold-border/10 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 border gold-border/20 bg-gold/5 text-center flex flex-col items-center">
            <HelpCircle className="w-8 h-8 text-gold mb-6 opacity-40" />
            <h4 className="text-lg font-serif italic mb-4">Still seeking answers?</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">Our concierge team is available for deep-dive consultations.</p>
            <a href="#contact" className="gold-button !px-12">Contact Support</a>
        </div>
      </div>
    </section>
  );
}
