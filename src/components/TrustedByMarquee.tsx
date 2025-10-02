import Marquee from 'react-fast-marquee';
import IITKGP from '../assets/IIT-Kharagpur-01.png'
import IITDelhi from '../assets/IIT_Delhi_logo.png'
import IIITDelhi from '../assets/IIIT-Delhi.png'
import BITS from '../assets/BITS_Pilani-Logo.svg.png'
import UoM from '../assets/University_of_Michigan-Logo.wine.png'
import UoW from '../assets/University-of-Washington-Logo.png'
import NSUT from '../assets/NSUT_logo.png'
import DTU from '../assets/DTU.jpg'
import IGDTUW from '../assets/igdtuw.png'
import NYU from '../assets/New_York_University-Logo.wine.png'
import {motion} from "motion/react";

interface TrustedByLogo {
  src: string;
  alt: string;
}

export const TrustedByMarquee = () => {
    const logos: TrustedByLogo[] = [
        { src: IITKGP, alt: 'IIT KGP' },
        { src: IITDelhi, alt: 'IIT Delhi' },
        { src: IIITDelhi, alt: 'IIIT Delhi' },
        { src: BITS, alt: 'BITS Pilani' },
        { src: UoM, alt: 'University of Michigan' },
        { src: UoW, alt: 'University of Washington' },
        { src: NSUT, alt: 'NSUT' },
        { src: DTU, alt: 'DTU' },
        { src: IGDTUW, alt: 'IGDTUW' },
        { src: NYU, alt: 'NYU' },

    ];
    return (
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

    <div className="w-full py-8 overflow-hidden bg-background">
      <Marquee gradient={false} speed={40}>
        <div className="flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain filter grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
        </div>
  );
};




