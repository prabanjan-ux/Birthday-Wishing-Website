import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

// List of reasons (simplified)
const segments = [
  { text: "Your Smile" },
  { text: "Your Laugh" },
  { text: "Your Nose" },
  { text: "Your Braveness" },
  { text: "Your Strength" },
  { text: "How You Care" },
  { text: "Your Trust" },
  { text: "Your Hugs" },
  { text: "Being You" },
  { text: "Kid act"},
  { text: "Cuteness"},
  { text: "There some much i dont evn k why"},
  { text: "Your anger"}
];

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null); // Renamed for clarity
  const [showDialog, setShowDialog] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    // Add more spins for a more dramatic effect
    const spins = 5 + Math.random() * 5; 
    const randomDegree = Math.random() * 360;
    const finalRotation = rotation + spins * 360 + randomDegree;

    setRotation(finalRotation);

    // Wait for the spin animation to finish
    setTimeout(() => {
      const segmentAngle = 360 / segments.length;
      const normalizedRotation = finalRotation % 360;
      
      // Calculate the index of the selected segment
      const selectedIndex = Math.floor(
        (360 - normalizedRotation + segmentAngle / 2) / segmentAngle
      ) % segments.length;

      setSelectedSegment(segments[selectedIndex]); // Set the selected segment object
      setShowDialog(true);
      setIsSpinning(false);
    }, 4000); // This duration should match the transition duration
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 overflow-hidden text-center p-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-bold text-rose-600 mb-4 drop-shadow-md"
      >
        Why I Love You 💕
      </motion.h2>

      <p className="text-lg sm:text-xl text-gray-700 mb-8">
        Spin the wheel to discover a reason!
      </p>

      {/* Pointer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[180px] sm:-translate-y-[230px] z-10">
        <div className="w-0 h-0 
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          border-t-[20px] border-t-rose-500 drop-shadow-lg" />
      </div>

      {/* Wheel */}
      <motion.div
        className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto"
        animate={{ rotate: rotation }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          {segments.map((segment, index) => {
            const angle = (360 / segments.length) * index;
            const nextAngle = (360 / segments.length) * (index + 1);
            const midAngle = (angle + nextAngle) / 2;

            const colors = [
              "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff", "#ffddd2",
              "#ffc09f", "#ffee93", "#fcf5c7", "#d4a373", "#e9edc9"
            ];

            return (
              <g key={index}>
                <path
                  d={`M 100 100 L ${100 + 100 * Math.cos((angle * Math.PI) / 180)} ${
                    100 + 100 * Math.sin((angle * Math.PI) / 180)
                  } A 100 100 0 0 1 ${100 + 100 * Math.cos((nextAngle * Math.PI) / 180)} ${
                    100 + 100 * Math.sin((nextAngle * Math.PI) / 180)
                  } Z`}
                  fill={colors[index % colors.length]}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={100 + 65 * Math.cos((midAngle * Math.PI) / 180)}
                  y={100 + 65 * Math.sin((midAngle * Math.PI) / 180)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[10px] sm:text-xs font-bold fill-gray-700 pointer-events-none"
                  transform={`rotate(${midAngle + 90}, ${100 + 65 * Math.cos((midAngle * Math.PI) / 180)}, ${100 + 65 * Math.sin((midAngle * Math.PI) / 180)})`}
                >
                  {segment.text}
                </text>
              </g>
            );
          })}
          <circle cx="100" cy="100" r="25" fill="white" stroke="#ffafcc" strokeWidth="3" />
          <Heart transform="translate(88,88)" color="#fb6f92" fill="#ff8fab" />
        </svg>
      </motion.div>

      {/* Button */}
      <motion.button
        onClick={spinWheel}
        disabled={isSpinning}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg disabled:opacity-50 flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        {isSpinning ? "Spinning..." : "Spin for a Surprise!"}
      </motion.button>

      {/* Dialog (custom modal) */}
      {showDialog && selectedSegment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto text-center relative">
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-rose-600 mb-2">
              I love {selectedSegment.text}!
            </h3>
            <p className="text-lg text-gray-700 mt-4">
              It's one of the many things that makes you so special to me. 💖
            </p>
          </div>
        </div>
      )}
    </section>
  );
}