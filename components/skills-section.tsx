import SkillCard from "./skill-card"

const SkillsSection = () => {
  const skills = [
    {
      title: "Web Development",
      description: "Building responsive, performant web applications using modern frameworks and best practices.",
      icon: "🌐",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL", "REST APIs", "MongoDB", "Docker", ],
    },
    {
      title: "Android Development",
      description: "Creating native Android applications with intuitive user interfaces and smooth performance.",
      icon: "📱",
      technologies: ["Kotlin", "Java",  "Firebase",  "sqflite"],
    },
    {
      title: "AI & ML",
      description: "Developing machine learning models and integrating AI solutions into applications.",
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from data using statistical analysis and visualization techniques.",
      icon: "📊",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL",],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
        
        </div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-max">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
