import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArchiveCreationForm } from "@/components/archive/archive-creation-form" // ArchiveCreationForm 재사용

export default function NewWriteupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ArchiveCreationForm을 Write-up 업로드용으로 재사용합니다. */}
        <ArchiveCreationForm />
      </main>
      <Footer />
    </div>
  )
}
