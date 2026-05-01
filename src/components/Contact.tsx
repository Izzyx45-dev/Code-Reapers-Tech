import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">READY TO BUILD?</h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto">Claim your free technical audit and secure your digital future today.</p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12"
          >
            <CheckCircle2 size={64} className="text-electric-blue mx-auto mb-4 glow-text" />
            <h3 className="text-xl text-white mb-2 uppercase tracking-widest">Inquiry Received</h3>
            <p className="text-white/40 text-sm">We'll respond to your vector within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              required 
              className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:border-electric-blue outline-none transition-colors"
              placeholder="Full Name"
            />
            <input 
              type="text" 
              required 
              className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:border-electric-blue outline-none transition-colors"
              placeholder="Email Vector"
            />
            <button type="submit" className="bg-electric-blue px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-deep-black transition-all">
              Claim Free Audit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
