import { useState } from 'react';
import Section from './Section';
import Heading from './Heading';

const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logos = [
    { id: 1, src: '/src/assets/logos/hayleys.png', alt: 'Hayleys Logo' },
    { id: 2, src: '/src/assets/logos/mas.png', alt: 'mas Logo' },
    { id: 3, src: '/src/assets/logos/momentro.png', alt: 'momentro Logo' },
    { id: 4, src: '/src/assets/logos/sa.png', alt: 'sa Logo' },
    { id: 5, src: '/src/assets/logos/stemlink.png', alt: 'stemlink Logo' },
    { id: 6, src: '/src/assets/logos/sunshine.png', alt: 'sunshine Logo' },
    { id: 7, src: '/src/assets/logos/white-enf.png', alt: 'enfection Logo' },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <Section className="overflow-hidden" id="partners">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trusted by Industry Leaders"
          text="Partnering with leading companies to deliver exceptional user experiences"
        />

        <div className="relative mt-12 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-n-8 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-n-8 after:to-transparent">
          <div 
            className="flex items-center gap-12 md:gap-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-[120px] lg:w-[140px] aspect-[3/2] transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  loading={index > 5 ? "lazy" : "eager"}
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LogoCarousel;