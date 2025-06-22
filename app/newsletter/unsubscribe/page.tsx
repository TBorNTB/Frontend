import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterUnsubscribeForm } from "@/components/newsletter-unsubscribe-form"

export default function NewsletterUnsubscribePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 to-orange-50">
      <Header />
      <main className="flex-1 py-12">
        <NewsletterUnsubscribeForm />
      </main>
      <Footer />
    </div>
  )
}
