import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onOpen: () => void;
}

export default function WelcomeScreen({ onOpen }: WelcomeScreenProps) {
  return (
    <motion.section
      aria-label="شاشة البداية"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-midnight via-midnight-800 to-midnight px-6 text-center"
      exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.04 }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum-400/25 blur-[120px] animate-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />

      <motion.p
        className="relative font-display text-lg italic tracking-wide text-lavender md:text-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        There&apos;s someone who deserves a little extra happiness...
      </motion.p>

      <motion.h1
        className="relative mt-6 max-w-2xl text-2xl font-semibold leading-[1.5] text-warm md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.2 }}
      >
        في حد يستاهل فرحة زيادة شوية...
      </motion.h1>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          type="button"
          onClick={onOpen}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-champagne/60 bg-champagne/10 px-8 py-4 text-base font-semibold text-champagne shadow-[0_0_40px_-8px_rgba(255,121,170,0.6)] transition-colors duration-300 hover:bg-champagne hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne md:text-lg"
        >
          <Sparkles className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          <span>افتحي مفاجأتك يا سارة ❤️</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
