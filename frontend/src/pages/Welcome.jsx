import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1]; 

export default function Welcome() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0.6, y: 12, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: prefersReduced ? 0 : 2, ease }}
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        background: "linear-gradient(180deg, #0ea5e9 0%, #38bdf8 40%, #e0f2fe 100%)"
      }}
    >
      {/* Clouds.png image layer - on top of everything */}
      <img 
        src="/Clouds.png" 
        alt="Clouds" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Content layer */}
      <div className="flex flex-col items-center gap-8 relative z-30">
        <motion.h1
          className="text-8xl font-bold text-gray-900 tracking-tight"
          initial={{ opacity: 0.4, y: 50, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReduced ? 0 : 2.4, ease, delay: 0.2 }}
        >
          Welcome to UP!
        </motion.h1>
        
        <motion.button
          className="px-8 py-3.5 bg-blue-600 text-white text-md font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          initial={{ opacity: 0, y: 20, scale: 1.45 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReduced ? 0 : 1.8, ease, delay: 0.6 }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.98 }}
          
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}