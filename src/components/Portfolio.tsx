import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-deep-black">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold tracking-tighter">Recent Work</h2>
            <p className="text-xs text-white/40 uppercase tracking-widest">Case Study: Pamushana ZUNA Platform</p>
          </div>
          <a 
            href="https://pamushanazuna.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-electric-blue text-[11px] font-bold underline underline-offset-8 uppercase tracking-widest hover:text-white transition-colors"
          >
            VIEW LIVE PROJECT
          </a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark-surface border border-white/5 p-8 md:p-12 min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#007BFF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed max-w-md italic font-serif text-lg">
                "Code Reapers Tech delivered a robust, high-performance portal that facilitates engagement and resource distribution for our youth-driven UN organization."
              </p>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white uppercase tracking-widest">Pamushana ZUNA</div>
                <div className="text-[10px] text-electric-blue uppercase font-bold tracking-widest">Digital Hub</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="stat-value text-4xl font-bold">99%</div>
                <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-4xl font-bold">4.8s</div>
                <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1">Load Time</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-4xl font-bold">24/7</div>
                <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
