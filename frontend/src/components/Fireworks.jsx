import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Accept props for the text, and provide default values
export default function Fireworks({
  heading = "Happy Birthday!",
  subheading = "To an Amazing Person",
  message = "Wishing you a fantastic day filled with joy and laughter. Hope all your wishes come true!",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // ... all the canvas and fireworks logic stays exactly the same ...
    const canvas = canvasRef.current;
     if (!canvas) return;

     const ctx = canvas.getContext("2d");
     if (!ctx) return;

     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;

     const particles = [];
     const colors = [
       "#FF1461",
       "#18FF92",
       "#5A87FF",
       "#FBF38C",
       "#FF6B6B",
       "#A8E6CF",
     ];

     const createFirework = (x, y) => {
       const particleCount = 50;
       for (let i = 0; i < particleCount; i++) {
         const angle = (Math.PI * 2 * i) / particleCount;
         const velocity = Math.random() * 5 + 2;
         particles.push({
           x,
           y,
           vx: Math.cos(angle) * velocity,
           vy: Math.sin(angle) * velocity,
           life: 100,
           color: colors[Math.floor(Math.random() * colors.length)],
         });
       }
     };

     const animate = () => {
       ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
       ctx.fillRect(0, 0, canvas.width, canvas.height);

       for (let i = particles.length - 1; i >= 0; i--) {
         const particle = particles[i];
         particle.x += particle.vx;
         particle.y += particle.vy;
         particle.vy += 0.1;
         particle.life--;

         if (particle.life <= 0) {
           particles.splice(i, 1);
           continue;
         }

         ctx.beginPath();
         ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
         ctx.fillStyle = particle.color;
         ctx.globalAlpha = particle.life / 100;
         ctx.fill();
         ctx.globalAlpha = 1;
       }

       requestAnimationFrame(animate);
     };

     const interval = setInterval(() => {
       const x = Math.random() * canvas.width;
       const y = Math.random() * (canvas.height * 0.5);
       createFirework(x, y);
     }, 1000);

     animate();

     const handleResize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };

     window.addEventListener("resize", handleResize);

     return () => {
       clearInterval(interval);
       window.removeEventListener("resize", handleResize);
     };
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-2xl">
            {/* Use the heading prop here */}
            {heading}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-pink-200 mb-4 sm:mb-6 drop-shadow-lg"
          >
            {/* Use the subheading prop here */}
            {subheading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {/* Use the message prop here */}
            {message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 sm:mt-12 text-4xl sm:text-5xl md:text-6xl"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}