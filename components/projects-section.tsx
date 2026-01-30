import ProjectCard from "./project-card"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description:"A full-stack expense management application that helps users track, categorize, and analyze their financial activities in one place. The platform is designed to provide clear insights into expenses, savings, and assets through a secure and intuitive user experience.",
      image: "/ecommerce-dashboard.jpg",
      githubLink: "https://github.com/Abdulk077/expensetracker",
      liveLink: "not available",
      tags: ["React", "Node.js", "MongoDB", "Graphql","Passportjs" ],
    },
    {
      title: "Ecommerce Application",
      description: "A scalable full-stack e-commerce platform that enables users to browse products and manage an online storefront through a clean and responsive interface. The project focuses on performance, state management, and extensible architecture for future growth.",
      image: "/weather-app-interface.png",
      githubLink: "https://github.com/Abdulk077/EcomStore",
      liveLink: "not avalable",
      tags: ["Next.js", "TailwindCSS", "Postgress", "Neondb", "React", "Rest" ],
    },
    {
      title: "Equity_Reserch_Tolls",
      description:"An AI-powered equity research application that processes stock-related articles directly from provided links. It enables intelligent question–answering to extract key insights and summarize relevant financial information. Designed to support faster and more informed investment research using generative AI.",
      image: "/task-management-board.png",
      githubLink: "https://github.com/Abdulk077/Gen-Ai/tree/main/Equity_Reserch_Tolls",
      tags: ["Langchain", "Vectordb","Groq", "Streamlit", "Python" ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">Recent work and highlighted projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
