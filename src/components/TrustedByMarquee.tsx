import Marquee from 'react-fast-marquee';
import IITKGP from '../assets/IIT-Kharagpur-01.png'
import IITDelhi from '../assets/IITD.png'
import IIITDelhi from '../assets/IIITD.png'
import BITS from '../assets/BITS_Pilani-Logo.svg.png'
import UoM from '../assets/Michigan.png'
import UoW from '../assets/Washington.png'
import NSUT from '../assets/NSUT_logo.png'
import DTU from '../assets/DTU.png'
import IGDTUW from '../assets/igdtuw.png'
import NYU from '../assets/New_York_University-Logo.wine.png'
import { motion } from "motion/react";

interface TrustedByLogo {
  src: string;
  alt: string;
}

export const TrustedByMarquee = () => {
  const logos: TrustedByLogo[] = [
    { src: IITDelhi, alt: 'IIT Delhi' },
    { src: IIITDelhi, alt: 'IIIT Delhi' },
    { src: UoM, alt: 'University of Michigan' },
    { src: UoW, alt: 'University of Washington' },
    { src: DTU, alt: 'DTU' },
  ];

  return (
    <section className="py-16 relative">
      <div className="text-center mb-12 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm uppercase tracking-wider"
        >
          Trusted by students from
        </motion.p>
      </div>

      {/* Full-width marquee */}
      <div className="w-screen py-8 overflow-hidden bg-background">
        <Marquee gradient={false} speed={70} pauseOnHover={true}>
          <div className="flex items-center gap-12 sm:gap-20 lg:gap-28 px-6">
            {logos.map((logo, index) => (
              <div key={index} className="inline-flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};



