"use client"

import { useSearchParams, useRouter } from "next/navigation" // useRouter 추가
import { PostFilters } from "@/components/posts/post-filters"
import { PostGrid } from "@/components/posts/post-grid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Define the Post interface here or import it from a shared type file
interface Post {
  slug: string
  title: string
  description: string
  author: string
  date: string
  category: string
  type:
    | "ctf-writeup"
    | "mt-recap"
    | "event-log"
    | "study-note"
    | "project-log"
    | "competition-record"
    | "club-operation-doc"
    | "free-board"
  difficulty: "Easy" | "Medium" | "Hard" | "Expert" | null
  ctf: string | null
  tags: string[]
  stats: { views: number; likes: number; comments: number }
  thumbnail: string
  content?: string
}

interface PostArchiveContentProps {
  allContentData: Post[]
  pageTitle: string
  pageDescription: string
  uploadActionText: string
}

export function PostArchiveContent({
  allContentData,
  pageTitle,
  pageDescription,
  uploadActionText,
}: PostArchiveContentProps) {
  const searchParams = useSearchParams()
  const router = useRouter() // useRouter 초기화
  const categoryFilter = searchParams.get("category")
  const typeFilter = searchParams.get("type")
  const difficultyFilter = searchParams.get("difficulty")
  const ctfFilter = searchParams.get("ctf")
  const searchTerm = searchParams.get("search")
  const sortBy = searchParams.get("sort") || "latest"

  const filteredContent = allContentData
    .filter((post) => {
      let matches = true
      if (categoryFilter && categoryFilter !== "전체" && post.category !== categoryFilter) {
        matches = false
      }
      if (typeFilter && typeFilter !== "전체") {
        const typeMap: { [key: string]: string } = {
          "CTF Write-up": "ctf-writeup",
          "MT 후기": "mt-recap",
          "행사 기록": "event-log",
          "스터디 노트": "study-note",
          "프로젝트 기록": "project-log",
          "대회 기록": "competition-record",
          "동아리 운영 자료": "club-operation-doc",
          "자유 게시판": "free-board",
        }
        if (post.type !== typeMap[typeFilter]) {
          matches = false
        }
      }
      if (difficultyFilter && difficultyFilter !== "전체" && post.difficulty !== difficultyFilter) {
        matches = false
      }
      if (ctfFilter && ctfFilter !== "전체" && post.ctf !== ctfFilter) {
        matches = false
      }
      if (
        searchTerm &&
        !post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !post.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        matches = false
      }
      return matches
    })
    .sort((a, b) => {
      if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === "popular") return b.stats.views - a.stats.views
      if (sortBy === "views") return b.stats.views - a.stats.views
      if (sortBy === "likes") return b.stats.likes - a.stats.likes
      return 0
    })

  const handleUploadClick = () => {
    // 현재 페이지의 경로에 따라 이동할 경로를 결정
    if (router.pathname === "/writeups") {
      router.push("/writeups/new") // writeups 페이지에서 클릭 시
    } else {
      router.push("/archive/new") // archive 페이지에서 클릭 시
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600">{pageDescription}</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" onClick={handleUploadClick}>
          {" "}
          {/* onClick 핸들러 변경 */}
          <Plus className="mr-2 h-5 w-5" />
          {uploadActionText.split("(")[0].trim()}
        </Button>
      </div>
      <PostFilters
        initialCategory={categoryFilter || "전체"}
        initialType={typeFilter || "전체"}
        initialDifficulty={difficultyFilter || "전체"}
        initialCtf={ctfFilter || "전체"}
        initialSearchTerm={searchTerm || ""}
        initialSortBy={sortBy}
      />
      <PostGrid posts={filteredContent} />
    </div>
  )
}
