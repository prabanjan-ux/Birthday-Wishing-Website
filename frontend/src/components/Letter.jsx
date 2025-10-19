import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// A generic placeholder letter for the template
const placeholderLetter = `Hello there,

This is a placeholder for your personal letter. You can pass any text you want into this component, and it will be displayed with a beautiful typing animation.

It's perfect for personal websites, special messages, or digital portfolios.

Sincerely,
The Developer`;

export default function LoveLetter({ 
  title = "A Letter for You", 
  letterContent = placeholderLetter 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    // Reset state when the letter content changes
    setDisplayedText('');
    setIsComplete(false);

    const interval = setInterval(() => {
      if (currentIndex <= letterContent.length) {
        setDisplayedText(letterContent.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [letterContent]); // Rerun the effect if the letter content changes

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400" />

          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <pre className="whitespace-pre-wrap font-serif text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
              {displayedText}
              {!isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-0.5 h-5 sm:h-6 bg-pink-500 ml-1"
                />
              )}
            </pre>
          </div>

          <div className="absolute bottom-8 right-8 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-pink-300">
              <path
                d="M50,30 Q30,10 10,30 Q-5,45 10,60 L50,95 L90,60 Q105,45 90,30 Q70,10 50,30"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}