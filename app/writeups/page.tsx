"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostArchiveContent } from "@/components/post-archive-content" // New component
import { Suspense } from "react" // Import Suspense

// Dummy data (can remain here or be moved to a separate data file)
const allPostsData = [
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
  },
  {
    slug: "hitcon-reverse-engineering-challenge",
    title: "HITCON CTF - Reverse Engineering Challenge",
    description: "복잡한 안티디버깅 기법이 적용된 바이너리 분석 과정",
    author: "박분석",
    date: "2024-01-15",
    category: "Reverse Engineering",
    type: "ctf-writeup",
    difficulty: "Hard",
    ctf: "HITCON CTF",
    tags: ["Anti-debugging", "IDA Pro", "Dynamic Analysis"],
    stats: { views: 756, likes: 67, comments: 19 },
    thumbnail: "/placeholder.svg?height=200&width=300",
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
  },
]

export default function WriteupsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<div>로딩 중...</div>}>
        {" "}
        {/* Add a simple loading fallback */}
        <PostArchiveContent
          allContentData={allPostsData}
          pageTitle="SSG 게시물"
          pageDescription="CTF Write-up부터 동아리 활동 기록까지"
          uploadActionText="새로운 게시물을 작성합니다!"
        />
      </Suspense>
      <Footer />
    </div>
  )
}
