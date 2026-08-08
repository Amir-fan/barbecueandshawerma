import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { restaurant } from "../data/restaurant";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0A0A0A]">

      {/* Absolute Background Elements for a Bento/Layered feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] blur-3xl rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ember via-transparent to-transparent"
        />

        {/* Floating pill shapes with images */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 0.8, rotate: -5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[20%] right-[10%] w-56 h-32 rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-2xl hidden lg:block grayscale-[50%] hover:grayscale-0 transition-all duration-500"
        >
          <img src="https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" className="w-full h-full object-cover" alt="Grill" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0, rotate: 10 }}
          animate={{ y: 0, opacity: 0.9, rotate: 10 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[20%] left-[10%] w-40 h-56 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl hidden lg:block grayscale-[50%] hover:grayscale-0 transition-all duration-500"
        >
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" className="w-full h-full object-cover" alt="Burger" />
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">



        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[1.2] font-display text-offwhite tracking-tight"
        >
          تذوق طعم <br className="md:hidden" />
          <span className="relative inline-block px-6 mx-2">
            <span className="relative z-10 font-bold text-charcoal-dark">النار</span>
            <span className="absolute inset-0 bg-ember rounded-2xl md:rounded-[3rem] -rotate-2 scale-110 z-0" />
          </span>
          <br className="hidden md:block" /> على البحر
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-offwhite/60 max-w-2xl mt-10 font-body font-light text-balance"
        >
          شاورما وبرغر ومشاوي على الفحم. مصممة لأصحاب الذوق العالي ليعيشوا التجربة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Button href="#menu" variant="primary" size="lg" className="rounded-full px-10 text-lg">
            تصفح المنيو
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="rounded-full px-10 border-white/20 text-offwhite hover:bg-white/5 hover:border-white/40 text-lg">
            دليل الموقع
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
