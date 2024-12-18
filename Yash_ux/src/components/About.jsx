import Section from './Section';

const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Circle Image with simple hover effect */}
          <div className="lg:w-[40%]">
            <div className="group relative w-[240px] h-[240px] md:w-[380px] md:h-[380px]">              
              {/* Image container with smooth hover transition */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/src/assets/yash.webp" 
                  alt="YashUX Profile"
                  className="w-full h-full object-cover object-center transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-[60%] text-center lg:text-left">
            <h2 className="h2 mb-6">
              Crafting Digital Experiences with Purpose
            </h2>
            <div className="max-w-[510px] lg:max-w-none mx-auto">
              <p className="body-2 mb-6 text-n-3">
                At YashUX, we believe in the power of thoughtful design to transform digital interactions. Our approach combines innovative technology with human-centered design principles to create experiences that not only look beautiful but work beautifully.
              </p>
              <p className="body-2 text-n-3">
                With years of experience in UX/UI design and development, we've helped businesses across various industries enhance their digital presence and create meaningful connections with their users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;