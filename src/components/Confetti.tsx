import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  count?: number;
  colors?: string[];
  spread?: number;
}

const DEFAULT_COLORS = ['#ff83b3', '#ffd4e5', '#f0a6c4', '#cf4f82', '#fff7fb'];

export default function Confetti({
  count = 70,
  colors = DEFAULT_COLORS,
  spread = 46,
}: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (Math.random() * 2 - 1) * (spread * Math.PI) / 180 - Math.PI / 2;
        const distance = 160 + Math.random() * 260;
        return {
          id: i,
          color: colors[i % colors.length],
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance + 260,
          rotate: Math.random() * 720 - 360,
          size: 6 + Math.random() * 6,
          round: i % 3 === 0,
          delay: Math.random() * 0.15,
        };
      }),
    [count, colors, spread],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-1/2 top-1/2"
          style={{
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            backgroundColor: p.color,
            borderRadius: p.round ? '9999px' : '2px',
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.rotate, scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 0.8, 0.3, 1], delay: p.delay }}
        />
      ))}
    </div>
  );
}
