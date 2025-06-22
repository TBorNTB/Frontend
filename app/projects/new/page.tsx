import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCreationForm } from "@/components/projects/project-creation-form"

export default function NewProjectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectCreationForm />
      </main>
      <Footer />
    </div>
  )
}
