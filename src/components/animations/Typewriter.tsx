"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseDuration, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(timeout);
  }, [blink, mounted]);

  if (!mounted) {
    return <span className="inline-block">{words[0]}</span>;
  }

  return (
    <span className="inline-block">
      {`${words[index].substring(0, subIndex)}`}
      <span
        className={`inline-block w-1 h-8 md:h-10 bg-[#FFB7D5] align-middle ml-1 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </span>
  );
}
