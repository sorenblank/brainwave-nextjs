// Components
import Section from "../components/Section";
import Img from "../components/Image";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";

// Ui Components
import TagLine from "../components/Ui/Tagline";
import { LeftLine, RightLine } from "../components/Ui/Pricing";

// Assets
import { smallSphere, stars } from "@/public";

/**
 * Pricing Component
 *
 * The Pricing component displays the pricing options for Brainwave.
 * It includes a heading, pricing list, and a link to see full details.
 */
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Background Stars and Sphere (Visible only on desktop) */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Img
            src={smallSphere}
            className="relative z-1"
            height={255}
            width={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Pricing Heading */}
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          {/* Pricing List */}
          <PricingList />

          {/* Pricing Lines for Decoration */}
          <LeftLine />
          <RightLine />
        </div>

        {/* CTA Link */}
        <div className="flex justify-center mt-10">
          <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="/pricing">
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;