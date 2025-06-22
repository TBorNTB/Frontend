import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpecializedKnowledgeGrid } from "@/components/specialized-knowledge-grid" // Import the new component
import { PostGrid } from "@/components/posts/post-grid" // Keep PostGrid for popular posts

// Re-using the dummy data from app/archive/page.tsx for consistency
const allContentData = [
  {
    slug: "system-hacking-basics",
    title: "시스템 해킹 기초 스터디 자료",
    description: "버퍼 오버플로우, 포맷 스트링 버그 등 시스템 해킹의 기본 개념과 실습 자료",
    author: "김보안",
    date: "2024-03-01",
    category: "System Hacking",
    type: "study-note",
    difficulty: "Easy",
    ctf: null,
    tags: ["시스템", "스터디", "기초"],
    stats: { views: 1500, likes: 120, comments: 30 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "web-project-v1",
    title: "SSG 웹 취약점 진단 프로젝트 보고서",
    description: "동아리 웹사이트의 XSS, SQLi 취약점 진단 및 개선 방안 보고서",
    author: "이해커",
    date: "2024-02-20",
    category: "Web Hacking",
    type: "project-log",
    difficulty: "Medium",
    ctf: null,
    tags: ["웹", "프로젝트", "진단", "보고서"],
    stats: { views: 900, likes: 80, comments: 15 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "ctf-competition-2023-recap",
    title: "2023년 CTF 대회 참가 기록 및 성과",
    description: "지난 한 해 동안 SSG 멤버들이 참가한 주요 CTF 대회 기록과 수상 내역 정리",
    author: "SSG 운영진",
    date: "2024-01-05",
    category: "Competition",
    type: "competition-record",
    difficulty: null,
    ctf: null,
    tags: ["대회", "CTF", "성과", "기록"],
    stats: { views: 1200, likes: 150, comments: 25 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "club-rules-2024",
    title: "2024년 SSG 동아리 회칙 및 운영 방안",
    description: "동아리 운영의 투명성과 효율성을 위한 2024년 개정 회칙 및 운영 가이드",
    author: "SSG 운영진",
    date: "2024-01-01",
    category: "Club Operation",
    type: "club-operation-doc",
    difficulty: null,
    ctf: null,
    tags: ["회칙", "운영", "규정"],
    stats: { views: 300, likes: 10, comments: 2 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "codegate-sql-injection-bypass",
    title: "CODEGATE 2024 Preliminary - SQL Injection Bypass",
    description: "WAF 우회를 통한 SQL Injection 공격 기법과 Union-based 공격 상세 분석",
    author: "이해커",
    date: "2024-01-20",
    category: "Web Hacking",
    type: "ctf-writeup",
    difficulty: "Hard",
    ctf: "CODEGATE 2024",
    tags: ["SQL Injection", "WAF Bypass", "Union-based"],
    stats: { views: 1234, likes: 89, comments: 23 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "defcon-buffer-overflow-rop-chain",
    title: "DEFCON CTF Qualifier - Buffer Overflow ROP Chain",
    description: "Return-Oriented Programming을 활용한 ASLR 우회 기법",
    author: "김보안",
    date: "2024-01-18",
    category: "System Hacking",
    type: "ctf-writeup",
    difficulty: "Expert",
    ctf: "DEFCON CTF",
    tags: ["Buffer Overflow", "ROP", "ASLR Bypass"],
    stats: { views: 987, likes: 156, comments: 34 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "mt-recap-2024-spring",
    title: "2024년 봄 MT 후기 및 활동 사진",
    description: "강화도에서 진행된 SSG 봄 MT의 즐거운 순간들과 팀 빌딩 활동 기록",
    author: "SSG 운영진",
    date: "2024-03-10",
    category: "Club Activity",
    type: "mt-recap",
    difficulty: "Easy",
    ctf: null,
    tags: ["MT", "동아리활동", "사진"],
    stats: { views: 2000, likes: 250, comments: 50 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "new-member-welcome-2024",
    title: "2024년 신입 부원 환영회",
    description: "새로운 SSG 멤버들을 환영하는 자리! 자기소개와 친목 도모",
    author: "SSG 운영진",
    date: "2024-03-05",
    category: "Club Activity",
    type: "event-log",
    difficulty: "Easy",
    ctf: null,
    tags: ["신입", "환영회", "친목"],
    stats: { views: 1800, likes: 200, comments: 40 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "weekly-study-session-web-security",
    title: "주간 스터디 세션: 웹 보안 취약점 분석",
    description: "매주 진행되는 웹 보안 스터디 세션 요약 및 주요 내용 정리",
    author: "스터디 리더",
    date: "2024-03-12",
    category: "Web Hacking",
    type: "study-note",
    difficulty: "Medium",
    ctf: null,
    tags: ["스터디", "웹보안", "취약점"],
    stats: { views: 500, likes: 30, comments: 5 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
  {
    slug: "free-board-hello-world",
    title: "자유 게시판: 안녕하세요 SSG!",
    description: "새로운 멤버의 첫 인사! 앞으로 잘 부탁드립니다.",
    author: "새내기 멤버",
    date: "2024-03-15",
    category: "Community",
    type: "free-board",
    difficulty: "Easy",
    ctf: null,
    tags: ["인사", "자유게시판", "새내기"],
    stats: { views: 100, likes: 10, comments: 3 },
    thumbnail: "/placeholder.svg?height=200&width=300",
    content: ``,
  },
]

export default function HomePage() {
  // Sort posts by likes to simulate "Popular Posts"
  const popularPosts = [...allContentData].sort((a, b) => b.stats.likes - a.stats.likes).slice(0, 6) // Get top 6

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <SpecializedKnowledgeGrid /> {/* Consolidated specialized knowledge and category section */}
        {/* <HomeCategoryIcons /> -- REMOVED */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">인기 게시글</h2>
            <PostGrid posts={popularPosts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
