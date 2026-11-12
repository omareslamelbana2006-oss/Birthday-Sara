import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Confetti from '@/components/Confetti';
import { WISH_MESSAGE } from '@/data/content';

const CANDLE_COUNT = 5;
const EASE = [0.16, 1, 0.3, 1] as const;

export default function WishCakeSection() {
  const [blownOut, setBlownOut] = useState(false);
  const [burstId, setBurstId] = useState(0);

  const blowCandles = () => {
    if (blownOut) return;
    setBlownOut(true);
    setBurstId((id) => id + 1);
  };

  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36">
      <Star aria-hidden="true" className="absolute left-[12%] top-24 h-4 w-4 animate-glow text-champagne/60" />
      <Star aria-hidden="true" className="absolute right-[14%] top-40 h-3 w-3 animate-glow text-lavender/70 [animation-delay:1.5s]" />
      <Star aria-hidden="true" className="absolute bottom-32 left-[20%] h-3 w-3 animate-glow text-champagne/50 [animation-delay:3s]" />
      <Star aria-hidden="true" className="absolute bottom-20 right-[18%] h-5 w-5 animate-glow text-champagne/60 [animation-delay:4.5s]" />

      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display text-2xl italic text-lavender md:text-3xl"
        >
          Make a wish, Sara...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative mx-auto mt-12 flex h-72 w-72 flex-col items-center justify-end md:h-80 md:w-80"
        >
          <div className="flex w-full items-end justify-around px-10">
            {Array.from({ length: CANDLE_COUNT }, (_, i) => (
              <div key={i} className="relative flex h-16 w-3 flex-col items-center justify-end md:h-20">
                <AnimatePresence>
                  {!blownOut && (
                    <motion.span
                      key="flame"
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.2, y: -10, transition: { duration: 0.5 } }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      className="absolute -top-6 flex justify-center"
                    >
                      <span
                        className="block h-6 w-3.5 origin-bottom animate-flicker rounded-full bg-gradient-to-t from-champagne-600 via-champagne to-warm shadow-[0_0_18px_6px_rgba(255,121,170,0.55)]"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
                {blownOut && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0.6, y: 0 }}
                    animate={{ opacity: 0, y: -28 }}
                    transition={{ duration: 1.6, delay: 0.2 }}
                    className="absolute -top-4 h-3 w-3 rounded-full bg-warm/40 blur-sm"
                  />
                )}
                <span className="h-full w-full rounded-sm bg-gradient-to-b from-lavender via-plum-300 to-plum-400" />
              </div>
            ))}
          </div>

          <div className="relative z-10 h-16 w-64 rounded-t-3xl bg-gradient-to-b from-warm via-warm-200 to-champagne shadow-[0_-10px_30px_-10px_rgba(255,121,170,0.5)] md:w-72">
            <span className="absolute inset-x-0 top-0 h-5 rounded-t-3xl bg-warm/90" />
            <span className="absolute -bottom-0 left-4 h-5 w-4 rounded-b-full bg-warm" />
            <span className="absolute -bottom-0 left-1/2 h-4 w-5 -translate-x-1/2 rounded-b-full bg-warm" />
            <span className="absolute -bottom-0 right-6 h-6 w-4 rounded-b-full bg-warm" />
          </div>
          <div className="relative z-10 h-24 w-72 rounded-t-3xl bg-gradient-to-b from-lavender-200 via-lavender to-plum-400 shadow-[0_-10px_30px_-10px_rgba(240,166,196,0.45)] md:w-80">
            <span className="absolute inset-x-0 top-0 h-4 rounded-t-3xl bg-warm/70" />
          </div>
          <div className="absolute bottom-0 h-6 w-[22rem] rounded-[50%] bg-midnight-700 shadow-[0_0_40px_6px_rgba(207,79,130,0.35)] md:w-[24rem]" />
        </motion.div>

        <div className="mt-12 min-h-[9rem]">
          <AnimatePresence mode="wait">
            {!blownOut ? (
              <motion.button
                key="blow"
                type="button"
                onClick={blowCandles}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-champagne transition-colors duration-300 hover:text-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne md:text-lg"
              >
                <span>أطفئ الشموع ✨</span>
              </motion.button>
            ) : (
              <motion.div
                key="wish"
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 1.2, ease: EASE }}
                role="status"
                className="glass mx-auto max-w-xl rounded-3xl px-8 py-8"
              >
                <p className="text-lg font-semibold leading-[1.5] text-champagne md:text-xl">{WISH_MESSAGE}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {burstId > 0 && <Confetti key={burstId} />}
    </section>
  );
}
