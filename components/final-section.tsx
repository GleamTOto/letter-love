"use client";

import { useEffect, useState, useRef } from "react";

interface FinalSectionProps {
  recipientName: string;
}

export function FinalSection({ recipientName }: FinalSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowGlow(true), 1000);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayName = recipientName.trim() || "ti";

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      {/* Warm light glow effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-2000 ${
          showGlow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div
        className={`text-center max-w-2xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Decorative sun rays */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <svg viewBox="0 0 120 120" className="w-24 h-24">
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
                  <stop offset="70%" stopColor="#FFCC80" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFE0B2" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="url(#sunGlow)"
                className="animate-pulse"
              />
              <circle cx="60" cy="60" r="30" fill="#FFB347" />
              <circle cx="60" cy="60" r="22" fill="#FFCC80" />
              <circle cx="60" cy="60" r="15" fill="#FFE0B2" />
              {/* Sun rays */}
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="60"
                  y1="10"
                  x2="60"
                  y2="20"
                  stroke="#FFB347"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${i * 30} 60 60)`}
                  className="opacity-60"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Final message */}
        <div className="space-y-6">
          <p className="font-serif md:text-3xl text-2xl text-muted-foreground">
            Con amor infinito,
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            para{" "}
            <span className="text-primary relative inline-block">
              {displayName}
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </span>
            ,
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-foreground/80 mt-4">
            gracias por ser un regalo de Dios en mi vida
          </p>
        </div>

        {/* Final decorative elements */}
        <div
          className={`mt-12 flex justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-2xl animate-pulse">🧡</span>
          <span className="text-2xl animate-pulse delay-100">✨</span>
          <span className="text-2xl animate-pulse delay-200">🧡</span>
        </div>

        {/* Signature */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-card/60 backdrop-blur-sm rounded-full px-8 py-4 border border-border/50">
            <p className="font-serif text-4xl md:text-3xl text-muted-foreground italic">
              Eres el amor de mi vida
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .duration-2000 {
          transition-duration: 2000ms;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
}
