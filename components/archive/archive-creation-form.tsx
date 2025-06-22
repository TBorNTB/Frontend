"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, UploadCloud, X } from "lucide-react"
import { useRouter } from "next/navigation"
import RichTextEditor from "@/components/ui/editor"

// 아카이브 카테고리 목록 (PostFilters와 일치)
const archiveCategories = [
  "Web Hacking",
  "System Hacking",
  "Reverse Engineering",
  "Cryptography",
  "Digital Forensics",
  "Network Security",
  "IoT Security",
  "Club Activity",
  "Competition",
  "Club Operation",
  "Community",
]

// 게시물 유형 목록 (PostFilters와 일치)
const postTypes = [
  "CTF Write-up",
  "MT 후기",
  "행사 기록",
  "스터디 노트",
  "프로젝트 기록",
  "대회 기록",
  "동아리 운영 자료",
  "자유 게시판",
]

// 난이도 목록 (PostFilters와 일치)
const difficulties = ["Easy", "Medium", "Hard", "Expert"]

// CTF 대회 목록 (PostFilters와 일치)
const ctfs = ["CODEGATE 2024", "DEFCON CTF", "HITCON CTF", "PlaidCTF", "Google CTF", "SECCON CTF", "SSG Internal CTF"]

// 아카이브 상세 내용 기본 템플릿
const defaultContentTemplate = `
<h3>1. 개요</h3>
<p>이 아카이브 자료의 목적과 주요 내용을 간략하게 설명해주세요.</p>

<h3>2. 상세 내용</h3>
<p>주요 개념, 분석 과정, 해결 방법 등을 구체적으로 작성합니다. 코드 블록, 이미지 등을 활용하여 내용을 풍부하게 구성할 수 있습니다.</p>
<pre><code>// 예시 코드 블록
function exampleCode() {
  console.log("Hello, Archive!");
}</code></pre>
<img src="/placeholder.svg?height=300&width=500&text=관련 이미지" alt="관련 이미지" class="my-4 rounded-lg shadow-md" />

<h3>3. 결론 및 배운 점</h3>
<p>이 자료를 통해 얻을 수 있는 인사이트나 배운 점을 요약합니다.</p>

<h4>참고 자료 (선택 사항)</h4>
<ul>
  <li><a href="#">관련 링크 1</a></li>
  <li><a href="#">관련 링크 2</a></li>
</ul>
`.trim()

export function ArchiveCreationForm() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState(archiveCategories[0])
  const [type, setType] = useState(postTypes[0])
  const [difficulty, setDifficulty] = useState<string | null>(null)
  const [ctf, setCtf] = useState<string | null>(null)
  const [tags, setTags] = useState("") // 콤마로 구분된 문자열
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string | null>(null)
  const [content, setContent] = useState(defaultContentTemplate)

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
      setThumbnailPreviewUrl(URL.createObjectURL(file))
    } else {
      setThumbnailFile(null)
      setThumbnailPreviewUrl(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    if (!title || !description || !author || !date || !content) {
      setMessage({ type: "error", text: "필수 필드(제목, 설명, 작성자, 날짜, 상세 내용)를 모두 입력해주세요." })
      return
    }

    const finalThumbnailUrl = thumbnailFile
      ? `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(thumbnailFile.name.split(".")[0])}`
      : "/placeholder.svg?height=400&width=600&text=New Archive"

    const newArchiveEntry = {
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9가-힣]+/g, "-")
        .replace(/^-|-$/g, ""),
      title,
      description,
      author,
      date,
      category,
      type: type.toLowerCase().replace(/\s/g, "-"), // "CTF Write-up" -> "ctf-writeup"
      difficulty: difficulty === "전체" ? null : difficulty,
      ctf: ctf === "전체" ? null : ctf,
      tags: tags
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      stats: { views: 0, likes: 0, comments: 0 }, // 초기값
      thumbnail: finalThumbnailUrl,
      content,
    }

    console.log("새 아카이브 자료 데이터:", newArchiveEntry)
    setMessage({ type: "success", text: "아카이브 자료가 성공적으로 등록되었습니다! (콘솔 확인)" })

    // 실제 API 연동 시 여기에 API 호출 로직 추가
    // 예: fetch('/api/archive', { method: 'POST', body: JSON.stringify(newArchiveEntry) });
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">새 아카이브 자료 등록</CardTitle>
        <p className="text-gray-600">새로운 학습 자료, Write-up, 활동 기록 등을 공유해주세요.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">제목</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="author">작성자</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">작성일</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="category">카테고리</Label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  {archiveCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">간략한 설명</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="type">게시물 유형</Label>
              <Select onValueChange={setType} value={type}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="유형 선택" />
                </SelectTrigger>
                <SelectContent>
                  {postTypes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="difficulty">난이도 (선택 사항)</Label>
              <Select onValueChange={setDifficulty} value={difficulty || "전체"}>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="난이도 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="전체">선택 안함</SelectItem>
                  {difficulties.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="ctf">CTF 대회 (선택 사항)</Label>
              <Select onValueChange={setCtf} value={ctf || "전체"}>
                <SelectTrigger id="ctf">
                  <SelectValue placeholder="CTF 대회 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="전체">선택 안함</SelectItem>
                  {ctfs.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="tags">태그 (콤마로 구분)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="예: 웹해킹, SQLi, CTF"
            />
          </div>

          {/* 썸네일 이미지 업로드 필드 */}
          <div>
            <Label htmlFor="thumbnail-upload">썸네일 이미지 업로드</Label>
            <div className="flex items-center space-x-4">
              <Input
                id="thumbnail-upload"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("thumbnail-upload")?.click()}
              >
                <UploadCloud className="h-4 w-4 mr-2" />
                파일 선택
              </Button>
            </div>
            {thumbnailPreviewUrl && (
              <div className="mt-4 relative w-full h-48 rounded-md overflow-hidden border border-gray-200">
                <img
                  src={thumbnailPreviewUrl || "/placeholder.svg"}
                  alt="썸네일 미리보기"
                  className="w-full h-full object-cover"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/70 rounded-full"
                  onClick={() => {
                    setThumbnailFile(null)
                    setThumbnailPreviewUrl(null)
                    const fileInput = document.getElementById("thumbnail-upload") as HTMLInputElement
                    if (fileInput) fileInput.value = ""
                  }}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-1">자료를 대표할 이미지를 업로드해주세요. (최대 5MB)</p>
          </div>

          {/* 리치 텍스트 에디터 영역 */}
          <div>
            <Label htmlFor="content">상세 내용</Label>
            <RichTextEditor
              content={content}
              onContentChange={setContent}
              placeholder="여기에 아카이브 자료의 상세 내용을 작성해주세요."
            />
            <p className="text-sm text-gray-500 mt-1">
              **참고:** 이 에디터는 기본적인 텍스트 서식, 제목, 목록, 코드 블록, 링크, 이미지 삽입 기능을 제공합니다.
            </p>
          </div>

          {message && (
            <div
              className={`p-3 rounded-md text-sm text-center ${
                message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={handleCancel} className="flex-1">
              취소
            </Button>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 flex-1">
              <Save className="h-5 w-5 mr-2" />
              자료 등록하기
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
