import { motion } from "motion/react";
import { useState, useEffect } from "react";
import dashboardImage from 'figma:asset/06cca9c7c73b74a77a076b491b93bb31b51342d4.png';

export function DashboardShowcase() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience <span className="text-[#BEDCE4]">Catalyst</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI-powered platform creates personalized learning experiences through intelligent roadmaps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="bg-[#2A2A2A] rounded-t-xl border border-[#46675D]/20 shadow-2xl">
            {/* Browser Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#46675D]/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#1F1F1F] rounded-md px-4 py-1 text-sm text-gray-400 text-center">
                  app.catalyst.ai/dashboard
                </div>
              </div>
              <div className="w-6"></div>
            </div>

            {/* Dashboard Content */}
            <div className="relative bg-[#1F1F1F] rounded-b-xl overflow-hidden">
              {/* Loading Overlay */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute inset-0 bg-[#1F1F1F] flex items-center justify-center z-20"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-[#BEDCE4] border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-[#BEDCE4] text-sm">Loading your learning path...</p>
                  </div>
                </motion.div>
              )}

              {/* Dashboard Image Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="relative"
              >
                <img
                  src={dashboardImage}
                  alt="Catalyst Dashboard Interface"
                  className="w-full h-auto object-contain rounded-b-xl"
                />

                {/* Playful Cursor Animation Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {!isLoading && (
                    <motion.div
                      className="absolute z-10"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        x: [
                          100, 100, 180, 180, 300, 300, 450, 450, 380, 380, 250, 250, 400, 400, 520, 520, 100
                        ],
                        y: [
                          100, 100, 140, 140, 180, 180, 240, 240, 320, 320, 120, 120, 280, 280, 80, 80, 100
                        ]
                      }}
                      transition={{
                        opacity: { duration: 1, delay: 2.5 },
                        x: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2.5,
                          times: [0, 0.1, 0.2, 0.25, 0.35, 0.4, 0.5, 0.55, 0.65, 0.7, 0.8, 0.85, 0.9, 0.92, 0.95, 0.98, 1]
                        },
                        y: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2.5,
                          times: [0, 0.1, 0.2, 0.25, 0.35, 0.4, 0.5, 0.55, 0.65, 0.7, 0.8, 0.85, 0.9, 0.92, 0.95, 0.98, 1]
                        }
                      }}
                    >
                      {/* Radiant Cursor with Glow */}
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-2 bg-[#D3C182]/20 rounded-full blur-md animate-pulse"></div>
                        {/* Middle glow */}
                        <div className="absolute -inset-1 bg-[#D3C182]/40 rounded-full blur-sm"></div>
                        {/* Main cursor dot */}
                        <div className="relative w-4 h-4 bg-[#D3C182] rounded-full border-2 border-white/80 shadow-lg">
                          {/* Inner highlight */}
                          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        </div>
                        {/* Click ripple effect (appears periodically) */}
                        <motion.div
                          className="absolute inset-0 border-2 border-[#D3C182]/60 rounded-full"
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{ 
                            scale: [1, 2.5, 1], 
                            opacity: [0, 0.8, 0] 
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatDelay: 8,
                            delay: 3
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Gradient Overlay for Polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/20 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-[#46675D]/20 border border-[#46675D]/30 rounded-xl p-3"
          >
            <div className="text-xs text-[#BEDCE4] font-medium">Live Demo</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-[#BEDCE4]/20 border border-[#BEDCE4]/30 rounded-xl p-3"
          >
            <div className="text-xs text-[#BEDCE4] font-medium">AI-Powered</div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to experience personalized learning?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#46675D] hover:bg-[#46675D]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Try Catalyst Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}