"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const roles = ["Web Developer", "Android Developer", "AI & ML Enthusiast"]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Hi, I'm <span className="text-primary">Abdul</span>
            </h1>
            <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-primary font-semibold animate-pulse">{roles[currentRole]}</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, functional digital experiences with a focus on clean code and user-centric design. Let's
            build something amazing together.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
