import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { Hero } from "./components/Hero";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { TrustedByMarquee } from "./components/TrustedByMarquee";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Ref for footer to scroll to
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure minimum loading time for smooth UX
    const minLoadTime = setTimeout(() => {}, 1500);
    return () => clearTimeout(minLoadTime);
  }, []);

  // Function to scroll to footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {/* Pass scroll function to Hero */}
            <Hero scrollToFooter={scrollToFooter} />
            <DashboardShowcase />
            <TrustedByMarquee />
            <About />
            {/* Footer with ref */}
            <div ref={footerRef}>
              <Footer />
            </div>
            <Toaster position="top-center" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


