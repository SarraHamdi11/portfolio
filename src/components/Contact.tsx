"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import RevealSection from "./animations/RevealSection";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${portfolioData.email}?subject=Hello from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Open to junior full-stack developer roles and exciting projects. Let's build something great!
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealSection>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-2xl space-y-6 border-2"
              style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}
            >
              <div className="space-y-2">
                <label className="font-medium" style={{ color: "var(--accent-primary)" }}>Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--background) 30%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium" style={{ color: "var(--accent-primary)" }}>Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--background) 30%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium" style={{ color: "var(--accent-primary)" }}>Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--background) 30%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent-primary) 20%, transparent)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="Tell me about your project..."
                  required
                  className="min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg transition-opacity border-0 font-semibold shadow-lg py-3 px-6 rounded-lg flex items-center justify-center gap-2"
                style={{ color: "var(--background)" }}
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </motion.form>
          </RevealSection>

          <RevealSection>
            <div className="space-y-4">
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="glass transition-all group hover:border-pink-400/40 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl gradient-bg" style={{ color: "var(--background)" }}>
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" style={{ color: "var(--accent-primary)" }}>
                        GitHub @{portfolioData.github.split("/").pop()}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>

              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="glass transition-all group hover:border-pink-400/40 border-2" style={{ borderColor: "color-mix(in srgb, var(--accent-primary) 10%, transparent)" }}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl gradient-bg" style={{ color: "var(--background)" }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" style={{ color: "var(--accent-primary)" }}>
                        {portfolioData.email}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
