"use client"

import Button from "@/app/components/Button";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "@/app/components/Header";
import ButtonGradient from "@/public/svg/ButtonGradient";

export default function Home() {
  return (
    <Router>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
      </div>

      <ButtonGradient />
    </Router>
  );
}
