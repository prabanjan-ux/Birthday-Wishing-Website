import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LandingPage() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 relative overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
      />

      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 mb-6 sm:mb-8"
        >
          Happy Birthday Rasme
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12"
        >
          A special day for the most special person
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => {
              document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Scroll to Begin
          </button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-pink-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
