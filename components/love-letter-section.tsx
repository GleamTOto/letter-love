"use client";

import { useEffect, useState, useRef } from "react";

const letterParagraphs = [
  "A veces pienso que Dios sabía exactamente lo que hacía cuando te puso en este mundo, y luego en mi mundo...",
  "Porque de todas las personas, de todos los caminos posibles, decidió cruzar el mío con el tuyo… y desde entonces, todo tiene un sentido distinto.",
  "Hay algo en ti que se siente como hogar.",
  "Siento que a tu lado me atrevo a todo, sin importar lo que venga.",
  "Confiar en lo que quiero contigo se siente fácil, porque a tu lado todo es más bonito.",
  "Me inspiras en tantas cosas que a veces no sé por dónde empezar,",
  "y aun así, si lo pienso bien, no quiero nada extraordinario a cambio",
  "solo tu amor bonito, tu mirada que me enamora, tus oraciones que calman y protegen, y tus abrazos… esos que se vuelven ausencia apenas no estás.",
  "Sencillamente, tú eres donde quiero estar.",
  "Cuando no quede en este mundo una persona que te quiera, aquí estaré yo, para decirte que te espero, incluso cuando el tiempo se canse de pasar.Porque, como dice esa canción tan bonita, eres lo mejor que hay en mi vida, y no hay día en el que no le dé gracias a Dios por eso.",
  "Te he visto ahí, justo frente a mí, sonriente, valiente, siendo tú sin esfuerzo, y no puedo evitar pensarlo cada vez: te quiero tanto.",
  "He imaginado tu alma vestida de luz, tan pura, tan sincera, tan llena de amor, y otra vez lo repito sin miedo: te quiero tanto.",
  "Y sí… me duele fuerte solo pensar que algún día el mundo pudiera poner tu ausencia frente a mí. Por eso hoy, ahora, mientras estamos aquí, te elijo, te cuido y te amo con todo lo que soy.",
  "Te siento incluso cuando no estás frente a mí.",
  "Te siento al cantar, al escuchar cualquier canción bonita que hable del amor, porque en cada una vive un pedacito de lo que siento por ti, de lo que sentí ayer, de lo que siento hoy y de lo que seguirá creciendo.",
  "Siempre te llevo conmigo al despertar.",
  "Estás en mis primeros pensamientos, en esa calma suave que llega antes de que el mundo empiece a hacer ruido.",
  "Ahí estás tú, sin decir nada, pero diciéndolo todo.",
  "Y si alguna vez te preguntas dónde estás en mi vida, la respuesta es simple",
  "Estás en todo lo que me hace bien,",
  "en todo lo que me acerca a Dios,",
  "en todo lo que me recuerda por qué amar vale la pena.",
];

export function LoveLetterSection() {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          letterParagraphs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleParagraphs((prev) => [...prev, index]);
            }, index * 1200);
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
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl mx-auto">
        {/* Letter header decoration */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1" />
          <span className="text-primary text-2xl">✦</span>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1" />
        </div>

        {/* Letter content */}
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
          <div className="space-y-6">
            {letterParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`font-serif text-2xl md:text-3xl text-foreground leading-relaxed transition-all duration-1000 ease-out ${
                  visibleParagraphs.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Letter signature */}
          <div
            className={`mt-10 text-right transition-all duration-1000 delay-500 ${
              visibleParagraphs.length === letterParagraphs.length
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="font-serif text-primary text-2xl italic">
              Con amor, para Anamaria...
            </p>
          </div>
        </div>

        {/* Decorative sunset */}
        <div className="mt-12 flex justify-center">
          <svg viewBox="0 0 200 60" className="w-48 h-16 opacity-60">
            <defs>
              <linearGradient
                id="sunsetGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFB347" />
                <stop offset="50%" stopColor="#FFCC80" />
                <stop offset="100%" stopColor="#FFE0B2" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="40"
              width="200"
              height="20"
              fill="url(#sunsetGradient)"
              opacity="0.5"
            />
            <circle cx="100" cy="40" r="20" fill="#FFB347" />
            <circle cx="100" cy="40" r="15" fill="#FFCC80" />
            <circle cx="100" cy="40" r="10" fill="#FFE0B2" />
          </svg>
        </div>
      </div>
    </section>
  );
}
