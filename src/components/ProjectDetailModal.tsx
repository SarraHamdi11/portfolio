"use client";

import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  name: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  demo: string;
  github: string;
  images: string[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <Dialog open={!!project} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl bg-[#0a0a0a] border-[#FFB7D5]/20 p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-50 text-white hover:text-[#FFB7D5]">
            <X size={24} />
          </DialogClose>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-[55%_45%] gap-0"
          >
            {/* Left: Hero Image */}
            <div className="h-[300px] md:h-[580px] bg-[#121212] overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-6 md:p-8 flex flex-col h-full max-h-[580px] overflow-y-auto">
              <DialogTitle className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                {project.name}
              </DialogTitle>

              <div className="space-y-4 flex-1">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-[#FFB7D5] mb-1">Problem</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#FFB7D5] mb-1">Solution</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#FFE4F0] mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-background/50 border-[#FFB7D5]/20 text-[#FFE4F0] text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-6 mt-auto">
                {project.demo !== "#" && (
                  <Button
                    asChild
                    className="gradient-bg text-black hover:opacity-90 transition-opacity border-0 text-sm flex-1"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.github !== "#" && (
                  <Button
                    asChild
                    variant="secondary"
                    className="glass border-[#FFB7D5]/30 hover:border-[#FFB7D5]/60 transition-all text-sm flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}
