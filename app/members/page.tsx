import { MemberGrid } from "@/components/members/member-grid"
import { MemberSearch } from "@/components/members/member-search"
import { MemberSpotlight } from "@/components/member-spotlight"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SSG 멤버</h1>
          <p className="text-xl text-gray-600">함께 성장하는 보안 전문가들</p>
        </div>
        <MemberSpotlight />
        <MemberSearch />
        <MemberGrid />
      </div>
      <Footer />
    </div>
  )
}
