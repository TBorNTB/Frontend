"use client"

import { Button } from "@/components/ui/button"
import { Shield, Menu, Search, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SSG</h1>
                <p className="text-xs text-gray-500">Sejong Security Group</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/archive" className="text-gray-700 hover:text-red-600 transition-colors">
              아카이브
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-red-600 transition-colors">
              프로젝트
            </Link>
            <Link href="/members" className="text-gray-700 hover:text-red-600 transition-colors">
              멤버
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-red-600 transition-colors">
              대시보드
            </Link>
            <Link href="/newsletter" className="text-gray-700 hover:text-red-600 transition-colors">
              뉴스레터
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              소개
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => alert("검색 기능!")}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => alert("로그인/프로필!")}>
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => alert("모바일 메뉴!")}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
