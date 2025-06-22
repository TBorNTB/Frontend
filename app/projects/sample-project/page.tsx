"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, GitBranch, CheckCircle, ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"

// 하드코딩된 단일 프로젝트 데이터
const sampleProjectData = {
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
}

// `sampleProjectData` 정의 바로 아래에 `currentUser` 변수를 추가합니다.
// 실제 애플리케이션에서는 이 값을 로그인한 사용자 정보에서 가져와야 합니다.
const currentUser = "김보안" // 현재 로그인한 사용자 (예시)

export default function SampleProjectDetailPage() {
  const project = sampleProjectData

  const completedGoals = project.subGoals.filter((goal) => goal.completed).length
  const totalGoals = project.subGoals.length
  const progress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Link href="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              목록으로 돌아가기
            </Button>
          </Link>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {project.startDate}
            </div>
            <div className="flex items-center">
              <GitBranch className="h-4 w-4 mr-1" />
              {project.category}
            </div>
            <Badge
              variant={project.status === "완료" ? "default" : project.status === "진행중" ? "secondary" : "outline"}
            >
              {project.status}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {project.thumbnail && (
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-8 object-cover max-h-96"
            />
          )}

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">진행 현황</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>진행률</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {project.subGoals.map((goal) => (
                <div key={goal.id} className="flex items-center text-gray-700">
                  <CheckCircle className={`h-4 w-4 mr-2 ${goal.completed ? "text-green-500" : "text-gray-400"}`} />
                  <span className={goal.completed ? "line-through text-gray-500" : ""}>{goal.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <div className="border-t border-gray-200 mt-10 pt-6 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                참여자: {project.collaborators.join(", ")}
              </div>
            </div>
            <div className="flex gap-2">
              {/* Add conditional rendering for the Edit button */}
              {project.collaborators.includes(currentUser) && (
                <Link href={`/projects/edit/${project.slug}`}>
                  <Button variant="outline">
                    <Pencil className="h-4 w-4 mr-1" />
                    수정
                  </Button>
                </Link>
              )}
              <Button variant="outline" onClick={() => alert("프로젝트 공유하기!")}>
                공유
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
