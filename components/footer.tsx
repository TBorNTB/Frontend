import { Shield, Mail, Github, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SSG</h3>
                <p className="text-sm text-gray-400">Sejong Security Group</p>
              </div>
            </div>
            <p className="text-gray-400">
              세종대학교 정보보안 동아리 SSG는 체계적인 보안 교육과 실무 경험을 통해 미래의 보안 전문가를 양성합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">학습 자료</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/archive/system" className="hover:text-white transition-colors">
                  시스템 해킹
                </Link>
              </li>
              <li>
                <Link href="/archive/web" className="hover:text-white transition-colors">
                  웹 해킹
                </Link>
              </li>
              <li>
                <Link href="/archive/forensics" className="hover:text-white transition-colors">
                  포렌식
                </Link>
              </li>
              <li>
                <Link href="/archive/reverse" className="hover:text-white transition-colors">
                  리버싱
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">동아리</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white transition-colors">
                  멤버
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">
                  활동
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-white transition-colors">
                  모집
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-gray-400">
              <p>세종대학교 광개토관</p>
              <p>서울특별시 광진구 능동로 209</p>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>ssg@sejong.ac.kr</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SSG (Sejong Security Group). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
