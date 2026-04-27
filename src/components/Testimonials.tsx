import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena Richardson",
    role: "Fashion Editor",
    content: "The level of precision at Lustrous is unparalleled. My lash set lasted weeks beyond expectation while maintaining that lightweight, premium feel. Truly the gold standard.",
    rating: 5
  },
  {
    id: 2,
    name: "Amara Okoro",
    role: "Creative Director",
    content: "Lustrous isn't just a beauty studio; it's an art gallery for your features. The nail couture is bespoke, daring, and executed with mathematical perfection.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabella Vucci",
    role: "Luxury Consultant",
    content: "Herjorkeh has an eye for aesthetic harmony that I haven't found elsewhere. The studio environment is as elevated as the services provided.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <Quote className="absolute -top-10 -left-10 w-96 h-96 text-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4"
          >
            The Client Journal
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif italic gold-text mb-8">Testimonials</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-onyx border gold-border/20 p-10 hover:gold-border/40 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-400 font-light italic leading-relaxed mb-10 text-lg">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-gold/50" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold gold-text">{t.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
