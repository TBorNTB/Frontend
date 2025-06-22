import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PersonalStats } from "@/components/dashboard/personal-stats"
import { ProjectList } from "@/components/projects/project-list"
import { UploadSection } from "@/components/dashboard/upload-section"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

// Dummy data for user's projects on the dashboard
const userProjects = [
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
    content: ``,
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
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PersonalStats />
            <ProjectList projects={userProjects} /> {/* Pass the dummy projects here */}
            <UploadSection />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  )
}
