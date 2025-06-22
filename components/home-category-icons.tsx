"use client"

import Link from "next/link"
import { FileText, BookOpen, Calendar, Code, Trophy, Shield, MessageCircle } from "lucide-react"

// Re-using the postTypes from components/posts/post-filters.tsx for consistency
const postTypes = [
  { name: "CTF Write-up", icon: FileText, typeParam: "CTF Write-up" },
  { name: "MT 후기", icon: BookOpen, typeParam: "MT 후기" },
  { name: "행사 기록", icon: Calendar, typeParam: "행사 기록" },
  { name: "스터디 노트", icon: BookOpen, typeParam: "스터디 노트" },
  { name: "프로젝트 기록", icon: Code, typeParam: "프로젝트 기록" },
  { name: "대회 기록", icon: Trophy, typeParam: "대회 기록" },
  { name: "동아리 운영 자료", icon: Shield, typeParam: "동아리 운영 자료" },
  { name: "자유 게시판", icon: MessageCircle, typeParam: "자유 게시판" },
]

export function HomeCategoryIcons() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 text-center">
          {postTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <Link
                href={`/archive?type=${encodeURIComponent(type.typeParam)}`}
                key={index}
                className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Icon className="h-10 w-10 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {type.name}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
