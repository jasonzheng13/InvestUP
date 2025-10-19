import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cloud 1 - Top Left */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-32 bg-white/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cloud 2 - Top Right */}
      <motion.div
        className="absolute top-32 right-20 w-96 h-40 bg-white/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Cloud 3 - Middle Left */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-36 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Cloud 4 - Bottom Right */}
      <motion.div
        className="absolute bottom-40 right-10 w-72 h-36 bg-white/20 rounded-full blur-3xl"
        animate={{
          x: [0, -90, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Cloud 5 - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-56 h-28 bg-white/15 rounded-full blur-3xl"
        animate={{
          x: [0, 70, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />
    </div>
  );
}
