import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import TechnologiesSection from "@/components/technologies-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <TechnologiesSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
