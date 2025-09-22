import { motion } from "motion/react";
import { Search, Map, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Topic",
    description:
      "Select any subject you want to master. From programming to philosophy, Catalyst adapts to your interests.",
    image:
      "https://images.unsplash.com/photo-1639723162756-5dc7cc11e8af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZ2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU4NDM5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "02",
    icon: Map,
    title: "Generate Your Roadmap",
    description:
      "Our AI creates a personalized sequence of questions designed to build your knowledge progressively.",
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgzODQwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Learn & Adapt",
    description:
      "Answer questions, receive feedback, and watch as the AI adjusts to optimize your learning experience.",
    image:
      "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbGVhcm5pbmclMjByb2FkbWFwfGVufDF8fHx8MTc1ODQzOTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

