import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

// A placeholder video can be used, or just a string for the src
const placeholderVideo = "/videos/placeholder.mp4"; 

export default function GiftBox({
  title = "A Special Surprise For You",
  videoSrc = placeholderVideo,
  endMessage = "Hope you enjoyed it!"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 overflow-hidden">
      <div className="text-center px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        >
          {/* Use the title prop here */}
          {title}
        </motion.h2>

        <div className="relative inline-block">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              // --- GIFT BOX (CLOSED STATE) ---
              <motion.div
                key="closed"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                    <Gift className="w-24 h-24 sm:w-32 sm:h-32 text-white" strokeWidth={1.5} />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-full bg-gradient-to-b from-yellow-300 to-yellow-400" />
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 sm:h-12 bg-gradient-to-r from-yellow-300 to-yellow-400" />
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full shadow-lg" />
                    </motion.div>
                  </div>
                  <motion.p
                    className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-700 font-semibold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Tap to open your gift
                  </motion.p>
                </motion.div>
              </motion.div>
            ) : (
              // --- VIDEO PLAYER (OPEN STATE) ---
              <motion.div
                key="open"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="max-w-2xl w-full"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 opacity-50" />
                  <div className="relative z-10">
                    <video
                      // Use the videoSrc prop here
                      src={videoSrc}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      controls
                      autoPlay
                      playsInline
                      onEnded={handleVideoEnd}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    <AnimatePresence>
                      {isVideoFinished && (
                        <motion.div
                          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-2xl text-center p-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4" fill="white" />
                          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {/* Use the endMessage prop here */}
                            {endMessage}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ x: '50%', y: '50%', scale: 0, opacity: 1 }}
                      animate={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: Math.random() + 0.5,
                        opacity: 0,
                      }}
                      transition={{ duration: 2, delay: i * 0.05 }}
                    >
                      <Heart className="text-pink-400" size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}