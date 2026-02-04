"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div
        className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative cat silhouette */}
        <div className="mb-8 flex justify-center">
          <svg
            viewBox="0 0 100 60"
            className="w-24 h-14 text-primary/40"
            fill="currentColor"
          >
            <ellipse cx="50" cy="45" rx="35" ry="15" />
            <circle cx="30" cy="30" r="18" />
            <polygon points="15,20 25,5 30,22" />
            <polygon points="35,22 40,5 45,20" />
            <circle
              cx="24"
              cy="28"
              r="3"
              className="text-background"
              fill="currentColor"
            />
            <circle
              cx="36"
              cy="28"
              r="3"
              className="text-background"
              fill="currentColor"
            />
            <ellipse
              cx="30"
              cy="34"
              rx="4"
              ry="2"
              className="text-accent/60"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance">
          Dios puso amor en mi corazón...
          <br />
          <span className="text-primary">y tu nombre en él</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-serif text-2xl md:text-4xl text-muted-foreground max-w-xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Esto es solamente pensado por ti y para ti, es un pedacito de lo que
          siento por ti
        </p>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-primary/60 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
