"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealSection from "./animations/RevealSection";
import { Briefcase, Globe, Code2, Zap } from "lucide-react";

interface StatProps {
  target: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

function AnimatedStat({ target, label, suffix = "", icon }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center space-y-4 p-6">
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
          border: `1px solid color-mix(in srgb, var(--accent-primary) 30%, transparent)`,
          color: "var(--accent-primary)"
        }}
      >
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1">
        {count}
        {suffix}
        <span style={{ color: "var(--accent-primary)" }}>+</span>
      </div>
      <div style={{ color: "var(--accent-primary)" }} className="font-semibold text-lg">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
            <AnimatedStat target={6} label="Projects Built" icon={<Code2 className="w-7 h-7" />} />
            <AnimatedStat target={4} label="Live Demos" icon={<Globe className="w-7 h-7" />} />
            <AnimatedStat target={1} label="Internship" icon={<Briefcase className="w-7 h-7" />} />
            <AnimatedStat target={10} label="Technologies" icon={<Zap className="w-7 h-7" />} />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
