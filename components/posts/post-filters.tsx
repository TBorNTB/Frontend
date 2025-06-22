"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

interface PostFiltersProps {
  initialCategory?: string
  initialType?: string
  initialDifficulty?: string
  initialCtf?: string
  initialSearchTerm?: string
  initialSortBy?: string
}

const categories = [
  "전체",
  "Web Hacking",
  "System Hacking",
  "Reverse Engineering",
  "Cryptography",
  "Digital Forensics",
  "Network Security",
  "IoT Security",
  "Club Activity",
  "Competition",
  "Club Operation",
  "Community",
]

const difficulties = ["전체", "Easy", "Medium", "Hard", "Expert"]

const ctfs = [
  "전체",
  "CODEGATE 2024",
  "DEFCON CTF",
  "HITCON CTF",
  "PlaidCTF",
  "Google CTF",
  "SECCON CTF",
  "SSG Internal CTF",
]

const postTypes = [
  "CTF Write-up", // "전체" 제거
  "MT 후기",
  "행사 기록",
  "스터디 노트",
  "프로젝트 기록",
  "대회 기록",
  "동아리 운영 자료",
  "자유 게시판",
]

export function PostFilters({
  initialCategory = "전체",
  initialType = "전체",
  initialDifficulty = "전체",
  initialCtf = "전체",
  initialSearchTerm = "",
  initialSortBy = "latest",
}: PostFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedType, setSelectedType] = useState(initialType)
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty)
  const [selectedCtf, setSelectedCtf] = useState(initialCtf)
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [sortBy, setSortBy] = useState(initialSortBy)

  // URL 변경 시 필터 상태 업데이트
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "전체")
    setSelectedType(searchParams.get("type") || "전체")
    setSelectedDifficulty(searchParams.get("difficulty") || "전체")
    setSelectedCtf(searchParams.get("ctf") || "전체")
    setSearchTerm(searchParams.get("search") || "")
    setSortBy(searchParams.get("sort") || "latest")
  }, [searchParams])

  const applyFilters = () => {
    const params = new URLSearchParams()
    if (selectedCategory !== "전체") params.set("category", selectedCategory)
    if (selectedType !== "전체") params.set("type", selectedType)
    if (selectedDifficulty !== "전체") params.set("difficulty", selectedDifficulty)
    if (selectedCtf !== "전체") params.set("ctf", selectedCtf)
    if (searchTerm) params.set("search", searchTerm)
    if (sortBy !== "latest") params.set("sort", sortBy)

    router.push(`${pathname}?${params.toString()}`)
    // alert("필터가 적용되었습니다! (현재는 임시 기능입니다)") // 실제 배포 시 제거
  }

  const handleTypeBadgeClick = (value: string) => {
    setSelectedType(value)
    // 뱃지 클릭 시 바로 적용하려면 아래 주석 해제
    // applyFilters()
  }

  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="게시물 제목이나 내용으로 검색..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") applyFilters()
            }}
          />
        </div>
        <div className="flex gap-2">
          <Select onValueChange={setSortBy} value={sortBy}>
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
          <Button variant="outline" onClick={applyFilters}>
            <Filter className="h-4 w-4 mr-2" />
            필터 적용
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">게시물 유형</h4>
          <div className="flex flex-wrap gap-2">
            {postTypes.map((type, index) => (
              <Badge
                key={index}
                variant={selectedType === type ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-50 hover:border-red-200"
                onClick={() => handleTypeBadgeClick(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">카테고리</h4>
            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">난이도</h4>
            <Select onValueChange={setSelectedDifficulty} value={selectedDifficulty}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="난이도 선택" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">CTF 대회</h4>
            <Select onValueChange={setSelectedCtf} value={selectedCtf}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="CTF 대회 선택" />
              </SelectTrigger>
              <SelectContent>
                {ctfs.map((ctf) => (
                  <SelectItem key={ctf} value={ctf}>
                    {ctf}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
