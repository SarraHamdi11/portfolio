"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import RevealSection from "./animations/RevealSection";
import StaggerList, { StaggerItem } from "./animations/StaggerList";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Selected Projects</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            A curated selection of my recent work showcasing my skills in full-stack development
          </p>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {portfolioData.projects.map((project, i) => (
            <RevealSection key={project.id} delay={i * 0.15}>
              <motion.div
                onClick={() => router.push(`/projects/${project.id}`)}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 border-2"
                style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, var(--background) 0%, transparent 70%)` }} />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--accent-primary) 25%, transparent)",
                          color: "var(--accent-primary)",
                          border: `1px solid color-mix(in srgb, var(--accent-primary) 35%, transparent)`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--accent-primary)" }}>{project.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        <Github size={18} />
                        <span className="font-semibold">Code</span>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        <ExternalLink size={18} />
                        <span className="font-semibold">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        <div className="mt-16">
          <RevealSection>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              <span className="gradient-text">Tech Stack</span>
            </h3>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            <RevealSection>
              <h4 className="text-xl font-semibold mb-6" style={{ color: "var(--accent-primary)" }}>Primary Technologies</h4>
              <StaggerList className="grid grid-cols-3 gap-4">
                {portfolioData.skills.primary.map((skill, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-xl glass transition-all border-2"
                      style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                        style={{
                          backgroundColor: skill.color + "10",
                          border: `2px solid ${skill.color}30`
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-9 h-9"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = (e.target as HTMLImageElement).parentElement;
                            if (parent) {
                              const fallback = document.createElement('span');
                              fallback.textContent = skill.name.charAt(0);
                              fallback.style.color = skill.color;
                              fallback.style.fontSize = '1.5rem';
                              fallback.style.fontWeight = 'bold';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>{skill.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </RevealSection>

            <RevealSection>
              <h4 className="text-xl font-semibold mb-6" style={{ color: "var(--accent-primary)" }}>Also Familiar With</h4>
              <StaggerList className="grid grid-cols-3 gap-4">
                {portfolioData.skills.familiar.map((skill, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-3 rounded-lg border-2 transition-all flex flex-col items-center gap-2"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--background) 30%, transparent)",
                        borderColor: "color-mix(in srgb, var(--accent-primary) 15%, transparent)"
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: skill.color + "10",
                          border: `1px solid ${skill.color}30`
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-6 h-6"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = (e.target as HTMLImageElement).parentElement;
                            if (parent) {
                              const fallback = document.createElement('span');
                              fallback.textContent = skill.name.charAt(0);
                              fallback.style.color = skill.color;
                              fallback.style.fontSize = '1rem';
                              fallback.style.fontWeight = 'bold';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>{skill.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
