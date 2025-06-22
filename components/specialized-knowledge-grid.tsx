"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import {
  Code,
  Bug,
  BookOpen,
  FileText,
  Trophy,
  Calendar,
  Users,
  MessageCircle,
  Laptop,
  HardDrive,
  GitFork,
  Key,
  Network,
  Wifi,
} from "lucide-react" // 필요한 아이콘 임포트

// 전문 지식 분야 카테고리
const specializedKnowledgeCategories = [
  {
    title: "시스템 해킹",
    description: "운영체제 및 시스템 취약점 분석",
    icon: Laptop, // Changed icon for better representation
    slug: "System Hacking", // category 필터
  },
  {
    title: "웹 해킹",
    description: "웹 서비스 취약점 진단 및 방어",
    icon: Bug,
    slug: "Web Hacking", // category 필터
  },
  {
    title: "디지털 포렌식",
    description: "디지털 증거 수집 및 분석",
    icon: HardDrive, // Changed icon
    slug: "Digital Forensics", // category 필터
  },
  {
    title: "리버싱",
    description: "소프트웨어 역공학 및 분석",
    icon: GitFork, // Changed icon
    slug: "Reverse Engineering", // category 필터
  },
  {
    title: "암호학",
    description: "암호 이론 및 실제 적용",
    icon: Key, // Changed icon
    slug: "Cryptography", // category 필터
  },
  {
    title: "네트워크 보안",
    description: "네트워크 공격 및 방어 기술",
    icon: Network, // Changed icon
    slug: "Network Security", // category 필터
  },
  {
    title: "IoT 보안",
    description: "사물 인터넷 기기 취약점 분석",
    icon: Wifi, // Changed icon
    slug: "IoT Security", // category 필터
  },
]

// 그 외 활동 카테고리 (게시물 유형)
const otherActivityCategories = [
  {
    title: "CTF Write-up",
    description: "CTF 문제 풀이 과정 및 해설",
    icon: FileText,
    slug: "CTF Write-up", // type 필터
  },
  {
    title: "MT 후기",
    description: "동아리 MT의 즐거운 순간과 활동 기록",
    icon: BookOpen,
    slug: "MT 후기", // type 필터
  },
  {
    title: "행사 기록",
    description: "동아리 주요 행사 및 이벤트 기록",
    icon: Calendar,
    slug: "행사 기록", // type 필터
  },
  {
    title: "스터디 노트",
    description: "다양한 보안 주제에 대한 스터디 자료",
    icon: BookOpen,
    slug: "스터디 노트", // type 필터
  },
  {
    title: "프로젝트 기록",
    description: "멤버들이 진행한 프로젝트의 개발 과정 및 결과",
    icon: Code,
    slug: "프로젝트 기록", // type 필터
  },
  {
    title: "대회 기록",
    description: "CTF 및 보안 대회 참가 기록",
    icon: Trophy,
    slug: "대회 기록", // type 필터
  },
  {
    title: "동아리 운영 자료",
    description: "동아리 회칙 및 운영 관련 문서",
    icon: Users,
    slug: "동아리 운영 자료", // type 필터
  },
  {
    title: "자유 게시판",
    description: "멤버들의 자유로운 소통 공간",
    icon: MessageCircle,
    slug: "자유 게시판", // type 필터
  },
]

export function SpecializedKnowledgeGrid() {
  const router = useRouter()

  const handleCategoryClick = (
    categoryItem: (typeof specializedKnowledgeCategories)[number] | (typeof otherActivityCategories)[number],
  ) => {
    // type으로 필터링할 slug 목록 (PostFilters의 postTypes와 일치)
    const typeSlugs = [
      "CTF Write-up",
      "MT 후기",
      "행사 기록",
      "스터디 노트",
      "프로젝트 기록",
      "대회 기록",
      "동아리 운영 자료",
      "자유 게시판",
    ]
    let filterParam = ""
    if (typeSlugs.includes(categoryItem.slug)) {
      filterParam = `type=${encodeURIComponent(categoryItem.slug)}`
    } else {
      filterParam = `category=${encodeURIComponent(categoryItem.slug)}`
    }
    router.push(`/archive?${filterParam}`)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">SSG 학습 및 활동 분야</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 보안 전문 분야와 동아리 활동 기록을 탐색해보세요.
          </p>
        </div>

        {/* 전문 지식 분야 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">전문 지식 분야</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {specializedKnowledgeCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} onClick={() => handleCategoryClick(category)} className="cursor-pointer">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <Icon className="h-10 w-10 text-red-600 group-hover:text-red-700 transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* 그 외 활동 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">그 외 활동</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
            {otherActivityCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} onClick={() => handleCategoryClick(category)} className="cursor-pointer">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <Icon className="h-10 w-10 text-red-600 group-hover:text-red-700 transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
