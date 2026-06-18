"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubbleCounter = useRef(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Spawn bubble on every mousemove
      if (Math.random() < 0.3) { // 30% chance to spawn a bubble
        const newBubble: Bubble = {
          id: bubbleCounter.current++,
          x: e.clientX + (Math.random() * 30 - 15),
          y: e.clientY + (Math.random() * 30 - 15),
          size: Math.random() * 10 + 6, // 6px to 16px
        };
        setBubbles((prev) => [...prev, newBubble]);
        
        // Remove bubble after animation ends
        setTimeout(() => {
          setBubbles((prev) => prev.filter(b => b.id !== newBubble.id));
        }, 1500);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* Soap Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            marginLeft: `-${bubble.size / 2}px`,
            marginTop: `-${bubble.size / 2}px`,
            border: "2px solid rgba(93, 202, 165, 0.8)",
            background: "rgba(93, 202, 165, 0.1)",
            animation: "float-fade 1.5s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}
