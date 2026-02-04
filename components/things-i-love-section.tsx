"use client";

import { useEffect, useState, useRef } from "react";

const thingsILove = [
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="34" r="18" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 20l-6-6v12M44 20l6-6v12" />
        <circle cx="26" cy="30" r="2" fill="currentColor" />
        <circle cx="38" cy="30" r="2" fill="currentColor" />
        <path d="M30 36c1 1 3 1 4 0" />
        <path d="M24 34h-6M24 38h-6M40 34h6M40 38h6" />
        <path d="M28 42c0 3 2 6 4 6s4-3 4-6" />
      </svg>
    ),
    label: "Tu amor por los gatitos",
    color: "text-primary",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    label: "la paz que me das",
    color: "text-[#FFB347]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
    ),
    label: "Tu voz",
    color: "text-amber-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    label: "Tu corazón bonito",
    color: "text-primary",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L9 9H2l5.5 4.5L5 22l7-5 7 5-2.5-8.5L22 9h-7L12 2z" />
      </svg>
    ),
    label: "Como brillas",
    color: "text-[#D4A574]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <circle cx="15.5" cy="9.5" r="1.5" />
        <path d="M12 17c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
        <path d="M8 6l2-3 1.5 2M14 6l2-3 1.5 2" />
      </svg>
    ),
    label: "Tu sonrisa",
    color: "text-yellow-500",
  },
];

export function ThingsILoveSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          thingsILove.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-3xl text-foreground mb-12">
          Cosas que amo de ti {`<3`}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {thingsILove.map((item, index) => (
            <div
              key={index}
              className={`group bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-card/80 cursor-default ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className={`${item.color} mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>
              <p className="font-sans text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
