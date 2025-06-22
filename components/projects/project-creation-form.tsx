"use client"

import type React from "react"
import { useState, useEffect } from "react" // useEffect 추가
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, CheckCircle, Save, UploadCloud } from "lucide-react"
import { useRouter } from "next/navigation"
import RichTextEditor from "@/components/ui/editor"

// 프로젝트 카테고리 목록
const projectCategories = [
  "Tool Development",
  "Web Development",
  "AI/ML",
  "System Security Research",
  "Network Security Research",
  "CTF Challenge Development",
  "Other",
]

// 프로젝트 상태 목록
const projectStatuses = ["계획중", "진행중", "완료", "보류"]

// 프로젝트 상세 내용 기본 템플릿
const defaultContentTemplate = `
<h3>1. 개발 배경 및 목표</h3>
<p>이 프로젝트를 시작하게 된 동기와 달성하고자 하는 목표를 설명해주세요. 어떤 문제를 해결하려 했는지, 어떤 가치를 창출하고자 했는지 등을 구체적으로 작성합니다.</p>

<h3>2. 주요 기능 및 특징</h3>
<ul>
  <li>구현된 핵심 기능들을 목록 형태로 작성합니다.</li>
  <li>다른 유사 프로젝트와 차별화되는 특징이 있다면 강조해주세요.</li>
  <li>(예시) 자동화된 취약점 스캔 기능</li>
  <li>(예시) 실시간 스코어보드 업데이트</li>
</ul>

<h3>3. 구현 과정 및 기술 스택</h3>
<p>프로젝트를 어떻게 구현했는지, 어떤 기술(언어, 프레임워크, 라이브러리, 데이터베이스 등)을 사용했는지 설명합니다. 기술 선택의 이유를 덧붙이면 좋습니다.</p>
<pre><code>// 예시 코드 블록
function exampleFunction() {
  console.log("Hello, SSG!");
}</code></pre>
<img src="/placeholder.svg?height=300&width=500&text=프로젝트 관련 이미지" alt="프로젝트 관련 이미지" class="my-4 rounded-lg shadow-md" />

<h3>4. 성과 및 배운 점</h3>
<p>프로젝트를 통해 어떤 성과를 얻었는지, 어떤 기술적/개인적 성장을 이루었는지 작성합니다. 어려웠던 점과 해결 과정, 개선점 등을 포함하면 면접 시 좋은 답변이 될 수 있습니다.</p>

<h3>5. 향후 계획 (선택 사항)</h3>
<p>프로젝트의 다음 단계나 확장 계획이 있다면 간략하게 설명합니다.</p>
`.trim() // 앞뒤 공백 제거

interface ProjectData {
  slug: string
  title: string
  description: string
  status: string
  startDate: string
  collaborators: string[]
  technologies: string[]
  category: string
  thumbnail: string
  content: string
  subGoals: { id: string; description: string; completed: boolean }[]
}

interface ProjectCreationFormProps {
  initialData?: ProjectData // 기존 프로젝트 데이터를 위한 prop
}

