"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectList } from "@/components/projects/project-list"
import { ProjectFilters } from "@/components/projects/project-filters" // Import ProjectFilters
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react" // Import Suspense for useSearchParams
import { useSearchParams } from "next/navigation" // Import useSearchParams

// Dummy Project Data (moved from ProjectList to here)
const allProjectsData = [
  {
    slug: "automated-web-scanner",
    title: "자동화된 웹 취약점 스캐너 개발",
    description: "Python과 Selenium을 활용한 웹 애플리케이션 자동 취약점 탐지 도구",
    status: "진행중",
    startDate: "2024-01-15",
    collaborators: ["이해커", "박분석", "김보안"],
    technologies: ["Python", "Selenium", "Flask", "Docker"],
    category: "Tool Development",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Web Scanner",
    content: ``, // Content is not needed for list view
    subGoals: [
      { id: "sg1", description: "기본 웹 크롤링 및 페이지 파싱 기능 구현", completed: true },
      { id: "sg2", description: "XSS 탐지 모듈 개발 및 테스트", completed: true },
      { id: "sg3", description: "SQL Injection 탐지 모듈 개발 및 테스트", completed: false },
      { id: "sg4", description: "사용자 인터페이스 (UI) 개발", completed: false },
      { id: "sg5", description: "보고서 생성 기능 구현", completed: false },
      { id: "sg6", description: "Docker를 이용한 배포 환경 구축", completed: false },
    ],
  },
  {
    slug: "ctf-platform-development",
    title: "SSG 내부 CTF 플랫폼 개발",
    description: "동아리 내부 CTF 대회를 위한 웹 기반 플랫폼 구축",
    status: "완료",
    startDate: "2023-12-01",
    collaborators: ["최포렌식", "김보안"],
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    category: "Web Development",
    thumbnail: "/placeholder.svg?height=400&width=600&text=CTF Platform",
    content: ``,
    subGoals: [
      { id: "sg1", description: "기본 사용자 인증 및 회원가입 기능 구현", completed: true },
      { id: "sg2", description: "문제 출제 및 관리 API 개발", completed: true },
      { id: "sg3", description: "스코어보드 및 문제 목록 UI 개발", completed: true },
      { id: "sg4", description: "문제 풀이 제출 및 채점 로직 구현", completed: true },
      { id: "sg5", description: "Docker를 이용한 배포 및 테스트", completed: true },
    ],
  },
  {
    slug: "malware-analysis-automation",
    title: "악성코드 분석 자동화 시스템",
    description: "머신러닝 기반의 악성코드 패턴 분석 및 분류 시스템 개발",
    status: "계획중",
    startDate: "2024-02-01",
    collaborators: ["김보안", "박분석"],
    technologies: ["Python", "TensorFlow", "Keras", "Docker"],
    category: "AI/ML",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Malware Analysis",
    content: ``,
    subGoals: [
      { id: "sg1", description: "악성코드 샘플 수집 및 데이터셋 구축", completed: false },
      { id: "sg2", description: "정적 특징 추출 모듈 개발", completed: false },
      { id: "sg3", description: "머신러닝 모델 (예: SVM, Random Forest) 구현", completed: false },
      { id: "sg4", description: "분류 정확도 평가 및 개선", completed: false },
      { id: "sg5", description: "기본적인 웹 인터페이스 개발", completed: false },
    ],
  },
  {
    slug: "network-traffic-analyzer",
    title: "실시간 네트워크 트래픽 분석기",
    description: "Go 언어를 이용한 고성능 네트워크 패킷 캡처 및 분석 도구",
    status: "진행중",
    startDate: "2024-03-10",
    collaborators: ["한네트워크", "이해커"],
    technologies: ["Go", "libpcap", "Grafana", "Prometheus"],
    category: "Network Security Research",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Network Analyzer",
    content: ``,
    subGoals: [
      { id: "sg1", description: "패킷 캡처 모듈 개발", completed: true },
      { id: "sg2", description: "기본 프로토콜 파싱 기능 구현", completed: false },
      { id: "sg3", description: "데이터 시각화 연동", completed: false },
    ],
  },
  {
    slug: "mobile-app-security-audit",
    title: "모바일 앱 보안 취약점 진단 가이드",
    description: "Android/iOS 앱의 일반적인 취약점 분석 및 안전한 개발 가이드라인",
    status: "완료",
    startDate: "2023-11-01",
    collaborators: ["박분석"],
    technologies: ["MobSF", "Frida", "Burp Suite"],
    category: "System Security Research",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Mobile Security",
    content: ``,
    subGoals: [
      { id: "sg1", description: "Android 앱 취약점 분석", completed: true },
      { id: "sg2", description: "iOS 앱 취약점 분석", completed: true },
      { id: "sg3", description: "보안 가이드라인 문서화", completed: true },
    ],
  },
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("search") || ""
  const categoryFilter = searchParams.get("category") || "전체"
  const statusFilter = searchParams.get("status") || "전체"
  const sortBy = searchParams.get("sort") || "latest"

  const filteredProjects = allProjectsData
    .filter((project) => {
      let matches = true

      // Search term filter
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase()
        const projectText = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase()
        if (!projectText.includes(lowerSearchTerm)) {
          matches = false
        }
      }

      // Category filter
      if (categoryFilter !== "전체" && project.category !== categoryFilter) {
        matches = false
      }

      // Status filter
      if (statusFilter !== "전체" && project.status !== statusFilter) {
        matches = false
      }

      return matches
    })
    .sort((a, b) => {
      if (sortBy === "latest") return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      if (sortBy === "popular") {
        // For projects, "popular" could mean more collaborators or more sub-goals
        // Let's use number of collaborators for now
        return b.collaborators.length - a.collaborators.length
      }
      if (sortBy === "progress") {
        const progressA = a.subGoals.length > 0 ? a.subGoals.filter((g) => g.completed).length / a.subGoals.length : 0
        const progressB = b.subGoals.length > 0 ? b.subGoals.filter((g) => g.completed).length / b.subGoals.length : 0
        return progressB - progressA // Higher progress first
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SSG 프로젝트</h1>
            <p className="text-xl text-gray-600">멤버들이 진행하는 다양한 보안 프로젝트</p>
          </div>
          <Link href="/projects/new">
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="mr-2 h-5 w-5" />새 프로젝트 등록
            </Button>
          </Link>
        </div>
        <Suspense fallback={<div>로딩 중 필터...</div>}>
          <ProjectFilters
            initialSearchTerm={searchTerm}
            initialCategory={categoryFilter}
            initialStatus={statusFilter}
            initialSortBy={sortBy}
          />
        </Suspense>
        <ProjectList projects={filteredProjects} /> {/* Pass filtered projects */}
      </div>
      <Footer />
    </div>
  )
}
