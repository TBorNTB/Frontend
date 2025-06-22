import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Crown } from "lucide-react"

const clubHistory = [
  {
    year: 2024,
    president: "김보안",
    members: 55,
    milestones: [
      "신입 부원 20명 모집",
      "CODEGATE 2024 본선 진출 (팀 SSG_Alpha)",
      "주간 스터디 세션 런칭",
      "SSG 웹사이트 리뉴얼 프로젝트 시작",
    ],
  },
  {
    year: 2023,
    president: "박해커",
    members: 48,
    milestones: [
      "DEFCON CTF Qualifier 100위권 진입",
      "화이트햇 콘테스트 3위 입상",
      "첫 오프라인 MT 개최 (강화도)",
      "SSG 아카이브 시스템 구축 시작",
    ],
  },
  {
    year: 2022,
    president: "이보안",
    members: 35,
    milestones: ["SSG 동아리 창립 및 초대 회장 선출", "교내 정보보안 경진대회 주최", "정기 스터디 그룹 운영 시작"],
  },
]

export function ClubHistory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">SSG 연혁</h2>
          <p className="text-xl text-gray-600">세종대학교 정보보안 동아리 SSG의 발자취</p>
        </div>

        <div className="relative pl-8 md:pl-16">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-red-200 rounded-full" />

          {clubHistory.map((entry, index) => (
            <div key={index} className="mb-12 flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-1.5 md:left-5 flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white z-10">
                <Calendar className="h-4 w-4" />
              </div>

              <Card className="ml-8 md:ml-12 flex-1 w-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{entry.year}년</h3>
                  <div className="flex items-center text-gray-700 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-yellow-500 fill-current" />
                      <span className="font-semibold">회장: {entry.president}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="font-semibold">멤버: {entry.members}명</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {entry.milestones.map((milestone, idx) => (
                      <li key={idx}>{milestone}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
