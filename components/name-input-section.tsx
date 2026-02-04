"use client";

import { useState, useRef, useEffect } from "react";

interface NameInputSectionProps {
  recipientName: string;
  setRecipientName: (name: string) => void;
}

export function NameInputSection({
  recipientName,
  setRecipientName,
}: NameInputSectionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const allowedNames = ["Anamaria", "anamaria", "Anita", "anita"];
  const trimmedName = recipientName.trim();
  const hasInput = trimmedName.length > 0;
  const isAllowedName = allowedNames.includes(trimmedName);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasInput && isAllowedName) {
      const timer = setTimeout(() => setShowCat(true), 300);
      return () => clearTimeout(timer);
    }
    setShowCat(false);
    return undefined;
  }, [hasInput, isAllowedName]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] flex items-center justify-center px-6 py-20"
    >
      <div
        className={`text-center max-w-lg mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative element */}
        <div className="mb-8">
          <span className="text-4xl">✨</span>
        </div>

        <h2 className="font-sans text-lg md:text-xl text-foreground mb-4">
          Si crees que esto ha llegado a tocar tu corazón, escribe tu nombre
          aquí... verás algo bonito
        </h2>

        <p className="font-sans text-muted-foreground mb-8">
          Escribe tu nombre aquí...
        </p>

        {/* Input container */}
        <div className="relative">
          <div
            className={`relative inline-block transition-all duration-300 ${
              isFocused ? "scale-105" : ""
            }`}
          >
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Tu nombre..."
              className="w-72 md:w-80 px-6 py-4 text-center font-serif text-xl md:text-2xl text-foreground bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-full focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/50"
            />

            {/* Decorative hearts around input */}
            <div
              className={`absolute -top-3 -right-3 transition-all duration-500 ${
                isFocused || recipientName
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <span className="text-primary text-lg">💕</span>
            </div>
            <div
              className={`absolute -bottom-2 -left-2 transition-all duration-500 delay-100 ${
                isFocused || recipientName
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <span className="text-accent text-sm">🧡</span>
            </div>
          </div>

          {/* Animated cat and message */}
          {hasInput && (
            <div
              className={`mt-8 transition-all duration-700 ${
                hasInput
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              {showCat && isAllowedName && (
                <div className="inline-block animate-wiggle">
                  <svg
                    viewBox="0 0 80 60"
                    className="w-20 h-15 text-primary"
                    fill="currentColor"
                  >
                    {/* Cat body */}
                    <ellipse
                      cx="40"
                      cy="45"
                      rx="25"
                      ry="12"
                      className="text-primary/80"
                      fill="currentColor"
                    />
                    {/* Cat head */}
                    <circle
                      cx="25"
                      cy="30"
                      r="15"
                      className="text-primary/80"
                      fill="currentColor"
                    />
                    {/* Left ear */}
                    <polygon
                      points="12,22 18,8 24,20"
                      className="text-primary/80"
                      fill="currentColor"
                    />
                    {/* Right ear */}
                    <polygon
                      points="26,20 32,8 38,22"
                      className="text-primary/80"
                      fill="currentColor"
                    />
                    {/* Eyes */}
                    <ellipse
                      cx="20"
                      cy="28"
                      rx="3"
                      ry="4"
                      className="text-background"
                      fill="currentColor"
                    />
                    <ellipse
                      cx="30"
                      cy="28"
                      rx="3"
                      ry="4"
                      className="text-background"
                      fill="currentColor"
                    />
                    {/* Pupils */}
                    <circle
                      cx="20"
                      cy="29"
                      r="1.5"
                      className="text-foreground"
                      fill="currentColor"
                    />
                    <circle
                      cx="30"
                      cy="29"
                      r="1.5"
                      className="text-foreground"
                      fill="currentColor"
                    />
                    {/* Nose */}
                    <ellipse
                      cx="25"
                      cy="34"
                      rx="3"
                      ry="2"
                      className="text-accent"
                      fill="currentColor"
                    />
                    {/* Smile */}
                    <path
                      d="M22 37 Q25 40 28 37"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-foreground"
                    />
                    {/* Tail wagging */}
                    <path
                      d="M60 42 Q70 35 75 42 Q80 50 72 48"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-primary/80 animate-wag"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
              <p className="font-sans text-sm text-muted-foreground mt-2">
                {isAllowedName
                  ? "Mira!!! ¡Un gatito feliz de conocerte!"
                  : "Humm humm, sé que no eres tu :c"}
              </p>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes wiggle {
            0%,
            100% {
              transform: rotate(-3deg);
            }
            50% {
              transform: rotate(3deg);
            }
          }
          .animate-wiggle {
            animation: wiggle 2s ease-in-out infinite;
          }
          @keyframes wag {
            0%,
            100% {
              d: path("M60 42 Q70 35 75 42 Q80 50 72 48");
            }
            50% {
              d: path("M60 42 Q70 50 75 42 Q80 35 72 45");
            }
          }
          .animate-wag {
            animation: wag 0.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
