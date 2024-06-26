// Libraries
import { ScrollParallax } from "react-just-parallax";

// Constants
import { heroIcons } from "@/app/lib/constants";

// Components
import Img from "../components/Image";
import Button from "../components/Button";
import Section from "../components/Section";
import Generating from "../components/Generating";
import Notification from "../components/Notification";

// Assets
import { curve, heroBackground, robot } from "@/public";
import { BackgroundCircles, BottomLine, Gradient } from "../components/Ui/Hero";

/**
 * Hero Component
 *
 * The Hero component displays the main hero section of the website,
 * showcasing Brainwave AI chat app features and a call-to-action button.
 */
const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] lg:-mb-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="Hero"
    >
      <div className="container relative">
        {/* Hero Title and Description */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting With{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <Img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI with Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          {/* CTA Button */}
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>

        {/* AI Robot Image and Features */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* Gradient Circle */}
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* AI Robot Image */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="Ai"
                />

                {/* Generating Animation */}
                <Generating className={`absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2`} />

                {/* Hero Icons */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Img
                          src={icon}
                          width={24}
                          height={25}
                          alt={icon}
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                {/* Notification */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            {/* Gradient Overlay */}
            <Gradient />
          </div>

          {/* Hero Background Image */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          {/* Background Circles Animation */}
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;