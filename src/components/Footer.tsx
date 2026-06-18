import { Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          © {year} {portfolioData.name}. All rights reserved.
        </p>
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          <Github size={24} />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
