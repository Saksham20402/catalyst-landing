import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

const companies = [
  "IIT KGP", "IIT Delhi", "BITS Pilani", "DTU", "IIIT Delhi", "IGDTUW"
];

export function TrustedBy() {
  return (
    <section className="py-20 px-6 border-t border-[#46675D]/10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm uppercase tracking-wider mb-12"
        >
          Trusted by students from
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium group-hover:text-[#BEDCE4] transition-colors duration-300">
                  {company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
