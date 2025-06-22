import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Star } from "lucide-react" // Added Star icon
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Import Avatar components
import Link from "next/link"

interface Post {
  slug: string
  title: string
  description: string
  author: string
  date: string
  category: string // e.g., "System Hacking", "Club Activity"
  type:
    | "ctf-writeup"
    | "mt-recap"
    | "event-log"
    | "study-note"
    | "project-log"
    | "competition-record"
    | "club-operation-doc"
    | "free-board" // More specific types
  difficulty: "Easy" | "Medium" | "Hard" | "Expert" | null
  ctf: string | null
  tags: string[]
  stats: { views: number; likes: number; comments: number }
  thumbnail: string
  content?: string // For detail page
}

interface PostGridProps {
  posts: Post[]
}

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-orange-100 text-orange-800",
  Expert: "bg-red-100 text-red-800",
}

const postTypeBadges = {
  "ctf-writeup": { text: "CTF Write-up", color: "bg-blue-100 text-blue-800" },
  "mt-recap": { text: "MT 후기", color: "bg-purple-100 text-purple-800" },
  "event-log": { text: "행사 기록", color: "bg-green-100 text-green-800" },
  "study-note": { text: "스터디 노트", color: "bg-teal-100 text-teal-800" },
  "project-log": { text: "프로젝트 기록", color: "bg-orange-100 text-orange-800" },
  "competition-record": { text: "대회 기록", color: "bg-red-100 text-red-800" },
  "club-operation-doc": { text: "운영 자료", color: "bg-gray-100 text-gray-800" },
  "free-board": { text: "자유 게시판", color: "bg-indigo-100 text-indigo-800" },
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => {
        const typeBadge = postTypeBadges[post.type]

        return (
          <Link key={index} href="/archive/sample-post">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  {" "}
                  {/* Adjusted padding */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {" "}
                    {/* Adjusted margin */}
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    {" "}
                    {/* Moved to bottom */}
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        {" "}
                        {/* Smaller avatar */}
                        <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${post.author[0]}`} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-700 font-medium">{post.author}</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">{post.date.substring(0, 10)}</span> {/* Show only date part */}
                      <span className="text-gray-500">·</span>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.stats.comments}
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      {post.stats.likes} {/* Using likes as the star count */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
