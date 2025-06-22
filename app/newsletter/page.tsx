import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterLanding } from "@/components/newsletter-landing" // Import the new landing component

export default function NewsletterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsletterLanding />
      </main>
      <Footer />
    </div>
  )
}
