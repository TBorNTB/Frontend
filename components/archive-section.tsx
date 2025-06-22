"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, Download, Star, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

const archiveItems = [
  {
    slug: "buffer-overflow-mastery",
    title: "Buffer Overflow 공격 기법 완전 정복",
    description: "스택 기반 버퍼 오버플로우부터 힙 오버플로우까지 상세한 분석과 실습",
    author: "김보안",
    date: "2024-01-15",
    category: "System Hacking",
    views: 1234,
    downloads: 89,
    rating: 4.8,
    tags: ["Buffer Overflow", "Exploit", "Assembly"],
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "sql-injection-advanced-analysis",
    title: "SQL Injection 심화 분석",
    description: "Blind SQL Injection부터 Time-based까지 다양한 SQL 인젝션 기법",
    author: "이해커",
    date: "2024-01-12",
    category: "Web Hacking",
    views: 987,
    downloads: 156,
    rating: 4.9,
    tags: ["SQL Injection", "Web Security", "Database"],
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "malware-static-analysis-guide",
    title: "악성코드 정적 분석 가이드",
    description: "IDA Pro와 Ghidra를 활용한 악성코드 리버스 엔지니어링",
    author: "박분석",
    date: "2024-01-10",
    category: "Reverse Engineering",
    views: 756,
    downloads: 234,
    rating: 4.7,
    tags: ["Malware", "Reverse Engineering", "IDA Pro"],
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "network-forensics-practice",
    title: "네트워크 포렌식 실무",
    description: "Wireshark를 활용한 네트워크 트래픽 분석 및 증거 수집",
    author: "최포렌식",
    date: "2024-01-08",
    category: "Digital Forensics",
    views: 543,
    downloads: 78,
    rating: 4.6,
    tags: ["Network Forensics", "Wireshark", "Traffic Analysis"],
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

export function ArchiveSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">학습 자료 아카이브</h2>
            <p className="text-xl text-gray-600">SSG 멤버들이 직접 작성한 고품질 보안 학습 자료</p>
          </div>
          <Link href="/archive/sample-post">
            <Button variant="outline" className="hidden md:flex">
              전체 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {archiveItems.map((item, index) => (
            <Link key={index} href={`/archive/sample-post`}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs">{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {item.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {item.views}
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {item.downloads}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/archive/sample-post">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              더 많은 자료 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
