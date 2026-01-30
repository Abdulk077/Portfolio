"use client"

import type React from "react"
import { useState } from "react"

interface SkillCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  technologies?: string[]
}

const SkillCard = ({ title, description, icon, technologies = [] }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-full cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side */}
        <div
          className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full h-full flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {icon && <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <p className="text-xs text-primary mt-4">Click to see tech stack →</p>
        </div>

        {/* Back side - Tech stack tags */}
        <div
          className="absolute inset-0 p-6 rounded-lg bg-primary text-primary-foreground border border-primary/80 w-full h-full flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <div className="flex-1 flex flex-wrap gap-2 content-start">
            {technologies.length > 0 ? (
              technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground rounded-full text-xs font-medium border border-primary-foreground/30"
                >
                  {tech}
                </span>
              ))
            ) : (
              <p className="text-sm opacity-80">No technologies listed</p>
            )}
          </div>
          <p className="text-xs opacity-75 mt-4">← Click to go back</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
