import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MailOpen } from 'lucide-react';
import {
  LETTER_PARAGRAPHS,
  LETTER_SIGNATURE_AR,
  LETTER_SIGNATURE_EN,
} from '@/data/content';

const EASE = [0.16, 1, 0.3, 1] as const;
const ENVELOPE_OPEN_DELAY = 0.9;

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="letter" className="relative scroll-mt-4 px-6 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: EASE }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-display text-lg italic text-lavender">A Letter From The Heart</p>
        <h2 className="mt-3 text-3xl font-semibold leading-[1.2] text-warm md:text-5xl">
          رسالة من القلب
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 max-w-2xl">
        <motion.div
          initial={false}
          animate={opened ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: opened ? ENVELOPE_OPEN_DELAY : 0 }}
          className="overflow-hidden"
          style={{ perspective: 1400 }}
        >
          <motion.button
            type="button"
            onClick={() => setOpened(true)}
            disabled={opened}
            aria-expanded={opened}
            aria-label="افتحي الظرف"
            whileHover={opened ? undefined : { y: -6 }}
            whileTap={opened ? undefined : { scale: 0.98 }}
            className="group relative mx-auto block aspect-[16/10] w-full max-w-xl pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-champagne disabled:cursor-default"
          >
            <span className="absolute inset-x-0 bottom-0 top-0 rounded-2xl bg-gradient-to-br from-lavender-200 via-champagne to-champagne-600 shadow-[0_30px_80px_-20px_rgba(255,121,170,0.45)]" />
            <span className="absolute inset-x-6 bottom-6 top-1/2 rounded-b-xl bg-midnight-800/10" />

            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{ rotateX: opened ? 180 : 0 }}
              transition={{ duration: 1, ease: EASE, delay: opened ? 0.1 : 0 }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-lavender-200 to-champagne [clip-path:polygon(0_0,100%_0,50%_100%)]"
            />

            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-plum-500 text-champagne shadow-lg ring-4 ring-champagne/40 transition-transform duration-500 group-hover:scale-110">
              <Heart className="h-7 w-7 fill-champagne/30" strokeWidth={1.5} />
            </span>
            <span className="absolute inset-x-0 bottom-9 text-center font-display text-lg italic text-midnight">
              اضغطي لفتح الرسالة
            </span>
          </motion.button>
        </motion.div>

        {opened && (
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: ENVELOPE_OPEN_DELAY, duration: 1.1, ease: EASE }}
            className="glass relative overflow-hidden rounded-3xl p-8 md:p-14"
          >
            <MailOpen aria-hidden="true" className="absolute left-6 top-6 h-6 w-6 text-champagne/70" strokeWidth={1.4} />
            <div className="space-y-5 text-[1.05rem] leading-[1.5] text-warm md:text-lg">
              {LETTER_PARAGRAPHS.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: ENVELOPE_OPEN_DELAY + 0.6 + i * 0.45, duration: 0.9, ease: 'easeOut' }}
                  className={i === 0 ? 'text-xl font-semibold text-champagne' : ''}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: ENVELOPE_OPEN_DELAY + 0.6 + LETTER_PARAGRAPHS.length * 0.45 + 0.4, duration: 1.2 }}
              className="mt-10 border-t border-white/10 pt-8 text-start"
            >
              <p className="font-semibold text-warm">{LETTER_SIGNATURE_AR}</p>
              <p className="mt-2 font-display text-xl italic text-lavender">{LETTER_SIGNATURE_EN}</p>
            </motion.div>
          </motion.article>
        )}
      </div>
    </section>
  );
}
