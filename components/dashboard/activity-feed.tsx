import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageCircle, Heart, Eye } from "lucide-react"

const activities = [
  {
    type: "comment",
    content: "이해커님이 당신의 Write-up에 댓글을 남겼습니다",
    time: "10분 전",
    details: "Buffer Overflow 분석 정말 도움이 되었습니다!",
  },
  {
    type: "like",
    content: "박분석님이 당신의 프로젝트를 좋아합니다",
    time: "1시간 전",
    details: "자동화 스캐너 프로젝트",
  },
  {
    type: "view",
    content: "당신의 Write-up이 50회 조회되었습니다",
    time: "2시간 전",
    details: "CODEGATE 2024 Web Challenge",
  },
  {
    type: "mention",
    content: "최포렌식님이 당신을 프로젝트에 초대했습니다",
    time: "1일 전",
    details: "네트워크 모니터링 도구 개발",
  },
  {
    type: "achievement",
    content: "새로운 뱃지를 획득했습니다!",
    time: "2일 전",
    details: "Write-up Master (20개 이상 작성)",
  },
]

export function ActivityFeed() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">최근 알림</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              {activity.type === "comment" && <MessageCircle className="h-4 w-4 text-red-600" />}
              {activity.type === "like" && <Heart className="h-4 w-4 text-red-600" />}
              {activity.type === "view" && <Eye className="h-4 w-4 text-red-600" />}
              {activity.type === "mention" && <MessageCircle className="h-4 w-4 text-red-600" />}
              {activity.type === "achievement" && <Calendar className="h-4 w-4 text-red-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 mb-1">{activity.content}</p>
              <p className="text-xs text-gray-600 mb-1">{activity.details}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
