"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle } from "lucide-react"
import { Label } from "@/components/ui/label"

export function NewsletterUnsubscribeForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null) // Clear previous messages

    if (!email) {
      setMessage({ type: "error", text: "이메일 주소를 입력해주세요." })
      return
    }

    // Simulate API call
    try {
      // In a real application, you would make an API call here:
      // const response = await fetch('/api/newsletter/unsubscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await response.json();

      // if (response.ok) {
      //   setMessage({ type: 'success', text: `이메일 ${email}의 구독이 성공적으로 취소되었습니다.` });
      //   setEmail(''); // Clear email field on success
      // } else {
      //   setMessage({ type: 'error', text: data.message || '구독 취소에 실패했습니다. 다시 시도해주세요.' });
      // }

      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      setMessage({ type: "success", text: `이메일 ${email}의 구독이 성공적으로 취소되었습니다.` })
      setEmail("") // Clear email field on success
    } catch (error) {
      console.error("Unsubscribe error:", error)
      setMessage({ type: "error", text: "구독 취소 중 오류가 발생했습니다. 다시 시도해주세요." })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 min-h-[calc(100vh-128px)] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">뉴스레터 구독 취소</h3>
              <p className="text-gray-600 text-center mb-6">구독을 취소하시려면 이메일 주소를 입력해주세요.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-base font-semibold text-gray-900 mb-2 block">
                    이메일
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-gray-700 hover:bg-gray-800">
                  <XCircle className="mr-2 h-5 w-5" />
                  구독 취소하기
                </Button>
              </form>
              {message && (
                <div
                  className={`mt-4 text-center text-sm ${
                    message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message.text}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-4 text-center">
                구독 취소 후에도 일정 기간 동안 메일이 발송될 수 있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
