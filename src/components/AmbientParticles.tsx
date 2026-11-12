import { useMemo } from 'react';

const PARTICLE_COUNT = 26;

export default function AmbientParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 4),
        delay: `${(i % 7) * 0.9}s`,
        duration: `${7 + (i % 5) * 1.6}s`,
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-drift absolute rounded-full bg-champagne/70 shadow-[0_0_12px_3px_rgba(255,121,170,0.5)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
