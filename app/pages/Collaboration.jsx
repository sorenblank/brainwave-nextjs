// Components
import Section from "../components/Section";
import Button from "../components/Button";
import Img from "../components/Image";

// Ui Components
import { LeftCurve, RightCurve } from "../components/Ui/Collaboration";

// Constants
import { collabApps, collabContent, collabText } from "@/app/lib/constants";

// Assets
import { brainwaveSymbol, check } from "@/public";

/**
 * Collaboration Component
 *
 * The Collaboration component displays information about the AI chat app
 * for seamless collaboration, including features and a call-to-action button.
 */
const Collaboration = () => {
  return (
    <Section id="services" crosses>
      <div className="container lg:flex">
        {/* Left Section */}
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:md-8">
            AI Chat App for Seamless Collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {/* Mapping through collaboration content */}
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {/* Render text if available */}
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          {/* CTA Button */}
          <Button className="mt-10">Try it now</Button>
        </div>

        {/* Right Section */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-10 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>
          {/* Apps Wheel */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            {/* Central Brainwave Symbol */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Img src={brainwaveSymbol} width={48} height={48} alt="brainwave" />
                </div>
              </div>
            </div>
            {/* Render app icons around the central symbol */}
            <ul>
              {collabApps.map((app, index) => (
                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                    <Img src={app.icon} width={app.width} height={app.height} className="m-auto" alt={app.title} />
                  </div>
                </li>
              ))}
            </ul>
            {/* Curves for Decoration */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;