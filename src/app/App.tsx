import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'motion/react';
import svgPaths from "./imports/svg-pk7ikfe7m8";
import imgImage5 from "figma:asset/4b430c62ada5f995e1d0f1d29568a1758e4cf3e6.png";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFinalState, setShowFinalState] = useState(false);
  const [displayScore, setDisplayScore] = useState(300);
  const [dots, setDots] = useState('');
  
  // Motion values for animations
  const score = useMotionValue(300);
  const sliderPosition = useMotionValue(0); // 0 = left (300), 1 = right (779)
  
  // Calculate slider knob position based on score
  const knobLeft = useTransform(sliderPosition, [0, 1], [-269.97, 124.22]);
  
  useEffect(() => {
    // Subscribe to score changes to update display
    const unsubscribe = score.on('change', (latest) => {
      setDisplayScore(Math.round(latest));
    });
    
    return unsubscribe;
  }, [score]);
  
  useEffect(() => {
    // Animate dots while loading
    if (isLoading) {
      const dotStates = ['', '.', '..', '...'];
      let index = 0;
      
      const dotInterval = setInterval(() => {
        index = (index + 1) % dotStates.length;
        setDots(dotStates[index]);
      }, 400);
      
      return () => clearInterval(dotInterval);
    }
  }, [isLoading]);
  
  useEffect(() => {
    // Start loading animation after a brief moment
    const timer = setTimeout(() => {
      // Animate score from 300 to 779 over 2.25 seconds
      animate(score, 779, {
        duration: 2.25,
        ease: [0.42, 0, 0.58, 1], // ease-in-out
      });
      
      // Animate slider position in sync
      animate(sliderPosition, 1, {
        duration: 2.25,
        ease: [0.42, 0, 0.58, 1],
      });
      
      // After animation completes, show final state
      setTimeout(() => {
        setIsLoading(false);
        setShowFinalState(true);
      }, 2250);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [score, sliderPosition]);
  
  return (
    <div className="relative size-full bg-[#f8f9fa] flex items-center justify-center">
      <div className="relative h-[712px] w-[663px]">
        {/* Background card */}
        <div className="absolute h-[711.458px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[663.278px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 663.278 711.458">
            <path d={svgPaths.p6a19700} fill="white" />
          </svg>
        </div>
        
        {/* Experian logo with pulse animation */}
        <motion.div 
          className="absolute h-[50px] left-[calc(50%+195px)] top-[calc(50%+265px)] translate-x-[-50%] translate-y-[-50%] w-[149px]"
          animate={isLoading ? {
            opacity: [0.7, 1, 0.7],
          } : {
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isLoading ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <img alt="Experian" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
        </motion.div>
        
        {/* Score display */}
        <div className="absolute content-stretch flex flex-col font-['Objectivity:Medium',sans-serif] items-start left-[calc(50%-107.49px)] not-italic top-[calc(50%-181.65px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#2f6d7c] text-[184px] tracking-[3.68px] w-[324.963px]">
            <p className="leading-none">
              {displayScore}
            </p>
          </div>
          
          {/* Status text */}
          <div className="relative min-w-full h-[43.2px] overflow-hidden">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.p 
                  key="loading"
                  className="absolute leading-[1.2] text-[#2f6d7c] text-[36px] tracking-[0.72px] opacity-60"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Fetching score{dots}
                </motion.p>
              ) : (
                <motion.p 
                  key="excellent"
                  className="absolute leading-[1.2] text-[#5ed3b0] text-[36px] tracking-[0.72px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Excellent
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Slider group */}
        <div className="absolute left-1/2 top-[calc(50%+84.41px)] translate-x-[-50%] translate-y-[-50%]">
          {/* Slider bar */}
          <div className="absolute h-[73.069px] left-1/2 rounded-[76.914px] top-[calc(50%-21.17px)] translate-x-[-50%] translate-y-[-50%] w-[540.323px]" 
               style={{ backgroundImage: "linear-gradient(90.5315deg, rgb(228, 159, 159) 2.7086%, rgb(238, 192, 149) 48.566%, rgb(75, 205, 167) 98.504%)" }} />
          
          {/* Animated slider knob */}
          <motion.div 
            className="absolute bg-[#b0e56d] h-[90.374px] rounded-[19.229px] top-[calc(50%-21.17px)] translate-x-[-50%] translate-y-[-50%] w-[7.691px]"
            style={{ left: knobLeft }}
          />
          
          {/* Slider labels */}
          <p className="absolute font-['Objectivity:Medium',sans-serif] leading-[1.2] left-[calc(50%-269.97px)] not-italic text-[24px] text-[rgba(47,109,124,0.6)] text-nowrap top-[calc(50%+38.38px)] tracking-[-0.48px]">300</p>
          <p className="absolute font-['Objectivity:Medium',sans-serif] leading-[1.2] left-[calc(50%+270.08px)] not-italic text-[24px] text-[rgba(47,109,124,0.6)] text-nowrap text-right top-[calc(50%+38.38px)] tracking-[-0.48px] translate-x-[-100%]">900</p>
        </div>
        
        {/* Last updated section */}
        <div className="absolute content-stretch flex flex-col gap-[3.212px] items-start leading-[1.2] left-[calc(50%-192.08px)] not-italic text-[#2f6d7c] top-[calc(50%+261.11px)] translate-x-[-50%] translate-y-[-50%] w-[155.782px]">
          <p className="font-['Objectivity:Regular',sans-serif] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">Last updated</p>
          
          {isLoading ? (
            <motion.div
              className="relative shrink-0 h-[28.8px] w-[120px] bg-gradient-to-r from-[rgba(47,109,124,0.1)] via-[rgba(47,109,124,0.2)] to-[rgba(47,109,124,0.1)] rounded-[4px]"
              animate={{
                backgroundPosition: ['200% 0', '-200% 0'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          ) : (
            <motion.p 
              className="font-['Objectivity:Medium',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Just now
            </motion.p>
          )}
        </div>
        
        {/* Change indicator */}
        <div className="absolute content-stretch flex gap-[23px] items-center left-[calc(50%+223.49px)] top-[calc(50%-111.67px)] translate-x-[-50%] translate-y-[-50%]">
          {showFinalState ? (
            <>
              <motion.p 
                className="font-['Objectivity:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2f6d7c] text-[36px] text-nowrap text-right tracking-[0.72px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                +30
              </motion.p>
              <motion.div 
                className="flex items-center justify-center relative shrink-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <div className="flex-none rotate-[180deg]">
                  <div className="h-[23.074px] relative w-0">
                    <div className="absolute inset-[-8.67%_-14.73px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4558 27.0743">
                        <path d={svgPaths.p3094c00} fill="#47CCA5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <p className="font-['Objectivity:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2f6d7c] text-[36px] text-nowrap text-right tracking-[0.72px] opacity-40">
                0
              </p>
              <div className="flex items-center justify-center relative shrink-0 opacity-40">
                <div className="flex-none rotate-[180deg]">
                  <div className="h-[23.074px] relative w-0">
                    <div className="absolute inset-[-8.67%_-14.73px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.4558 27.0743">
                        <path d={svgPaths.p3094c00} fill="#47CCA5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}