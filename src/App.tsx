import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import AmbientParticles from '@/components/AmbientParticles';
import Confetti from '@/components/Confetti';
import FinalSection from '@/components/FinalSection';
import FutureSection from '@/components/FutureSection';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import LittleThingsSection from '@/components/LittleThingsSection';
import MusicToggle from '@/components/MusicToggle';
import WelcomeScreen from '@/components/WelcomeScreen';
import WishCakeSection from '@/components/WishCakeSection';

const STAR_COLORS = ['#ffd4e5', '#ff83b3', '#f0a6c4', '#fff7fb'];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [starBurst, setStarBurst] = useState(0);

  const openSurprise = () => {
    setStarBurst((n) => n + 1);
    setShowWelcome(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <AmbientParticles />

      <AnimatePresence>
        {showWelcome && <WelcomeScreen key="welcome" onOpen={openSurprise} />}
      </AnimatePresence>

      {!showWelcome && (
        <motion.main
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <HeroSection />
          <LetterSection />
          <LittleThingsSection />
          <FutureSection />
          <WishCakeSection />
          <FinalSection />
        </motion.main>
      )}

      {starBurst > 0 && <Confetti key={starBurst} count={48} colors={STAR_COLORS} spread={70} />}
      <MusicToggle />
    </MotionConfig>
  );
}
