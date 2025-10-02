import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-[#46675D]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-[#BEDCE4]/30 rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#46675D]/10 border border-[#46675D]/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#BEDCE4] mr-2" />
            <span className="text-[#BEDCE4] text-sm">AI-Powered Learning</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Master Any Concept with
          <br />
          <span className="text-[#BEDCE4]">Catalyst</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Catalyst transforms learning with AI-generated question roadmaps that adapt to your style. 
          Build knowledge block by block through personalized quizzes and intelligent feedback.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <Button
              onClick = {() => window.open("https://forms.gle/E6zUCXx8F9ArBiV2A", "_blank")}
            size="lg" 
            className="bg-[#46675D] hover:bg-[#46675D]/90 text-white px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
          >
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#BEDCE4]/30 text-[#BEDCE4] hover:bg-[#BEDCE4]/10 px-8 py-4 text-lg transition-all duration-300"
          >
            Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}