export function ProjectCreationForm({ initialData }: ProjectCreationFormProps) {
  const router = useRouter()
  const isEditMode = !!initialData // initialData가 있으면 수정 모드

  const [title, setTitle] = useState(initialData?.title || "")
  const [description, setDescription] = useState(initialData?.description || "")
  const [status, setStatus] = useState(initialData?.status || "계획중")
  const [startDate, setStartDate] = useState(initialData?.startDate || "")
  const [collaborators, setCollaborators] = useState(initialData?.collaborators.join(", ") || "")
  const [technologies, setTechnologies] = useState(initialData?.technologies.join(", ") || "")
  const [category, setCategory] = useState(initialData?.category || "Tool Development")
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string | null>(initialData?.thumbnail || null)
  const [content, setContent] = useState(initialData?.content || defaultContentTemplate)
  const [subGoals, setSubGoals] = useState<{ id: string; description: string; completed: boolean }[]>(
    initialData?.subGoals || [],
  )
  const [newSubGoalDescription, setNewSubGoalDescription] = useState("")

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // initialData가 변경될 때마다 폼 상태를 업데이트 (예: 다른 프로젝트를 수정할 때)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
      setStatus(initialData.status)
      setStartDate(initialData.startDate)
      setCollaborators(initialData.collaborators.join(", "))
      setTechnologies(initialData.technologies.join(", "))
      setCategory(initialData.category)
      setThumbnailPreviewUrl(initialData.thumbnail)
      setContent(initialData.content)
      setSubGoals(initialData.subGoals)
    }
  }, [initialData])

  const addSubGoal = () => {
    if (newSubGoalDescription.trim()) {
      setSubGoals((prev) => [
        ...prev,
        { id: Date.now().toString(), description: newSubGoalDescription.trim(), completed: false },
      ])
      setNewSubGoalDescription("")
    }
  }

  const removeSubGoal = (id: string) => {
    setSubGoals((prev) => prev.filter((goal) => goal.id !== id))
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
      setThumbnailPreviewUrl(URL.createObjectURL(file))
    } else {
      setThumbnailFile(null)
      setThumbnailPreviewUrl(initialData?.thumbnail || null) // 파일 제거 시 초기 데이터 썸네일로 복원
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    if (!title || !description || !startDate || !content) {
      setMessage({ type: "error", text: "필수 필드를 모두 입력해주세요 (제목, 설명, 시작일, 콘텐츠)." })
      return
    }
    if (subGoals.length === 0) {
      setMessage({ type: "error", text: "최소 하나 이상의 하위 목표를 추가해주세요." })
      return
    }

    const finalThumbnailUrl = thumbnailFile
      ? `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(thumbnailFile.name.split(".")[0])}`
      : thumbnailPreviewUrl || "/placeholder.svg?height=400&width=600&text=New Project"

    const projectDataToSave = {
      slug:
        initialData?.slug ||
        title // 수정 모드에서는 기존 slug 사용
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]+/g, "-")
          .replace(/^-|-$/g, ""),
      title,
      description,
      status,
      startDate,
      collaborators: collaborators
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      technologies: technologies
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      category,
      thumbnail: finalThumbnailUrl,
      content,
      subGoals,
    }

    if (isEditMode) {
      console.log("프로젝트 수정 데이터:", projectDataToSave)
      setMessage({ type: "success", text: "프로젝트가 성공적으로 수정되었습니다! (콘솔 확인)" })
      // 실제 API 연동 시: fetch(`/api/projects/${initialData.slug}`, { method: 'PUT', body: JSON.stringify(projectDataToSave) });
    } else {
      console.log("새 프로젝트 데이터:", projectDataToSave)
      setMessage({ type: "success", text: "프로젝트가 성공적으로 등록되었습니다! (콘솔 확인)" })
      // 실제 API 연동 시: fetch('/api/projects', { method: 'POST', body: JSON.stringify(projectDataToSave) });
    }

    // 성공 시 프로젝트 목록으로 이동 (또는 상세 페이지로)
    // router.push('/projects');
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          {isEditMode ? "프로젝트 수정" : "새 프로젝트 등록"}
        </CardTitle>
        <p className="text-gray-600">
          {isEditMode ? "프로젝트 상세 정보를 수정해주세요." : "새로운 프로젝트의 상세 정보를 입력해주세요."}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">프로젝트 제목</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="startDate">시작일</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">카테고리</Label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  {projectCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status">상태</Label>
              <Select onValueChange={setStatus} value={status}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="상태 선택" />
                </SelectTrigger>
                <SelectContent>
                  {projectStatuses.map((stat) => (
                    <SelectItem key={stat} value={stat}>
                      {stat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="collaborators">참여자 (콤마로 구분)</Label>
            <Input
              id="collaborators"
              value={collaborators}
              onChange={(e) => setCollaborators(e.target.value)}
              placeholder="예: 김보안, 이해커"
            />
          </div>

          <div>
            <Label htmlFor="technologies">기술 스택 (콤마로 구분)</Label>
            <Input
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="예: Python, React, Docker"
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
                    if (fileInput) fileInput.value = "" // 파일 입력 초기화
                  }}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-1">프로젝트를 대표할 이미지를 업로드해주세요. (최대 5MB)</p>
          </div>

          {/* 리치 텍스트 에디터 영역 */}
          <div>
            <Label htmlFor="content">프로젝트 상세 내용</Label>
            <RichTextEditor
              content={content}
              onContentChange={setContent}
              placeholder="여기에 프로젝트의 개발 배경, 주요 기능, 구현 과정, 성과 등을 작성해주세요."
            />
            <p className="text-sm text-gray-500 mt-1">
              **참고:** 이 에디터는 기본적인 텍스트 서식, 제목, 목록, 코드 블록, 링크, 이미지 삽입 기능을 제공합니다.
            </p>
          </div>

          {/* 하위 목표 */}
          <div>
            <Label>하위 목표</Label>
            <div className="space-y-2 mb-4">
              {subGoals.map((goal) => (
                <div key={goal.id} className="flex items-center justify-between p-2 border rounded-md bg-gray-50">
                  <div className="flex items-center">
                    <CheckCircle className={`h-4 w-4 mr-2 ${goal.completed ? "text-green-500" : "text-gray-400"}`} />
                    <span className={goal.completed ? "line-through text-gray-500" : ""}>{goal.description}</span>
                  </div>
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeSubGoal(goal.id)}>
                    <X className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="새 하위 목표 설명"
                value={newSubGoalDescription}
                onChange={(e) => setNewSubGoalDescription(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault() // 폼 제출 방지
                    addSubGoal()
                  }
                }}
              />
              <Button type="button" onClick={addSubGoal}>
                <Plus className="h-4 w-4 mr-2" />
                추가
              </Button>
            </div>
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
              {isEditMode ? "프로젝트 수정하기" : "프로젝트 등록하기"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
