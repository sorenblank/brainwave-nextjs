// Components
import Section from "../components/Section";
import Heading from "../components/Heading";
import TagLine from "../components/Ui/Tagline";
import Button from "../components/Button";
import Img from "../components/Image";

// Ui components
import Gradient from "../components/Ui/Gradient";

// Constants
import { roadmap } from "../lib/constants";

// Assets
import { check2, grid, loading1 } from "@/public";

/**
 * Roadmap Component
 *
 * The Roadmap component displays the roadmap of what the company is working on.
 * It includes a list of items with their status, dates, images, titles, and descriptions.
 */
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      {/* Roadmap Heading */}
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* Mapping through roadmap items */}
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              {/* Roadmap Item Card */}
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  {/* Item Date and Status */}
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>

                    {/* Status Badge */}
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <Img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* Item Image */}
                  <div className="mb-10 -my-10 -mx-15">
                    <Img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  {/* Item Title and Description */}
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Gradient Overlay */}
        <Gradient />
      </div>

      {/* Roadmap CTA Button */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;