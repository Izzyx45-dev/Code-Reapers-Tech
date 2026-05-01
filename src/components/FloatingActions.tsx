import { Phone, Instagram, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
      <a 
        href="tel:+263787692906" 
        className="w-14 h-14 bg-electric-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all group"
        title="Call Us"
      >
        <Phone className="group-hover:animate-pulse" />
      </a>
      <a 
        href="https://instagram.com/izzyx_45" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-orange-400 via-pink-600 to-purple-800 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all"
        title="Follow on Instagram"
      >
        <Instagram />
      </a>
      <a 
        href="https://wa.me/263787692906" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all animate-[pulse-green_2s_infinite]"
        title="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>

      <style>{`
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </div>
  );
}
