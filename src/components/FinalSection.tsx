import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import SaraPhoto from '@/components/SaraPhoto';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FinalSection() {
  const backToTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative overflow-hidden px-6 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum-500/25 blur-[130px] animate-glow" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[46%_54%_50%_50%/60%_60%_40%_40%] border border-champagne/40" />
          <div className="relative h-72 w-56 overflow-hidden rounded-[46%_54%_50%_50%/60%_60%_40%_40%] border border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] md:h-96 md:w-72">
            <SaraPhoto imgClassName="object-[center_20%] transition duration-700 hover:scale-105" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-14"
        >
          <p className="font-display text-2xl italic leading-[1.2] text-lavender md:text-4xl">
            Some people make ordinary days feel special.
          </p>
          <p className="mt-5 text-lg leading-[1.5] text-warm-200/90 md:text-xl">
            في ناس وجودها لوحده بيضيف حاجة حلوة للحياة.
          </p>
          <p className="mt-8 text-xl font-semibold leading-[1.5] text-warm md:text-2xl">
            شكرًا إنك بقيتي جزء من أيامي يا سارة.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 border-t border-white/10 pt-10"
        >
          <p className="rose-text font-display text-4xl font-medium md:text-6xl">
            Happy Birthday, Sara ❤️
          </p>
          <p className="mt-4 font-display text-xl italic text-champagne/90">Your brother, always.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="glass relative mt-12 max-w-2xl overflow-hidden rounded-[2rem] border border-champagne/40 px-7 py-8 shadow-[0_20px_60px_-20px_rgba(255,121,170,0.3)] md:px-12 md:py-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.5rem] border border-champagne/20"
          />
          <Heart
            aria-hidden="true"
            className="relative mx-auto mb-4 h-6 w-6 fill-champagne/30 text-champagne"
            strokeWidth={1.5}
          />
          <p className="relative font-display text-2xl italic leading-relaxed text-warm md:text-3xl">
            Designed with all my love by your brother and friend, Omar, for the most beautiful
            person in the universe—and the loveliest 155 cm of them all.
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={backToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="العودة إلى أعلى الصفحة"
          className="glass mt-14 flex h-12 w-12 items-center justify-center rounded-full text-champagne transition-colors duration-300 hover:text-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
        </motion.button>
      </div>
    </footer>
  );
}
