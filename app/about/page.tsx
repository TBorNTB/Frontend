import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClubHistory } from "@/components/club-history" // Import the new component

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="py-20 lg:py-32 text-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              SSG (Sejong Security Group)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              세종대학교 정보보안 동아리 SSG는 미래의 보안 전문가를 양성하는 데 기여합니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              저희는 체계적인 스터디, 실전 프로젝트, 그리고 국내외 해킹 대회 참가를 통해 멤버들의 실력을 향상시키고
              정보보안 분야의 발전에 기여하고 있습니다. 함께 성장하며 최고의 보안 전문가가 될 수 있도록 지원합니다.
            </p>
          </div>
        </section>
        <ClubHistory /> {/* Include the ClubHistory component */}
      </main>
      <Footer />
    </div>
  )
}
