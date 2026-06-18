"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl font-extrabold tracking-tight gradient-text"
          >
            {portfolioData.name}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "experience", label: "Experience" },
              { id: "portfolio", label: "Projects" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-base font-semibold transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              style={{
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent-primary) 10%, transparent)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              className="gradient-bg hover:opacity-90 transition-opacity border-0 text-base font-semibold"
              style={{
                color: "var(--background)",
              }}
            >
              Hire Me
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              style={{
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent-primary) 10%, transparent)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-4 pb-6 glass pt-4">
            {[
              { id: "experience", label: "Experience" },
              { id: "portfolio", label: "Projects" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg capitalize font-medium transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="w-full gradient-bg text-gray-900 hover:opacity-90 transition-opacity border-0 mt-2 font-semibold"
            >
              Hire Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}