import { motion } from 'framer-motion';
import { Clapperboard, Flower2, Gamepad2, Popcorn, Sparkles, type LucideIcon } from 'lucide-react';
import SaraPhoto from '@/components/SaraPhoto';
import { FUTURE_MEMORIES } from '@/data/content';

const EASE = [0.16, 1, 0.3, 1] as const;

const SYMBOLS: { icon: LucideIcon; label: string }[] = [
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Clapperboard, label: 'Movies' },
  { icon: Popcorn, label: 'Popcorn' },
  { icon: Flower2, label: 'Flowers' },
  { icon: Sparkles, label: 'Memories' },
];

export default function FutureSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-plum-500/30 blur-[140px] animate-glow" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center"
        >
          <h2 className="rose-text font-display text-4xl font-medium leading-[1.2] md:text-6xl">
            Our Story Is Still Being Written...
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.5] text-warm-200/90 md:text-xl">
            لسه قدامنا خروجات كتير، وأفلام كرتون، ومنافسات بلايستيشن، وضحك على حاجات تافهة، وحكايات هنفضل نفتكرها.
          </p>
        </motion.div>

        <ul className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
          {SYMBOLS.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="flex flex-col items-center gap-3"
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass flex h-16 w-16 items-center justify-center rounded-2xl text-champagne md:h-20 md:w-20"
              >
                <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.4} aria-hidden="true" />
              </motion.span>
              <span className="text-xs tracking-wide text-lavender md:text-sm">{label}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-24 grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] border border-champagne/30" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] transition duration-700 hover:-translate-y-1">
              <SaraPhoto imgClassName="object-[center_25%] grayscale-[15%] transition duration-700 hover:grayscale-0 hover:scale-105" />
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display text-3xl italic text-warm md:text-4xl"
            >
              Memories We Haven&apos;t Made Yet
            </motion.h3>

            <ol className="relative mt-10 space-y-10 border-s border-champagne/30 ps-8">
              {FUTURE_MEMORIES.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -start-[37px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-champagne shadow-[0_0_14px_3px_rgba(255,121,170,0.5)]"
                  />
                  <p className="text-sm tracking-widest text-champagne/80">0{i + 1}</p>
                  <h4 className="mt-1 text-xl font-semibold text-warm">{item.title}</h4>
                  <p className="mt-1 text-base text-warm-200/80">{item.hint}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
