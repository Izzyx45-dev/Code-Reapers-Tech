import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-electric-blue)_0%,_transparent_70%)] opacity-10"></div>
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-12"
      >
        <div className="text-[10px] uppercase tracking-[0.4em] text-electric-blue font-bold mb-4">Future-Ready Architecture</div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
      >
        WE CODE.<br />
        WE BUILD.<br />
        <span className="text-electric-blue">WE DELIVER.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-white/40 text-sm md:text-base max-w-sm mb-12 tracking-wide mx-auto"
      >
        Professional mobile-first digital architecture designed to scale your business and outpace the competition.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a href="#contact" className="cta-btn">
          Get Started Now
        </a>
      </motion.div>
    </section>
  );
}
