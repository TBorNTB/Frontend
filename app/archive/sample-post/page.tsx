"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, Heart, MessageCircle, Tag, ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// 하드코딩된 단일 게시물 데이터
const samplePostData = {
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
  content: `
    <h3>시스템 해킹 기초 스터디 개요</h3>
    <p>이 자료는 시스템 해킹의 기본적인 개념과 공격 기법을 다룹니다. 주로 스택 기반 버퍼 오버플로우, 포맷 스트링 버그, 그리고 기본적인 익스플로잇 방법에 초점을 맞춥니다.</p>
    <h4>주요 내용</h4>
    <ul>
      <li>버퍼 오버플로우의 원리 및 종류</li>
      <li>스택 기반 버퍼 오버플로우 실습</li>
      <li>포맷 스트링 버그를 이용한 정보 획득 및 임의 쓰기</li>
      <li>Return-to-libc 공격</li>
    </ul>
    <p>각 섹션에는 이론 설명과 함께 실습 예제가 포함되어 있어 직접 코드를 분석하고 익스플로잇을 시도해볼 수 있습니다.</p>
  `,
}

// `samplePostData` 정의 바로 아래에 `currentUser` 변수를 추가합니다.
// 실제 애플리케이션에서는 이 값을 로그인한 사용자 정보에서 가져와야 합니다.
const currentUser = "김보안" // 현재 로그인한 사용자 (예시)

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-orange-100 text-orange-800",
  Expert: "bg-red-100 text-red-800",
}

const postTypeBadges = {
  "ctf-writeup": { text: "CTF Write-up", color: "bg-blue-100 text-blue-800" },
  "mt-recap": { text: "MT 후기", color: "bg-purple-100 text-purple-800" },
  "event-log": { text: "행사 기록", color: "bg-green-100 text-green-800" },
  "study-note": { text: "스터디 노트", color: "bg-teal-100 text-teal-800" },
  "project-log": { text: "프로젝트 기록", color: "bg-orange-100 text-orange-800" },
  "competition-record": { text: "대회 기록", color: "bg-red-100 text-red-800" },
  "club-operation-doc": { text: "운영 자료", color: "bg-gray-100 text-gray-800" },
  "free-board": { text: "자유 게시판", color: "bg-indigo-100 text-indigo-800" },
}

export default function SampleArchiveDetailPage() {
  const post = samplePostData

  // 좋아요 및 댓글 상태 관리
  const [likes, setLikes] = useState(post.stats.likes || 0)
  const [comments, setComments] = useState(
    post.stats.comments
      ? [
          { id: 1, author: "김보안", text: "정말 유익한 자료 감사합니다!", date: "2024-03-16" },
          { id: 2, author: "이해커", text: "다음 자료도 기대됩니다!", date: "2024-03-17" },
        ]
      : [],
  )
  const [newComment, setNewComment] = useState("")
  const [isLiked, setIsLiked] = useState(false) // 좋아요 상태 추가

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + (isLiked ? -1 : 1)) // 이미 좋아요 눌렀으면 취소
    setIsLiked((prevIsLiked) => !prevIsLiked) // 좋아요 상태 토글
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: prevComments.length + 1,
          author: "새로운 사용자", // 실제 앱에서는 로그인한 사용자 이름 사용
          text: newComment.trim(),
          date: new Date().toISOString().split("T")[0],
        },
      ])
      setNewComment("")
    }
  }

  const typeBadge = postTypeBadges[post.type as keyof typeof postTypeBadges]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Link href="/archive">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              목록으로 돌아가기
            </Button>
          </Link>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            {post.ctf && (
              <Badge variant="outline" className="bg-gray-100 text-gray-800">
                {post.ctf}
              </Badge>
            )}
            {post.difficulty && (
              <Badge className={difficultyColors[post.difficulty as keyof typeof difficultyColors]}>
                {post.difficulty}
              </Badge>
            )}
            {typeBadge && <Badge className={typeBadge.color}>{typeBadge.text}</Badge>}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="outline" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {post.thumbnail && (
            <img
              src={post.thumbnail || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-8 object-cover max-h-96"
            />
          )}

          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-200 mt-10 pt-6 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {post.stats.views}
              </div>
              <Button variant="ghost" size="sm" onClick={handleLike}>
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-600 text-red-600" : "text-red-600"}`} />
                {likes}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => {}}>
                <MessageCircle className="h-4 w-4 mr-1" />
                {comments.length}
              </Button>
            </div>
            {/* Add conditional rendering for the Edit button */}
            {post.author === currentUser && (
              <Button variant="outline" onClick={() => alert("게시물 수정 기능은 현재 개발 중입니다!")}>
                <Pencil className="h-4 w-4 mr-1" />
                수정
              </Button>
            )}
            <Button variant="outline" onClick={() => alert("공유하기!")}>
              공유
            </Button>
          </div>

          {/* 댓글 섹션 */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">댓글 ({comments.length})</h3>
            <div className="space-y-4 mb-8">
              {comments.length === 0 ? (
                <p className="text-gray-600">아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col gap-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                placeholder="댓글을 작성해주세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <Button className="bg-red-600 hover:bg-red-700 self-end" onClick={handleAddComment}>
                댓글 등록
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
