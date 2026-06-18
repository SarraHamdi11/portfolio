"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RevealSection from "./animations/RevealSection";
import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Professional experience and real-world collaboration.
            </p>
          </div>
        </RevealSection>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <RevealSection key={index}>
              <Card
                className="glass overflow-hidden transition-all border-2"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
                  "--tw-hover-border-color": "color-mix(in srgb, var(--accent-primary) 30%, transparent)"
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent-primary) 30%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent-primary) 10%, transparent)";
                }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{exp.position}</h3>
                        <Badge
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)",
                            color: "var(--accent-primary)",
                            borderColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)"
                          }}
                        >
                          {exp.company}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4" style={{ color: "var(--text-secondary)" }}>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: "var(--accent-primary)" }} />
                          <span>{exp.dates}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" style={{ color: "var(--accent-primary)" }} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-6" style={{ color: "var(--text-secondary)" }}>{exp.description}</p>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-primary)" }} />
                        <span style={{ color: "var(--text-secondary)" }}>{resp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
