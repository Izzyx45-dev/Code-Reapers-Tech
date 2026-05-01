export default function Footer() {
  return (
    <footer className="py-12 px-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 bg-deep-black">
      <div className="flex gap-4 items-center text-[10px] text-white/30 tracking-[0.3em] font-semibold">
        <span>&copy; {new Date().getFullYear()} CODE REAPERS TECH</span>
        <span className="w-px h-3 bg-white/20 hidden md:block"></span>
        <span className="hidden md:block">EST. 2018</span>
      </div>

      <div className="flex gap-8 text-[10px] items-center">
        <a href="https://instagram.com/izzyx_45" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-white transition-colors tracking-widest font-bold uppercase">IG</a>
        <a href="#" className="text-electric-blue hover:text-white transition-colors tracking-widest font-bold uppercase">TW</a>
        <a href="#" className="text-electric-blue hover:text-white transition-colors tracking-widest font-bold uppercase">LI</a>
      </div>

      <div className="text-[9px] uppercase tracking-[0.5em] text-white/10">
        Engineered by IZZY_X45
      </div>
    </footer>
  );
}
