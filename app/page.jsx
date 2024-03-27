"use client"

// Layout
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Benefits from './pages/Features';
import Collaboration from './pages/Services';
import Services from './pages/Tools';
import Pricing from "./pages/Pricing";

// Assets
import ButtonGradient from "@/public/svg/ButtonGradient";


export default function Home() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
}
