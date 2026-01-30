const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">About Me</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer with a keen eye for detail and a love for creating elegant solutions to
                complex problems. With expertise spanning web development, mobile apps, and AI/ML, I bring a diverse
                skill set to every project.
              </p>

              <p>
                My journey in tech started with a curiosity about how things work. Over the years, I've honed my skills
                through various projects, collaborations, and continuous learning. I believe in writing clean,
                maintainable code and creating user experiences that delight.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the community. I'm always excited to take on new challenges and collaborate
                with talented teams.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
              <img src="/Abdul.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
