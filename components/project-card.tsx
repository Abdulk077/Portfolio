import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink: string
  liveLink: string
  tags: string[]
}

const ProjectCard = ({ title, description, image, githubLink, liveLink, tags }: ProjectCardProps) => {
  return (
    <div className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-muted-foreground line-clamp">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <Button variant="outline" size="sm" asChild className="flex-1 gap-2 bg-transparent">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Github
            </a>
          </Button>
          <Button size="sm" className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Live Demo not available
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
