import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import SaraPhoto from '@/components/SaraPhoto';

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  const goToLetter = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <SaraPhoto loading="eager" alt="صورة سارة" imgClassName="object-[center_20%]" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-transparent md:from-midnight/70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-midnight/70 to-transparent" />
      <div className="absolute -bottom-32 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-full bg-plum-500/30 blur-[120px] animate-glow" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-32 text-center md:px-10 md:text-start">
        <motion.p
          {...reveal(0.3)}
          className="font-display text-xl italic text-champagne md:text-2xl"
        >
          A Little Late, A Lifetime of Memories
        </motion.p>

        <motion.h1
          {...reveal(0.5)}
          className="rose-text mt-4 font-display text-5xl font-medium leading-[1.2] md:text-7xl lg:text-8xl"
        >
          Happy Belated Birthday, Sara!
        </motion.h1>

        <motion.div {...reveal(0.8)} className="mt-8 max-w-2xl space-y-4 mx-auto md:mx-0">
          <p className="text-lg font-semibold leading-[1.5] text-warm md:text-2xl">
            عارف إني اتأخرت... بس في ناس تستاهل إننا نحتفل بيهم حتى لو فات اليوم.
          </p>
          <p className="text-base leading-[1.5] text-warm-200/90 md:text-xl">
            كل سنة وإنتِ طيبة يا سارة، وكل سنة وإنتِ أقرب للفرحة والراحة وكل حاجة حلوة تستاهليها.
          </p>
        </motion.div>

        <motion.div {...reveal(1.1)} className="mt-10">
          <motion.button
            type="button"
            onClick={goToLetter}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-semibold text-warm transition-colors duration-300 hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          >
            <Mail className="h-5 w-5 text-champagne" strokeWidth={1.6} aria-hidden="true" />
            <span>في رسالة صغيرة مستنياكي...</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-champagne/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.4} />
      </motion.div>
    </section>
  );
}
