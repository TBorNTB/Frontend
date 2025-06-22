"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCreationForm } from "@/components/projects/project-creation-form"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

// Dummy Project Data (실제 앱에서는 데이터베이스에서 불러옵니다)
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
    content: `
      <h3>1. 개발 배경 및 목표</h3>
      <p>웹 애플리케이션의 보안 취약점을 수동으로 진단하는 과정은 시간과 노력이 많이 소요됩니다. 이를 자동화하여 효율성을 높이고, 개발 초기 단계부터 보안을 고려할 수 있도록 돕는 도구를 개발하는 것이 목표입니다.</p>
      <p>궁극적으로는 SSG 멤버들이 웹 프로젝트를 개발할 때 자체적으로 보안 점검을 수행할 수 있는 강력한 도구를 제공하고자 합니다.</p>

      <h3>2. 주요 기능 및 특징</h3>
      <ul>
        <li><strong>자동화된 크롤링:</strong> Selenium을 사용하여 웹 페이지를 자동으로 탐색하고 링크를 수집합니다.</li>
        <li><strong>XSS 탐지:</strong> 다양한 XSS 페이로드를 주입하여 Reflected XSS 및 Stored XSS 취약점을 탐지합니다.</li>
        <li><strong>SQL Injection 탐지:</strong> Union-based, Error-based, Blind SQL Injection 등 다양한 SQLi 기법을 시도하여 취약점을 식별합니다.</li>
        <li><strong>보고서 생성:</strong> 탐지된 취약점과 상세 정보를 포함하는 보고서를 자동으로 생성합니다.</li>
        <li><strong>확장성:</strong> 새로운 취약점 탐지 모듈을 쉽게 추가할 수 있도록 모듈화된 구조로 설계되었습니다.</li>
      </ul>
      <pre><code># 예시: XSS 탐지 코드 스니펫
def detect_xss(url, payload):
    driver.get(url + payload)
    if payload in driver.page_source:
        print(f"XSS detected at {url} with payload {payload}")
        return True
    return False</code></pre>
      <img src="/placeholder.svg?height=300&width=500&text=스캐너 UI 예시" alt="스캐너 UI 예시" class="my-4 rounded-lg shadow-md" />

      <h3>3. 구현 과정 및 기술 스택</h3>
      <p>프로젝트는 Python을 주 언어로 사용하며, 웹 자동화를 위해 Selenium을 활용했습니다. 백엔드 API는 Flask로 구축하여 스캔 요청을 처리하고 결과를 반환합니다. 데이터베이스는 SQLite를 사용하여 스캔 결과 및 설정 정보를 저장합니다. 전체 애플리케이션은 Docker 컨테이너로 패키징하여 배포 및 환경 설정의 용이성을 확보했습니다.</p>
      <p>프론트엔드는 간단한 웹 인터페이스를 위해 HTML/CSS/JavaScript를 사용했습니다.</p>

      <h3>4. 성과 및 배운 점</h3>
      <p>이 프로젝트를 통해 웹 취약점의 동작 원리를 깊이 이해하고, 실제 공격 및 방어 기법을 구현하는 경험을 쌓았습니다. 특히 Selenium을 이용한 웹 자동화와 Flask를 이용한 백엔드 개발에 대한 실무 역량을 강화할 수 있었습니다. 또한, Docker를 활용하여 개발 환경을 구축하고 배포하는 과정에서 컨테이너 기술에 대한 이해도를 높였습니다.</p>
      <p>아직 개선할 점이 많지만, 초기 목표였던 자동화된 웹 취약점 스캐너의 핵심 기능을 성공적으로 구현하여 만족스럽습니다.</p>

      <h3>5. 향후 계획</h3>
      <ul>
        <li>CSRF, File Upload 등 더 많은 취약점 탐지 모듈 추가</li>
        <li>스캔 속도 최적화 및 대규모 웹사이트 지원</li>
        <li>사용자 친화적인 웹 UI/UX 개선</li>
        <li>CI/CD 파이프라인 구축을 통한 자동화된 배포</li>
      </ul>
    `,
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

export default function EditProjectPage() {
  const params = useParams()
  const { slug } = params as { slug: string }
  const [projectData, setProjectData] = useState<any | null>(null) // 실제 데이터 타입으로 교체 필요

  useEffect(() => {
    // 실제 앱에서는 여기서 slug를 사용하여 백엔드에서 프로젝트 데이터를 불러옵니다.
    // 현재는 더미 데이터에서 찾습니다.
    const foundProject = allProjectsData.find((p) => p.slug === slug)
    if (foundProject) {
      setProjectData(foundProject)
    } else {
      // 프로젝트를 찾을 수 없을 경우 처리 (예: 404 페이지로 리다이렉트)
      console.error(`Project with slug "${slug}" not found.`)
    }
  }, [slug])

  if (!projectData) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <p className="text-xl text-gray-600">프로젝트를 불러오는 중...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectCreationForm initialData={projectData} />
      </main>
      <Footer />
    </div>
  )
}
