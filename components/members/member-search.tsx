import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

const filters = [
  "전체",
  "동아리장",
  "부동아리장",
  "팀장",
  "일반회원",
  "4학년",
  "3학년",
  "2학년",
  "1학년",
  "System Hacking",
  "Web Security",
  "Digital Forensics",
  "Reverse Engineering",
]

export function MemberSearch() {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="멤버 이름이나 전공으로 검색..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          필터
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <Badge
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className="cursor-pointer hover:bg-red-50 hover:border-red-200"
          >
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  )
}
