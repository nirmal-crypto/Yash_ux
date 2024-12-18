import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex z-0">
      {/* Glowing effect behind sphere */}
      <div className="absolute z-0 w-[255px] h-[255px] animate-glow">
        <div className="absolute inset-0 blur-xl bg-blue-500/30 rounded-full" />
      </div>
      
      {/* Animated sphere */}
      <img
        src={smallSphere}
        className="relative z-1 animate-float-slow transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        width={255}
        height={255}
        alt="Sphere"
        style={{
          animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
        }}
      />

      {/* Stars container with animation */}
      <div 
        className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          animation: 'rotate 90s linear infinite'
        }}
      >
        <img
          src={stars}
          className="w-full animate-twinkle"
          width={950}
          height={400}
          alt="Stars"
          style={{
            animation: 'twinkle 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Add style tag for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>

     

        
      </div>
    </Section>
  );
};

export default Pricing;
