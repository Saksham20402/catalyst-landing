import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CheckCircle, Circle, Brain, Play, ArrowRight } from "lucide-react";

const roadmapBlocks = [
  { 
    id: 1, 
    title: "Variables & Types", 
    status: "completed", 
    questions: 8,
    sample: "What is the difference between let and const?",
    position: { x: 20, y: 40 }
  },
  { 
    id: 2, 
    title: "Functions", 
    status: "completed", 
    questions: 12,
    sample: "How do arrow functions differ from regular functions?",
    position: { x: 180, y: 40 }
  },
  { 
    id: 3, 
    title: "Components", 
    status: "current", 
    questions: 15,
    sample: "What is the difference between props and state?",
    position: { x: 340, y: 40 }
  },
  { 
    id: 4, 
    title: "Hooks", 
    status: "upcoming", 
    questions: 18,
    sample: "When would you use useEffect vs useState?",
    position: { x: 100, y: 140 }
  },
  { 
    id: 5, 
    title: "State Management", 
    status: "upcoming", 
    questions: 10,
    sample: "How does context API work in React?",
    position: { x: 260, y: 140 }
  },
  { 
    id: 6, 
    title: "Advanced Patterns", 
    status: "locked", 
    questions: 14,
    sample: "What are render props and when to use them?",
    position: { x: 180, y: 240 }
  }
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 6 }
];

export function InteractiveRoadmap() {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % connections.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getBlockStyle = (block: typeof roadmapBlocks[0]) => {
    switch (block.status) {
      case "completed":
        return "bg-[#BEDCE4]/20 border-[#BEDCE4]/50 text-[#BEDCE4]";
      case "current":
        return "bg-[#46675D]/30 border-[#46675D] text-white";
      case "upcoming":
        return "bg-[#3A3A3A] border-[#46675D]/30 text-gray-300";
      case "locked":
        return "bg-[#2A2A2A] border-gray-600 text-gray-500";
      default:
        return "bg-[#2A2A2A] border-gray-600 text-gray-500";
    }
  };

  const getIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "current":
        return <Play className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative w-full h-80 p-6 bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-[#46675D]/20" />
          ))}
        </div>
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromBlock = roadmapBlocks.find(b => b.id === connection.from);
          const toBlock = roadmapBlocks.find(b => b.id === connection.to);
          
          if (!fromBlock || !toBlock) return null;

          const isActive = activeFlow === index;

          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={fromBlock.position.x + 60}
              y1={fromBlock.position.y + 20}
              x2={toBlock.position.x + 60}
              y2={toBlock.position.y + 20}
              stroke={isActive ? "#BEDCE4" : "#46675D"}
              strokeWidth={isActive ? 2 : 1}
              strokeOpacity={isActive ? 0.8 : 0.3}
              strokeDasharray={isActive ? "0" : "4 4"}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeOpacity: isActive ? [0.3, 0.8, 0.3] : 0.3
              }}
              transition={{ 
                duration: isActive ? 1 : 0.5,
                repeat: isActive ? Infinity : 0
              }}
            />
          );
        })}
      </svg>

      {/* Blocks */}
      {roadmapBlocks.map((block) => (
        <motion.div
          key={block.id}
          className={`absolute cursor-pointer ${getBlockStyle(block)}`}
          style={{
            left: block.position.x,
            top: block.position.y,
            width: 120,
            height: 40
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: hoveredBlock === block.id ? 1.1 : 1,
            y: hoveredBlock === block.id ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, y: -5 }}
          onHoverStart={() => setHoveredBlock(block.id)}
          onHoverEnd={() => setHoveredBlock(null)}
          onClick={() => setHoveredBlock(block.id === hoveredBlock ? null : block.id)}
        >
          <div className="px-3 py-2 rounded-lg border-2 h-full flex items-center justify-between group">
            <div className="flex items-center gap-2">
              {getIcon(block.status)}
              <span className="text-xs font-medium truncate">{block.title}</span>
            </div>
            <span className="text-xs opacity-60">{block.questions}</span>

            {/* Glow effect */}
            {hoveredBlock === block.id && (
              <motion.div
                className="absolute inset-0 bg-[#46675D]/20 rounded-lg blur-sm -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </div>

          {/* Sample question popup */}
          <AnimatePresence>
            {hoveredBlock === block.id && block.status !== "locked" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute top-12 left-0 bg-[#2A2A2A] border border-[#46675D]/30 rounded-lg p-3 shadow-xl z-20 w-64"
              >
                <p className="text-xs text-gray-300 mb-2">Sample Question:</p>
                <p className="text-sm text-white font-medium">{block.sample}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-[#BEDCE4]">{block.questions} questions</span>
                  <ArrowRight className="w-3 h-3 text-[#46675D]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Floating progress indicator */}
      <motion.div
        className="absolute top-4 right-4 bg-[#46675D]/20 border border-[#46675D]/30 rounded-lg px-3 py-1"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-[#BEDCE4]">
          Progress: 2/6 completed
        </span>
      </motion.div>
    </div>
  );
}