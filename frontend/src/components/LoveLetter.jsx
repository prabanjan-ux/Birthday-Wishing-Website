import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const letterText = `Hi baby,

Happy Birthday, Rasme! How are you? I hope you’re doing great. The last time I wished you on your birthday was on October 5th, 2024 (just kidding!). I remember I had my NPTEL exam that day, so my wish was very formal. But see me now—I’m building a website for my girl!

Babe, how do you like the website? I’ve been working on it for the past three days whenever I got time. Today, I’ve been fully into it since morning, which is why I didn’t have time this afternoon. I was busy in the morning, like I told you. Maybe you missed me—but you should, if you want some real surprises.

Going through our journey, so much has happened in our lives. We became close, then stopped speaking, and now we’ve become even closer. Even if we stop talking for hours, we eventually speak again, and that’s how attached we are right now.

Babe, thanks for being with me. Let’s live together without letting ego or any other issues disturb our bond. Of course, we’ll fight sometimes and roleplay in texts, but that’s part of us. I’ve always admired you, even from your past, and I want you to know that nothing should feel like a burden. I’m always here—we’ll figure everything out together. But for now, let’s focus on studying, because I believe if we have money and stability, nothing can stop us from being together in the future.

Let’s understand each other more and grow together. Thank you for always being there—teaching me, trusting me, motivating me, and even annoying me sometimes! I’ll always love you. I don’t know if I can ever reach the level of love you have for me, but I love you so much.

You’ll see a lot of happy birthday messages today, so once again, happy birthday to my elite princess! I know I can’t cover everything I want to say—maybe I’m missing some points due to distractions, like you texting me now, and yes, I’m just buttering you up with “lulla baa” words.

Also, I’m not sure if I can complete and deploy the website by 12. There’s so much I wanted to do, but for now, I have some time constraints.

Okay, byeee babyyy! See you on WhatsApp.

Your Love`;

export default function LoveLetter() {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= letterText.length) {
        setDisplayedText(letterText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
        >
          A Letter From My Heart
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
