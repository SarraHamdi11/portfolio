"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function FloatingSocials() {
  const [mounted, setMounted] = useState(false);
  const socials = [
    { icon: Github, href: portfolioData.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
      <div className="w-px h-12" style={{ backgroundColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)" }} />
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target={social.label !== "Email" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.1, x: 3 }}
          className="p-3 rounded-full glass border transition-all group tooltip"
          style={{
            borderColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)"
          }}
          data-tooltip={social.label}
        >
          <social.icon
            size={36}
            className="transition-colors"
            style={{ color: "var(--accent-primary)" }}
          />
        </motion.a>
      ))}
      <div className="w-px h-12" style={{ backgroundColor: "color-mix(in srgb, var(--accent-primary) 30%, transparent)" }} />
    </div>
  );
}
