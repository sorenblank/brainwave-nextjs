// Components
import Img from "./Image"
import Section from "./Section"
import Heading from "./Heading"

// Constants
import { benefits } from "../lib/constants"

// Assets
import Arrow from "@/public/svg/Arrow"
import { GradientLight } from "./Ui/Benefits"

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading 
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave."
        />

        <div className="flex flex-wrap gap-5 mb-10 justify-center">
          {benefits.map((item) =>(
            <div 
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}

              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Img src={item.iconUrl} width={48} height={48} alt={item.title}/>
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits