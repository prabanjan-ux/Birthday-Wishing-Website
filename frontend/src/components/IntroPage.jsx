import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Accept props and provide default values for the template
export default function IntroPage({
  name = "Friend",
  paragraph1 = "Today is a special day for a special person. I wanted to do something meaningful to celebrate you and everything you are.",
  paragraph2 = "So, I built this little website as a virtual gift. Scroll through it and enjoy — it’s made just for you."
}) {
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
            {/* Use the name prop here */}
            Hi {name}
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
            {/* Use the paragraph1 prop here */}
            {paragraph1}
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
            {/* Use the paragraph2 prop here */}
            {paragraph2}
          </p>
        </motion.div>
      </div>

      {/* The floating hearts animation remains the same */}
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