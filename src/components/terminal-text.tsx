import React from "react";
import { motion } from "framer-motion";

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  typingSpeed = 50,
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);

  React.useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed]);

  React.useEffect(() => {
    if (isTypingComplete) {
      const blinkInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 530);
      
      return () => clearInterval(blinkInterval);
    }
  }, [isTypingComplete]);

  return (
    <div className={`font-mono ${className}`}>
      <span>{displayedText}</span>
      {cursorVisible && (
        <motion.span 
          initial={{ opacity: 1 }}
          animate={{ opacity: isTypingComplete ? [1, 0] : 1 }}
          transition={{ duration: 0.5, repeat: isTypingComplete ? Infinity : 0, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-primary-500 ml-[2px] align-middle"
        />
      )}
    </div>
  );
};