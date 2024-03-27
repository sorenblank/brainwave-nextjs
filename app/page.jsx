"use client"

// Layout
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Benefits from './pages/Benefits';
import Collaboration from './pages/Collaboration';
import Services from './pages/Services';

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
      </div>
      <ButtonGradient />
    </>
  );
}
