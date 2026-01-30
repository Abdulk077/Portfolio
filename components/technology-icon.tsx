import type React from "react"
interface TechnologyIconProps {
  name: string
  icon: React.ReactNode
}

const TechnologyIcon = ({ name, icon }: TechnologyIconProps) => {
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="text-4xl p-4 rounded-lg bg-muted group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary animate-float">
        {icon}
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
    </div>
  )
}

export default TechnologyIcon
