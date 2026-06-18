"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RevealSection from "./animations/RevealSection";
import { portfolioData } from "@/data/portfolio";
import { Download, Briefcase, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
        </RevealSection>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left: Experience */}
          <RevealSection className="lg:col-span-1">
            <div className="glass p-7 mb-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
              <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2" style={{ color: "var(--accent-primary)" }}>
                <Briefcase className="w-5 h-5" style={{ color: "var(--accent-primary)" }} />
                Professional Experience
              </h3>
              <div className="space-y-5">
                {portfolioData.experience.map((exp, i) => (
                  <div key={i} className="space-y-3">
                    <div>
                      <h4 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{exp.position}</h4>
                      <p className="font-medium" style={{ color: "var(--accent-primary)" }}>{exp.company} • {exp.location}</p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{exp.dates}</p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-primary)" }} />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right: Text + Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Text Content */}
            <RevealSection>
              <div className="glass p-7 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                <h3 className="text-xl font-extrabold mb-4" style={{ color: "var(--accent-primary)" }}>Hello, I'm {portfolioData.name}</h3>
                <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {portfolioData.summary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="gradient-bg transition-opacity border-0"
                    style={{ color: "var(--background)" }}
                  >
                    <a href={portfolioData.cv} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    className="glass transition-all border-2"
                    style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)" }}
                    onClick={() => {
                      const el = document.getElementById("portfolio");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </RevealSection>

            {/* Stats */}
            <RevealSection className="grid grid-cols-2 gap-4">
              {[
                { number: "6", label: "Total Projects", desc: "Modern web applications built" },
                { number: "4", label: "Live Demos", desc: "Deployed on Vercel" },
                { number: "8+", label: "Technologies", desc: "Full-stack development skills" },
                { number: "5", label: "Languages", desc: "English, French, Arabic & more" }
              ].map((stat, i) => (
                <Card key={i} className="glass p-6 text-center border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1" style={{ color: "var(--accent-primary)" }}>{stat.label}</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{stat.desc}</div>
                </Card>
              ))}
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
