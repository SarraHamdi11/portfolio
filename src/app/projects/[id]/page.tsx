"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = portfolioData.projects.find(p => p.id === Number(params.id));
  const currentIndex = portfolioData.projects.findIndex(p => p.id === Number(params.id));
  const prevProject = currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioData.projects.length - 1 ? portfolioData.projects[currentIndex + 1] : null;

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}>Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-8"
            style={{ color: "var(--accent-primary)" }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{project.name}</span>
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
          </div>

          <div className="relative mb-12 glass rounded-2xl overflow-hidden border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-contain"
                style={{ backgroundColor: "color-mix(in srgb, var(--background) 50%, transparent)" }}
              />
            </div>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass transition-all z-50 pointer-events-auto"
                  style={{ color: "var(--text-primary)" }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass transition-all z-50 pointer-events-auto"
                  style={{ color: "var(--text-primary)" }}
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 pointer-events-auto">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all pointer-events-auto`}
                      style={{
                        backgroundColor: index === currentImageIndex ? "var(--accent-primary)" : "color-mix(in srgb, var(--text-primary) 50%, transparent)",
                        width: index === currentImageIndex ? "2rem" : "0.75rem"
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              <div className="glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--accent-primary)" }}>The Problem</h3>
                <p style={{ color: "var(--text-secondary)" }}>{project.problem}</p>
              </div>

              <div className="glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--accent-primary)" }}>The Solution</h3>
                <p style={{ color: "var(--text-secondary)" }}>{project.solution}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-primary)" }}>Challenges Solved</h3>
                  <ul className="space-y-2">
                    {project.challengesSolved?.map((challenge, i) => (
                      <li key={i} className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-primary)" }} />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-primary)" }}>What I Learned</h3>
                  <ul className="space-y-2">
                    {project.whatIlearned?.map((lesson, i) => (
                      <li key={i} className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-primary)" }} />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-2xl p-8 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-primary)" }}>Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-background/50"
                      style={{
                        color: "var(--accent-primary)",
                        borderColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)"
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {project.demo !== "#" && (
                  <Button
                    asChild
                    className="w-full gradient-bg transition-opacity border-0"
                    style={{ color: "var(--background)" }}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="secondary"
                  className="w-full glass transition-all border-2"
                  style={{
                    borderColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)"
                  }}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <div className="grid md:grid-cols-2 gap-4">
            {prevProject && (
              <Button
                variant="secondary"
                asChild
                className="glass transition-all justify-start border-2"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)"
                }}
              >
                <Link href={`/projects/${prevProject.id}`} className="flex items-center gap-3">
                  <ChevronLeft size={20} style={{ color: "var(--accent-primary)" }} />
                  <div className="text-left">
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Previous</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>{prevProject.name}</div>
                  </div>
                </Link>
              </Button>
            )}
            {!prevProject && <div></div>}
            {nextProject && (
              <Button
                variant="secondary"
                asChild
                className="glass transition-all justify-end border-2"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)"
                }}
              >
                <Link href={`/projects/${nextProject.id}`} className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Next</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>{nextProject.name}</div>
                  </div>
                  <ChevronRight size={20} style={{ color: "var(--accent-primary)" }} />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
