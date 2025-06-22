import { Card, CardContent } from "@/components/ui/card"
import { FileText, Code, Trophy, TrendingUp, Star } from "lucide-react"

const stats = [
  {
    title: "작성한 Write-up",
    value: "23",
    change: "+3 이번 달",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "진행 중인 프로젝트",
    value: "4",
    change: "+1 이번 주",
    icon: Code,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "대회 참가",
    value: "12",
    change: "올해 기준",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "기여도 점수",
    value: "89",
    change: "+5 이번 달",
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function PersonalStats() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">나의 활동 현황</h2>
        <p className="text-gray-600">개인 활동 통계와 성과를 확인하세요</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
