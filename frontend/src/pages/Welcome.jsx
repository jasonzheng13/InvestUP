import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1]; 

export default function Welcome() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0.6, y: 12, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: prefersReduced ? 0 : 2, ease }}
      className="min-h-screen bg-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/blue-white-gradient-background.jpg')" }}
    >
      <motion.h1
        className="text-8xl font-bold text-gray-900 tracking-tight"
        initial={{ opacity: 0.4, y: 50, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: prefersReduced ? 0 : 2.4, ease, delay: 0.2 }}
      >
        Welcome to UP!
      </motion.h1>
    </motion.div>
  );
}

