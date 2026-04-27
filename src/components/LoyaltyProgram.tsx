import { motion } from 'motion/react';
import { Crown, Gift, Zap, ShieldCheck } from 'lucide-react';

export default function LoyaltyProgram() {
  const tiers = [
    {
      name: "Gold Member",
      requirement: "Initial Join",
      benefits: ["5% back in points on all services", "Access to seasonal collections", "Welcome gift upon first visit"],
      icon: ShieldCheck,
      color: "text-gray-400"
    },
    {
      name: "Elite Circle",
      requirement: "5000 Points",
      benefits: ["10% back in points", "Priority booking window", "Complimentary aftercare kit", "Birthday luxury treatment"],
      icon: Zap,
      color: "text-gold"
    },
    {
      name: "Lustrous Legend",
      requirement: "15000 Points",
      benefits: ["20% back in points", "Concierge private booking", "Access to masterclass events", "Unlimited coffee & champagne lounge access"],
      icon: Crown,
      color: "text-gold-light"
    }
  ];

  return (
    <section className="py-32 px-6 bg-onyx border-y shadow-2xl gold-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-xs tracking-[0.5em] uppercase gold-text font-bold mb-6">Loyalty Rewards</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic mb-8">The <span className="gold-text">Signature</span> Circle</h3>
            <p className="text-gray-400 font-light italic leading-relaxed text-lg">
              Elevate your beauty journey. Every session at Lustrous earns you prestige points towards exclusive rewards and master-level treatments.
            </p>
          </div>
          <div className="bg-gold/10 border gold-border p-8 text-center min-w-[280px]">
            <Gift className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="text-xs uppercase tracking-widest font-bold gold-text mb-2">Current Promotion</p>
            <p className="text-2xl font-serif italic">Double Points</p>
            <p className="text-[10px] text-gray-500 uppercase mt-4">Ends May 15th</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 border gold-border/10 p-10 hover:gold-border/30 transition-all duration-500 flex flex-col"
            >
              <tier.icon className={`w-12 h-12 mb-8 ${tier.color}`} />
              <h4 className="text-xl font-serif italic mb-2 uppercase tracking-wide">{tier.name}</h4>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">{tier.requirement}</p>
              
              <ul className="space-y-4 flex-grow">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="text-xs text-gray-400 italic flex items-start gap-3">
                    <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <button className="mt-12 w-full py-4 border gold-border/20 text-[10px] uppercase font-bold tracking-widest hover:bg-gold hover:text-black transition-all">
                Join {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
