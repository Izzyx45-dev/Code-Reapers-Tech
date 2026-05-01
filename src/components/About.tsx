import { motion } from 'motion/react';

const stats = [
  { label: 'Speed', value: '99%' },
  { label: 'Powered', value: 'AI' },
  { label: 'Support', value: '24/7' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-black/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="geometric-card">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-white">The Problem</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Losing customers to competitors with better tech? A slow, outdated website is a liability, not an asset. In today's digital landscape, performance is paramount.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="geometric-card border-white/20">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-white">The Solution</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Custom AI integration and high-performance HTML5/JS systems that turn clicks into conversion. We build the infrastructure for your success.
              </p>
            </div>
          </div>

          <div className="flex gap-12 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="stat-value text-4xl font-bold">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group focus-within:outline-none"
        >
          <div className="absolute -inset-2 bg-electric-blue/20 blur-2xl rounded-3xl group-hover:bg-electric-blue/30 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1470" 
            alt="Cybersecurity and Tech Architecture"
            className="relative rounded-2xl border border-white/10 shadow-2xl grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
