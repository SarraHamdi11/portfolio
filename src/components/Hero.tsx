"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import AnimatedBackground from "./AnimatedBackground";
import HeroEntrance from "./animations/HeroEntrance";
import Typewriter from "./animations/Typewriter";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto">
        <HeroEntrance delay={0} className="mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass">
            <span className="pulse-dot w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--accent-primary)" }} />
            <span className="text-sm font-bold tracking-wide uppercase" style={{ color: "var(--accent-primary)" }}>Available Immediately</span>
          </div>
        </HeroEntrance>

        <HeroEntrance delay={0.15} className="mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2" style={{ color: "var(--accent-primary)" }}>
            Hi, I'm {portfolioData.name}
          </h2>
        </HeroEntrance>

        <HeroEntrance delay={0.25} className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="gradient-text">Junior Full Stack</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Developer</span>
          </h1>
        </HeroEntrance>

        <HeroEntrance delay={0.4} className="mb-10">
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Building <Typewriter
              words={[
                "scalable web applications",
                "production-ready APIs",
                "polished user interfaces",
                "end-to-end solutions"
              ]}
            />
            <br />
            with Laravel, React, Next.js, and Spring Boot.
          </p>
        </HeroEntrance>

        <HeroEntrance delay={0.55} className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            onClick={() => scrollTo("portfolio")}
            className="gradient-bg hover:opacity-90 transition-opacity border-0 px-10 py-5 text-xl font-bold shadow-lg rounded-xl"
            style={{ color: "var(--background)" }}
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollTo("contact")}
            variant="secondary"
            className="bg-transparent border-2 hover:bg-opacity-10 transition-all px-10 py-5 text-xl font-bold rounded-xl"
            style={{ borderColor: "var(--accent-primary)", color: "var(--accent-primary)" }}
          >
            Get In Touch
          </Button>
        </HeroEntrance>
      </div>
    </section>
  );
}
