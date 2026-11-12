import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LITTLE_THINGS } from '@/data/content';

export default function LittleThingsSection() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-display text-lg italic text-lavender">Little Things About You</p>
        <h2 className="mt-3 text-3xl font-semibold leading-[1.2] text-warm md:text-4xl">
          حاجات صغيرة عنك
        </h2>
      </motion.div>

      <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LITTLE_THINGS.map((text, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-7 transition-colors duration-500 hover:border-champagne/40"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-plum-400/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
            />
            <Sparkles className="relative h-5 w-5 text-champagne" strokeWidth={1.5} aria-hidden="true" />
            <p className="relative mt-5 text-lg font-semibold leading-[1.5] text-warm">{text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
