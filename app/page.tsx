"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { LoveLetterSection } from "@/components/love-letter-section"
import { NameInputSection } from "@/components/name-input-section"
import { ThingsILoveSection } from "@/components/things-i-love-section"
import { FinalSection } from "@/components/final-section"
import { FloatingParticles } from "@/components/floating-particles"

export default function ValentinePage() {
  const [recipientName, setRecipientName] = useState("")
  const [showLetter, setShowLetter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLetter(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated sunset gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#FFB347] via-[#FFCC80] via-[#FFE0B2] to-[#FFF8E1] animate-sunset" />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        
        {showLetter && <LoveLetterSection />}
        
        <NameInputSection 
          recipientName={recipientName} 
          setRecipientName={setRecipientName} 
        />
        
        <ThingsILoveSection />
        
        <FinalSection recipientName={recipientName} />
      </div>
    </main>
  )
}
