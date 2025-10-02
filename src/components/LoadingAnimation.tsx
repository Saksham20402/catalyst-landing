import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "../assets/catalyst-logo.png";
interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#1F1F1F] flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
          <motion.img
          src={logo}
          alt="Catalyst Logo"
          className="w-12 h-12 mx-auto mb-8"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/*<h1 className="text-6xl font-bold text-white mb-2">Catalyst</h1>*/}
          <motion.div
            className="h-1 bg-[#46675D] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
        
        {/*<motion.div*/}
        {/*  animate={{ */}
        {/*    rotate: 360,*/}
        {/*    scale: [1, 1.1, 1]*/}
        {/*  }}*/}
        {/*  transition={{ */}
        {/*    rotate: { duration: 2, repeat: Infinity, ease: "linear" },*/}
        {/*    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }*/}
        {/*  }}*/}
        {/*  className="w-12 h-12 border-2 border-[#BEDCE4] border-t-transparent rounded-full mx-auto"*/}
        {/*/>*/}


      </div>
    </motion.div>
  );
}