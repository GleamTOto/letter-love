"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  type: "heart" | "paw"
  duration: number
  delay: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 8,
        type: Math.random() > 0.5 ? "heart" : "paw",
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === "heart" ? (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary w-full h-full"
              style={{ width: particle.size, height: particle.size }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent w-full h-full"
              style={{ width: particle.size, height: particle.size }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <circle cx="8" cy="9" r="1.5" />
              <circle cx="16" cy="9" r="1.5" />
              <circle cx="9" cy="14" r="1" />
              <circle cx="15" cy="14" r="1" />
              <circle cx="12" cy="16" r="1.5" />
            </svg>
          )}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(5deg);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-15px) translateX(-10px) rotate(-3deg);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-40px) translateX(5px) rotate(3deg);
            opacity: 0.18;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}
