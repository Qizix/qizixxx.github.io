import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Link, Tooltip } from "@heroui/react";
import { TerminalText } from "./components/terminal-text";
import { SocialLink } from "./components/social-link";
import { GlowingLogo } from "./components/glowing-logo";

const App: React.FC = () => {
  return (
    <div className="noise-bg min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md mx-auto"
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <GlowingLogo />
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <TerminalText 
              text="AI, code, models, mistakes, chaos. Learning fast. Losing MMR faster."
              typingSpeed={30}
              className="text-foreground-600 text-lg sm:text-xl max-w-sm mx-auto"
            />
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <SocialLink 
              icon="lucide:github" 
              href="https://github.com/qizix"
            />
            <SocialLink 
              icon="lucide:send" 
              href="https://t.me/qizixxx"
            />
            <SocialLink 
              icon="lucide:mail" 
              href="yar.dziub2005@gmail.com"
            />
          </motion.div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-12 text-foreground-400 text-xs"
          >
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;