// Components
import Section from "../components/Section"
import Img from "../components/Image"
import Button from "../components/Button"
import { smallSphere, stars } from "@/public"

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Img 
            src={smallSphere}
            className="relative z-1"
            height={255}
            width={255}
            alt="Sphere" />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Img 
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Pricing