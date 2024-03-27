"use client"

// Layout
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Collaboration from './pages/Collaboration';
import Services from './pages/Services';
import Pricing from "./pages/Pricing";
import Roadmap from "./pages/Roadmap";
import Footer from "./pages/Footer";

// Assets
import ButtonGradient from "@/public/svg/ButtonGradient";



export default function Home() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Features />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
