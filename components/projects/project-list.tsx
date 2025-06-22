import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, GitBranch, ExternalLink } from "lucide-react"
import Link from "next/link"

// Define the Project interface here or import it from a shared type file
interface Project {
  slug: string
  title: string
  description: string
  status: "계획중" | "진행중" | "완료" | "보류"
  startDate: string
  collaborators: string[]
  technologies: string[]
  category: string
  thumbnail: string
  content?: string
  subGoals: { id: string; description: string; completed: boolean }[]
}

interface ProjectListProps {
  projects: Project[] // Accept projects as a prop
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-6">
      {/* Removed the hardcoded projects array from here */}

      <div className="space-y-6">
        {projects.length === 0 ? (
          <div className="text-center text-gray-600 py-10">
            <p>조건에 맞는 프로젝트가 없습니다.</p>
            <p>다른 검색어나 필터를 시도해보세요.</p>
          </div>
        ) : (
          projects.map((project, index) => {
            const completedGoals = project.subGoals.filter((goal) => goal.completed).length
            const totalGoals = project.subGoals.length
            const progress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                    <Badge
                      variant={
                        project.status === "완료" ? "default" : project.status === "진행중" ? "secondary" : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>진행률</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.startDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.collaborators.length}명 참여
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="h-4 w-4 mr-1" />
                      {project.category}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex -space-x-2">
                      {project.collaborators.map((collaborator, collabIndex) => (
                        <div
                          key={collabIndex}
                          className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium"
                        >
                          {collaborator[0]}
                        </div>
                      ))}
                    </div>
                    <Link href="/projects/sample-project">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        상세보기
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}
