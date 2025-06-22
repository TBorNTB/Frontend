"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Trophy, Star, ArrowRight } from "lucide-react"

const spotlightMembers = [
  {
    name: "김보안",
    role: "동아리장",
    year: "4학년",
    major: "컴퓨터공학과",
    specialties: ["System Hacking", "Reverse Engineering"],
    achievements: ["DEFCON CTF 본선 진출", "화이트햇 콘테스트 1위"],
    projects: 15,
    writeups: 23,
    contributions: 89,
    avatar: "/placeholder.svg?height=100&width=100",
    github: "kimsecurity",
    linkedin: "kim-security",
    slug: "kim-boan",
  },
  {
    name: "이해커",
    role: "부동아리장",
    year: "3학년",
    major: "정보보호학과",
    specialties: ["Web Security", "Penetration Testing"],
    achievements: ["CODEGATE 2024 본선", "Bug Bounty 50만원 수상"],
    projects: 12,
    writeups: 31,
    contributions: 67,
    avatar: "/placeholder.svg?height=100&width=100",
    github: "leehacker",
    linkedin: "lee-hacker",
    slug: "lee-hacker",
  },
  {
    name: "박분석",
    role: "기술팀장",
    year: "4학년",
    major: "사이버보안학과",
    specialties: ["Malware Analysis", "Digital Forensics"],
    achievements: ["SANS CTF 우승", "악성코드 분석 논문 게재"],
    projects: 8,
    writeups: 19,
    contributions: 45,
    avatar: "/placeholder.svg?height=100&width=100",
    github: "parkanalyst",
    linkedin: "park-analyst",
    slug: "park-bunseok",
  },
]

export function MemberSpotlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">이달의 멤버</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            뛰어난 활동과 기여로 동아리 발전에 앞장서는 멤버들을 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spotlightMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 text-white relative">
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-yellow-300 fill-current" />
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-red-100">{member.role}</p>
                      <p className="text-red-200 text-sm">
                        {member.year} • {member.major}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">전문 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">주요 성과</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center">
                          <Trophy className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{member.projects}</div>
                      <div className="text-xs text-gray-500">프로젝트</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{member.writeups}</div>
                      <div className="text-xs text-gray-500">게시물</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{member.contributions}</div>
                      <div className="text-xs text-gray-500">기여도</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => alert("GitHub 프로필!")}>
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => alert("LinkedIn 프로필!")}>
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => alert("멤버 프로필 페이지는 현재 준비 중입니다.")}
                    >
                      프로필 보기
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
