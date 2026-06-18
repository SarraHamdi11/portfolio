"use client";

import { Suspense } from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Spotlight } from '@/components/Spotlight';
import FloatingSocials from '@/components/FloatingSocials';
import CursorGlow from '@/components/CursorGlow';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-background">
      <Suspense fallback={null}>
        <Spotlight />
        <CursorGlow />
        <Navbar />
        <FloatingSocials />
        <main className="relative z-20">
          <Hero />
          <Stats />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}
