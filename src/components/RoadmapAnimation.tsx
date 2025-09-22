import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { CheckCircle, Circle, Brain } from "lucide-react";

const roadmapSteps = [
  { id: 1, title: "Foundations", status: "completed", questions: 12 },
  { id: 2, title: "Core Concepts", status: "completed", questions: 8 },
  { id: 3, title: "Advanced Topics", status: "current", questions: 15 },
  { id: 4, title: "Practice", status: "upcoming", questions: 10 },
  { id: 5, title: "Mastery", status: "upcoming", questions: 6 },
];

export function RoadmapAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % roadmapSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-[#2A2A2A] border border-[#46675D]/20 rounded-2xl overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-8 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-[#46675D]/20" />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-[#46675D]/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-[#BEDCE4]" />
            <h3 className="text-lg font-semibold text-white">Learning Roadmap</h3>
          </div>
          <div className="text-sm text-gray-400">
            React.js Fundamentals
          </div>
        </div>
      </div>

      {/* Roadmap content */}
      <div className="relative z-10 p-6">
        <div className="space-y-4">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: currentStep === index ? 1.02 : 1,
                backgroundColor: currentStep === index ? "rgba(70, 103, 93, 0.1)" : "transparent"
              }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                scale: { duration: 0.2 }
              }}
              className="flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-[#46675D]/20 transition-colors"
            >
              {/* Status icon */}
              <div className="flex-shrink-0">
                {step.status === "completed" ? (
                  <CheckCircle className="w-6 h-6 text-[#BEDCE4]" />
                ) : step.status === "current" ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Circle className="w-6 h-6 text-[#46675D] fill-current" />
                  </motion.div>
                ) : (
                  <Circle className="w-6 h-6 text-gray-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`font-medium ${
                    step.status === "completed" ? "text-[#BEDCE4]" :
                    step.status === "current" ? "text-white" :
                    "text-gray-400"
                  }`}>
                    {step.title}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {step.questions} questions
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-2 h-1 bg-[#3A3A3A] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${
                      step.status === "completed" ? "bg-[#BEDCE4]" :
                      step.status === "current" ? "bg-[#46675D]" :
                      "bg-transparent"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: step.status === "completed" ? "100%" :
                             step.status === "current" ? "60%" : "0%"
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>

              {/* Animated connecting line */}
              {index < roadmapSteps.length - 1 && (
                <div className="absolute left-9 top-16 w-0.5 h-8 bg-[#46675D]/30">
                  <motion.div
                    className="w-full bg-[#46675D]"
                    initial={{ height: 0 }}
                    animate={{ 
                      height: step.status === "completed" ? "100%" : "0%"
                    }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#BEDCE4]/30 rounded-full"
              initial={{ 
                x: Math.random() * 400,
                y: Math.random() * 300,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 400,
                y: Math.random() * 300,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}