import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, FileText, Trophy, Code, ArrowRight } from "lucide-react"

const activities = [
  {
    type: "writeup",
    title: "CODEGATE 2024 Preliminary - Web Challenge 'Login Bypass'",
    author: "이해커",
    date: "2시간 전",
    category: "Web Hacking",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    type: "project",
    title: "자동화된 취약점 스캐너 개발 프로젝트",
    author: "김보안",
    date: "5시간 전",
    category: "Tool Development",
    icon: Code,
    color: "bg-green-500",
  },
  {
    type: "achievement",
    title: "DEFCON CTF Qualifier 본선 진출",
    author: "SSG 팀",
    date: "1일 전",
    category: "Competition",
    icon: Trophy,
    color: "bg-yellow-500",
  },
  {
    type: "writeup",
    title: "Buffer Overflow 실습 - Return to Libc 기법",
    author: "박분석",
    date: "2일 전",
    category: "System Hacking",
    icon: FileText,
    color: "bg-purple-500",
  },
  {
    type: "project",
    title: "네트워크 패킷 분석 도구 v2.0 릴리즈",
    author: "최포렌식",
    date: "3일 전",
    category: "Network Security",
    icon: Code,
    color: "bg-indigo-500",
  },
]

export function RecentActivities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">최근 활동</h2>
            <p className="text-xl text-gray-600">멤버들의 최신 프로젝트와 성과를 확인하세요</p>
          </div>
          <Button variant="outline">
            전체 활동 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {activity.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {activity.date}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                        {activity.title}
                      </h3>

                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-1" />
                        {activity.author}
                      </div>
                    </div>

                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
