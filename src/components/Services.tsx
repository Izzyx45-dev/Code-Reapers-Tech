import { motion } from 'motion/react';
import { Globe, Bot, Palette, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: 'Web Development',
    description: 'High-performance HTML5, CSS3, and React integration with a focus on speed and SEO optimization.',
  },
  {
    icon: <Bot className="w-10 h-10" />,
    title: 'AI Solutions',
    description: 'Custom AI Generation, Large Language Model integration, and high-quality Data Annotation services.',
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: 'Graphic Design',
    description: 'Logos, social media flyers, and coherent brand identity that makes your business stand out.',
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: 'Art Illustration',
    description: 'Custom digital art, concept design, and creative illustrations tailored to your vision.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-deep-black p-10 flex flex-col justify-center min-h-[300px] hover:bg-dark-surface transition-colors group"
            >
              <div className="service-icon-box group-hover:bg-electric-blue group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white">{service.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
