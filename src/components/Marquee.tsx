"use client";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}

export const Marquee = ({
  children,
  reverse = false,
  speed = 30,
  className = "",
}: MarqueeProps) => {
  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee-content"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
      <div
        className="marquee-content"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};
