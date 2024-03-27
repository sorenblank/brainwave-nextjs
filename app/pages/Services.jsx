// Components
import Generating from "../components/Generating";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Img from "../components/Image";

// Ui Components
import { PhotoChatMessage, VideoChatMessage, Gradient, VideoBar } from "../components/Ui/Services";

// Constants
import { brainwaveServices, brainwaveServicesIcons } from "../lib/constants";

// Assets
import { service1, service2, service3, check } from "@/public";

/**
 * Services Component
 *
 * The Services component displays the various services provided by Brainwave.
 * It includes sections for Smartest AI, Image Generation, and Video Generation.
 */
const Services = () => {
  return (
    <Section crosses id="tools">
      <div className="container">
        {/* Heading */}
        <Heading title="Generative AI made for creators" text="Brainwave unlocks the potential of AI-powered Applications" />

        <div className="relative">
          {/* Smartest AI Section */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Img src={service1} className="w-full h-full object-cover md:object-right" width={800} height={800} alt="Smartest AI" />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
              {/* List of Brainwave Services */}
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <Img 
                      src={check} 
                      width={24} 
                      height={24} 
                      alt="Checkmark" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Generating Animation */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:bottom-10 lg:-translate-x-1/2 text-base" />
          </div>

          {/* Image Generation and Video Generation Sections */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Image Generation Section */}
            <div className="relative min-h-[39rem] border border-n-1/10 overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Img 
                  src={service2} 
                  className="h-full w-full object-cover" 
                  width={630} 
                  height={750} 
                  alt="Image Generation" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Image Generation</h4>
                <p className="body-2 mb-[3rem] text-n-3">AI image generation to create unique, high-quality images with just a few clicks of your mouse.</p>
              </div>

              {/* Photo Chat Message Animation */}
              <PhotoChatMessage />
            </div>

            {/* Video Generation Section */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">The world&apos;s most powerful AI photo and video art generation engine. What will you create?</p>

                {/* List of Brainwave Services Icons */}
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li key={index} className={`rounded-2xl flex items-center justify-center ${index === 2 ? 'w-[3rem] h-[3rem] p-0.5 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]' : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>
                      <div className={index === 2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : ""}>
                        <Img 
                          src={item} 
                          width={24} 
                          height={24} 
                          alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Bot Image */}
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Img 
                  src={service3} 
                  className="w-full h-full object-cover" 
                  width={520} 
                  height={420} 
                  alt="Video Bot" />

                {/* Video Chat Message Animation */}
                <VideoChatMessage />
                {/* Video Bar Animation */}
                <VideoBar />
              </div>
            </div>
          </div>

          {/* Gradient for Decoration */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;