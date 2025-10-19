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
        
      />
      
      {/* Content layer */}
      <div className="flex flex-col items-center gap-8 relative z-30">
        <div className="flex flex-col items-center gap-4">
          <motion.h1
            className="text-9xl font-bold text-gray-900 tracking-tight"
            style={{ 
              fontFamily: "Open Sans", fontWeight: "500"
            }}
            initial={{ opacity: 0.4, y: 50, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: prefersReduced ? 0 : 2.4, ease, delay: 0.2 }}
          >
            Welcome to UP!
          </motion.h1>
          
          {/* This is the animated line */}
          
        </div>
        
        <motion.div
          className="origin-left relative z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: prefersReduced ? 0 : 1.2, ease, delay: 0.8 }}
        >
          <button
            className="px-8 py-3.5 bg-white text-black text-md font-medium rounded-3xl hover:bg-gray-800 hover:text-white transition-colors shadow-md hover:shadow-lg w-full"
            style={{ fontFamily: "Pixelify Sans", fontWeight: "400" }}
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}