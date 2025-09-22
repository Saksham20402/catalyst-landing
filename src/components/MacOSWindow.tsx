import { motion } from "motion/react";
import { ReactNode } from "react";

interface MacOSWindowProps {
  title: string;
  children: ReactNode;
}

export function MacOSWindow({ title, children }: MacOSWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2A2A2A] border border-[#46675D]/20 rounded-xl shadow-2xl overflow-hidden"
    >
      {/* Title Bar */}
      <div className="bg-[#2A2A2A] border-b border-[#46675D]/20 px-4 py-3 flex items-center gap-2">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
          />
        </div>
        
        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-sm text-gray-300 font-medium">{title}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}