import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

const categories = [
  "전체",
  "Web Hacking",
  "System Hacking",
  "Reverse Engineering",
  "Cryptography",
  "Digital Forensics",
  "Network Security",
  "IoT Security",
]

const difficulties = ["전체", "Easy", "Medium", "Hard", "Expert"]

const ctfs = ["전체", "CODEGATE", "DEFCON CTF", "HITCON CTF", "PlaidCTF", "Google CTF", "SECCON CTF", "WCTF", "0CTF"]

export function WriteupFilters() {
  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Write-up 제목이나 내용으로 검색..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">최신순</SelectItem>
              <SelectItem value="popular">인기순</SelectItem>
              <SelectItem value="views">조회순</SelectItem>
              <SelectItem value="likes">좋아요순</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            필터
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">카테고리</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-50 hover:border-red-200"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">난이도</h4>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-50 hover:border-red-200"
              >
                {difficulty}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">CTF 대회</h4>
          <div className="flex flex-wrap gap-2">
            {ctfs.map((ctf, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-50 hover:border-red-200"
              >
                {ctf}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
