import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Heart, Eye, Bed, Music } from 'lucide-react';

// --- Constants ---
// Define constants outside the component to prevent re-declaration on every render.
const BIRTH_DATE = new Date('2005-10-05T00:00:00');
const AVG_HEART_RATE_BPM = 75; // Average beats per minute
const AVG_BLINKS_PER_MINUTE_AWAKE = 17; // Average blinks per minute while awake
const HOURS_ASLEEP_PER_DAY = 8;
const HOURS_AWAKE_PER_DAY = 16;
const TAYLOR_SWIFT_SONGS_RELEASED = 235; // As of late 2024, includes all studio albums, re-records with vault tracks, and key singles.

// --- Helper Function for Calculations ---
// A clean function to calculate all stats based on the current time.
const calculateLifeStats = () => {
  const now = new Date();
  const diffMs = now.getTime() - BIRTH_DATE.getTime();

  const totalSeconds = diffMs / 1000;
  const totalDays = totalSeconds / (60 * 60 * 24);
  const totalHours = totalSeconds / (60 * 60);

  return {
    daysLived: totalDays,
    hoursLived: totalHours,
    heartbeats: totalSeconds * (AVG_HEART_RATE_BPM / 60),
    daysAsleep: totalDays * (HOURS_ASLEEP_PER_DAY / 24),
    blinks: totalDays * HOURS_AWAKE_PER_DAY * 60 * AVG_BLINKS_PER_MINUTE_AWAKE,
  };
};

// --- Background Orbs Component ---
const BackgroundOrbs = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-purple-200 rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 80 + 20}px`,
                    height: `${Math.random() * 80 + 20}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.2, 0], scale: 1 }}
                transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                }}
            />
        ))}
    </div>
);


export default function LifeStats() {
  // State to hold the live-updating stats
  const [liveStats, setLiveStats] = useState(calculateLifeStats());

  useEffect(() => {
    // Set up an interval to update the stats every second
    const timerId = setInterval(() => {
      setLiveStats(calculateLifeStats());
    }, 1000);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(timerId);
  }, []);

  // The array of stats to display, now uses the live state
  const stats = [
    { icon: Calendar, label: 'Days on Earth', value: liveStats.daysLived, decimals: 4 },
    { icon: Clock, label: 'Hours Lived', value: liveStats.hoursLived, decimals: 2 },
    { icon: Heart, label: 'Approx. Heartbeats', value: liveStats.heartbeats, decimals: 0 },
    { icon: Bed, label: 'Days Spent Sleeping', value: liveStats.daysAsleep, decimals: 4 },
    { icon: Eye, label: 'Approx. Blinks', value: liveStats.blinks, decimals: 0 },
    { icon: Music, label: 'Taylor Swift Songs Released in Your Lifetime', value: TAYLOR_SWIFT_SONGS_RELEASED, decimals: 0, static: true },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden py-16">
        <BackgroundOrbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(147, 51, 234, 0.2))' }}
            >
                A Lifetime of Moments
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                {stats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        <stat.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                        <h3 className="text-md font-semibold text-gray-800 mb-2 h-12 flex items-center justify-center">
                            {stat.label}
                        </h3>
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                           {stat.static 
                                ? stat.value.toLocaleString() 
                                : stat.value.toLocaleString(undefined, {
                                    minimumFractionDigits: stat.decimals,
                                    maximumFractionDigits: stat.decimals,
                                })
                            }
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
