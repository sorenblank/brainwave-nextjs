import Section from "../components/Section"
import Heading from "../components/Heading"
import Img from "../components/Image"
import { service1, service2, service3, check } from "@/public"
import { brainwaveServices, brainwaveServicesIcons } from "../lib/constants"
import Generating from "../components/Generating"

const Services = () => {
  return (
    <Section id="how-to-use">
        <div className="container">
            <Heading title="Generative AI made for creators" text="Brainwave unlocks the potential of AI-powered Applications"/>
            <div className="relative">
                <div className="relative z-1 flex  items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <Img src={service1} className="w-full h-full object-cover md:object-right" width={800} height={800} alt="Smartest AI"/>
                    </div>

                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h4 mb-4">Smartest AI</h4>
                        <p className="body-2 mb-[3rem] text-n-3">Brainwave unlocks the potential of AI-powered applications</p>
                        <ul className="body-2">
                            {brainwaveServices.map((item, index) => (
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <Img src={check} width={24} height={24}/>
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:bottom-10 lg:-translate-x-1/2 text-base" />
                </div>
            </div>
        
        </div> 
    </Section>
  )
}

export default Services