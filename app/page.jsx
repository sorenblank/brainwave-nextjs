"use client"

// Libraries
import { BrowserRouter as Router } from 'react-router-dom';

// Layout
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

// Assets
import ButtonGradient from "@/public/svg/ButtonGradient";

export default function Home() {
  return (
    <Router>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </Router>
  );
}
