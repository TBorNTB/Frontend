import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArchiveCreationForm } from "@/components/archive/archive-creation-form"

export default function NewArchivePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArchiveCreationForm />
      </main>
      <Footer />
    </div>
  )
}
