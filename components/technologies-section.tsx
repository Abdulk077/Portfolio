import TechnologyIcon from "./technology-icon"

const TechnologiesSection = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Firebase", icon: "🔥" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "📊" },
    { name: "Keras", icon: "🧠" },
    { name: "Android Studio", icon: "🤖" },
    { name: "TypeScript", icon: "📘" },
  ]

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Technologies I Use</h2>
          <p className="text-lg text-muted-foreground">Tools and frameworks I work with</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyIcon key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
