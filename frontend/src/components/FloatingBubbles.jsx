import { motion } from 'framer-motion';

// A simple array of nicknames
const bubbles = [
  'Baby Girl','Rasme','Rasssss','Rasam','Mommyyyy','Smoking Hot','Sec c','Chikki Bikki', 'Cutie', 'Baby', 'Sunshine', 'Angel', 
  'Sweetie', 'Beautiful', 'Princess', 'Darling', 'Caramel Pudding','Honey','Rasssmeeeweeee','small little baby girl','Venilla Biscoff','Wifeyyy'
];

export default function FloatingBubbles() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden py-12 sm:py-16">
      <div className="text-center z-10 px-4 sm:px-6 md:px-8 mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        >
          All My Names for You
        </motion.h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Here are just a few of the loving names I have for you, floating like my thoughts of you.
        </p>
      </div>

      <div className="absolute inset-0">
        {bubbles.map((nickname, index) => {
          // Random values for a dynamic layout
          const randomX = Math.random() * 80 + 10;
          const randomY = Math.random() * 80 + 10;
          const randomSize = Math.random() * 80 + 100;
          const randomDuration = Math.random() * 5 + 8;
          const randomDelay = Math.random() * 2;

          return (
            <motion.div
              key={index}
              className="absolute group" // Removed "cursor-pointer"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.1, 1],
                opacity: [0, 0.8, 0.8, 0.8],
                y: [0, -20, 0, -15, 0], // Creates a gentle bobbing motion
              }}
              transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300/60 via-purple-300/60 to-rose-300/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-shadow" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white drop-shadow-lg text-center px-2">
                    {nickname}
                  </span>
                </div>
                {/* Decorative sheen */}
                <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-white/70 rounded-full" />
                <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/50 rounded-full" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The entire AnimatePresence block for the modal has been removed */}
    </section>
  );
}