import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { Hero } from "./components/Hero";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { TrustedBy } from "./components/TrustedBy";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for smooth UX
    const minLoadTime = setTimeout(() => {
      // Loading will complete when LoadingAnimation calls onComplete
    }, 1500);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <div className="min-h-screen bg-[#1F1F1F] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <DashboardShowcase />
            <TrustedBy />
            <About />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}