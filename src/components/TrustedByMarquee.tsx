import Marquee from 'react-fast-marquee';

interface TrustedByLogo {
  src: string;
  alt: string;
}

export const TrustedByMarquee = () => {
    const logos: TrustedByLogo[] = [
        { src: 'src/assets/IIT-Kharagpur-01.png', alt: 'IIT KGP' },
        { src: '../assets/IITDelhi.svg', alt: 'IIT Delhi' },
    ];
    return (
    <div className="w-full py-8 overflow-hidden bg-background">
      <Marquee gradient={false} speed={40}>
        <div className="flex gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};




