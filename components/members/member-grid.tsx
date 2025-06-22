import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const members = [
  {
    name: "김보안",
    role: "동아리장",
    year: "4학년",
    major: "컴퓨터공학과",
    specialties: ["System Hacking", "Reverse Engineering"],
    stats: { projects: 15, writeups: 23, contributions: 89 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
  {
    name: "이해커",
    role: "부동아리장",
    year: "3학년",
    major: "정보보호학과",
    specialties: ["Web Security", "Penetration Testing"],
    stats: { projects: 12, writeups: 31, contributions: 67 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
  {
    name: "박분석",
    role: "기술팀장",
    year: "4학년",
    major: "사이버보안학과",
    specialties: ["Malware Analysis", "Digital Forensics"],
    stats: { projects: 8, writeups: 19, contributions: 45 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
  {
    name: "최포렌식",
    role: "연구팀장",
    year: "3학년",
    major: "컴퓨터공학과",
    specialties: ["Digital Forensics", "Network Security"],
    stats: { projects: 10, writeups: 15, contributions: 38 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
  {
    name: "정크립토",
    role: "일반회원",
    year: "2학년",
    major: "정보보호학과",
    specialties: ["Cryptography", "Blockchain"],
    stats: { projects: 5, writeups: 12, contributions: 25 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
  {
    name: "한네트워크",
    role: "일반회원",
    year: "2학년",
    major: "컴퓨터공학과",
    specialties: ["Network Security", "IoT Security"],
    stats: { projects: 7, writeups: 8, contributions: 22 },
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
  },
]

export function MemberGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <img
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-gray-100"
              />
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-red-600 font-medium">{member.role}</p>
              <p className="text-xs text-gray-500">
                {member.year} • {member.major}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">전문 분야</h4>
              <div className="flex flex-wrap gap-1">
                {member.specialties.map((specialty, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900">{member.stats.projects}</div>
                <div className="text-xs text-gray-500">프로젝트</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{member.stats.writeups}</div>
                <div className="text-xs text-gray-500">Write-up</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{member.stats.contributions}</div>
                <div className="text-xs text-gray-500">기여도</div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
