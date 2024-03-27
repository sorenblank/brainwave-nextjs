// Components
import Img from "../components/Image";
import Section from "../components/Section";
import Heading from "../components/Heading";

// Ui Components
import { GradientLight } from "../components/Ui/Features";

// Constants
import { features } from "../lib/constants";

// Assets
import Arrow from "@/public/svg/Arrow";

/**
 * Benefits Component
 *
 * The Benefits component displays a section highlighting the benefits
 * of using the Brainwave AI chat app.
 */
const Features = () => {
  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        {/* Section Heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl justify-center flex"
          title="Chat Smarter, Not Harder"
        />

        {/* Benefits Grid */}
        <div className="flex flex-wrap gap-5 mb-10 justify-center">
          {features.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Benefit Content */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Benefit Title */}
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Benefit Description */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                {/* Explore Button */}
                <div className="flex items-center mt-auto">
                  <Img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                  <Arrow />
                </div>
              </div>

              {/* Gradient Overlay */}
              {item.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;