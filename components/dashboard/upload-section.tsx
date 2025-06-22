"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, Code, Trophy, BookOpen } from "lucide-react"

const uploadTypes = [
  {
    title: "Write-up 작성",
    description: "다양한 글을 작성하고 공유하세요", // 설명 수정
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    action: "write-up",
  },
  {
    title: "프로젝트 등록",
    description: "진행 중인 프로젝트의 상세 기록 및 성과 공유", // Updated description
    icon: Code,
    color: "bg-green-50 text-green-600",
    action: "project", // Action remains 'project' for internal logic
  },
  {
    title: "대회 기록",
    description: "참가한 대회 결과와 경험 공유",
    icon: Trophy,
    color: "bg-yellow-50 text-yellow-600",
    action: "competition",
  },
  {
    title: "학습 자료",
    description: "연구한 내용이나 정리한 자료 업로드",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
    action: "study",
  },
]

export function UploadSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">새 기록 추가</h2>
        <p className="text-gray-600">학습한 내용이나 프로젝트를 기록하고 공유하세요</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {uploadTypes.map((type, index) => {
          const IconComponent = type.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${type.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group-hover:bg-red-50 group-hover:border-red-200"
                      onClick={() =>
                        alert(`'${type.title}'을(를) 등록하는 페이지로 이동합니다! (현재는 임시 기능입니다)`)
                      } // Updated alert
                    >
                      <Upload className="h-4 w-4 mr-1" />
                      시작하기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
