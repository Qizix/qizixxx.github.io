import React from "react";
import { motion } from "framer-motion";

export const GlowingLogo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative z-10">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400 bg-clip-text text-transparent">
          qizixxx
        </h1>
        <motion.div
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-400/20 rounded-lg blur-xl z-0"
        />
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </motion.div>
  );
};