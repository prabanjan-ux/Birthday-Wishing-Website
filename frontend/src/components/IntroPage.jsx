import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function IntroPage() {
  return (
    <section id="intro" className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            Hi Rasme
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
              Today is such a special day for my special person — the one I can share anything with, the one I feel I have the right to ask anything and everything, the one who makes me feel like your own baby. This is your first birthday since we became even closer, and though I can’t be with you in person on this special day, I wanted to do something meaningful.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
                So, I built this little website as a virtual gift for you. Scroll through it and enjoy — it’s made just for you.
          </p>
        </motion.div>
      </div>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 2,
          }}
        >
          <Heart
            className="text-pink-400 opacity-30"
            size={Math.random() * 30 + 20}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </section>
  );
}
