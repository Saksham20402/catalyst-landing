import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Mail } from "lucide-react";

const navigation = {
  product: ["Features", "Pricing", "API", "Integrations"],
  company: ["About", "Blog", "Careers", "Press"],
  resources: ["Documentation", "Help Center", "Community", "Status"],
  legal: ["Privacy", "Terms", "Security", "Cookies"]
};

export function Footer() {
  return (
    <footer className="border-t border-[#46675D]/10 pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#46675D]/10 to-[#BEDCE4]/10 border border-[#46675D]/20 rounded-3xl p-12 mb-16 text-center"
        >
          <Mail className="w-12 h-12 text-[#BEDCE4] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Get the latest updates on Catalyst's features and early access opportunities.
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#2A2A2A] border-[#46675D]/20 text-white placeholder:text-gray-400 flex-1"
            />
            <Button className="bg-[#46675D] hover:bg-[#46675D]/90 text-white px-6 group">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Navigation grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Catalyst</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Intelligent roadmap generation for accelerated learning through AI-powered quizzes.
              </p>
            </motion.div>
          </div>

          {/* Navigation links */}
          {Object.entries(navigation).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#BEDCE4] transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#46675D]/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Catalyst. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#BEDCE4] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#BEDCE4] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}