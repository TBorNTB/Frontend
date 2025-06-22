import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye, Heart, MessageCircle, Tag } from "lucide-react"

const writeups = [
  {
    title: "CODEGATE 2024 Preliminary - SQL Injection Bypass",
    description: "WAF 우회를 통한 SQL Injection 공격 기법과 Union-based 공격 상세 분석",
    author: "이해커",
    date: "2024-01-20",
    category: "Web Hacking",
    difficulty: "Hard",
    ctf: "CODEGATE 2024",
    tags: ["SQL Injection", "WAF Bypass", "Union-based"],
    stats: { views: 1234, likes: 89, comments: 23 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "DEFCON CTF Qualifier - Buffer Overflow ROP Chain",
    description: "Return-Oriented Programming을 활용한 ASLR 우회 기법",
    author: "김보안",
    date: "2024-01-18",
    category: "System Hacking",
    difficulty: "Expert",
    ctf: "DEFCON CTF",
    tags: ["Buffer Overflow", "ROP", "ASLR Bypass"],
    stats: { views: 987, likes: 156, comments: 34 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "HITCON CTF - Reverse Engineering Challenge",
    description: "복잡한 안티디버깅 기법이 적용된 바이너리 분석 과정",
    author: "박분석",
    date: "2024-01-15",
    category: "Reverse Engineering",
    difficulty: "Hard",
    ctf: "HITCON CTF",
    tags: ["Anti-debugging", "IDA Pro", "Dynamic Analysis"],
    stats: { views: 756, likes: 67, comments: 19 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "PlaidCTF - Cryptography RSA Attack",
    description: "약한 RSA 키를 이용한 공개키 암호 시스템 공격",
    author: "정크립토",
    date: "2024-01-12",
    category: "Cryptography",
    difficulty: "Medium",
    ctf: "PlaidCTF",
    tags: ["RSA", "Factorization", "Number Theory"],
    stats: { views: 543, likes: 45, comments: 12 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Google CTF - Network Forensics",
    description: "패킷 분석을 통한 네트워크 침입 경로 추적",
    author: "최포렌식",
    date: "2024-01-10",
    category: "Digital Forensics",
    difficulty: "Medium",
    ctf: "Google CTF",
    tags: ["Wireshark", "Network Analysis", "PCAP"],
    stats: { views: 432, likes: 38, comments: 8 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "SECCON CTF - IoT Device Exploitation",
    description: "IoT 디바이스 펌웨어 분석 및 취약점 발견",
    author: "한네트워크",
    date: "2024-01-08",
    category: "IoT Security",
    difficulty: "Hard",
    ctf: "SECCON CTF",
    tags: ["IoT", "Firmware Analysis", "Hardware Hacking"],
    stats: { views: 321, likes: 29, comments: 6 },
    thumbnail: "/placeholder.svg?height=200&width=300",
  },
]

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-orange-100 text-orange-800",
  Expert: "bg-red-100 text-red-800",
}

export function WriteupGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {writeups.map((writeup, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <img
                src={writeup.thumbnail || "/placeholder.svg"}
                alt={writeup.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="secondary" className="bg-white/90 text-gray-900">
                  {writeup.category}
                </Badge>
                <Badge className={difficultyColors[writeup.difficulty as keyof typeof difficultyColors]}>
                  {writeup.difficulty}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-gray-900">
                  {writeup.ctf}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                {writeup.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{writeup.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {writeup.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {writeup.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {writeup.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {writeup.stats.views}
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {writeup.stats.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {writeup.stats.comments}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                  읽기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
