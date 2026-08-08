import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Phone, Mail, X } from "lucide-react";

export function DevTag() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex flex-col items-center gap-1 mx-auto mt-12 mb-4 bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-300 px-8 py-4 rounded-xl"
      >
        <span className="font-display text-[10px] tracking-widest text-offwhite/40 uppercase mb-1">
          تم التطوير بواسطة
        </span>
        <span className="font-display text-sm tracking-widest font-black text-white uppercase flex items-center gap-3">
          Fanari Labs
          <span className="text-white/70 text-xs tracking-normal font-normal px-3 py-1 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">اضغط للتواصل</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Subtle Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
              />

              <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2"
                >
                  <X size={20} />
                </button>

                <h2 className="font-display text-3xl font-black text-white tracking-tighter mb-2">
                  fanari<span className="text-white/50 text-xl font-normal ml-1">labs</span>
                </h2>
                <p className="text-offwhite/60 font-body font-light text-sm mb-10 max-w-[250px]">
                  We build bespoke websites and autonomous AI systems that work while you sleep.
                </p>

                <div className="w-full flex flex-col gap-4">
                  <a href="https://fanarilabs.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <Globe size={18} />
                    </div>
                    <span className="font-display font-light text-white tracking-wider">fanarilabs.com</span>
                  </a>

                  <a href="tel:+905379295163" className="group relative flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="font-display font-light text-white tracking-wider dir-ltr">+90 537 929 51 63</span>
                  </a>

                  <a href="mailto:fanarilabs@gmail.com" className="group relative flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="font-display font-light text-white tracking-wider">fanarilabs@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
