"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

interface ProjectFiltersProps {
  initialSearchTerm?: string
  initialCategory?: string
  initialStatus?: string
  initialSortBy?: string
}

const projectCategories = [
  "전체",
  "Tool Development",
  "Web Development",
  "AI/ML",
  "System Security Research",
  "Network Security Research",
  "CTF Challenge Development",
  "Other",
]

const projectStatuses = ["전체", "계획중", "진행중", "완료", "보류"]

export function ProjectFilters({
  initialSearchTerm = "",
  initialCategory = "전체",
  initialStatus = "전체",
  initialSortBy = "latest",
}: ProjectFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedStatus, setSelectedStatus] = useState(initialStatus)
  const [sortBy, setSortBy] = useState(initialSortBy)

  // URL 변경 시 필터 상태 업데이트
  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "")
    setSelectedCategory(searchParams.get("category") || "전체")
    setSelectedStatus(searchParams.get("status") || "전체")
    setSortBy(searchParams.get("sort") || "latest")
  }, [searchParams])

  const applyFilters = () => {
    const params = new URLSearchParams()
    if (searchTerm) params.set("search", searchTerm)
    if (selectedCategory !== "전체") params.set("category", selectedCategory)
    if (selectedStatus !== "전체") params.set("status", selectedStatus)
    if (sortBy !== "latest") params.set("sort", sortBy)

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="프로젝트 제목, 설명, 기술 스택으로 검색..."
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
              <SelectItem value="progress">진행률순</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={applyFilters}>
            <Filter className="h-4 w-4 mr-2" />
            필터 적용
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">카테고리</h4>
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="카테고리 선택" />
            </SelectTrigger>
            <SelectContent>
              {projectCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">상태</h4>
          <Select onValueChange={setSelectedStatus} value={selectedStatus}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="상태 선택" />
            </SelectTrigger>
            <SelectContent>
              {projectStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
